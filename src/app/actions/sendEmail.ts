"use server"

import { EmailTemplate } from "@/components/email/contact"
import { CONTACT_FORM_RECIPIENT, CONTACT_FORM_SENDER } from "@/constants/email"
import { resend } from "@/lib/resend"

interface FormData {
    name: string
    email: string
    message: string
}

export const sendEmail = async ({ name, email, message }: FormData) => {
    const { error } = await resend.emails.send({
        from: CONTACT_FORM_SENDER,
        to: [CONTACT_FORM_RECIPIENT],
        bcc: [email],
        subject: "Team One - Kontaktanfrage",
        react: await EmailTemplate({ name, email, message })
    })

    return { success: !error, error }
}
