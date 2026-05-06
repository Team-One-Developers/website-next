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
    title: "Strategieberatung",
    description:
        "Digitale Strategien, Produkt- und Plattformstrategie sowie organisatorisches Enablement von Team One – für nachhaltige Geschäftstransformation mit messbarem Ergebnis.",
    alternates: {
        canonical: "https://www.team-one.de/leistungen/strategie-beratung"
    }
}

export default function DigitalStrategyTransformationPage() {
    return (
        <div className="relative">
            <HeroGradientBackdrop />

            <main className="gap-vertical-inner relative z-10 flex flex-col">
                <ContentBlock>
                    <Hero
                        title="Strategy Consulting"
                        backLink={{ label: "Zurück zur Übersicht", href: "/leistungen" }}
                        viewTransitionName="service-title-strategie-beratung"
                    />
                </ContentBlock>

                <ContentBlock>
                    <section className="gap-grid-gutter flex flex-col lg:flex-row">
                        <div className="flex-1">
                            <p className="text-medium max-w-132.5 text-black">
                                Verbinden Sie mit uns Strategie, Technologie und Geschäftsinnovation – für eine
                                Organisation, die morgen stärker ist als heute.
                            </p>
                        </div>
                        <div className="gap-lg flex flex-1 flex-col">
                            <p className="text-small max-w-117.25 text-black">
                                Digitale Transformation ist kein IT-Projekt – sie verändert Geschäftsmodelle, Prozesse
                                und Organisationen. Wir begleiten Unternehmen von der strategischen Vision bis zur
                                operativen Umsetzung und stellen sicher, dass Technologieentscheidungen auf
                                Geschäftsziele einzahlen.
                            </p>
                            <p className="text-xsmall max-w-105 text-black">
                                Unser Ansatz verbindet tiefes Technologieverständnis mit strategischem Weitblick – für
                                Transformationen, die nicht nur geplant, sondern auch umgesetzt werden.
                            </p>
                        </div>
                    </section>
                </ContentBlock>

                <ContentBlock>
                    <ServiceDetailSection
                        sectionTitle={"Unsere Schwerpunkte in\nDigital-Strategie & Transformation"}
                        image="/images/strategy.jpg"
                        animate={false}
                        items={[
                            {
                                title: "Digital Strategy & Business Model Innovation",
                                description:
                                    "Wir entwickeln digitale Strategien, die auf messbaren Geschäftswert ausgerichtet sind. Von der Analyse bestehender Wertschöpfungsketten über die Identifikation neuer Erlösmodelle bis zur Definition einer technologiegestützten Roadmap – wir schaffen Klarheit für die nächsten Schritte."
                            },
                            {
                                title: "Product & Platform Strategy",
                                description:
                                    "Wir konzipieren digitale Produktstrategien und Plattformansätze, die Skalierbarkeit und Nutzerwert vereinen. Durch strukturierte Discovery-Prozesse, Business-Case-Validierung und MVP-Definition entstehen Produkte, die am Markt bestehen."
                            },
                            {
                                title: "Organizational Enablement & Change",
                                description:
                                    "Wir befähigen Organisationen, digitale Veränderungen nachhaltig zu verankern. Durch abteilungsspezifische Enablement-Programme, Workshops und Hackathons schaffen wir die Voraussetzungen für eigenständige Weiterentwicklung und kulturellen Wandel."
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
                    <ContactSection title="Lass uns über Strategie sprechen, die Wirkung zeigt." />
                </ContentBlock>
            </main>
        </div>
    )
}
