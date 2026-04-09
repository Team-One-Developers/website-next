import ContentBlock from "@/components/layout/ContentBlock"
import ContactSection from "@/components/sections/ContactSection"
import HeroGradientBackdrop from "@/components/sections/HeroGradientBackdrop"
import ImageTeaser from "@/components/sections/ImageTeaser"
import StoriesGrid from "@/components/sections/StoriesGrid"
import type { SuccessStory } from "@/components/sections/SuccessStoriesGrid"
import cn from "@/utils/cn"
import Image from "next/image"
import Link from "next/link"

interface Highlight {
    title: string
    description: string
    image: string
}

const DEFAULT_SECOND_TEASER = {
    title: "Wir sind eine Technologie- & Transformations-Beratung mit klarem Blick für Produkt- und Geschäftsziele.",
    description:
        "Als Early Adopter zentraler technologischer und methodischer Frameworks agieren wir als integrativer Beratungs- und Implementierungspartner für datengetriebene Geschäftsmodelle.",
    buttonLabel: "Unternehmen",
    buttonVariant: "light" as const,
    image: "/images/office-meeting.jpg"
}

interface CaseStudyTemplateProps {
    heroTitle: string
    heroDescription: string
    heroImage: string
    highlights: Highlight[]
    highlightLayout?: "column" | "grid"
    relatedStories: SuccessStory[]
    secondTeaser?: {
        title: string
        description: string
        image: string
        buttonLabel?: string
        buttonVariant?: "primary" | "outline" | "light"
        author?: {
            name: string
            role: string
            avatarUrl: string
        }
    }
    backHref?: string
    backLabel?: string
    contactTitle?: string
    textSection?: string
}

export default function CaseStudyTemplate({
    heroTitle,
    heroDescription,
    heroImage,
    highlights,
    highlightLayout = "column",
    relatedStories,
    secondTeaser = DEFAULT_SECOND_TEASER,
    backHref = "/referenzen",
    backLabel = "Zurück zur Übersicht",
    contactTitle,
    textSection
}: CaseStudyTemplateProps) {
    return (
        <div className="relative">
            <HeroGradientBackdrop />

            <main className="gap-vertical-inner relative z-10 flex flex-col">
                <ContentBlock className="gap-xl flex flex-col pt-32">
                    <Link
                        href={backHref}
                        className="gap-sm text-small flex items-center text-black"
                        aria-label={backLabel}
                    >
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            className="rotate-180"
                            aria-hidden="true"
                        >
                            <path
                                d="M5 12H19M19 12L12 5M19 12L12 19"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                        {backLabel}
                    </Link>

                    <ImageTeaser title={heroTitle} description={heroDescription} image={heroImage} priority />
                </ContentBlock>

                {textSection && (
                    <ContentBlock>
                        <p className="text-small text-black-soft lg:px-64">{textSection}</p>
                    </ContentBlock>
                )}

                <ContentBlock>
                    <div
                        className={cn(
                            "gap-vertical-inner",
                            highlightLayout === "grid" ? "grid grid-cols-1 lg:grid-cols-2" : "flex flex-col lg:px-64"
                        )}
                    >
                        {highlights.map((item) => (
                            <div key={item.title} className="gap-lg flex flex-col">
                                <Image src={item.image} alt={item.title} width={100} height={100} className="size-25" />
                                <div className="gap-xs flex flex-col">
                                    <h2 className="font-gteradisplay text-h2 max-w-115 text-black">{item.title}</h2>
                                    <p className="text-small text-black-soft max-w-115">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </ContentBlock>

                <ContentBlock>
                    <StoriesGrid stories={relatedStories} />
                </ContentBlock>

                <ContentBlock>
                    <ImageTeaser
                        title={secondTeaser.title}
                        description={secondTeaser.description}
                        buttonLabel={secondTeaser.buttonLabel}
                        buttonVariant={secondTeaser.buttonVariant}
                        image={secondTeaser.image}
                        author={secondTeaser.author}
                    />
                </ContentBlock>

                <ContentBlock>
                    <ContactSection title={contactTitle} />
                </ContentBlock>
            </main>
        </div>
    )
}
