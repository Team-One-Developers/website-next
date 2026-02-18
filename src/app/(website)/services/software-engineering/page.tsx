import ContentBlock from "@/components/layout/ContentBlock"
import ContactSectionNew from "@/components/sections/ContactSectionNew"
import HeroGradientBackdrop from "@/components/sections/HeroGradientBackdrop"
import HeroNew from "@/components/sections/HeroNew"
import ImageTeaser from "@/components/sections/ImageTeaserNew"
import ServiceDetailSection from "@/components/sections/ServiceDetailSection"
import SuccessStoriesGrid from "@/components/sections/SuccessStoriesGrid"

export default function SoftwareEngineeringPage() {
    return (
        <div className="relative">
            <HeroGradientBackdrop />

            <main className="gap-vertical-inner relative z-10 flex flex-col">
                <ContentBlock>
                    <HeroNew
                        title="Software Engineering"
                        backLink={{ label: "Zurück zur Übersicht", href: "/services" }}
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
                        eyebrowLabel="Software Engineering"
                        navItems={[
                            "Engineering",
                            "Transformation",
                            "Architecture Advisory & Due Diligence",
                            "Consulting",
                            "Cloud Security",
                            "Accessibility Auditing",
                            "AI-powered Engineering Productivity"
                        ]}
                        items={[
                            {
                                title: "Digital Platforms & Application Engineering",
                                description:
                                    "Wir entwickeln skalierbare, modulare Plattformen und Anwendungen für komplexe Enterprise-Ökosysteme. Unsere Lösungen verbinden Daten, Prozesse und Nutzererlebnisse zu performanten, zukunftsfähigen Systemen. Dabei setzen wir auf moderne Architekturprinzipien, API-first-Design und nachhaltige Softwarequalität.",
                                image: "/new/images/image-1.jpg"
                            },
                            {
                                title: "Cloud-Native Development & DevOps",
                                description:
                                    "Wir entwickeln Cloud-native Anwendungen mit modernen Container- und Orchestrierungstechnologien. Durch CI/CD-Pipelines, Infrastructure as Code und automatisierte Teststrategien schaffen wir Deployment-Prozesse, die Geschwindigkeit und Qualität vereinen.",
                                image: "/new/images/image-3.jpg"
                            },
                            {
                                title: "Architecture Advisory & Technical Due Diligence",
                                description:
                                    "Wir bewerten bestehende Systemlandschaften, identifizieren technische Schulden und entwickeln pragmatische Modernisierungsstrategien. Unsere Architekturberatung sichert Investitionsentscheidungen ab und schafft die Basis für skalierbare Produktentwicklung.",
                                image: "/images/culture/officelife.webp"
                            }
                        ]}
                    />
                </ContentBlock>

                {/* Success Stories */}
                <ContentBlock>
                    <SuccessStoriesGrid
                        title="Success Stories"
                        stories={[
                            {
                                title: "Plattform für Neu- und Gebrauchtfahrzeuge",
                                description:
                                    "Wir entwickeln skalierbare, modulare Plattformen und Anwendungen für komplexe Enterprise-Ökosysteme. Unsere Lösungen verbinden Daten, Prozesse und Nutzererlebnisse zu performanten, zukunftsfähigen Systemen.",
                                image: "/new/images/image-1.jpg",
                                eyebrowLabel: "Business Technology",
                                buttonLabel: "Mehr lesen",
                                href: "/customers/porsche"
                            },
                            {
                                title: "Plattform für Neu- und Gebrauchtfahrzeuge",
                                description:
                                    "Wir entwickeln skalierbare, modulare Plattformen und Anwendungen für komplexe Enterprise-Ökosysteme. Unsere Lösungen verbinden Daten, Prozesse und Nutzererlebnisse zu performanten, zukunftsfähigen Systemen.",
                                image: "/new/images/image-1.jpg",
                                eyebrowLabel: "Business Technology",
                                buttonLabel: "Mehr lesen",
                                href: "/customers/mercedes"
                            },
                            {
                                title: "Plattform für Neu- und Gebrauchtfahrzeuge",
                                description:
                                    "Wir entwickeln skalierbare, modulare Plattformen und Anwendungen für komplexe Enterprise-Ökosysteme. Unsere Lösungen verbinden Daten, Prozesse und Nutzererlebnisse zu performanten, zukunftsfähigen Systemen.",
                                image: "/new/images/image-1.jpg",
                                eyebrowLabel: "Business Technology",
                                buttonLabel: "Mehr lesen",
                                href: "/customers/recaro"
                            }
                        ]}
                    />
                </ContentBlock>

                {/* Image Teaser */}
                <ContentBlock>
                    <ImageTeaser
                        title="Erfahrung, die Leistung skaliert"
                        description="Unsere Ingenieure sind nicht nur technisch stark – sie verstehen Geschäftsmodelle, Nutzer:innen und Märkte. So entstehen Lösungen, die wirklich wirken."
                        buttonLabel="Online"
                        buttonVariant="light"
                        image="/images/culture/officelife.webp"
                        author={{
                            name: "by Hannah",
                            role: "Marketing & Organisation",
                            avatarUrl: "/new/images/image-2.jpg"
                        }}
                    />
                </ContentBlock>

                {/* Contact */}
                <ContentBlock>
                    <ContactSectionNew
                        title="Lass uns über Software sprechen, die Wachstum schafft."
                        contact={{
                            name: "Klaus Kleber",
                            role: "Director Business Development",
                            imageUrl: "/images/culture/paul.png",
                            phone: "+49 182 9983882",
                            email: "hello@team-one.com"
                        }}
                    />
                </ContentBlock>
            </main>
        </div>
    )
}
