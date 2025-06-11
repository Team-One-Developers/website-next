import { Section } from "@/components/layout/Section"
import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
    title: "Impressum",
    description: "Impressum der Team One Developers GmbH in Stuttgart."
}

const Legal = () => {
    return (
        <Section className="pb-56">
            <h1 className="mt-8 text-3xl font-bold">Impressum</h1>

            <h2 className="mt-8 text-2xl font-semibold">Verantwortlich für den Inhalt dieser Website</h2>
            <address className="text-white not-italic">
                Team One Developers GmbH <br />
                Stafflenbergstraße 44 <br />
                70184 Stuttgart
            </address>

            <h2 className="mt-8 text-2xl font-semibold">Vertreten durch die Geschäftsführung</h2>
            <ul className="text-white">
                <li className="marker legalULLI">Timo Brückel</li>
                <li className="legalULLI">Julian Richter</li>
            </ul>

            <h2 className="mt-8 text-2xl font-semibold">Registereintrag</h2>
            <article className="text-white">
                Eintragung im Handelsregister. <br />
                Registergericht: Amtsgericht Stuttgart <br />
                Registernummer: HRB 777716
            </article>

            <h2 className="mt-8 text-2xl font-semibold">Datenschutz</h2>
            <p className="text-white">
                Sofern innerhalb des Internetangebotes die Möglichkeit zur Eingabe persönlicher oder geschäftlicher
                Daten (E-Mail Adressen, Namen, Anschriften) besteht, so erfolgt die Preisgabe dieser Daten seitens des
                Nutzers auf ausdrücklich freiwilliger Basis. Ihre Daten werden bei uns für die Abwicklung der
                gewünschten Transaktion gespeichert. Alle Daten werden vertraulich behandelt und nicht weitergegeben.
                Die Inanspruchnahme und Bezahlung aller angebotenen Dienste ist – soweit technisch möglich und zumutbar
                – auch ohne Angabe solcher Daten bzw. unter Angabe anonymisierter Daten oder eines Pseudonyms gestattet.
                Die Nutzung der im Rahmen des Impressums oder vergleichbarer Angaben veröffentlichten Kontaktdaten wie
                Postanschriften, Telefon- und Faxnummern sowie E-Mail Adressen durch Dritte zur Übersendung von nicht
                ausdrücklich angeforderten Informationen ist nicht gestattet. Rechtliche Schritte gegen die Versender
                von so genannten Spam-Mails bei Verstößen gegen dieses Verbot sind ausdrücklich vorbehalten. Für
                detaillierte Informationen siehe{" "}
                <Link href="/privacy" className="text-primary">
                    Datenschutz
                </Link>
                .
            </p>

            <h2 className="mt-8 text-2xl font-semibold">
                Verbraucherinformation gemäß Verbraucherstreitbeilegungsgesetz
            </h2>
            <p className="text-white">
                Die Team One Developers GmbH ist nicht bereit und verpflichtet, an Streitbeilegungsverfahren vor einer
                Verbraucherschlichtungsstelle teilzunehmen.
            </p>

            <h2 className="mt-8 text-2xl font-semibold">Verlinkungen</h2>
            <p className="text-white">
                Diese Webseite enthält Verlinkungen zu Webseiten Dritter. Für die Inhalte der Webseiten Dritter
                übernimmt die Team One Developers GmbH keine Haftung.
            </p>

            <strong className="text-white">Keine Gewähr für Richtigkeit, Vollständigkeit und Aktualität.</strong>
        </Section>
    )
}

export default Legal
