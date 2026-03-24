import ContentBlock from "@/components/layout/ContentBlock"
import EventsCarousel from "@/components/sections/EventsCarousel"
import Hero from "@/components/sections/Hero"
import HeroGradientBackdrop from "@/components/sections/HeroGradientBackdrop"
import StoriesGrid from "@/components/sections/StoriesGrid"
import type { SuccessStory } from "@/components/sections/SuccessStoriesGrid"
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
    image: e.image
})

const upcomingEvents = getUpcomingEvents(events, today).map(toCardData)
const pastEvents = getPastEvents(events, today).map(toCardData)

const insightArticles: SuccessStory[] = [
    {
        title: "Plattform für Neu- und Gebrauchtfahrzeuge",
        description: "Top-Brands, führende Händler & Experten – für Wissen, Wachstum & wertvolle Verbindungen.",
        image: "/images/customers/porsche-cropped.jpg",
        eyebrowLabel: "Business Technology",
        buttonLabel: "Mehr erfahren",
        href: "/einblicke/plattform"
    },
    {
        title: "Plattform für Neu- und Gebrauchtfahrzeuge",
        description: "Top-Brands, führende Händler & Experten – für Wissen, Wachstum & wertvolle Verbindungen.",
        image: "/images/customers/mercedes-cropped.jpg",
        eyebrowLabel: "Business Technology",
        buttonLabel: "Mehr erfahren",
        href: "/einblicke/plattform-2"
    },
    {
        title: "Plattform für Neu- und Gebrauchtfahrzeuge",
        description: "Top-Brands, führende Händler & Experten – für Wissen, Wachstum & wertvolle Verbindungen.",
        image: "/images/customers/recaro.jpg",
        eyebrowLabel: "Business Technology",
        buttonLabel: "Mehr erfahren",
        href: "/einblicke/plattform-3"
    }
]

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
                    />
                </ContentBlock>

                <ContentBlock>
                    <EventsCarousel
                        title="Webinare"
                        upcomingEvents={[]}
                        pastEvents={[]}
                    />
                </ContentBlock>

                <ContentBlock>
                    <StoriesGrid title="AI:D Artikel" stories={insightArticles} />
                </ContentBlock>
            </div>
        </div>
    )
}
