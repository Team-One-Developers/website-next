import Button from "@/components/atoms/Button"
import ScrollReveal from "@/components/atoms/ScrollReveal"
import cn from "@/utils/cn"
import Image from "next/image"
import { ViewTransition } from "react"

interface ServiceItem {
    title: string
    description: string
    pictogramUrl?: string
    buttonLabel?: string
    href?: string
}

interface ServicesCTACard {
    title: string
    description: string
    buttonLabel: string
    href: string
}

interface ServicesGridProps {
    services: ServiceItem[]
    cta?: ServicesCTACard
    className?: string
    animate?: boolean
}

function ServiceCard({ title, description, pictogramUrl, buttonLabel = "Mehr erfahren", href }: ServiceItem) {
    return (
        <div className="gap-lg row-span-4 grid grid-rows-subgrid">
            {/* Pictogram */}
            <div className="h-25 w-20">
                {pictogramUrl && (
                    <Image
                        src={pictogramUrl}
                        alt={title}
                        width={80}
                        height={100}
                        className="h-full w-full object-contain"
                    />
                )}
            </div>

            {/* Title */}
            <ViewTransition name={href ? `service-title-${href.split("/").pop()}` : undefined} share="morph">
                <h3 className="font-gteradisplay text-h2 max-w-115 self-start text-black">{title}</h3>
            </ViewTransition>

            {/* Description */}
            <p className="text-small text-black-soft max-w-115">{description}</p>

            {/* Button */}
            <Button label={buttonLabel} variant="primary" href={href} className="self-start" hrefForward />
        </div>
    )
}

function CTACard({ title, description, buttonLabel, href }: ServicesCTACard) {
    return (
        <div className="gap-lg bg-primary-soft px-padding-xl py-padding-xl row-span-4 grid grid-rows-subgrid self-end rounded-xl">
            {/* Empty spacer for pictogram row */}
            <div />

            {/* Title */}
            <h3 className="font-gteradisplay text-h2 max-w-115 self-start text-black">{title}</h3>

            {/* Description */}
            <p className="text-small max-w-115 text-black">{description}</p>

            {/* Button */}
            <Button label={`${buttonLabel} →`} variant="outline" href={href} className="self-start" />
        </div>
    )
}

export default function ServicesGrid({ services, cta, className, animate }: ServicesGridProps) {
    // First row: first 3 services
    const topRow = services.slice(0, 3)
    // Second row: remaining services + CTA card
    const bottomRow = services.slice(3)

    return (
        <section className={cn("gap-vertical-inner flex flex-col", className)}>
            {/* Top row */}
            <ScrollReveal
                stagger
                variant="shift"
                staggerStep={0.15}
                staggerColumns={3}
                animate={animate}
                className="gap-grid-gutter grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-[auto_auto_auto_auto]"
            >
                {topRow.map((service) => (
                    <ServiceCard key={service.title} {...service} />
                ))}
            </ScrollReveal>

            {/* Bottom row */}
            <ScrollReveal
                stagger
                variant="shift"
                staggerStep={0.15}
                staggerColumns={3}
                animate={animate}
                className="gap-grid-gutter grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-[auto_auto_auto_auto]"
            >
                {bottomRow.map((service) => (
                    <ServiceCard key={service.title} {...service} />
                ))}
                {cta && <CTACard {...cta} />}
                {/* Empty spacer to fill the 3rd column */}
                {bottomRow.length + (cta ? 1 : 0) < 3 && <div className="hidden lg:block" />}
            </ScrollReveal>
        </section>
    )
}
