"use server"

import "server-only"
import { EmailTemplate } from "@/components/email/contact"
import { resend } from "@/utils/resend"

interface FormData {
    name: string
    email: string
    message: string
}

export const sendEmail = async ({ name, email, message }: FormData) => {
    const { error } = await resend.emails.send({
        from: "Team One Kontaktformular <contact-form@transactional.team-one.de>",
        to: ["info@team-one.de"],
        subject: "Team One - Kontaktanfrage",
        react: await EmailTemplate({ name, email, message })
    })

    return { success: !error, error }
}
