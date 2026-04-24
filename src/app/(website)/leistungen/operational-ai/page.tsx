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
    title: "Operational AI",
    description:
        "KI-Strategie, LLM-Lösungen und Data Engineering – wir bringen KI-Projekte vom Prototyp in die Produktion."
}

export default function AiDataAnalyticsPage() {
    return (
        <div className="relative">
            <HeroGradientBackdrop />

            <main className="gap-vertical-inner relative z-10 flex flex-col">
                <ContentBlock>
                    <Hero
                        title="Operational AI & Data Analytics"
                        backLink={{ label: "Zurück zur Übersicht", href: "/leistungen" }}
                        viewTransitionName="service-title-operational-ai"
                    />
                </ContentBlock>

                <ContentBlock>
                    <section className="gap-grid-gutter flex flex-col lg:flex-row">
                        <div className="flex-1">
                            <p className="text-medium max-w-132.5 text-black">
                                Wir sind spezialisierter Beratungs- und Entwicklungspartner im Bereich Data & AI – vom
                                Prototyp über den ersten MVP bis hin zur LLM Plattform.
                            </p>
                        </div>
                        <div className="gap-lg flex flex-1 flex-col">
                            <p className="text-small max-w-117.25 text-black">
                                Von klassischen Analyseverfahren bis hin zu generativer KI: Wir begleiten Unternehmen
                                beim Aufbau interner Kompetenzen und entwickeln produktionsreife Systeme, die echten
                                Geschäftswert erzeugen.
                            </p>
                            <p className="text-xsmall max-w-105 text-black">
                                Unser Fokus liegt auf pragmatischen Lösungen – keine Technologie um der Technologie
                                willen, sondern datengetriebene Produkte, die Entscheidungen verbessern und Prozesse
                                automatisieren.
                            </p>
                        </div>
                    </section>
                </ContentBlock>

                <ContentBlock>
                    <ServiceDetailSection
                        sectionTitle={"Unsere Schwerpunkte in\nOperational AI & Data Analytics"}
                        image="/images/aii.jpg"
                        animate={false}
                        items={[
                            {
                                title: "AI Strategy & Use Case Development",
                                description:
                                    "Wir identifizieren die wirkungsvollsten KI-Anwendungsfälle für Ihr Unternehmen, bewerten deren Machbarkeit und entwickeln eine umsetzbare Roadmap. Durch strukturiertes Use-Case-Landscaping und Readiness-Assessments schaffen wir die Grundlage für nachhaltige KI-Initiativen."
                            },
                            {
                                title: "LLM & Generative AI Solutions",
                                description:
                                    "Wir entwickeln maßgeschneiderte LLM-basierte Anwendungen – von intelligenten Assistenzsystemen über automatisierte Textverarbeitung bis hin zu Retrieval-Augmented Generation (RAG). Unsere Lösungen integrieren sich nahtlos in bestehende Systemlandschaften und skalieren zuverlässig."
                            },
                            {
                                title: "Data Engineering & Analytics Platforms",
                                description:
                                    "Wir bauen skalierbare Datenplattformen, die heterogene Quellen zusammenführen und Echtzeit-Analysen ermöglichen. Von Data Mesh-Architekturen bis zu modernen Lakehouse-Ansätzen schaffen wir die Infrastruktur für datengetriebene Entscheidungen."
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
                    <ContactSection title="Lass uns über KI sprechen, die Wirkung zeigt." />
                </ContentBlock>
            </main>
        </div>
    )
}
