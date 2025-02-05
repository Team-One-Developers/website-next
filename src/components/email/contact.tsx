import { Body, Container, Head, Html, Img, Preview, Section, Text } from "@react-email/components"
import * as React from "react"

interface EmailTemplateProps {
    name: string
    email: string
    message: string
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({ name, email, message }) => {
    const main = {
        backgroundColor: "#f6f9fc",
        padding: "10px 0"
    }

    const container = {
        backgroundColor: "#ffffff",
        border: "1px solid #f0f0f0",
        padding: "45px"
    }

    const heading = {
        fontSize: "24px",
        fontFamily:
            "'Open Sans', 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif",
        fontWeight: "300",
        color: "#404040",
        lineHeight: "32px"
    }

    const text = {
        fontSize: "16px",
        fontFamily:
            "'Open Sans', 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif",
        fontWeight: "300",
        color: "#404040",
        lineHeight: "26px"
    }

    const messageStyle = {
        fontSize: "16px",
        fontFamily:
            "'Open Sans', 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif",
        fontWeight: "300",
        color: "#404040",
        lineHeight: "26px",
        marginBottom: "20px"
    }

    const anchor = {
        textDecoration: "underline"
    }

    return (
        <Html>
            <Head />
            <Preview>Team One - Kontaktanfrage</Preview>
            <Body style={main}>
                <Container style={container}>
                    <Img
                        src="https://www.teamonedevelopers.de/images/logo/t1d-sticker-neongreen.svg"
                        width="64"
                        height="80"
                        alt="Team One Logo"
                    />
                    <Section>
                        <Text style={heading}>Kontaktanfrage</Text>
                        <Text style={text}>Von: {name}</Text>
                        <Text style={text}>E-Mail: {email}</Text>

                        <Text style={text}>Nachricht:</Text>
                        <Text style={messageStyle}>{message}</Text>

                        <Text style={text}>Wir melden uns schnellstmöglich!</Text>
                    </Section>
                </Container>
            </Body>
        </Html>
    )
}
