import { emailContainer, emailHeading, emailMain, emailText } from "@/components/email/styles"
import { Body, Container, Head, Html, Preview, Section, Text } from "@react-email/components"
import * as React from "react"

interface EmailTemplateProps {
    name: string
    email: string
    message: string
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({ name, email, message }) => {
    const messageStyle = {
        ...emailText,
        marginBottom: "20px"
    }

    return (
        <Html>
            <Head />
            <Preview>Team One - Kontaktanfrage</Preview>
            <Body style={emailMain}>
                <Container style={emailContainer}>
                    <Section>
                        <Text style={emailHeading}>Kontaktanfrage</Text>
                        <Text style={emailText}>Von: {name}</Text>
                        <Text style={emailText}>E-Mail: {email}</Text>

                        <Text style={emailText}>Nachricht:</Text>
                        <Text style={messageStyle}>{message}</Text>
                    </Section>
                </Container>
            </Body>
        </Html>
    )
}
