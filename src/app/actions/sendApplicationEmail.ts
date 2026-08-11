"use server"

import type { ApplicationCv, ApplicationData } from "@/app/actions/submitApplication"
import { ApplicationEmailTemplate } from "@/components/email/application"
import { CAREER_BUSINESS_CONFIG } from "@/constants/email"
import { resend } from "@/utils/resend"
import "server-only"

export const sendApplicationEmail = async (data: ApplicationData, cv: ApplicationCv) => {
    const { error } = await resend.emails.send({
        from: CAREER_BUSINESS_CONFIG[data.business].sender,
        to: [CAREER_BUSINESS_CONFIG[data.business].recipient],
        replyTo: data.email,
        subject: `Bewerbung: ${data.jobTitle}`,
        react: await ApplicationEmailTemplate({
            name: data.name,
            email: data.email,
            phone: data.phone,
            germanLevel: data.germanLevel,
            englishLevel: data.englishLevel,
            referralSource: data.referralSource,
            startDate: data.startDate,
            salaryExpectation: data.salaryExpectation,
            portfolioUrl: data.portfolioUrl,
            motivation: data.motivation,
            jobTitle: data.jobTitle,
            cvFilename: cv.filename
        }),
        attachments: [{ filename: cv.filename, content: cv.content }]
    })

    return { success: !error, error }
}
