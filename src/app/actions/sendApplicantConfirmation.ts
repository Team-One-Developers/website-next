"use server"

import "server-only"
import { ApplicationConfirmationTemplate } from "@/components/email/application-confirmation"
import { CAREER_BUSINESS_CONFIG, CareerBusiness } from "@/constants/email"
import { resend } from "@/utils/resend"

export const sendApplicantConfirmation = async ({
    name,
    email,
    jobTitle,
    business
}: {
    name: string
    email: string
    jobTitle: string
    business: CareerBusiness
}) => {
    const { brandName, signature, logoUrl } = CAREER_BUSINESS_CONFIG[business]

    const { error } = await resend.emails.send({
        from: CAREER_BUSINESS_CONFIG[business].sender,
        replyTo: CAREER_BUSINESS_CONFIG[business].recipient,
        to: [email],
        subject: `Deine Bewerbung bei ${brandName}: ${jobTitle}`,
        react: await ApplicationConfirmationTemplate({ name, jobTitle, brandName, signature, logoUrl })
    })

    return { success: !error, error }
}
