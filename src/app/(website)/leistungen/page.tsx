import ContentBlock from "@/components/layout/ContentBlock"
import ContactSection from "@/components/sections/ContactSection"
import Hero from "@/components/sections/Hero"
import HeroGradientBackdrop from "@/components/sections/HeroGradientBackdrop"
import ImageTeaser from "@/components/sections/ImageTeaser"
import ServicesOverview from "@/components/sections/ServicesOverview"
import StoriesGrid from "@/components/sections/StoriesGrid"
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
                    <ServicesOverview showCta={false} animate={false} />
                </ContentBlock>

                <ContentBlock greenBg>
                    <StoriesGrid stories={storyList} />
                </ContentBlock>

                <ContentBlock>
                    <ImageTeaser variant="einblicke" />
                </ContentBlock>

                <ContentBlock>
                    <ContactSection title="Lass uns über Software sprechen, die Wachstum schafft." />
                </ContentBlock>
            </main>
        </div>
    )
}
