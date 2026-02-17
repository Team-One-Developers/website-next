import ButtonNew from "@/components/atoms/ButtonNew"
import cn from "@/utils/cn"
import Image from "next/image"

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
}

function ServiceCard({ title, description, pictogramUrl, buttonLabel = "Mehr erfahren", href }: ServiceItem) {
    return (
        <div className="gap-lg flex flex-col">
            {/* Pictogram */}
            {pictogramUrl && (
                <div className="h-25 w-20">
                    <Image src={pictogramUrl} alt="" width={80} height={100} className="h-full w-full object-contain" />
                </div>
            )}

            {/* Text block */}
            <div className="gap-xs flex flex-col">
                <h3 className="font-gteradisplay text-h2 max-w-115 text-black">{title}</h3>
                <p className="text-small text-black-soft max-w-115">{description}</p>
            </div>

            <ButtonNew label={buttonLabel} variant="primary" href={href} className="mt-auto self-start" />
        </div>
    )
}

function CTACard({ title, description, buttonLabel, href }: ServicesCTACard) {
    return (
        <div className="gap-lg bg-primary-soft py-padding-xl flex flex-1 flex-col justify-end rounded-lg px-12">
            <div className="gap-xs flex flex-col text-black">
                <h3 className="font-gteradisplay text-h3">{title}</h3>
                <p className="text-small">{description}</p>
            </div>
            <ButtonNew label={buttonLabel} variant="outline" href={href} />
        </div>
    )
}

export default function ServicesGrid({ services, cta, className }: ServicesGridProps) {
    // First row: first 3 services
    const topRow = services.slice(0, 3)
    // Second row: remaining services + CTA card
    const bottomRow = services.slice(3)

    return (
        <section className={cn("gap-vertical-inner flex flex-col", className)}>
            {/* Top row */}
            <div className="gap-grid-gutter grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {topRow.map((service) => (
                    <ServiceCard key={service.title} {...service} />
                ))}
            </div>

            {/* Bottom row */}
            <div className="gap-grid-gutter grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {bottomRow.map((service) => (
                    <ServiceCard key={service.title} {...service} />
                ))}
                {cta && <CTACard {...cta} />}
                {/* Empty spacer to fill the 3rd column */}
                {bottomRow.length + (cta ? 1 : 0) < 3 && <div className="hidden lg:block" />}
            </div>
        </section>
    )
}
