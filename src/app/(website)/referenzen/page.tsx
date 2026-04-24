import Button from "@/components/atoms/Button"
import ContentBlock from "@/components/layout/ContentBlock"
import LogoMarquee from "@/components/molecules/LogoMarquee"
import ContactSection from "@/components/sections/ContactSection"
import FeaturedStory from "@/components/sections/FeaturedStory"
import Hero from "@/components/sections/Hero"
import HeroGradientBackdrop from "@/components/sections/HeroGradientBackdrop"
import StoriesGrid from "@/components/sections/StoriesGrid"
import { stories, storyList } from "@/data/stories"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Referenzen",
    description:
        "Ausgewählte Kundenreferenzen – erfahre, wie Team One digitale Produkte und Plattformen für führende Unternehmen entwickelt."
}

const featured = stories.vertriebsplattform
const cardStories = storyList.filter((s) => s !== featured)

export default function SuccessStoriesPage() {
    return (
        <div className="relative">
            <HeroGradientBackdrop />

            <main className="gap-vertical-inner relative z-10 flex flex-col">
                <ContentBlock>
                    <Hero title="Kundenreferenzen" />
                </ContentBlock>

                <ContentBlock>
                    <FeaturedStory
                        logoUrl={featured.featured!.logoUrl}
                        logoAlt={featured.featured!.logoAlt}
                        logoWidth={featured.featured!.logoWidth}
                        logoHeight={featured.featured!.logoHeight}
                        title={featured.featured!.featuredTitle}
                        description={featured.featured!.featuredDescription}
                        buttonLabel={featured.buttonLabel}
                        buttonHref={featured.href}
                        backgroundImage={featured.featured!.backgroundImage}
                        animate={false}
                    />
                </ContentBlock>

                <ContentBlock>
                    <LogoMarquee />
                </ContentBlock>

                {/* Story cards grid */}
                <ContentBlock>
                    <StoriesGrid stories={cardStories} gridClassName="lg:grid-rows-[auto_auto_auto_auto_auto]">
                        {/* CTA card */}
                        <div className="bg-primary gap-sm px-padding-lg py-xl flex flex-col justify-center rounded-lg">
                            <h3 className="font-gteradisplay text-h4 text-black">
                                Interesse an weiteren Kundenreferenzen?
                            </h3>
                            <p className="text-xsmall text-black/60">
                                Gerne teilen wir Informationen zu weiteren Kundenreferenzen in einem persönlichen
                                Gespräch.
                            </p>
                            <div className="pt-sm">
                                <Button label="Kontakt aufnehmen →" variant="dark" href="/kontakt" />
                            </div>
                        </div>
                    </StoriesGrid>
                </ContentBlock>

                <ContentBlock>
                    <ContactSection title="Lass uns über Software sprechen, die Wachstum schafft." />
                </ContentBlock>
            </main>
        </div>
    )
}
