import * as React from "react"

interface EmailTemplateProps {
    name: string
    email: string
    message: string
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({ name, email, message }) => (
    <div>
        <h1>Neue Nachricht über unser Kontaktformular:</h1>

        <div>
            <p>Von: {name}</p>
            <p>E-Mail: {email}</p>
            <p>Nachricht: {message}</p>
        </div>
    </div>
)
