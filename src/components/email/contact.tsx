import * as React from "react"

interface EmailTemplateProps {
    firstName: string
    lastName: string
    email: string
    phone: string
    message: string
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
    firstName,
    lastName,
    email,
    phone,
    message
}) => (
    <div>
        <h1>Neue Nachricht über unser Kontaktformular:</h1>

        <div>
            <p>
                Von: {firstName} {lastName}
            </p>
            <p>E-Mail: {email}</p>
            <p>Telefon: {phone}</p>
            <p>Nachricht: {message}</p>
        </div>
    </div>
)
