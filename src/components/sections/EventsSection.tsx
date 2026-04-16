import Button from "@/components/atoms/Button"
import Eyebrow from "@/components/atoms/Eyebrow"
import ScrollReveal from "@/components/atoms/ScrollReveal"
import EventCardHorizontal from "@/components/molecules/EventCardHorizontal"
import cn from "@/utils/cn"

interface EventItem {
    title: string
    description: string
    dateLocation: string
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
    buttonHref = "/veranstaltungen",
    events,
    className
}: EventsSectionProps) {
    return (
        <ScrollReveal
            stagger
            staggerColumns={0}
            staggerStep={0.15}
            as="section"
            className={cn("gap-grid-gutter flex flex-col lg:flex-row", className)}
        >
            {/* Left: intro text */}
            <div className="gap-lg flex w-full shrink-0 flex-col lg:w-77">
                <Eyebrow label={eyebrowLabel} />
                <div className="gap-sm flex flex-col">
                    <h2 className="font-gteradisplay text-d2 text-black">{title}</h2>
                    <p className="text-small text-black-soft">{description}</p>
                </div>
                <Button label={buttonLabel} variant="primary" href={buttonHref} />
            </div>

            {/* Right: event cards */}
            <div className="gap-grid-gutter flex flex-1 flex-col">
                {events.map((event) => (
                    <EventCardHorizontal key={event.title} {...event} />
                ))}
            </div>
        </ScrollReveal>
    )
}
