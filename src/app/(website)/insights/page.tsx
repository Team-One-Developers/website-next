"use client"

import ContentBlock from "@/components/layout/ContentBlock"
import BlogCardNew from "@/components/molecules/BlogCardNew"
import EventCard from "@/components/molecules/EventCard"
import HeroGradientBackdrop from "@/components/sections/HeroGradientBackdrop"
import HeroNew from "@/components/sections/HeroNew"
import ImageTeaser from "@/components/sections/ImageTeaserNew"
import { StoryCard, type SuccessStory } from "@/components/sections/SuccessStoriesGrid"
import cn from "@/utils/cn"
import { useState } from "react"

/* ------------------------------------------------------------------ */
/*  Static data                                                       */
/* ------------------------------------------------------------------ */

const events = [
    {
        title: "K5 — Future Retail Conference 2026",
        description: "Top-Brands, führende Händler & Experten – für Wissen, Wachstum & wertvolle Verbindungen.",
        date: "Juni 2026",
        speakerName: "Dr. Max Mustermann",
        speakerRole: "CTO",
        speakerImage: "/images/customers/porsche-cropped.jpg",
        href: "/insights/k5-2026"
    },
    {
        title: "Wearedevelopers World Congress Europe",
        description: "Top-Brands, führende Händler & Experten – für Wissen, Wachstum & wertvolle Verbindungen.",
        date: "Juni 2026",
        speakerName: "Anna Schmidt",
        speakerRole: "Head of Engineering",
        speakerImage: "/images/customers/mercedes-cropped.jpg",
        href: "/insights/wearedevelopers-2026"
    },
    {
        title: "K5 — Future Retail Conference 2026",
        description: "Top-Brands, führende Händler & Experten – für Wissen, Wachstum & wertvolle Verbindungen.",
        date: "Juni 2026",
        speakerName: "Dr. Max Mustermann",
        speakerRole: "CTO",
        speakerImage: "/images/customers/recaro.jpg",
        href: "/insights/k5-2026-2"
    },
    {
        title: "Wearedevelopers World Congress Europe",
        description: "Top-Brands, führende Händler & Experten – für Wissen, Wachstum & wertvolle Verbindungen.",
        date: "Juni 2026",
        speakerName: "Anna Schmidt",
        speakerRole: "Head of Engineering",
        speakerImage: "/images/customers/porsche-cropped.jpg",
        href: "/insights/wearedevelopers-2026-2"
    }
]

const featuredArticles: SuccessStory[] = [
    {
        title: "Plattform für Neu- und Gebrauchtfahrzeuge",
        description: "Top-Brands, führende Händler & Experten – für Wissen, Wachstum & wertvolle Verbindungen.",
        image: "/images/customers/porsche-cropped.jpg",
        eyebrowLabel: "Business Technology",
        buttonLabel: "Mehr erfahren",
        href: "/blog/plattform"
    },
    {
        title: "Plattform für Neu- und Gebrauchtfahrzeuge",
        description: "Top-Brands, führende Händler & Experten – für Wissen, Wachstum & wertvolle Verbindungen.",
        image: "/images/customers/mercedes-cropped.jpg",
        eyebrowLabel: "Business Technology",
        buttonLabel: "Mehr erfahren",
        href: "/blog/plattform-2"
    },
    {
        title: "Plattform für Neu- und Gebrauchtfahrzeuge",
        description: "Top-Brands, führende Händler & Experten – für Wissen, Wachstum & wertvolle Verbindungen.",
        image: "/images/customers/recaro.jpg",
        eyebrowLabel: "Business Technology",
        buttonLabel: "Mehr erfahren",
        href: "/blog/plattform-3"
    }
]

const blogCategories = ["Alle", "Methodology", "Business Technology", "Software Engineering", "Culture"]

const blogPosts = [
    {
        title: "Plattform für Neu- und Gebrauchtfahrzeuge",
        description: "Top-Brands, führende Händler & Experten – für Wissen, Wachstum & wertvolle Verbindungen.",
        image: "/images/customers/porsche-cropped.jpg",
        eyebrowLabel: "Business Technology",
        author: { name: "by Hannah", role: "Marketing & Organisation", avatarUrl: "/images/culture/coding.webp" },
        href: "/blog/plattform-bt"
    },
    {
        title: "Plattform für Neu- und Gebrauchtfahrzeuge",
        description: "Top-Brands, führende Händler & Experten – für Wissen, Wachstum & wertvolle Verbindungen.",
        image: "/images/customers/mercedes-cropped.jpg",
        eyebrowLabel: "Business Technology",
        author: { name: "by Hannah", role: "Marketing & Organisation", avatarUrl: "/images/culture/coding.webp" },
        href: "/blog/plattform-bt-2"
    },
    {
        title: "Plattform für Neu- und Gebrauchtfahrzeuge",
        description: "Top-Brands, führende Händler & Experten – für Wissen, Wachstum & wertvolle Verbindungen.",
        image: "/images/customers/recaro.jpg",
        eyebrowLabel: "Business Technology",
        author: { name: "by Hannah", role: "Marketing & Organisation", avatarUrl: "/images/culture/coding.webp" },
        href: "/blog/plattform-bt-3"
    }
]

