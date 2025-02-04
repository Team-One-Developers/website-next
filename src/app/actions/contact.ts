"use server"
import { EmailTemplate } from "@/components/email/contact"
import { CONTACT_FORM_RECIPIENT, CONTACT_FORM_SENDER } from "@/constants/email"
import { Resend } from "resend"
import { z } from "zod"

const resend = new Resend(process.env.RESEND_API_KEY)

const contactSchema = z.object({
    name: z.string().min(1, "name ist erforderlich"),
    email: z.string().email("Ungültige E-Mail-Adresse"),
    message: z.string().min(1, "Nachricht ist erforderlich")
})

// TODO copy to user

export async function submitContactForm(currentState: any, formData: FormData) {
    const validatedFields = contactSchema.safeParse({
        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message")
    })

    if (!validatedFields.success) {
        return { success: false, errors: validatedFields.error.flatten().fieldErrors, formData }
    }

    const { name, email, message } = validatedFields.data

    try {
        const { error } = await resend.emails.send({
            from: CONTACT_FORM_SENDER,
            to: [CONTACT_FORM_RECIPIENT],
            // TODO enable as soon as we have a decent email template visually
            // bcc: [email],
            subject: "Neue Kontaktanfrage",
            react: await EmailTemplate({ name, email, message })
        })

        if (!error) {
            return {
                success: true,
                message: `Vielen Dank für Ihre Nachricht. Wir werden uns bald bei Ihnen melden!`
                // Sie haben eine Kopie Ihrer Nachricht an ihre E-Mail Adresse \"${email}\" erhalten.
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
