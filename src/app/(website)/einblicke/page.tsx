import ContentBlock from "@/components/layout/ContentBlock"
import EventsCarousel from "@/components/sections/EventsCarousel"
import Hero from "@/components/sections/Hero"
import HeroGradientBackdrop from "@/components/sections/HeroGradientBackdrop"
import StoriesGrid from "@/components/sections/StoriesGrid"
import type { SuccessStory } from "@/components/sections/SuccessStoriesGrid"
import { aidArticles } from "@/data/aidArticles"
import { events, formatEventDate, getPastEvents, getUpcomingEvents } from "@/data/events"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Einblicke",
    description:
        "Events, Vorträge und Insights rund um Software Engineering, AI und digitale Transformation – von Team One."
}

/* ------------------------------------------------------------------ */
/*  Prepare event data for carousel                                   */
/* ------------------------------------------------------------------ */

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

const insightArticles: SuccessStory[] = aidArticles.map((article) => ({
    title: article.title,
    description: article.teaser,
    image: article.image,
    buttonLabel: "Zum Interview",
    href: `/einblicke/aid-magazin/${article.slug}`
}))

export default function InsightsPage() {
    return (
        <div className="relative">
            <HeroGradientBackdrop />

            <div className="gap-vertical-inner relative z-10 flex flex-col">
                <ContentBlock>
                    <Hero
                        title="Einblicke"
                        eyebrows={["Events", "Webinare", "AI:D Magazin"]}
                        description="Bleib auf dem Laufenden mit unseren Events, Blogbeiträgen und unserem Newsletter zu den Themen Software Engineering, Business Technology und Unternehmenskultur."
                    />
                </ContentBlock>

                <ContentBlock>
                    <EventsCarousel
                        title="Events"
                        upcomingEvents={upcomingEvents}
                        pastEvents={pastEvents}
                        animate={false}
                    />
                </ContentBlock>

                {/* <ContentBlock>
                    <EventsCarousel title="Webinare" upcomingEvents={[]} pastEvents={[]} />
                </ContentBlock> */}

                <ContentBlock>
                    <StoriesGrid title="AI:D Magazin" stories={insightArticles} />
                </ContentBlock>
            </div>
        </div>
    )
}
