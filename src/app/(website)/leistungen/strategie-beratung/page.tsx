import ContentBlock from "@/components/layout/ContentBlock"
import ContactSection from "@/components/sections/ContactSection"
import Hero from "@/components/sections/Hero"
import HeroGradientBackdrop from "@/components/sections/HeroGradientBackdrop"
import ImageTeaser from "@/components/sections/ImageTeaserNew"
import ServiceDetailSection from "@/components/sections/ServiceDetailSection"
import { StoryCard } from "@/components/sections/SuccessStoriesGrid"
import { storyList } from "@/data/stories"

export default function DigitalStrategyTransformationPage() {
    return (
        <div className="relative">
            <HeroGradientBackdrop />

            <main className="gap-vertical-inner relative z-10 flex flex-col">
                <ContentBlock>
                    <Hero
                        title="Digital-Strategie & Transformation"
                        backLink={{ label: "Zurück zur Übersicht", href: "/leistungen" }}
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
                        items={[
                            {
                                title: "Digital Strategy & Business Model Innovation",
                                description:
                                    "Wir entwickeln digitale Strategien, die auf messbaren Geschäftswert ausgerichtet sind. Von der Analyse bestehender Wertschöpfungsketten über die Identifikation neuer Erlösmodelle bis zur Definition einer technologiegestützten Roadmap – wir schaffen Klarheit für die nächsten Schritte.",
                                image: "/new/images/image-1.jpg"
                            },
                            {
                                title: "Product & Platform Strategy",
                                description:
                                    "Wir konzipieren digitale Produktstrategien und Plattformansätze, die Skalierbarkeit und Nutzerwert vereinen. Durch strukturierte Discovery-Prozesse, Business-Case-Validierung und MVP-Definition entstehen Produkte, die am Markt bestehen.",
                                image: "/new/images/image-3.jpg"
                            },
                            {
                                title: "Organizational Enablement & Change",
                                description:
                                    "Wir befähigen Organisationen, digitale Veränderungen nachhaltig zu verankern. Durch abteilungsspezifische Enablement-Programme, Workshops und Hackathons schaffen wir die Voraussetzungen für eigenständige Weiterentwicklung und kulturellen Wandel.",
                                image: "/images/culture/officelife.webp"
                            }
                        ]}
                    />
                </ContentBlock>

                <ContentBlock greenBg>
                    <div className="gap-grid-gutter grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        {storyList.map((story, i) => (
                            <StoryCard key={`${story.href}-${i}`} {...story} />
                        ))}
                    </div>
                </ContentBlock>

                <ContentBlock>
                    <ImageTeaser
                        title="Erfahrung, die Leistung skaliert"
                        description="Unsere Ingenieure sind nicht nur technisch stark – sie verstehen Geschäftsmodelle, Nutzer:innen und Märkte. So entstehen Lösungen, die wirklich wirken."
                        buttonLabel="Online"
                        buttonVariant="light"
                        image="/images/culture/officelife.webp"
                    />
                </ContentBlock>

                <ContentBlock>
                    <ContactSection title="Lass uns über Strategie sprechen, die Wirkung zeigt." />
                </ContentBlock>
            </main>
        </div>
    )
}
