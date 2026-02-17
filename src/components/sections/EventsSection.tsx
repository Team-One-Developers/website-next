import ButtonNew from "@/components/atoms/ButtonNew"
import Eyebrow from "@/components/atoms/Eyebrow"
import EventCard from "@/components/molecules/EventCard"
import cn from "@/utils/cn"

interface EventItem {
    title: string
    description: string
    date: string
    speakerName: string
    speakerRole: string
    speakerImage: string
    speakerBadge?: string
    href?: string
}

interface EventsSectionProps {
    eyebrowLabel: string
    title: string
    description: string
    buttonLabel?: string
    buttonHref?: string
    events: EventItem[]
    className?: string
}

export default function EventsSection({
    eyebrowLabel,
    title,
    description,
    buttonLabel = "Alle Events",
    buttonHref = "/events",
    events,
    className
}: EventsSectionProps) {
    return (
        <section className={cn("gap-grid-gutter flex flex-col lg:flex-row", className)}>
            {/* Left: intro text */}
            <div className="gap-lg flex w-full shrink-0 flex-col lg:w-[437px]">
                <Eyebrow label={eyebrowLabel} />
                <div className="gap-sm flex flex-col">
                    <h2 className="font-gteradisplay text-d2 text-black">{title}</h2>
                    <p className="text-small text-black-soft">{description}</p>
                </div>
                <ButtonNew label={buttonLabel} variant="primary" href={buttonHref} />
            </div>

            {/* Right: event cards */}
            <div className="gap-grid-gutter flex flex-1 flex-col">
                {events.map((event) => (
                    <EventCard key={event.title} {...event} />
                ))}
            </div>
        </section>
    )
}
