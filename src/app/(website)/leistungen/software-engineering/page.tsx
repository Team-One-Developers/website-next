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
    title: "Software Engineering",
    description:
        "Skalierbare Plattformen, Cloud-Architekturen und moderne Softwareentwicklung – von Digital Platforms über Enterprise Modernization bis Security."
}

export default function SoftwareEngineeringPage() {
    return (
        <div className="relative">
            <HeroGradientBackdrop />

            <main className="gap-vertical-inner relative z-10 flex flex-col">
                <ContentBlock>
                    <Hero
                        title="Software Engineering"
                        backLink={{ label: "Zurück zur Übersicht", href: "/leistungen" }}
                        viewTransitionName="service-title-software-engineering"
                    />
                </ContentBlock>

                {/* Two-column intro text */}
                <ContentBlock>
                    <section className="gap-grid-gutter flex flex-col lg:flex-row">
                        <div className="flex-1">
                            <p className="text-medium max-w-132.5 text-black">
                                Wir verwandeln komplexe Anforderungen in performante Softwarelösungen, die nachhaltiges
                                Wachstum ermöglichen.
                            </p>
                        </div>
                        <div className="gap-lg flex flex-1 flex-col">
                            <p className="text-small max-w-117.25 text-black">
                                Software ist das Rückgrat moderner Wertschöpfung – sie steuert Kundenbeziehungen,
                                Datenflüsse und Produktentwicklungen. Erfolgreiche Unternehmen setzen auf robuste,
                                erweiterbare Systeme, die Sicherheit, Performance und Anpassungsfähigkeit vereinen.
                            </p>
                            <p className="text-xsmall max-w-105 text-black">
                                Wir setzen auf modernste Technologien und Frameworks, um performante, skalierbare und
                                zukunftssichere Softwarelösungen zu entwickeln.
                            </p>
                        </div>
                    </section>
                </ContentBlock>

                {/* Schwerpunkte section */}
                <ContentBlock>
                    <ServiceDetailSection
                        sectionTitle={"Unsere Schwerpunkte im\nSoftware Engineering"}
                        image="/images/software-engineering.jpg"
                        animate={false}
                        items={[
                            {
                                title: "Digital Platforms & Application Engineering",
                                description:
                                    "Wir entwickeln skalierbare, modulare Plattformen und Anwendungen für komplexe Enterprise-Ökosysteme. Unsere Lösungen verbinden Daten, Prozesse und Nutzererlebnisse zu performanten, zukunftsfähigen Systemen. Dabei setzen wir auf moderne Architekturprinzipien, API-first-Design und nachhaltige Softwarequalität."
                            },
                            {
                                title: "Enterprise Modernization & System Transformation",
                                description:
                                    "Wir modernisieren Legacy-Systeme und überführen komplexe IT-Landschaften in cloud-native Architekturen. Unser Ziel: höhere Flexibilität, geringere Betriebskosten und schnellere Innovationszyklen. Dabei verbinden wir strategische Planung mit technischer Exzellenz und minimaler Betriebsunterbrechung."
                            },
                            {
                                title: "Architecture Advisory & Due Diligence Consulting",
                                description:
                                    "Wir schaffen Transparenz in komplexen Technologie-Landschaften und bewerten Systeme nach Qualität, Skalierbarkeit und Zukunftsfähigkeit. Ob Architektur-Audit, Modernisierungsstrategie oder Tech Due Diligence – wir liefern faktenbasierte Entscheidungsgrundlagen. Unser Fokus liegt auf technischer Exzellenz, Investitionssicherheit und nachhaltiger Weiterentwicklung."
                            },
                            {
                                title: "Cloud Security",
                                description:
                                    "Wir sichern Cloud-Umgebungen über alle Ebenen hinweg – von Infrastruktur bis Governance. Unsere Security-Konzepte gewährleisten Compliance, Datenschutz und resiliente Betriebsmodelle. Dabei kombinieren wir technisches Know-how mit Best Practices aus DevSecOps und Cloud Architecture und begleiten komplexe Angriffssimulationen."
                            },
                            {
                                title: "Accessibility Auditing",
                                description:
                                    "Wir prüfen digitale Produkte auf Barrierefreiheit, Nutzbarkeit und gesetzliche Konformität. Dabei kombinieren wir technische Analyse mit praxisnahen Empfehlungen zur Optimierung. Unser Ziel: digitale Erlebnisse, die für alle Menschen zugänglich und intuitiv nutzbar sind."
                            },
                            {
                                title: "AI-powered Engineering Productivity",
                                description:
                                    "Wir steigern Produktivität und Codequalität durch KI-gestützte Entwicklungsprozesse. Unsere Lösungen automatisieren Dokumentation, Code-Reviews und Testgenerierung. So entsteht intelligentes Engineering, das Geschwindigkeit, Qualität und Effizienz vereint."
                            }
                        ]}
                    />
                </ContentBlock>

                {/* Success Stories */}
                <ContentBlock greenBg>
                    <StoriesGrid stories={storyList} />
                </ContentBlock>

                {/* Image Teaser */}
                <ContentBlock>
                    <ImageTeaser variant="inframotive" />
                </ContentBlock>

                {/* Contact */}
                <ContentBlock>
                    <ContactSection title="Lass uns über Software sprechen, die Wachstum schafft." />
                </ContentBlock>
            </main>
        </div>
    )
}
