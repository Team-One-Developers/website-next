"use server"

import { sendApplicantConfirmation } from "@/app/actions/sendApplicantConfirmation"
import { sendApplicationEmail } from "@/app/actions/sendApplicationEmail"
import { sendApplicationSlack } from "@/app/actions/sendApplicationSlack"
import { LANGUAGE_LEVELS, MAX_CV_BYTES, REFERRAL_SOURCES } from "@/constants/application"
import { CAREER_BUSINESS_CONFIG, CareerBusiness } from "@/constants/email"
import { getCareerBySlug } from "@/sanity/lib/getCareer"
import { rateLimit } from "@/utils/rateLimit"
import { checkBotId } from "botid/server"
import { headers } from "next/headers"
import "server-only"
import { z } from "zod"



export type ValidatedApplication = z.infer<typeof applicationSchema>

export type ApplicationData = Omit<ValidatedApplication, "cv" | "consent"> & {
    business: CareerBusiness
    jobTitle: string
}

export interface ApplicationCv {
    filename: string
    content: Buffer
}

const GENERIC_ERROR = "Ein technischer Fehler ist aufgetreten. Die Bewerbung konnte nicht gesendet werden."

const applicationSchema = z.object({
    name: z.string().min(1, "Name ist erforderlich").max(200, "Name ist zu lang"),
    email: z.string().email("Ungültige E-Mail-Adresse").max(320, "E-Mail-Adresse ist zu lang"),
    phone: z.string().min(1, "Telefonnummer ist erforderlich").max(50, "Telefonnummer ist zu lang"),
    germanLevel: z.enum(LANGUAGE_LEVELS, { message: "Bitte wähle Dein Sprachniveau" }),
    englishLevel: z.enum(LANGUAGE_LEVELS, { message: "Bitte wähle Dein Sprachniveau" }),
    referralSource: z.enum(REFERRAL_SOURCES, { message: "Bitte wähle eine Option" }),
    startDate: z.string().min(1, "Bitte gib Dein frühestes Eintrittsdatum an").max(30, "Ungültiges Datum"),
    salaryExpectation: z
        .string()
        .min(1, "Bitte gib Deine Gehaltsvorstellung an")
        .max(100, "Eingabe ist zu lang"),
    portfolioUrl: z.url("Ungültige URL").max(500, "URL ist zu lang"),
    motivation: z
        .string()
        .min(1, "Bitte schreibe ein kurzes Anschreiben")
        .max(5000, "Anschreiben ist zu lang (max. 5000 Zeichen)"),
    consent: z.literal("yes", { message: "Bitte stimme der Datenschutzerklärung zu" }),
    jobSlug: z.string().min(1).max(200),
    cv: z
        .instanceof(File, { message: "Lebenslauf ist erforderlich" })
        .refine((file) => file.size > 0, "Lebenslauf ist erforderlich")
        .refine((file) => file.size <= MAX_CV_BYTES, "Die Datei darf maximal 5 MB groß sein")
        .refine((file) => file.type === "application/pdf", "Nur PDF-Dateien sind erlaubt")
})

async function getClientIp(): Promise<string> {
    const headerList = await headers()
    const forwardedFor = headerList.get("x-forwarded-for")
    if (forwardedFor) return forwardedFor.split(",")[0]?.trim() || "unknown"
    return headerList.get("x-real-ip") ?? "unknown"
}

function sanitizeFilename(name: string): string {
    const base = name.split(/[/\\]/).pop() || ""
    const cleaned = base.replace(/[^\w.\- ]+/g, "_").slice(0, 100).trim()
    const safe = cleaned.length > 0 ? cleaned : "lebenslauf.pdf"
    return safe.toLowerCase().endsWith(".pdf") ? safe : `${safe}.pdf`
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function submitApplication(currentState: any, formData: FormData) {
    const verification = await checkBotId()

    if (verification.isBot) {
        return { success: false, message: GENERIC_ERROR, formData }
    }

    const ip = await getClientIp()
    if (!rateLimit(`application:${ip}`)) {
        return {
            success: false,
            message: "Zu viele Anfragen. Bitte versuche es später erneut.",
            formData
        }
    }

    const validatedFields = applicationSchema.safeParse({
        name: formData.get("name"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        germanLevel: formData.get("germanLevel"),
        englishLevel: formData.get("englishLevel"),
        referralSource: formData.get("referralSource"),
        startDate: formData.get("startDate"),
        salaryExpectation: formData.get("salaryExpectation"),
        portfolioUrl: formData.get("portfolioUrl"),
        motivation: formData.get("motivation"),
        consent: formData.get("consent"),
        jobSlug: formData.get("jobSlug"),
        cv: formData.get("cv")
    })

    if (!validatedFields.success) {
        return {
            success: false,
            errors: validatedFields.error.flatten().fieldErrors,
            formData
        }
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { cv, consent, jobSlug, ...rest } = validatedFields.data
    const career = await getCareerBySlug(jobSlug)
    const business = career?.business as CareerBusiness | undefined

    if (!career || career.visibility !== "Public" || !career.title || !business || !(business in CAREER_BUSINESS_CONFIG)) {
        return {
            success: false,
            message: "Diese Stelle ist nicht mehr verfügbar.",
            formData
        }
    }

    const data: ApplicationData = {
        ...rest,
        business,
        jobTitle: career.title,
        jobSlug
    }

    try {
        const cvBuffer = Buffer.from(await cv.arrayBuffer())

        if (cvBuffer.subarray(0, 5).toString("latin1") !== "%PDF-") {
            return {
                success: false,
                errors: { cv: ["Die Datei ist keine gültige PDF-Datei"] },
                formData
            }
        }

        const cvAttachment = { filename: sanitizeFilename(cv.name), content: cvBuffer }

        const [slack, mail] = await Promise.all([
            sendApplicationSlack(data, "C0BPMM55QTW"),
            sendApplicationEmail(data, cvAttachment)
        ])

        if (!mail.success) {
            throw new Error("Failed to deliver application email")
        }
        if (!slack.success) {
            console.error("Slack-Benachrichtigung für Bewerbung fehlgeschlagen:", slack.error)
        }

        try {
            await sendApplicantConfirmation({
                name: data.name,
                email: data.email,
                jobTitle: data.jobTitle,
                business: data.business
            })
        } catch (confirmationError) {
            console.error("Bewerbungsbestätigung an Bewerber fehlgeschlagen:", confirmationError)
        }

        return {
            success: true,
            message: `Vielen Dank für Deine Bewerbung! Wir haben Deine Unterlagen erhalten und melden uns bald bei Dir.`,
            formData
        }
    } catch (error) {
        console.error("Bewerbung senden fehlgeschlagen:", error)
        return { success: false, message: GENERIC_ERROR, formData }
    }
}