const insightArticles: SuccessStory[] = [
    {
        title: "Plattform für Neu- und Gebrauchtfahrzeuge",
        description: "Top-Brands, führende Händler & Experten – für Wissen, Wachstum & wertvolle Verbindungen.",
        image: "/images/customers/porsche-cropped.jpg",
        eyebrowLabel: "Business Technology",
        buttonLabel: "Mehr erfahren",
        href: "/insights/plattform"
    },
    {
        title: "Plattform für Neu- und Gebrauchtfahrzeuge",
        description: "Top-Brands, führende Händler & Experten – für Wissen, Wachstum & wertvolle Verbindungen.",
        image: "/images/customers/mercedes-cropped.jpg",
        eyebrowLabel: "Business Technology",
        buttonLabel: "Mehr erfahren",
        href: "/insights/plattform-2"
    },
    {
        title: "Plattform für Neu- und Gebrauchtfahrzeuge",
        description: "Top-Brands, führende Händler & Experten – für Wissen, Wachstum & wertvolle Verbindungen.",
        image: "/images/customers/recaro.jpg",
        eyebrowLabel: "Business Technology",
        buttonLabel: "Mehr erfahren",
        href: "/insights/plattform-3"
    }
]

/* ------------------------------------------------------------------ */
/*  Tab component                                                     */
/* ------------------------------------------------------------------ */

function TabBar({ tabs, active, onChange }: { tabs: string[]; active: string; onChange: (tab: string) => void }) {
    return (
        <div className="flex gap-8 border-b border-black/10">
            {tabs.map((tab) => (
                <button
                    key={tab}
                    onClick={() => onChange(tab)}
                    className={cn(
                        "font-gteratext text-small cursor-pointer pb-3 transition-colors",
                        active === tab ? "border-b-2 border-black text-black" : "text-black/40 hover:text-black/70"
                    )}
                >
                    {tab}
                </button>
            ))}
        </div>
    )
}

/* ------------------------------------------------------------------ */
/*  Page                                                              */
/* ------------------------------------------------------------------ */

export default function InsightsPage() {
    const [eventTab, setEventTab] = useState("Kommende Veranstaltungen")
    const [blogCategory, setBlogCategory] = useState("Alle")

    return (
        <div className="relative">
            <HeroGradientBackdrop />

            <div className="gap-vertical-inner relative z-10 flex flex-col">
                {/* Hero */}
                <ContentBlock>
                    <HeroNew
                        title="Insights"
                        eyebrows={["Webinare", "Insights", "AI:D Magazin"]}
                        description="Bleib auf dem Laufenden mit unseren Events, Blogbeiträgen und unserem Newsletter zu den Themen Software Engineering, Business Technology und Unternehmenskultur."
                    />
                </ContentBlock>

                {/* Events & Webinare */}
                <ContentBlock>
                    <section className="gap-grid-gutter flex flex-col">
                        <h2 className="font-gteradisplay text-d2 text-black">{`Events & Webinare`}</h2>

                        <TabBar
                            tabs={["Kommende Veranstaltungen", "Vergangene Veranstaltung"]}
                            active={eventTab}
                            onChange={setEventTab}
                        />

                        {/* Horizontal scroll */}
                        <div className="scrollbar-hide gap-grid-gutter flex snap-x snap-mandatory overflow-x-auto pb-4">
                            {events.map((event, i) => (
                                <div
                                    key={i}
                                    className="grid w-[min(100%,420px)] shrink-0 snap-start grid-cols-1 grid-rows-[repeat(5,auto)]"
                                >
                                    <EventCard {...event} />
                                </div>
                            ))}
                        </div>

                        {/* Pagination dots */}
                        <div className="flex justify-center gap-2">
                            {events.map((_, i) => (
                                <div
                                    key={i}
                                    className={cn("size-2.5 rounded-full", i === 0 ? "bg-black" : "bg-black/20")}
                                />
                            ))}
                        </div>
                    </section>
                </ContentBlock>

                {/* Featured articles row */}
                <ContentBlock>
                    <div className="gap-grid-gutter grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        {featuredArticles.map((article, i) => (
                            <StoryCard key={i} {...article} />
                        ))}
                    </div>
                </ContentBlock>

                {/* Blog section */}
                <ContentBlock>
                    <section className="gap-grid-gutter flex flex-col">
                        <h2 className="font-gteradisplay text-d2 text-black">Blog</h2>

                        <TabBar tabs={blogCategories} active={blogCategory} onChange={setBlogCategory} />

                        {/* Featured blog teaser */}
                        <ImageTeaser
                            image="/images/customers/porsche-cropped.jpg"
                            title="Handelsblatt Change Congress in Essen"
                            description="Top-Brands, führende Händler & Experten – für Wissen, Wachstum & wertvolle Verbindungen."
                            buttonLabel="Mehr erfahren"
                            buttonHref="/blog/handelsblatt-change-congress"
                            author={{
                                name: "by Hannah",
                                role: "Marketing & Organisation",
                                avatarUrl: "/images/culture/coding.webp"
                            }}
                        />

                        {/* Blog cards grid */}
                        <div className="gap-grid-gutter grid grid-cols-1 grid-rows-[repeat(6,auto)] md:grid-cols-2 md:grid-rows-[repeat(6,auto)] lg:grid-cols-3 lg:grid-rows-[repeat(6,auto)]">
                            {blogPosts.map((post, i) => (
                                <BlogCardNew key={i} {...post} />
                            ))}
                        </div>
                    </section>
                </ContentBlock>

                {/* Insights section */}
                <ContentBlock>
                    <section className="gap-grid-gutter flex flex-col">
                        <h2 className="font-gteradisplay text-d2 text-black">Insights</h2>
                        <div className="gap-grid-gutter grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                            {insightArticles.map((article, i) => (
                                <StoryCard key={i} {...article} />
                            ))}
                        </div>
                    </section>
                </ContentBlock>
            </div>
        </div>
    )
}
