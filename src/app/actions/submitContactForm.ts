"use server"

import { sendEmail } from "@/app/actions/sendEmail"
import { sendSlackMessage } from "@/app/actions/sendSlackMessage"
import { checkBotId } from "botid/server"
import { z } from "zod"

const contactSchema = z.object({
    name: z.string().min(1, "Name ist erforderlich"),
    email: z.string().email("Ungültige E-Mail-Adresse"),
    message: z.string().min(1, "Nachricht ist erforderlich")
})

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function submitContactForm(currentState: any, formData: FormData) {
    const verification = await checkBotId()

    if (verification.isBot) {
        return {
            success: false,
            message: `Ein technischer Fehler ist aufgetreten. Die Nachricht konnte nicht gesendet werden.`,
            formData
        }
    }

    const validatedFields = contactSchema.safeParse({
        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message")
    })

    if (!validatedFields.success) {
        return {
            success: false,
            errors: validatedFields.error.flatten().fieldErrors,
            formData
        }
    }

    try {
        const sendSlackMsg = sendSlackMessage(validatedFields.data, "C08C9F5RDS7")
        const sendMail = sendEmail(validatedFields.data)
        const [slack, mail] = await Promise.all([sendSlackMsg, sendMail])

        if (slack.success || mail.success) {
            return {
                success: true,
                message: `Vielen Dank für Deine Nachricht. Wir werden uns bald bei Dir melden!`,
                formData
            }
        } else {
            throw new Error("Failed to send message")
        }
    } catch (error) {
        console.error("E-Mail senden fehlgeschlagen:", error)
        return {
            success: false,
            message: `Ein technischer Fehler ist aufgetreten. Die Nachricht konnte nicht gesendet werden.`,
            formData
        }
    }
}
