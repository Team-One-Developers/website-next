import ServicesGrid from "@/components/sections/ServicesGrid"

const services = [
    {
        title: "Software Engineering",
        description:
            "Wir verwandeln komplexe Anforderungen in performante Softwarelösungen, die nachhaltiges Wachstum ermöglichen. Wir verstehen Software als das Rückgrat moderner Wertschöpfung in zukunftsfähigen Organisationen.",
        pictogramUrl: "/pictograms/layers.svg",
        buttonLabel: "Mehr erfahren",
        href: "/leistungen/software-engineering"
    },
    {
        title: "Operational AI",
        description:
            "Wir sind spezialisierter Beratungs- und Entwicklungspartner im Bereich Data & AI – vom Prototyp über den ersten MVP bis hin zur LLM Plattform.",
        pictogramUrl: "/pictograms/star.svg",
        buttonLabel: "Mehr erfahren",
        href: "/leistungen/operational-ai"
    },
    {
        title: "Car-IT Technologies",
        description:
            "Team One Inframotive entwickelt die grundlegende Fahrzeug-Infrastruktur für Software-Defined Vehicles – von E/E-Architektur über Diagnose und Security bis hin zu Over-the-Air Updates.",
        pictogramUrl: "/pictograms/verwinkelt.svg",
        buttonLabel: "Mehr erfahren",
        href: "/leistungen/car-it-technologies"
    },
    {
        title: "Strategy Consulting",
        description:
            "Verbinden Sie mit uns Strategie, Technologie und Geschäfts-Innovationen – für eine Organisation, die morgen stärker ist als heute.",
        pictogramUrl: "/pictograms/sun.svg",
        buttonLabel: "Mehr erfahren",
        href: "/leistungen/strategie-beratung"
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
