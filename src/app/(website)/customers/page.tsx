import ContentBlock from "@/components/layout/ContentBlock"
import LogoMarquee from "@/components/molecules/LogoMarquee"
import ContactSectionNew from "@/components/sections/ContactSectionNew"
import FeaturedStory from "@/components/sections/FeaturedStory"
import HeroGradientBackdrop from "@/components/sections/HeroGradientBackdrop"
import HeroNew from "@/components/sections/HeroNew"
import { StoryCard, type SuccessStory } from "@/components/sections/SuccessStoriesGrid"

const logos = [
    { src: "/images/customers/porscheLogo.svg", alt: "Porsche", width: 120, height: 40 },
    { src: "/images/customers/mercedesLogo.svg", alt: "Mercedes-Benz", width: 120, height: 40 },
    { src: "/images/customers/recaroLogo.svg", alt: "Recaro", width: 120, height: 40 },
    { src: "/images/customers/dmtechLogo.svg", alt: "dm-tech", width: 120, height: 40 }
]

const stories: SuccessStory[] = [
    {
        title: "Plattform für Neu- und Gebrauchtfahrzeuge",
        description:
            "Wir entwickeln skalierbare, modulare Plattformen und Anwendungen für komplexe Enterprise-Ökosysteme. Unsere Lösungen verbinden Daten, Prozesse und Nutzererlebnisse zu performanten, zukunftsfähigen Systemen. Dabei setzen wir auf moderne Architekturprinzipien, API-first-Design und nachhaltige Softwarequalität.",
        image: "/images/customers/porsche-cropped.jpg",
        eyebrowLabel: "Business Technology",
        buttonLabel: "Case study",
        href: "/customers/porsche"
    },
    {
        title: "Plattform für Neu- und Gebrauchtfahrzeuge",
        description:
            "Wir entwickeln skalierbare, modulare Plattformen und Anwendungen für komplexe Enterprise-Ökosysteme. Unsere Lösungen verbinden Daten, Prozesse und Nutzererlebnisse zu performanten, zukunftsfähigen Systemen. Dabei setzen wir auf moderne Architekturprinzipien, API-first-Design und nachhaltige Softwarequalität.",
        image: "/images/customers/mercedes-cropped.jpg",
        eyebrowLabel: "Business Technology",
        buttonLabel: "Case study",
        href: "/customers/mercedes"
    },
    {
        title: "Plattform für Neu- und Gebrauchtfahrzeuge",
        description:
            "Wir entwickeln skalierbare, modulare Plattformen und Anwendungen für komplexe Enterprise-Ökosysteme. Unsere Lösungen verbinden Daten, Prozesse und Nutzererlebnisse zu performanten, zukunftsfähigen Systemen. Dabei setzen wir auf moderne Architekturprinzipien, API-first-Design und nachhaltige Softwarequalität.",
        image: "/images/customers/recaro.jpg",
        eyebrowLabel: "Business Technology",
        buttonLabel: "Case study",
        href: "/customers/recaro"
    },
    {
        title: "Plattform für Neu- und Gebrauchtfahrzeuge",
        description:
            "Wir entwickeln skalierbare, modulare Plattformen und Anwendungen für komplexe Enterprise-Ökosysteme.",
        image: "/images/customers/porsche-cropped.jpg",
        eyebrowLabel: "Business Technology",
        buttonLabel: "Case study",
        href: "/customers/recaro"
    },
    {
        title: "Plattform für Neu- und Gebrauchtfahrzeuge",
        description:
            "Wir entwickeln skalierbare, modulare Plattformen und Anwendungen für komplexe Enterprise-Ökosysteme.",
        image: "/images/customers/mercedes-cropped.jpg",
        eyebrowLabel: "Business Technology",
        buttonLabel: "Case study",
        href: "/customers/mercedes"
    },
    {
        title: "Plattform für Neu- und Gebrauchtfahrzeuge",
        description:
            "Wir entwickeln skalierbare, modulare Plattformen und Anwendungen für komplexe Enterprise-Ökosysteme.",
        image: "/images/customers/recaro.jpg",
        eyebrowLabel: "Business Technology",
        buttonLabel: "Case study",
        href: "/customers/dm-tech"
    },
    {
        title: "Plattform für Neu- und Gebrauchtfahrzeuge",
        description:
            "Wir entwickeln skalierbare, modulare Plattformen und Anwendungen für komplexe Enterprise-Ökosysteme.",
        image: "/images/customers/porsche-cropped.jpg",
        eyebrowLabel: "Business Technology",
        buttonLabel: "Case study",
        href: "/customers/smart-factory"
    },
    {
        title: "Plattform für Neu- und Gebrauchtfahrzeuge",
        description:
            "Wir entwickeln skalierbare, modulare Plattformen und Anwendungen für komplexe Enterprise-Ökosysteme.",
        image: "/images/customers/mercedes-cropped.jpg",
        eyebrowLabel: "Business Technology",
        buttonLabel: "Case study",
        href: "/customers/fleet-management"
    },
    {
        title: "Plattform für Neu- und Gebrauchtfahrzeuge",
        description:
            "Wir entwickeln skalierbare, modulare Plattformen und Anwendungen für komplexe Enterprise-Ökosysteme.",
        image: "/images/customers/recaro.jpg",
        eyebrowLabel: "Business Technology",
        buttonLabel: "Case study",
        href: "/customers/connected-car"
    }
]

export default function SuccessStoriesPage() {
    return (
        <div className="relative">
            <HeroGradientBackdrop />

            <main className="gap-vertical-inner relative z-10 flex flex-col">
                <ContentBlock>
                    <HeroNew title="Success Stories" />
                </ContentBlock>

                <ContentBlock>
                    <FeaturedStory
                        logoUrl="/images/customers/porscheLogo.svg"
                        logoAlt="Porsche"
                        logoWidth={116}
                        logoHeight={43}
                        title="Internationale Verkaufs-Plattform für Neu- und Gebrauchtfahrzeuge"
                        description="Gemeinsam mit unserem Kunden entwickeln wir eine ganzheitliche Lösung für Online-Finanzdienstleistungen im internationalen Online-Retail von Neu- und Gebrauchtfahrzeugen."
                        buttonLabel="Case study"
                        buttonHref="/customers/porsche"
                        backgroundImage="/images/customers/porsche-cropped.jpg"
                        rightLogoUrl="/images/customers/mercedesLogo.svg"
                        rightLogoAlt="Mercedes-Benz"
                        rightTitle="Internationale Verkaufs-Plattform für Neu- und Gebrauchtfahrzeuge"
                        rightDescription="Gemeinsam mit unserem Kunden entwickeln wir eine ganzheitliche Lösung für Online-Finanzdienstleistungen im internationalen Online-Retail von Neu- und Gebrauchtfahrzeugen."
                        rightButtonLabel="Case study"
                        rightButtonHref="/customers/mercedes"
                    />
                </ContentBlock>

                <ContentBlock>
                    <LogoMarquee logos={logos} />
                </ContentBlock>

                {/* Story cards grid – 3 rows × 3 columns */}
                <ContentBlock>
                    <div className="gap-grid-gutter grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        {stories.map((story, i) => (
                            <StoryCard key={`${story.href}-${i}`} {...story} />
                        ))}
                    </div>
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
