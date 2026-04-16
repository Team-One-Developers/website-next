import ExpandableText from "@/components/atoms/ExpandableText"
import ContentBlock from "@/components/layout/ContentBlock"
import ContactSection from "@/components/sections/ContactSection"
import Hero from "@/components/sections/Hero"
import HeroGradientBackdrop from "@/components/sections/HeroGradientBackdrop"
import ImageTeaser from "@/components/sections/ImageTeaser"
import ServiceDetailSection from "@/components/sections/ServiceDetailSection"
import StoriesGrid from "@/components/sections/StoriesGrid"
import { storyList } from "@/data/stories"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Car-IT Technologies",
    description:
        "Automotive Platform Engineering, Vehicle Data & IoT und digitale Mobilitätsservices – Infrastruktur-Frameworks für die nächste Generation automobiler Plattformen."
}

export default function CarItTechnologiesPage() {
    return (
        <div className="relative">
            <HeroGradientBackdrop />

            <main className="gap-vertical-inner relative z-10 flex flex-col">
                <ContentBlock>
                    <Hero
                        title="Car-IT Technologies"
                        backLink={{ label: "Zurück zur Übersicht", href: "/leistungen" }}
                    />
                </ContentBlock>

                <ContentBlock>
                    <section className="gap-grid-gutter flex flex-col lg:flex-row">
                        <div className="flex-1">
                            <p className="text-medium max-w-132.5 text-black">
                                Team One Inframotive entwickelt die grundlegende Fahrzeug-Infrastruktur für
                                Software-Defined Vehicles – von E/E-Architektur über Diagnose und Security bis hin zu
                                Over-the-Air Updates.
                            </p>
                        </div>
                        <div className="gap-lg flex flex-1 flex-col">
                            <p className="text-small max-w-132.5 text-black">
                                Die Automobilindustrie steht vor einem grundlegenden Wandel: Connected Cars,
                                Software-Defined Vehicles und digitale Mobilitätsdienste erfordern eine neue Generation
                                von IT-Infrastruktur.
                            </p>
                            <p className="text-xsmall max-w-132.5 text-black">
                                Genau hier setzt Inframotive an. Wir entwickeln die grundlegende Fahrzeug-Infrastruktur
                                für Software-Defined Vehicles und schaffen damit die technologische Basis, auf der
                                moderne Fahrzeugfunktionen überhaupt erst effizient realisiert werden können. Unser
                                Fokus liegt auf den zentralen Querschnittsdomänen E/E-Architektur, Diagnose, Security
                                und Over-the-Air Updates – also genau den Bereichen, die systemübergreifend wirken und
                                maßgeblich über Stabilität, Sicherheit und Zukunftsfähigkeit entscheiden.
                            </p>

                            <ExpandableText className="max-w-132.5" preview="Dabei denken wir">
                                <p className="text-xsmall max-w-132.5 text-black">
                                    Dabei denken wir Infrastruktur konsequent end-to-end: vom Steuergerät im Fahrzeug
                                    über die Kommunikationsschichten bis hin zu Backend- und Cloud-Systemen. Wir
                                    gestalten robuste Architekturen, definieren klare Systemgrenzen und sorgen dafür,
                                    dass zentrale Funktionen wie Identitätsmanagement, sichere Kommunikation,
                                    Update-Mechanismen und Diagnoseprozesse nahtlos ineinandergreifen. Unser Ziel ist
                                    es, Komplexität zu reduzieren, Wiederverwendbarkeit zu erhöhen und gleichzeitig
                                    regulatorische Anforderungen von Beginn an integriert umzusetzen.
                                </p>
                                <p className="text-xsmall max-w-132.5 text-black">
                                    Das Ergebnis sind skalierbare, updatefähige und langfristig betreibbare Plattformen,
                                    die über den gesamten Fahrzeuglebenszyklus hinweg funktionieren – von der
                                    Entwicklung über die Produktion bis in After-Sales und Flottenbetrieb. Inframotive
                                    schafft damit die stabile Grundlage, auf der OEMs und Zulieferer ihre
                                    Differenzierungsfunktionen schneller, sicherer und nachhaltiger entwickeln können.
                                </p>
                            </ExpandableText>
                        </div>
                    </section>
                </ContentBlock>

                <ContentBlock>
                    <ServiceDetailSection
                        sectionTitle={"Team One Inframotive - unsere Schwerpunkte"}
                        image="/images/inframotive.jpg"
                        items={[
                            {
                                title: "E/E Architektur",
                                description: (
                                    <>
                                        <p>
                                            Hochqualifizierte und erfahrene Ingenieure unterstützen oder leiten
                                            bestehende Architekturentwicklungsteams bei der Konzeption und Entwicklung
                                            komplexer sowie hochskalierbarer E/E-Architekturen.
                                        </p>
                                        <ul className="list-disc space-y-1 pl-5">
                                            <li>
                                                End-to-End technisches Anforderungsmanagement und Integration in die
                                                Produkt-Roadmap
                                            </li>
                                            <li>
                                                Konzeptionierung von Hochleistungsrechner-Plattformen (HPC) inklusive
                                                Sourcing und Dimensionierung
                                            </li>
                                            <li>
                                                Klare Architektur und saubere Schnittstellen zur Reduzierung von
                                                Legacy-Komplexität
                                            </li>
                                        </ul>
                                        <p>
                                            Eine E/E-Architektur muss als Produkt entwickelt und als Plattform
                                            konzipiert werden, um langfristige Leistungsfähigkeit und Skalierbarkeit
                                            über den gesamten Lebenszyklus sicherzustellen.
                                        </p>
                                    </>
                                )
                            },
                            {
                                title: "Diagnose",
                                description: (
                                    <>
                                        <p>
                                            Fahrzeugdiagnose ist ein zentrales Schlüsselelement einer stabilen
                                            Basisarchitektur. Mit mehr als 35 Jahren Erfahrung in diesem spezialisierten
                                            Bereich entwickeln unsere Ingenieure das Fundament für Ihre E/E-Architektur.
                                        </p>
                                        <p>
                                            Diagnose ist ein zentraler Bestandteil in der Entwicklung, der Produktion
                                            und im Aftersales-Service. Wir bieten:
                                        </p>
                                        <ul className="list-disc space-y-1 pl-5">
                                            <li>End-to-End (E2E) Diagnosekonzepte</li>
                                            <li>Unterstützung bei der Integration von Diagnosesystemen</li>
                                            <li>Datenlogistik und Datenmanagement</li>
                                        </ul>
                                        <p>
                                            Von der Bereitstellung und Absicherung von Diagnosedatensätzen bis hin zur
                                            Backend-Datenlogistik entwickeln wir passgenaue, updatefähige Lösungen.
                                        </p>
                                    </>
                                )
                            },
                            {
                                title: "Security",
                                description: (
                                    <>
                                        <p>
                                            Security by Design verankert Schutzmechanismen konsequent von der
                                            Fahrzeugplattform über die Steuergeräte (ECUs) bis hin zu Backend- und
                                            Cloud-Systemen.
                                        </p>
                                        <ul className="list-disc space-y-1 pl-5">
                                            <li>
                                                Kernfunktionen wie Identitätsmanagement, sichere Kommunikation und
                                                Schlüsselmanagement bilden die Grundlage einer robusten
                                                Sicherheitsarchitektur.
                                            </li>
                                            <li>
                                                Domänenübergreifende Sicherheitskonzepte sowie klar definierte
                                                Trust-Zonen reduzieren Komplexität und erhöhen die Skalierbarkeit.
                                            </li>
                                        </ul>
                                        <p>
                                            Wir entwickeln maßgeschneiderte, präzise abgestimmte Sicherheitskonzepte und
                                            -funktionen, die sich nahtlos in die Diagnose- und Update-Architektur
                                            integrieren.
                                        </p>
                                        <p>
                                            Das Ergebnis sind zukunftssichere, updatefähige und regulatorisch konforme
                                            Architekturen für Software-Defined Vehicles.
                                        </p>
                                    </>
                                )
                            },
                            {
                                title: "Update",
                                description: (
                                    <>
                                        <p>
                                            Ein ganzheitliches Update-Framework für moderne E/E-Architekturen ermöglicht
                                            sichere, reproduzierbare und homologationskonforme Software- und
                                            Konfigurationsupdates über den gesamten Fahrzeuglebenszyklus hinweg – von
                                            der Produktion, Hof & Hafen, Werkstattumgebung bis hin zu
                                            Over-the-Air-Updates im vor Kunde.
                                        </p>
                                        <p>
                                            Es deckt sämtliche relevanten Update-Use-Cases ab und erfüllt gleichzeitig
                                            regulatorische Anforderungen wie UNECE R155/R156 sowie internationale
                                            GB/T-Standards.
                                        </p>
                                        <ul className="list-disc space-y-1 pl-5">
                                            <li>
                                                <b>End-to-End-Abdeckung</b> &gt; Einheitliches Updatekonzept für
                                                Produktion, Werkstatt und Aftersales
                                            </li>
                                            <li>
                                                <b>Regulatorische Konformität</b> &gt; Integrierte Unterstützung für
                                                UNECE- und GB/T-Anforderungen
                                            </li>
                                            <li>
                                                <b>Skalierbarkeit & Sicherheit</b> &gt; Betrieb über mehrere Plattformen
                                                hinweg
                                            </li>
                                            <li>
                                                <b>Betriebsstabilität</b> &gt; Versionierung, Abhängigkeitsmanagement
                                                und sichere Rollback-Mechanismen
                                            </li>
                                        </ul>
                                    </>
                                )
                            }
                        ]}
                    />
                </ContentBlock>

                <ContentBlock greenBg>
                    <StoriesGrid stories={storyList} />
                </ContentBlock>

                <ContentBlock>
                    <ImageTeaser variant="software" />
                </ContentBlock>

                <ContentBlock>
                    <ContactSection
                        title="Lass uns über Car-IT sprechen, die Zukunft bewegt."
                        contacts={["johannesaehling"]}
                    />
                </ContentBlock>
            </main>
        </div>
    )
}
