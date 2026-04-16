import ContentBlock from "@/components/layout/ContentBlock"
import ContactSection from "@/components/sections/ContactSection"
import Hero from "@/components/sections/Hero"
import HeroGradientBackdrop from "@/components/sections/HeroGradientBackdrop"
import ImageTeaser from "@/components/sections/ImageTeaser"
import ServicesOverview from "@/components/sections/ServicesOverview"
import StatementSection from "@/components/sections/StatementSection"
import StoriesGrid from "@/components/sections/StoriesGrid"
import type { SuccessStory } from "@/components/sections/SuccessStoriesGrid"
import { aidArticles } from "@/data/aidArticles"
import { storyList } from "@/data/stories"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Team One – Tech-driven Business Transformation",
    description:
        "Team One ist Technologie-Beratungspartner für digitale Produkte, skalierbare Architekturen und KI-gestützte Geschäftsmodelle – strategisch, datengetrieben, umsetzungsstark."
}

const aidStories: SuccessStory[] = aidArticles.map((article) => ({
    title: article.title,
    description: article.teaser,
    image: article.image,
    buttonLabel: "Zum Interview",
    href: `/einblicke/aid-magazin/${article.slug}`
}))

const Home = () => {
    return (
        <div className="relative">
            {/* Green wavy gradient backdrop — parallax blobs */}
            <HeroGradientBackdrop />

            <main className="gap-vertical-inner relative z-10 flex flex-col">
                <ContentBlock className="md:py-36">
                    <Hero
                        title={"Tech-driven\nBusiness Transformation"}
                        description="Team One ist Technologie-Beratungspartner für digitale Produkte, skalierbare Architekturen und KI-gestützte Geschäftsmodelle – mit Tech-Expertise, die in echten Projekten wirkt. Strategisch, datengetrieben, umsetzungsstark."
                        eyebrows={["Strategy", "Data & AI", "Software Engineering", "Car-IT Technologies"]}
                    />
                </ContentBlock>

                <ContentBlock>
                    <StatementSection
                        eyebrowLabel="Was uns antreibt"
                        text="Wir steigern die Wettbewerbsfähigkeit von Unternehmen in einer digitalen Welt."
                    />
                </ContentBlock>

                <ContentBlock>
                    <ServicesOverview />
                </ContentBlock>

                <ContentBlock greenBg>
                    <StoriesGrid stories={storyList} />
                </ContentBlock>

                {/*
                    TODO ADJUST CONTENT WITH PAUL
                    */}
                <ContentBlock>
                    <ImageTeaser variant="werte" />
                </ContentBlock>

                <ContentBlock>
                    <StoriesGrid title="AI:D Magazin" stories={aidStories} />
                </ContentBlock>

                {/*
                    TODO ADJUST CONTENT WITH PAUL

                    EVENTS & INSIGHTS 2 times this module
                    */}
                {/* <ContentBlock>
                    <EventsSection
                        eyebrowLabel="Offerings"
                        title="Events"
                        description="Erleben Sie uns live: als Speaker auf führenden Branchenveranstaltungen und in inspirierenden Webinaren."
                        buttonLabel="Alle Events"
                        buttonHref="/veranstaltungen"
                        events={[
                            {
                                title: "KI in der Unternehmenspraxis",
                                description:
                                    "Wie Unternehmen KI-Projekte von der Idee in die Produktion bringen – und was dabei wirklich zählt.",
                                dateLocation: "15. März 2026 • Stuttgart",
                                speakerName: "Andreas Zander",
                                speakerRole: "Managing Director",
                                speakerImage: "/images/teaser-2.jpg",
                                speakerBadge: "Speaker",
                                href: "/veranstaltungen/ki-praxis"
                            },
                            {
                                title: "Platform Engineering Summit",
                                description:
                                    "Best Practices für Internal Developer Platforms: von der Architektur zur Adoption.",
                                dateLocation: "22. April 2026 • Berlin",
                                speakerName: "Team One",
                                speakerRole: "Engineering",
                                speakerImage: "/images/teaser-3.jpg",
                                href: "/veranstaltungen/platform-engineering"
                            }
                        ]}
                    />
                </ContentBlock> */}

                <ContentBlock>
                    <ImageTeaser variant="leistungen" />
                </ContentBlock>

                <ContentBlock>
                    <ContactSection
                        title="What's next? Let's talk."
                        contacts={["timobrueckel", "julianrichter", "johannesaehling"]}
                    />
                </ContentBlock>
            </main>
        </div>
    )
}
export default Home
