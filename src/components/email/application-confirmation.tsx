import { APPLICATION_NEXT_STEPS } from "@/constants/application"
import { emailContainer, emailFontFamily, emailHeading, emailMain, emailText } from "@/components/email/styles"
import { Body, Container, Head, Html, Img, Preview, Section, Text } from "@react-email/components"
import * as React from "react"

interface ApplicationConfirmationProps {
    name: string
    jobTitle: string
    brandName: string
    signature: string
    logoUrl?: string
}

export const ApplicationConfirmationTemplate: React.FC<Readonly<ApplicationConfirmationProps>> = ({
    name,
    jobTitle,
    brandName,
    signature,
    logoUrl
}) => {
    const text = {
        ...emailText,
        marginBottom: "16px"
    }

    const stepsHeading = {
        fontSize: "16px",
        fontFamily: emailFontFamily,
        fontWeight: "600",
        color: "#404040",
        lineHeight: "26px",
        marginBottom: "8px"
    }

    const stepTitle = {
        fontSize: "16px",
        fontFamily: emailFontFamily,
        fontWeight: "600",
        color: "#404040",
        lineHeight: "24px",
        margin: "0"
    }

    const stepDescription = {
        fontSize: "15px",
        fontFamily: emailFontFamily,
        fontWeight: "300",
        color: "#6b6b6b",
        lineHeight: "22px",
        margin: "0 0 14px 0"
    }

    return (
        <Html>
            <Head />
            <Preview>Wir haben Deine Bewerbung erhalten</Preview>
            <Body style={emailMain}>
                <Container style={emailContainer}>
                    {logoUrl && (
                        <Img
                            src={logoUrl}
                            width="56"
                            height="56"
                            alt={brandName}
                            style={{ marginBottom: "24px" }}
                        />
                    )}
                    <Section>
                        <Text style={emailHeading}>Vielen Dank für Deine Bewerbung!</Text>
                        <Text style={text}>Hallo {name},</Text>
                        <Text style={text}>
                            vielen Dank für Deine Bewerbung auf die Position <strong>{jobTitle}</strong> bei {brandName}.
                            Wir haben Deine Unterlagen erhalten und werden sie sorgfältig prüfen.
                        </Text>

                        <Text style={stepsHeading}>So geht es weiter</Text>
                        {APPLICATION_NEXT_STEPS.map((step, index) => (
                            <Section key={step.title}>
                                <Text style={stepTitle}>
                                    {index + 1}. {step.title}
                                </Text>
                                <Text style={stepDescription}>{step.description}</Text>
                            </Section>
                        ))}

                        <Text style={text}>
                            Bei Fragen kannst Du einfach auf diese E-Mail antworten – wir helfen Dir gerne weiter.
                        </Text>
                        <Text style={text}>
                            Herzliche Grüße,
                            <br />
                            {signature}
                        </Text>
                    </Section>
                </Container>
            </Body>
        </Html>
    )
}
