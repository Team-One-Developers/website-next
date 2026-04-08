import Button from "@/components/atoms/Button"
import AuthorInfo from "@/components/molecules/AuthorInfo"
import cn from "@/utils/cn"
import Image from "next/image"

const imageTeaserVariants = {
    werte: {
        title: "Unsere Werte sind unser Kompass.",
        description:
            "Nachhaltigkeit, Transparenz und partnerschaftliche Zusammenarbeit – das sind die Grundpfeiler unserer Arbeit.",
        buttonLabel: "Mehr über uns",
        buttonHref: "/unternehmen",
        image: "/images/teaser-1.jpg"
    },
    leistungen: {
        title: "Wir steigern die Wettbewerbsfähigkeit von Unternehmen in einer digitalen Welt.",
        description:
            "Von Enterprise Software Engineering über Operational AI Implementierung bis hin zur Strategieberatung - wir sind ein spezialisiertes Tech-Powerhouse für komplexe und nachhaltige Technologie- und Geschäftstransformation.",
        buttonLabel: "Unsere Leistungen",
        buttonHref: "/leistungen",
        image: "/images/kaprun.jpg"
    },
    office: {
        image: "/images/office-interior.jpg",
        alt: "Team One Office",
        showOverlay: false
    },
    karriere: {
        title: "Werde Teil unseres Teams",
        description:
            "Du brennst für Software, AI und Innovationen? Team One bietet einen attraktiven Playground für ambitionierte Tech-Minds - im Bereich Softwareengineering, AI-Engineering, Strategieberatung oder im Bereich Fahrzeugarchitektur.",
        buttonLabel: "Karriere",
        buttonVariant: "primary" as const,
        buttonHref: "/karriere",
        image: "/images/team-collaboration.jpg"
    },
    team: {
        title: "Unser Team - Dein Playground",
        description:
            "Wir verstehen uns nicht einfach nur als Arbeitgeber, sondern viel mehr als aktiver Begleiter auf dem Weg zu deinen individuellen Zielen. Unser Anspruch ist es, den Menschen in den Mittelpunkt unseres unternehmerischen Handelns zu stellen – und dabei fangen wir bei uns im Team an.",
        image: "/images/team-collaboration.jpg"
    },
    einblicke: {
        title: "Impulse für die Zukunft digitaler Wertschöpfung",
        description:
            "Fundiertes Denken, praktische Erfahrung und echte Marktnähe: Wir teilen Einblicke in aktuelle Entwicklungen rund um digitale Transformation, KI, Plattformökonomie und moderne Softwarearchitekturen – immer mit dem Anspruch, konkrete Mehrwerte für Unternehmen zu schaffen.",
        buttonLabel: "Einblicke",
        buttonVariant: "light" as const,
        image: "/images/paul-k5.png"
    },
    insights: {
        image: "/images/customers/porsche-cropped.jpg",
        title: "Handelsblatt Change Congress in Essen",
        description: "Top-Brands, führende Händler & Experten – für Wissen, Wachstum & wertvolle Verbindungen.",
        buttonLabel: "Mehr erfahren",
        buttonHref: "/blog/handelsblatt-change-congress",
        author: {
            name: "by Hannah",
            role: "Marketing & Organisation",
            avatarUrl: "/images/culture/coding.webp"
        }
    },
    inframotive: {
        title: "Next Generation Vehicle Infrastructure",
        description:
            "Die Team One Inframotive GmbH ist integraler Bestandteil der Team One Gruppe und steht für den Aufbau technologischer Basisinfrastruktur moderner Automotive Plattformen. \nWir schaffen fundamentale skalierfähige Systemarchitekturen als Basisframework für Diagnose, Update und Security als zentraler Enabler für Entwicklung, Produktion und Kundendienst.",
        buttonLabel: "Mehr erfahren",
        buttonHref: "/leistungen/car-it-technologies",
        image: "/images/inframotive.jpg"
    },
    strategie: {
        title: "Strategie trifft Umsetzung",
        description:
            "Unsere Expertenteams führen Unternehmen aus Industrie und Mittelstand sicher durch komplexe technische Veränderungsprozesse. Strategische Vision trifft pragmatische Umsetzung – für nachhaltige, messbare Transformationserfolge.",
        image: "/images/streets.jpg"
    },
    software: {
        title: "Cloud-Native Software Engineering",
        description:
            "Mit unserer jahrelangen Expertise im Aufbau und in der Weiterentwicklung moderner Enterprise Web-Architekturen beraten wir unsere Kunden mit Fokus auf modernste Technologie- & Architekturstandards.",
        buttonLabel: "Mehr erfahren",
        buttonHref: "/leistungen/software-engineering",
        image: "/images/keyboard.jpg"
    }
} satisfies Record<string, Partial<ImageTeaserProps>>

type ImageTeaserVariant = keyof typeof imageTeaserVariants

interface ImageTeaserProps {
    variant?: ImageTeaserVariant
    title?: string
    description?: string
    buttonLabel?: string
    buttonHref?: string
    buttonVariant?: "primary" | "outline" | "light"
    image?: string
    alt?: string
    author?: {
        name: string
        role: string
        avatarUrl: string
    }
    showOverlay?: boolean
    priority?: boolean
    className?: string
}

export default function ImageTeaser(props: ImageTeaserProps) {
    const variantDefaults = props.variant ? imageTeaserVariants[props.variant] : {}
    const {
        title,
        description,
        buttonLabel,
        buttonHref,
        buttonVariant = "primary",
        image,
        alt,
        author,
        showOverlay = true,
        priority = false,
        className
    } = { ...variantDefaults, ...props }

    if (!image) return null

    const hasOverlay = showOverlay && title && description

    return (
        <section className={cn("w-full", className)}>
            {/* Desktop: overlay on image */}
            <div className="relative hidden aspect-1728/900 w-full items-end overflow-hidden rounded-lg p-[8px] md:flex">
                <Image src={image} alt={alt ?? title ?? ""} fill className="object-cover" priority={priority} />
                {hasOverlay && (
                    <div className="gap-padding-lg bg-background-soft px-padding-xl py-grid-gutter relative flex w-full max-w-[579px] flex-col rounded-lg backdrop-blur-lg">
                        <h3 className="font-gteradisplay text-h3 text-white">{title}</h3>
                        <p className="text-small text-white-soft whitespace-pre-line">{description}</p>
                        {buttonLabel && <Button label={buttonLabel} variant={buttonVariant} href={buttonHref} />}
                        {author && (
                            <AuthorInfo
                                name={author.name}
                                role={author.role}
                                avatarUrl={author.avatarUrl}
                                variant="light"
                            />
                        )}
                    </div>
                )}
            </div>

            {/* Mobile: image + text stacked */}
            <div className="flex flex-col overflow-hidden rounded-lg md:hidden">
                <div className="relative aspect-4/3 w-full">
                    <Image src={image} alt={alt ?? title ?? ""} fill className="object-cover" priority={priority} />
                </div>
                {hasOverlay && (
                    <div className="gap-padding-lg bg-background-soft px-padding-xl py-grid-gutter flex flex-col">
                        <h3 className="font-gteradisplay text-h3 text-white">{title}</h3>
                        <p className="text-small text-white-soft whitespace-pre-line">{description}</p>
                        {buttonLabel && <Button label={buttonLabel} variant={buttonVariant} href={buttonHref} />}
                        {author && (
                            <AuthorInfo
                                name={author.name}
                                role={author.role}
                                avatarUrl={author.avatarUrl}
                                variant="light"
                            />
                        )}
                    </div>
                )}
            </div>
        </section>
    )
}
