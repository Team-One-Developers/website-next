"use server"

import nodemailer from "nodemailer"
import { z } from "zod"

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
        return { success: false, errors: validatedFields.error.flatten().fieldErrors }
    }

    const { firstName, lastName, email, phone, message } = validatedFields.data

    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: Number.parseInt(process.env.EMAIL_PORT || "587"),
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    })

    try {
        //     // Send email
        //     await transporter.sendMail({
        //         from: process.env.EMAIL_FROM,
        //         to: process.env.EMAIL_TO,
        //         subject: `Website Kontaktformular - ${firstName} ${lastName}`,
        //         text: `
        //     Name: ${firstName} ${lastName}
        //     E-Mail: ${email}
        //     Telefon: ${phone}
        //     Nachricht: ${message}
        //   `,
        //         html: `
        //     <h1>Neue Kontaktformular-Einreichung</h1>
        //     <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        //     <p><strong>E-Mail:</strong> ${email}</p>
        //     <p><strong>Telefon:</strong> ${phone}</p>
        //     <p><strong>Nachricht:</strong> ${message}</p>
        //   `
        //     })

        return {
            success: true,
            message: "DEV! Noch nicht verbunden. Vielen Dank für Ihre Nachricht. Wir werden uns bald bei Ihnen melden!"
        }
    } catch (error) {
        console.error("E-Mail senden fehlgeschlagen:", error)
        return {
            success: false,
            message:
                "Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es später erneut oder kontaktieren Sie uns via einer der untenstehenden Kontaktmöglichkeiten."
        }
    }
}
