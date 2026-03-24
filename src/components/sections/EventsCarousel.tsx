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

    const visibleEvents = activeTab === TABS[0] ? upcomingEvents : pastEvents

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

            {visibleEvents.length > 0 ? (
                <div className="scrollbar-hide gap-grid-gutter flex snap-x snap-mandatory overflow-x-auto pb-4">
                    {visibleEvents.map((event, i) => (
                        <div
                            key={i}
                            className="grid w-[min(100%,420px)] shrink-0 snap-start grid-cols-1 grid-rows-[repeat(3,auto)]"
                        >
                            <EventCard {...event} />
                        </div>
                    ))}
                </div>
            ) : (
                <p className="font-gteratext text-small py-12 text-black/40">Keine Veranstaltungen vorhanden.</p>
            )}
        </section>
    )
}
