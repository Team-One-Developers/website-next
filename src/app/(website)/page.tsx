import ContentBlock from "@/components/layout/ContentBlock"
import LogoMarquee from "@/components/molecules/LogoMarquee"
import ContactSection from "@/components/sections/ContactSection"
import EventsCarousel from "@/components/sections/EventsCarousel"
import Hero from "@/components/sections/Hero"
import HeroGradientBackdrop from "@/components/sections/HeroGradientBackdrop"
import ImageTeaser from "@/components/sections/ImageTeaser"
import ServicesOverview from "@/components/sections/ServicesOverview"
import StatementSection from "@/components/sections/StatementSection"
import StoriesGrid from "@/components/sections/StoriesGrid"
import type { SuccessStory } from "@/components/sections/SuccessStoriesGrid"
import { aidArticles } from "@/data/aidArticles"
import { events, formatEventDate, getPastEvents, getUpcomingEvents } from "@/data/events"
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

const today = new Date().toISOString().slice(0, 10)

const toCardData = (e: (typeof events)[number]) => ({
    title: e.title,
    date: formatEventDate(e.startDate, e.endDate),
    client: e.client,
    category: e.category ?? e.type,
    image: e.image,
    location: e.location,
    description: e.description
})

const upcomingEvents = getUpcomingEvents(events, today).map(toCardData)
const pastEvents = getPastEvents(events, today).map(toCardData)

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
                    <ServicesOverview animate={false} />
                </ContentBlock>

                <ContentBlock greenBg>
                    <StoriesGrid stories={storyList} animate={true} />
                    <LogoMarquee className="pb-0" />
                </ContentBlock>

                {/*
                    TODO ADJUST CONTENT WITH PAUL
                    */}
                <ContentBlock>
                    <ImageTeaser variant="werte" />
                </ContentBlock>

                <ContentBlock>
                    <StoriesGrid title="AI:D Magazin" stories={aidStories} imageBorder />
                </ContentBlock>

                <ContentBlock>
                    <EventsCarousel title="Events" upcomingEvents={upcomingEvents} pastEvents={pastEvents} />
                </ContentBlock>

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
