import ContentBlock from "@/components/layout/ContentBlock"
import BlogSectionNew from "@/components/sections/BlogSectionNew"
import ContactSectionNew from "@/components/sections/ContactSectionNew"
import CustomersShowcase from "@/components/sections/CustomersShowcase"
import EventsSection from "@/components/sections/EventsSection"
import HeroGradientBackdrop from "@/components/sections/HeroGradientBackdrop"
import HeroNew from "@/components/sections/HeroNew"
import ImageTeaser from "@/components/sections/ImageTeaserNew"
import ServicesGrid from "@/components/sections/ServicesGrid"
import StatementSection from "@/components/sections/StatementSection"

const Home = () => {
    return (
        <div className="relative">
            {/* Green wavy gradient backdrop — parallax blobs */}
            <HeroGradientBackdrop />

            <main className="gap-vertical-inner relative z-10 flex flex-col">
                <ContentBlock>
                    <HeroNew
                        title="Strategisch, datengetrieben, umsetzungsstark."
                        description="Team One ist Technologie-Beratungspartner für digitale Produkte, skalierbare Architekturen und KI-gestützte Geschäftsmodelle – mit Tech-Expertise, die in echten Projekten wirkt."
                        eyebrows={["Strategy", "Data & AI", "Software Engineering"]}
                    />
                </ContentBlock>

                <ContentBlock>
                    <StatementSection
                        eyebrowLabel="Was uns antreibt"
                        text="Wir steigern die Wettbewerbsfähigkeit von Unternehmen in einer digitalen Welt."
                    />
                </ContentBlock>

                <ContentBlock>
                    <ServicesGrid
                        services={[
                            {
                                title: "Software Engineering",
                                description:
                                    "Wir entwickeln modulare Web- und Plattformarchitekturen – skalierbar, wartbar, produktnah. Unsere Schwerpunkte: komponentenbasierte Entwicklung, klare Schnittstellen, automatisierte Deployment-Prozesse.",
                                pictogramUrl: "/new/images/verwinkelt.svg",
                                buttonLabel: "Mehr erfahren",
                                href: "/services/software-engineering"
                            },
                            {
                                title: "Operational AI & Data Analytics",
                                description:
                                    "Vom Aufbau interner Kompetenzen bis zur Entwicklung produktionsreifer Systeme. Unsere Leistungen decken das gesamte Spektrum ab: von klassischen Ansätzen bis hin zu Gen AI-Anwendungen mit integriertem Governance-Modell.",
                                pictogramUrl: "/new/images/verwinkelt.svg",
                                buttonLabel: "Mehr erfahren",
                                href: "/services/ai-data-analytics"
                            },
                            {
                                title: "Digital-Strategie & Transformation",
                                description:
                                    "Wir machen Organisationen handlungsfähig für digitale Produkte – strategisch, technologisch und operativ. Von der Reifegradanalyse bis zum produktbasierten Operating Model oder Produktstrategie.",
                                pictogramUrl: "/new/images/verwinkelt.svg",
                                buttonLabel: "Mehr erfahren",
                                href: "/services/digital-strategy-transformation"
                            }
                        ]}
                        cta={{
                            title: "Bereit für den nächsten Schritt?",
                            description:
                                "Wir starten dort, wo es am meisten bewegt – schnell, strategisch und mit klarem Fokus.",
                            buttonLabel: "Alle Leistungen",
                            href: "/services"
                        }}
                    />
                </ContentBlock>

                <CustomersShowcase
                    eyebrowLabel="Unsere Kunden"
                    title="Erfolgsgeschichten, die für sich sprechen."
                    buttonLabel="Alle Success Stories"
                    buttonHref="/customers"
                    cases={[
                        {
                            title: "Porsche Online-Vertriebsplattform",
                            description:
                                "Porsche-Enthusiasten die bestmögliche Such- und Kauferfahrung zu bieten – nicht weniger war unser Anspruch bei der Entwicklung der Porsche Vertriebsplattform.",
                            backgroundImage: "/images/customers/porsche-cropped.jpg",
                            logoUrl: "/images/customers/porscheLogo.svg",
                            href: "/customers/porsche"
                        },
                        {
                            title: "Mercedes-Benz Digital Service Strategy",
                            description:
                                "Gemeinsam mit Mercedes-Benz haben wir eine innovative Serviceportfolio-Strategie entwickelt, die vollkommen neue Umsatzpotentiale eröffnet.",
                            backgroundImage: "/images/customers/mercedes-cropped.jpg",
                            logoUrl: "/images/customers/mercedesLogo.svg",
                            href: "/customers/mercedes"
                        }
                    ]}
                    logos={[
                        { src: "/images/customers/porscheLogo.svg", alt: "Porsche", width: 120, height: 40 },
                        { src: "/images/customers/mercedesLogo.svg", alt: "Mercedes-Benz", width: 120, height: 40 },
                        { src: "/images/customers/recaroLogo.svg", alt: "Recaro", width: 120, height: 40 },
                        { src: "/images/customers/dmtechLogo.svg", alt: "dm-tech", width: 120, height: 40 }
                    ]}
                />

                <ContentBlock>
                    <ImageTeaser
                        title="Unsere Werte sind unser Kompass."
                        description="Nachhaltigkeit, Transparenz und partnerschaftliche Zusammenarbeit – das sind die Grundpfeiler unserer Arbeit."
                        buttonLabel="Mehr über uns"
                        buttonHref="/culture"
                        image="/new/images/image-1.jpg"
                    />
                </ContentBlock>

                <ContentBlock>
                    <EventsSection
                        eyebrowLabel="Events"
                        title="Wissen teilen, Impulse setzen."
                        description="Ob auf der Bühne oder im Workshop – wir teilen unser Wissen und diskutieren aktuelle Tech-Themen mit der Community."
                        buttonLabel="Alle Events"
                        buttonHref="/events"
                        events={[
                            {
                                title: "KI in der Unternehmenspraxis",
                                description:
                                    "Wie Unternehmen KI-Projekte von der Idee in die Produktion bringen – und was dabei wirklich zählt.",
                                date: "15. März 2026",
                                speakerName: "Andreas Zander",
                                speakerRole: "Managing Director",
                                speakerImage: "/new/images/image-2.jpg",
                                speakerBadge: "Speaker",
                                href: "/events/ki-praxis"
                            },
                            {
                                title: "Platform Engineering Summit",
                                description:
                                    "Best Practices für Internal Developer Platforms: von der Architektur zur Adoption.",
                                date: "22. April 2026",
                                speakerName: "Team One",
                                speakerRole: "Engineering",
                                speakerImage: "/new/images/image-3.jpg",
                                href: "/events/platform-engineering"
                            }
                        ]}
                    />
                </ContentBlock>

                <ContentBlock>
                    <BlogSectionNew
                        title="Neuigkeiten & Insights"
                        posts={[
                            {
                                title: "Warum modulare Architekturen die Zukunft sind",
                                description:
                                    "Ein Blick auf die Vorteile komponentenbasierter Systeme für skalierbare digitale Produkte.",
                                image: "/new/images/image-4.jpg",
                                eyebrowLabel: "Software Engineering",
                                tagLabel: "Architektur",
                                author: {
                                    name: "Team One",
                                    role: "Engineering",
                                    avatarUrl: "/new/images/image-4.jpg"
                                },
                                href: "/blog/modulare-architekturen"
                            },
                            {
                                title: "Data Mesh in der Praxis",
                                description:
                                    "Wie dezentrale Datenarchitekturen helfen, Silos aufzubrechen und datengetriebene Entscheidungen zu beschleunigen.",
                                image: "/new/images/image-5.jpg",
                                eyebrowLabel: "Data & AI",
                                tagLabel: "Data",
                                author: {
                                    name: "Team One",
                                    role: "Data & AI",
                                    avatarUrl: "/new/images/image-5.jpg"
                                },
                                href: "/blog/data-mesh"
                            },
                            {
                                title: "Digitale Transformation messbar machen",
                                description:
                                    "Metriken und Frameworks, um den Fortschritt digitaler Initiativen sichtbar und steuerbar zu machen.",
                                image: "/new/images/image-6.jpg",
                                eyebrowLabel: "Strategie",
                                author: {
                                    name: "Team One",
                                    role: "Strategy",
                                    avatarUrl: "/new/images/image-6.jpg"
                                },
                                href: "/blog/transformation-metriken"
                            }
                        ]}
                    />
                </ContentBlock>

                <ContentBlock>
                    <ImageTeaser
                        title="Karriere bei Team One"
                        description="Werde Teil eines Teams, das Technologie nicht nur versteht, sondern lebt. Wir suchen Menschen, die gestalten wollen."
                        buttonLabel="Offene Stellen"
                        buttonHref="/career"
                        image="/images/culture/officelife.webp"
                    />
                </ContentBlock>

                <ContentBlock>
                    <ContactSectionNew
                        title="Lass uns sprechen."
                        contact={{
                            name: "Andreas Zander",
                            role: "Managing Director",
                            imageUrl: "/images/culture/paul.png",
                            phone: "+49 711 99581 100",
                            email: "info@team-one.de"
                        }}
                    />
                </ContentBlock>

                {/* <StickyContactBar
                    text="Starten wir gemeinsam?"
                    buttonLabel="Kontakt"
                    buttonHref="/contact"
                    imageUrl="/images/culture/paul.png"
                /> */}
            </main>
        </div>
    )
}
export default Home
