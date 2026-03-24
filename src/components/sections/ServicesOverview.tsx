import ServicesGrid from "@/components/sections/ServicesGrid"

const services = [
    {
        title: "Software Engineering",
        description:
            "Wir verwandeln komplexe Anforderungen in performante Softwarelösungen, die nachhaltiges Wachstum ermöglichen. Wir verstehen Software als das Rückgrat moderner Wertschöpfung in zukunftsfähigen Organisationen.",
        pictogramUrl: "/new/images/pictograms/layers.svg",
        buttonLabel: "Mehr erfahren",
        href: "/leistungen/software-engineering"
    },
    {
        title: "Operational AI",
        description:
            "Wir sind spezialisierter Beratungs- und Entwicklungspartner im Bereich Data & AI – vom Prototyp über den ersten MVP bis hin zur LLM Plattform.",
        pictogramUrl: "/new/images/pictograms/star.svg",
        buttonLabel: "Mehr erfahren",
        href: "/leistungen/operational-ai"
    },
    {
        title: "Strategy Consulting",
        description:
            "Verbinden Sie mit uns Strategie, Technologie und Geschäfts-Innovatoinen – für eine Organisation, die morgen stärker ist als heute.",
        pictogramUrl: "/new/images/pictograms/sun.svg",
        buttonLabel: "Mehr erfahren",
        href: "/leistungen/strategie-beratung"
    },
    {
        title: "Car-IT Technologies",
        description:
            "Team One Inframotive entwickelt geschäftskritische Infrastruktur-Frameworks für die nächste Generation automobiler Plattformen.",
        pictogramUrl: "/new/images/pictograms/verwinkelt.svg",
        buttonLabel: "Mehr erfahren",
        href: "/leistungen/car-it-technologies"
    }
]

const cta = {
    title: "Mehr zu unseren Leistungen",
    description: "Wir starten dort, wo es am meisten bewegt – nachhaltig, strategisch und mit klarem Umsetzungsfokus.",
    buttonLabel: "Alle Leistungen",
    href: "/leistungen"
}

interface ServicesOverviewProps {
    showCta?: boolean
}

export default function ServicesOverview({ showCta = true }: ServicesOverviewProps) {
    return <ServicesGrid services={services} cta={showCta ? cta : undefined} />
}
