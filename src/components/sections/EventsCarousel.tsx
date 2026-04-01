"use client"

import EventCard from "@/components/molecules/EventCard"
import cn from "@/utils/cn"
import { useState } from "react"

interface EventCardItem {
    title: string
    date: string
    client?: string
    category?: string
    image?: string
    location?: string
    description?: string
}

interface EventsCarouselProps {
    title: string
    upcomingEvents: EventCardItem[]
    pastEvents: EventCardItem[]
    className?: string
}

const TABS = ["Kommende Veranstaltungen", "Vergangene Veranstaltungen"] as const

export default function EventsCarousel({ title, upcomingEvents, pastEvents, className }: EventsCarouselProps) {
    const [activeTab, setActiveTab] = useState<string>(TABS[0])

    return (
        <section className={cn("gap-grid-gutter flex flex-col", className)}>
            <h2 className="font-gteradisplay text-d2 text-black">{title}</h2>

            <div className="flex gap-8 border-b border-black/10">
                {TABS.map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={cn(
                            "font-gteratext text-small cursor-pointer pb-3 transition-colors",
                            activeTab === tab
                                ? "border-b-2 border-black text-black"
                                : "text-black/40 hover:text-black/70"
                        )}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            <div className="grid">
                {[upcomingEvents, pastEvents].map((events, tabIndex) => (
                    <div
                        key={tabIndex}
                        className={cn("col-start-1 row-start-1", activeTab !== TABS[tabIndex] && "invisible")}
                    >
                        {events.length > 0 ? (
                            <div className="scrollbar-hide gap-grid-gutter flex snap-x snap-mandatory overflow-x-auto pb-4">
                                {events.map((event, i) => (
                                    <div
                                        key={i}
                                        className="grid w-[min(100%,420px)] shrink-0 snap-start grid-cols-1 grid-rows-[repeat(3,auto)]"
                                    >
                                        <EventCard {...event} />
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="flex flex-col items-center justify-center py-20 text-center">
                                <div className="mb-4 text-5xl text-black/10">📅</div>
                                <p className="font-gteradisplay text-h4 mb-2 text-black/30">Keine Veranstaltungen</p>
                                <p className="font-gteratext text-small max-w-80 text-black/30">
                                    {tabIndex === 0
                                        ? "Neue Termine werden in Kürze bekannt gegeben."
                                        : "Vergangene Veranstaltungen werden hier angezeigt, sobald Events stattgefunden haben."}
                                </p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    )
}
