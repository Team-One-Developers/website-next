import type { SuccessStory } from "@/components/sections/SuccessStoriesGrid"

interface StoryData extends SuccessStory {
    featured?: {
        logoUrl: string
        logoAlt: string
        logoWidth: number
        logoHeight: number
        featuredTitle: string
        featuredDescription: string
        backgroundImage: string
    }
}

export const stories = {
    vertriebsplattform: {
        title: "Internationale Verkaufs-Plattform für Neu- und Gebrauchtfahrzeuge",
        description:
            "Für den weltweiten digitalen Vertrieb von Neu- und Gebrauchtfahrzeugen wurde eine zentrale Online-Plattform aufgebaut, die Fahrzeugbestände internationaler Porsche Zentren bündelt und strukturiert zugänglich macht.\nDie Plattform ermöglicht einen modellbasierten Einstieg und führt Nutzer:innen über eine leistungsstarke Such- und Filterlogik zu passenden Fahrzeugangeboten.",
        image: "/images/porsche-white.jpg",
        eyebrowLabel: "Software Engineering",
        buttonLabel: "Kundenreferenz",
        href: "/referenzen/vertriebsplattform",
        greenFilter: false,
        featured: {
            logoUrl: "/images/customers/porscheLogo.svg",
            logoAlt: "Porsche",
            logoWidth: 116,
            logoHeight: 43,
            featuredTitle: "Internationale Verkaufs-Plattform für Neu- und Gebrauchtfahrzeuge",
            featuredDescription:
                "Für den weltweiten digitalen Vertrieb von Neu- und Gebrauchtfahrzeugen wurde eine zentrale Online-Plattform aufgebaut, die Fahrzeugbestände internationaler Porsche Zentren bündelt und strukturiert zugänglich macht.\nDie Plattform ermöglicht einen modellbasierten Einstieg und führt Nutzer:innen über eine leistungsstarke Such- und Filterlogik zu passenden Fahrzeugangeboten.",
            backgroundImage: "/images/porsche-white.jpg"
        }
    },
    finanzenkonfigurator: {
        title: "Finance Calculator",
        description:
            "Im Rahmen einer internationalen B2B-Finance-Integration wurde eine digitale Finanzlösung für den Online-Fahrzeugvertrieb strategisch und technologisch weiterentwickelt und nahtlos in die Customer Journey integriert. Das Ergebnis: signifikant gesteigerte Conversion-Raten, reduzierte Beratungsaufwände und messbarer Business Impact für Handel und Finanzdienstleister.",
        image: "/images/finance.jpg",
        eyebrowLabel: "Software Engineering",
        buttonLabel: "Kundenreferenz",
        href: "/referenzen/finanzenkonfigurator",
        greenFilter: false
    },
    aiCustomerService: {
        title: "AI Customer Service Reporting Tool",
        description:
            "Im Rahmen einer KI-gestützten Transformation des Customer Service wurde für ein großes Handelsunternehmen ein datengetriebenes Operations-Reporting entwickelt und eine intelligente Automatisierungsarchitektur aufgebaut. Die Lösung kombiniert datenschutzkonforme Anonymisierung, KI-basiertes Routing sowie automatische Anliegenkategorisierung und ermöglicht damit eine präzise Analyse von Servicevolumen, Anliegenarten und Bearbeitungszeiten in einer eigens entwickelten Plattform.",
        image: "/images/dm-store.jpg",
        eyebrowLabel: "Operational AI",
        buttonLabel: "Kundenreferenz",
        href: "/referenzen/ki-kundenservice",
        greenFilter: false
    },
    b2b2cplattform: {
        title: "New Venture Plattformstrategie",
        description:
            "Im Rahmen eines strategischen Plattformprojekts wurde für ein Spin-Off der Axel Springer Gruppe die Grundlage für ein herstellerunabhängiges digitales Ökosystem für Fahrzeugdienstleistungen entwickelt. Ziel war es, ein skalierbares B2B-Geschäftsmodell inklusive innovativer Service-Bundles und Flatrate-Angebote zu konzipieren sowie eine integrierte Payment- und Billing-Architektur für abonnementbasierte Leistungen aufzubauen.",
        image: "/images/arrows.jpg",
        eyebrowLabel: "Strategy",
        buttonLabel: "Kundenreferenz",
        href: "/referenzen/axelspringer",
        greenFilter: false
    }
} as const satisfies Record<string, StoryData>

export type StoryKey = keyof typeof stories

export const storyList = Object.values(stories)

export function getOtherStories(currentKey: StoryKey, count = 3): StoryData[] {
    return storyList.filter((s) => s !== stories[currentKey]).slice(0, count)
}
