import Typography from "@/components/atoms/Typography"
import { PageLayout } from "@/components/layout/PageLayout"
import { Section } from "@/components/layout/Section"
import { Metadata } from "next"
import "./style.css"

export const metadata: Metadata = {
    title: "Legal"
}

const Legal = () => {
    return (
        <PageLayout>
            <Section className="mt-20">
                <Typography className="mt-8" as="h1" variant="h1">
                    Impressum
                </Typography>
                <Typography className="mt-8" as="h2" variant="h4">
                    Verantwortlich für den Inhalt dieser Website
                </Typography>
                <Typography as="address" className="text-white" variant="paragraph">
                    Team One Developers GmbH <br />
                    Hospitalstraße 35 <br />
                    70174 Stuttgart
                </Typography>
                <Typography className="mt-8" as="h2" variant="h4">
                    Vertreten durch die Geschäftsführung
                </Typography>
                <Typography as="ul" className="legalUI text-white" variant="paragraph">
                    <li className="marker legalULLI">Timo Brückel</li>
                    <li className="legalULLI">Julian Richter</li>
                    <li className="legalULLI">Michael Krause</li>
                </Typography>

                <Typography className="mt-8" as="h2" variant="h4">
                    Registereintrag
                </Typography>
                <Typography as="article" className="text-white" variant="paragraph">
                    Eintragung im Handelsregister. <br />
                    Registergericht: Amtsgericht Stuttgart <br />
                    Registernummer: HRB 777716
                </Typography>

                <Typography className="mt-8" as="h2" variant="h4">
                    Datenschutz
                </Typography>
                <Typography as="p" className="text-white" variant="paragraph">
                    Sofern innerhalb des Internetangebotes die Möglichkeit zur Eingabe persönlicher oder geschäftlicher
                    Daten (E-Mail Adressen, Namen, Anschriften) besteht, so erfolgt die Preisgabe dieser Daten seitens
                    des Nutzers auf ausdrücklich freiwilliger Basis. Ihre Daten werden bei uns für die Abwicklung der
                    gewünschten Transaktion gespeichert. Alle Daten werden vertraulich behandelt und nicht
                    weitergegeben. Die Inanspruchnahme und Bezahlung aller angebotenen Dienste ist – soweit technisch
                    möglich und zumutbar – auch ohne Angabe solcher Daten bzw. unter Angabe anonymisierter Daten oder
                    eines Pseudonyms gestattet. Die Nutzung der im Rahmen des Impressums oder vergleichbarer Angaben
                    veröffentlichten Kontaktdaten wie Postanschriften, Telefon- und Faxnummern sowie E-Mail Adressen
                    durch Dritte zur Übersendung von nicht ausdrücklich angeforderten Informationen ist nicht gestattet.
                    Rechtliche Schritte gegen die Versender von so genannten Spam-Mails bei Verstößen gegen dieses
                    Verbot sind ausdrücklich vorbehalten. Für detaillierte Informationen siehe{" "}
                    <a href="/privacy" className="text-primary">
                        Datenschutz
                    </a>
                    .
                </Typography>

                <Typography className="mt-8" as="h2" variant="h4">
                    Verbraucherinformation gemäß Verbraucherstreitbeilegungsgesetz
                </Typography>
                <Typography as="p" className="text-white" variant="paragraph">
                    Die Team One Developers GmbH ist nicht bereit und verpflichtet, an Streitbeilegungsverfahren vor
                    einer Verbraucherschlichtungsstelle teilzunehmen.
                </Typography>
                <Typography className="mt-8" as="h2" variant="h4">
                    Verlinkungen
                </Typography>
                <Typography as="p" className="text-white" variant="paragraph">
                    Diese Webseite enthält Verlinkungen zu Webseiten Dritter. Für die Inhalte der Webseiten Dritter
                    übernimmt die Team One Developers GmbH keine Haftung.
                </Typography>
                <Typography as="strong" className="text-white" variant="paragraph">
                    Keine Gewähr für Richtigkeit, Vollständigkeit und Aktualität.
                </Typography>
            </Section>
        </PageLayout>
    )
}

export default Legal
