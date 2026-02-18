import ContentBlock from "@/components/layout/ContentBlock"
import ContactSectionNew from "@/components/sections/ContactSectionNew"
import HeroGradientBackdrop from "@/components/sections/HeroGradientBackdrop"
import HeroNew from "@/components/sections/HeroNew"
import ImageTeaser from "@/components/sections/ImageTeaserNew"
import ServicesGrid from "@/components/sections/ServicesGrid"
import SuccessStoriesGrid from "@/components/sections/SuccessStoriesGrid"

export default function ServicesPage() {
    return (
        <div className="relative">
            <HeroGradientBackdrop />

            <main className="gap-vertical-inner relative z-10 flex flex-col">
                <ContentBlock>
                    <HeroNew
                        title="Offerings"
                        eyebrows={[
                            "Software Engineering",
                            "Business Consulting",
                            "AI & Data Analytics",
                            "Car IT Technologies",
                            "Cloud & DevOps",
                            "Digital Strategy"
                        ]}
                    />
                </ContentBlock>

                <ContentBlock>
                    <ServicesGrid
                        services={[
                            {
                                title: "Software\nEngineering",
                                description:
                                    "Wir verwandeln komplexe Anforderungen in performante Softwarelösungen, die nachhaltiges Wachstum ermöglichen.",
                                pictogramUrl: "/new/images/verwinkelt.svg",
                                buttonLabel: "Mehr erfahren",
                                href: "/services/software-engineering"
                            },
                            {
                                title: "Operational AI &\nData Analytics",
                                description:
                                    "Vom Aufbau interner Kompetenzen bis zur Entwicklung produktionsreifer Systeme – von klassischen Ansätzen bis hin zu Gen AI-Anwendungen.",
                                pictogramUrl: "/new/images/verwinkelt.svg",
                                buttonLabel: "Mehr erfahren",
                                href: "/services/ai-data-analytics"
                            },
                            {
                                title: "Digital-Strategie &\nTransformation",
                                description:
                                    "Wir machen Organisationen handlungsfähig für digitale Produkte – strategisch, technologisch und operativ.",
                                pictogramUrl: "/new/images/verwinkelt.svg",
                                buttonLabel: "Mehr erfahren",
                                href: "/services/digital-strategy-transformation"
                            }
                        ]}
                    />
                </ContentBlock>

                <ContentBlock>
                    <ImageTeaser
                        title="Infrastruktur"
                        description="Empathie ist für uns der Schlüssel zu echter Zusammenarbeit. Wir begegnen unseren Kund:innen mit Offenheit und Verständnis – und schaffen so Beziehungen, die auf Vertrauen und gegenseitigem Respekt beruhen."
                        buttonLabel="Online"
                        buttonVariant="light"
                        image="/new/images/image-3.jpg"
                        author={{
                            name: "by Hannah",
                            role: "Marketing & Organisation",
                            avatarUrl: "/new/images/image-2.jpg"
                        }}
                    />
                </ContentBlock>

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
