import ContentBlock from "@/components/layout/ContentBlock"
import ContactSection from "@/components/sections/ContactSection"
import Hero from "@/components/sections/Hero"
import HeroGradientBackdrop from "@/components/sections/HeroGradientBackdrop"
import ImageTeaser from "@/components/sections/ImageTeaser"
import ServiceDetailSection from "@/components/sections/ServiceDetailSection"
import { StoryCard } from "@/components/sections/SuccessStoriesGrid"
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
                                Team One Inframotive entwickelt geschäftskritische Infrastruktur-Frameworks für die
                                nächste Generation automobiler Plattformen.
                            </p>
                        </div>
                        <div className="gap-lg flex flex-1 flex-col">
                            <p className="text-small max-w-117.25 text-black">
                                Die Automobilindustrie steht vor einem grundlegenden Wandel: Connected Cars,
                                Software-Defined Vehicles und digitale Mobilitätsdienste erfordern eine neue Generation
                                von IT-Infrastruktur. Wir verbinden tiefes Domänenwissen mit modernster
                                Softwareentwicklung.
                            </p>
                            <p className="text-xsmall max-w-105 text-black">
                                Unsere Lösungen entstehen an der Schnittstelle von Fahrzeugtechnologie,
                                Cloud-Plattformen und datengetriebener Produktentwicklung – für OEMs, Zulieferer und
                                Mobilitätsdienstleister.
                            </p>
                        </div>
                    </section>
                </ContentBlock>

                <ContentBlock>
                    <ServiceDetailSection
                        sectionTitle={"Unsere Schwerpunkte in\nCar-IT Technologies"}
                        items={[
                            {
                                title: "Automotive Platform Engineering",
                                description:
                                    "Wir entwickeln skalierbare Plattformen für den digitalen Fahrzeugvertrieb, After-Sales-Services und Connected-Car-Ökosysteme. Unsere Architekturansätze ermöglichen die Integration heterogener Systeme und schaffen die Basis für neue digitale Geschäftsmodelle im Automobilumfeld.",
                                image: "/images/teaser-1.jpg"
                            },
                            {
                                title: "Vehicle Data & IoT Integration",
                                description:
                                    "Wir konzipieren und implementieren Lösungen für die Erfassung, Verarbeitung und Analyse von Fahrzeugdaten in Echtzeit. Von Telematik-Plattformen über kameragestützte Fahrzeugerkennung bis hin zu IoT-Cloud-Architekturen – wir machen Fahrzeugdaten zu einem strategischen Asset.",
                                image: "/images/teaser-3.jpg"
                            },
                            {
                                title: "Digital Mobility Services",
                                description:
                                    "Wir entwickeln digitale Serviceplattformen für Mobilitätsanbieter – von Abo-Modellen und Flatrate-Angeboten über Aggregationsplattformen bis hin zu integrierten Payment- und Billing-Architekturen. Unsere Lösungen verbinden Nutzerzentrierung mit operativer Skalierbarkeit.",
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
                    <ContactSection title="Lass uns über Car-IT sprechen, die Zukunft bewegt." />
                </ContentBlock>
            </main>
        </div>
    )
}
