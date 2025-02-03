"use server"
import { EmailTemplate } from "@/components/email/contact"
import { CONTACT_FORM_RECIPIENT, CONTACT_FORM_SENDER } from "@/constants/email"
import { Resend } from "resend"
import { z } from "zod"

const resend = new Resend(process.env.RESEND_API_KEY)

const contactSchema = z.object({
    firstName: z.string().min(1, "Vorname ist erforderlich"),
    lastName: z.string().min(1, "Nachname ist erforderlich"),
    email: z.string().email("Ungültige E-Mail-Adresse"),
    phone: z.string().min(1, "Telefonnummer ist erforderlich"),
    message: z.string().min(1, "Nachricht ist erforderlich")
})

export async function submitContactForm(currentState: any, formData: FormData) {
    const validatedFields = contactSchema.safeParse({
        firstName: formData.get("firstName"),
        lastName: formData.get("lastName"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        message: formData.get("message")
    })

    if (!validatedFields.success) {
        return { success: false, errors: validatedFields.error.flatten().fieldErrors, formData }
    }

    const { firstName, lastName, email, phone, message } = validatedFields.data

    try {
        const { error } = await resend.emails.send({
            from: CONTACT_FORM_SENDER,
            to: [CONTACT_FORM_RECIPIENT],
            subject: "Neue Kontaktanfrage",
            react: await EmailTemplate({ firstName, lastName, email, phone, message })
        })

        if (!error) {
            return {
                success: true,
                message: "Vielen Dank für Ihre Nachricht. Wir werden uns bald bei Ihnen melden!"
            }
        } else {
            throw error
        }
    } catch (error) {
        console.error("E-Mail senden fehlgeschlagen:", error)
        return {
            success: false,
            message:
                "Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es später erneut oder kontaktieren Sie uns via einer der untenstehenden Kontaktmöglichkeiten.",
            formData
        }
    }
}
