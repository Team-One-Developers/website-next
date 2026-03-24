import ContentBlock from "@/components/layout/ContentBlock"
import ContactSection from "@/components/sections/ContactSection"
import Hero from "@/components/sections/Hero"
import HeroGradientBackdrop from "@/components/sections/HeroGradientBackdrop"
import ImageTeaser from "@/components/sections/ImageTeaser"
import ServicesOverview from "@/components/sections/ServicesOverview"
import { StoryCard } from "@/components/sections/SuccessStoriesGrid"
import { storyList } from "@/data/stories"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Leistungen",
    description:
        "Software Engineering, Operational AI, Strategieberatung und Car-IT Technologies – unsere Leistungen für nachhaltige digitale Transformation."
}

export default function ServicesPage() {
    return (
        <div className="relative">
            <HeroGradientBackdrop />

            <main className="gap-vertical-inner relative z-10 flex flex-col">
                <ContentBlock>
                    <Hero
                        title="Leistungen"
                        eyebrows={[
                            "Software Engineering",
                            "Operational AI",
                            "Strategy Consulting",
                            "Car-IT Technologies"
                        ]}
                    />
                </ContentBlock>

                <ContentBlock>
                    <ServicesOverview showCta={false} />
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
                        title="Impulse für die Zukunft digitaler Wertschöpfung"
                        description="Fundiertes Denken, praktische Erfahrung und echte Marktnähe: Wir teilen Einblicke in aktuelle Entwicklungen rund um digitale Transformation, KI, Plattformökonomie und moderne Softwarearchitekturen – immer mit dem Anspruch, konkrete Mehrwerte für Unternehmen zu schaffen."
                        buttonLabel="Insights"
                        buttonVariant="light"
                        image="/images/paul-k5.png"
                    />
                </ContentBlock>

                <ContentBlock>
                    <ContactSection title="Lass uns über Software sprechen, die Wachstum schafft." />
                </ContentBlock>
            </main>
        </div>
    )
}
