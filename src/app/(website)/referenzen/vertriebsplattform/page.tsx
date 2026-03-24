import CaseStudyTemplate from "@/components/sections/CaseStudyTemplate"
import { getOtherStories } from "@/data/stories"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Porsche Vertriebsplattform",
    description:
        "Internationale Online-Plattform für den digitalen Vertrieb von Neu- und Gebrauchtfahrzeugen – global skalierbar mit lokaler Händleranbindung."
}

const highlights = [
    {
        title: "Aufgabe",
        description:
            "Aufbau und Weiterentwicklung einer global einsetzbaren Online-Plattform für den digitalen Vertrieb von Neu- und Gebrauchtfahrzeugen. Ziel war es, internationale Fahrzeugbestände zentral zugänglich zu machen und die Customer Journey von der Suche bis zur Händlerinteraktion digital abzubilden.",
        image: "/pictograms/layers.svg"
    },
    {
        title: "Herausforderung",
        description:
            "Die Plattform musste globale Skalierbarkeit mit lokaler Händlerlogik verbinden und gleichzeitig höchste Anforderungen an Marken-Experience und Performance erfüllen. Zusätzlich galt es, Finanzprodukte und Conversion-Touchpoints strukturiert in die Fahrzeugstrecke zu integrieren.",
        image: "/pictograms/star.svg"
    },
    {
        title: "Lösung",
        description:
            "Entwicklung einer modellbasierten, filterstarken Suchplattform mit strukturierter Listenansicht und detaillierter Fahrzeugdarstellung. Integration von Reservation, Händlerkontakt und Finance-Funktionen in eine konsistente, international ausrollbare Customer Journey.",
        image: "/pictograms/pin.svg"
    },
    {
        title: "Erfolge",
        description:
            "Etablierung eines zentralen digitalen Vertriebskanals für Neu- und Gebrauchtfahrzeuge mit direkter Händleranbindung. Schaffung einer skalierbaren Plattformarchitektur, die kontinuierliche Weiterentwicklung, Markterweiterungen und die Integration zusätzlicher Services ermöglicht.",
        image: "/pictograms/sun.svg"
    }
]

const relatedStories = getOtherStories("vertriebsplattform")

export default function PorscheCaseStudyPage() {
    return (
        <CaseStudyTemplate
            heroTitle="Internationale Verkaufs-Plattform für Neu- und Gebrauchtfahrzeuge"
            heroDescription="Für den weltweiten digitalen Vertrieb von Neu- und Gebrauchtfahrzeugen wurde eine zentrale Online-Plattform aufgebaut, die Fahrzeugbestände internationaler Porsche Zentren bündelt und strukturiert zugänglich macht.\nDie Plattform ermöglicht einen modellbasierten Einstieg und führt Nutzer:innen über eine leistungsstarke Such- und Filterlogik zu passenden Fahrzeugangeboten."
            heroImage="/images/porsche-white.jpg"
            textSection="Für den weltweiten digitalen Vertrieb von Neu- und Gebrauchtfahrzeugen wurde eine zentrale Online-Plattform aufgebaut, die Fahrzeugbestände internationaler Porsche Zentren bündelt und strukturiert zugänglich macht. Die Plattform ermöglicht einen modellbasierten Einstieg und führt Nutzer:innen über eine leistungsstarke Such- und Filterlogik zu passenden Fahrzeugangeboten. Neben klassischen Kriterien wie Modell, Ausstattung, Laufleistung oder Preis werden auch Aktions- und Finanzprodukte integriert dargestellt.
Die Plattform verbindet globale Fahrzeugverfügbarkeit mit lokaler Händleranbindung und stellt dabei eine konsistente Premium-User-Experience sicher. Sie ist skalierbar konzipiert und unterstützt internationale Rollouts sowie kontinuierliche funktionale Weiterentwicklung. Damit fungiert sie als digitaler Vertriebskanal und strategischer Touchpoint innerhalb der Automotive-Commerce-Strategie."
            highlights={highlights}
            highlightLayout="grid"
            relatedStories={relatedStories}
        />
    )
}
