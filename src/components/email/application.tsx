import { emailContainer, emailHeading, emailMain, emailText } from "@/components/email/styles"
import { Body, Container, Head, Html, Preview, Section, Text } from "@react-email/components"
import * as React from "react"

interface ApplicationEmailProps {
    name: string
    email: string
    phone: string
    germanLevel: string
    englishLevel: string
    referralSource: string
    startDate: string
    salaryExpectation: string
    portfolioUrl: string
    motivation: string
    jobTitle: string
    cvFilename: string
}

export const ApplicationEmailTemplate: React.FC<Readonly<ApplicationEmailProps>> = ({
    name,
    email,
    phone,
    germanLevel,
    englishLevel,
    referralSource,
    startDate,
    salaryExpectation,
    portfolioUrl,
    motivation,
    jobTitle,
    cvFilename
}) => {
    const messageStyle = {
        ...emailText,
        marginBottom: "20px"
    }

    return (
        <Html>
            <Head />
            <Preview>Neue Bewerbung: {jobTitle}</Preview>
            <Body style={emailMain}>
                <Container style={emailContainer}>
                    <Section>
                        <Text style={emailHeading}>Neue Bewerbung</Text>
                        <Text style={emailText}>Stelle: {jobTitle}</Text>
                        <Text style={emailText}>Name: {name}</Text>
                        <Text style={emailText}>E-Mail: {email}</Text>
                        <Text style={emailText}>Telefon: {phone}</Text>
                        <Text style={emailText}>Deutschkenntnisse: {germanLevel}</Text>
                        <Text style={emailText}>Englischkenntnisse: {englishLevel}</Text>
                        <Text style={emailText}>Frühester Eintritt: {startDate}</Text>
                        <Text style={emailText}>Gehaltsvorstellung: {salaryExpectation}</Text>
                        <Text style={emailText}>Portfolio / LinkedIn: {portfolioUrl}</Text>
                        <Text style={emailText}>Wie gefunden: {referralSource}</Text>
                        <Text style={emailText}>Anschreiben:</Text>
                        <Text style={messageStyle}>{motivation}</Text>
                        <Text style={emailText}>Lebenslauf im Anhang: {cvFilename}</Text>
                    </Section>
                </Container>
            </Body>
        </Html>
    )
}
