import ContentBlock from "@/components/layout/ContentBlock"
import ContactSectionNew from "@/components/sections/ContactSectionNew"
import HeroGradientBackdrop from "@/components/sections/HeroGradientBackdrop"
import ImageTeaser from "@/components/sections/ImageTeaserNew"
import { StoryCard, type SuccessStory } from "@/components/sections/SuccessStoriesGrid"
import Image from "next/image"
import Link from "next/link"

const highlights = [
    {
        title: "Aufgabe",
        description:
            "Wir verwandeln komplexe Anforderungen in performante Softwarelösungen, die nachhaltiges Wachstum ermöglichen."
    },
    {
        title: "Herausforderung",
        description:
            "Wir sind spezialisierter Beratungs- und Entwicklungspartner im Bereich Data & Al - vom Prototyp über den ersten MVP bis hin zur LLM Plattform."
    },
    {
        title: "Lösung",
        description:
            "Wir verwandeln komplexe Anforderungen in performante Softwarelösungen, die nachhaltiges Wachstum ermöglichen."
    },
    {
        title: "Erfolge",
        description:
            "Wir sind spezialisierter Beratungs- und Entwicklungspartner im Bereich Data & Al - vom Prototyp über den ersten MVP bis hin zur LLM Plattform."
    }
]

const relatedStories: SuccessStory[] = [
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
    }
]

export default function PorscheCaseStudyPage() {
    return (
        <div className="relative">
            <HeroGradientBackdrop />

            <main className="gap-vertical-inner relative z-10 flex flex-col">
                {/* Back link + hero image teaser */}
                <ContentBlock className="gap-xl flex flex-col pt-32">
                    <Link href="/customers" className="gap-sm text-small flex items-center text-black">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="rotate-180">
                            <path
                                d="M5 12H19M19 12L12 5M19 12L12 19"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                        Zurück zur Übersicht
                    </Link>

                    <ImageTeaser
                        title="Internationale Verkaufs-Plattform für Neu- und Gebrauchtfahrzeuge"
                        description="Gemeinsam mit unserem Kunden entwickeln wir eine ganzheitliche Lösung für Online-Finanzdienstleistungen im internationalen Online-Retail von Neu- und Gebrauchtfahrzeugen."
                        buttonLabel="Online"
                        buttonVariant="light"
                        image="/images/customers/porsche-cropped.jpg"
                        author={{
                            name: "by Hannah",
                            role: "Marketing & Organisation",
                            avatarUrl: "/new/images/image-2.jpg"
                        }}
                    />
                </ContentBlock>

                {/* Case study highlights — 2×2 grid, narrower than full content */}
                <ContentBlock>
                    <div className="gap-grid-gutter grid grid-cols-1 md:grid-cols-2 lg:px-64">
                        {highlights.map((item) => (
                            <div key={item.title} className="gap-lg flex flex-col">
                                <Image
                                    src="/new/images/verwinkelt.svg"
                                    alt=""
                                    width={100}
                                    height={100}
                                    className="size-25"
                                />
                                <div className="gap-xs flex flex-col">
                                    <h2 className="font-gteradisplay text-h2 max-w-115 text-black">{item.title}</h2>
                                    <p className="text-small text-black-soft max-w-115">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </ContentBlock>

                {/* Related success stories */}
                <ContentBlock>
                    <div className="gap-grid-gutter grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        {relatedStories.map((story, i) => (
                            <StoryCard key={`${story.href}-${i}`} {...story} />
                        ))}
                    </div>
                </ContentBlock>

                {/* Second image teaser */}
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
