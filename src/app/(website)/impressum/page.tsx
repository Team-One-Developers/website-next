import ContentBlock from "@/components/layout/ContentBlock"
import Hero from "@/components/sections/Hero"
import HeroGradientBackdrop from "@/components/sections/HeroGradientBackdrop"
import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
    title: "Impressum",
    description:
        "Impressum der Team One Developers GmbH, Stafflenbergstraße 44, 70184 Stuttgart. Geschäftsführer: Timo Brückel, Julian Richter. Handelsregister: HRB 777716.",
    alternates: {
        canonical: "https://www.team-one.de/impressum"
    }
}

const Legal = () => {
    return (
        <div className="relative">
            <HeroGradientBackdrop />

            <div className="gap-vertical-inner relative z-10 flex flex-col">
                <ContentBlock>
                    <Hero title="Impressum" />
                </ContentBlock>

                <ContentBlock>
                    <div className="font-gteratext text-small max-w-200 space-y-8 text-black">
                        <section>
                            <h2 className="font-gteradisplay text-h3 mb-4 text-black">
                                Verantwortlich für den Inhalt dieser Website
                            </h2>
                            <address className="text-black/60 not-italic">
                                Team One Developers GmbH <br />
                                Stafflenbergstraße 44 <br />
                                70184 Stuttgart
                            </address>
                        </section>

                        <section>
                            <h2 className="font-gteradisplay text-h3 mb-4 text-black">
                                Vertreten durch die Geschäftsführung
                            </h2>
                            <ul className="list-disc pl-5 text-black/60">
                                <li>Timo Brückel</li>
                                <li>Julian Richter</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="font-gteradisplay text-h3 mb-4 text-black">Registereintrag</h2>
                            <p className="text-black/60">
                                Eintragung im Handelsregister. <br />
                                Registergericht: Amtsgericht Stuttgart <br />
                                Registernummer: HRB 777716
                            </p>
                        </section>

                        <section>
                            <h2 className="font-gteradisplay text-h3 mb-4 text-black">Datenschutz</h2>
                            <p className="text-black/60">
                                Sofern innerhalb des Internetangebotes die Möglichkeit zur Eingabe persönlicher oder
                                geschäftlicher Daten (E-Mail Adressen, Namen, Anschriften) besteht, so erfolgt die
                                Preisgabe dieser Daten seitens des Nutzers auf ausdrücklich freiwilliger Basis. Ihre
                                Daten werden bei uns für die Abwicklung der gewünschten Transaktion gespeichert. Alle
                                Daten werden vertraulich behandelt und nicht weitergegeben. Die Inanspruchnahme und
                                Bezahlung aller angebotenen Dienste ist – soweit technisch möglich und zumutbar – auch
                                ohne Angabe solcher Daten bzw. unter Angabe anonymisierter Daten oder eines Pseudonyms
                                gestattet. Die Nutzung der im Rahmen des Impressums oder vergleichbarer Angaben
                                veröffentlichten Kontaktdaten wie Postanschriften, Telefon- und Faxnummern sowie E-Mail
                                Adressen durch Dritte zur Übersendung von nicht ausdrücklich angeforderten Informationen
                                ist nicht gestattet. Rechtliche Schritte gegen die Versender von so genannten Spam-Mails
                                bei Verstößen gegen dieses Verbot sind ausdrücklich vorbehalten. Für detaillierte
                                Informationen siehe{" "}
                                <Link href="/datenschutz" className="text-primary underline">
                                    Datenschutz
                                </Link>
                                .
                            </p>
                        </section>

                        <section>
                            <h2 className="font-gteradisplay text-h3 mb-4 text-black">
                                Verbraucherinformation gemäß Verbraucherstreitbeilegungsgesetz
                            </h2>
                            <p className="text-black/60">
                                Die Team One Developers GmbH ist nicht bereit und verpflichtet, an
                                Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                            </p>
                        </section>

                        <section>
                            <h2 className="font-gteradisplay text-h3 mb-4 text-black">Verlinkungen</h2>
                            <p className="text-black/60">
                                Diese Webseite enthält Verlinkungen zu Webseiten Dritter. Für die Inhalte der Webseiten
                                Dritter übernimmt die Team One Developers GmbH keine Haftung.
                            </p>
                        </section>

                        <p className="font-semibold text-black/60">
                            Keine Gewähr für Richtigkeit, Vollständigkeit und Aktualität.
                        </p>
                    </div>
                </ContentBlock>
            </div>
        </div>
    )
}

export default Legal
