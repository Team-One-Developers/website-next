import CaseStudyTemplate from "@/components/sections/CaseStudyTemplate"
import { getOtherStories } from "@/data/stories"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "AI Customer Service",
    description:
        "KI-gestütztes Automatisierungssystem für den Customer Service – datenbasiertes Reporting, intelligentes Routing und automatische Kategorisierung."
}

const highlights = [
    {
        title: "Aufgabe",
        description:
            "Aufbau eines KI-gestützten Automatisierungssystems für den Customer Service eines großen Handelsunternehmens. Ziel war es, ein datenbasiertes Operations-Reporting zu etablieren, die wichtigsten Kennzahlen wie Anliegenart, Volumen und Bearbeitungszeiten in einer selbstentwickelten Software zu erfassen und auf dieser Grundlage schrittweise die Automatisierung von Service-Center-Anfragen voranzutreiben.",
        image: "/pictograms/layers.svg"
    },
    {
        title: "Herausforderung",
        description:
            "Der hohe Qualitätsanspruch an die Antworten erforderte ein System, welches intelligent automatisiert und damit volle Kontrolle über den Automatisierungsgrad ermöglicht. Gleichzeitig mussten die KI-Modelle flexibel genug sein, um auf veränderte Anfragelagen reagieren zu können, ohne fehlerhafte Vorhersagen zu liefern. Zudem galt es, bestehende Knowledge-Prozesse so zu konzipieren, dass nicht nur Content generiert und gemapped wird sondern auch Reasoning-Steps dokumentiert und nachvollziehbar gemacht werden.",
        image: "/pictograms/star.svg"
    },
    {
        title: "Lösung",
        description:
            "Entwicklung von drei aufeinander aufbauenden KI-Komponenten: Anonymisierung zur datenschutzkonformen Datenverarbeitung, intelligentes Routing zur teamgenauen Zuordnung von Anliegen und automatische Kategorisierung für eine Echtzeit-Übersicht im Service-Center. Flankiert durch ein Use-Case-Landscaping, Readiness-Assessments und ein abteilungsspezifisches Enablement-Programm mit Workshops und Hackathons.",
        image: "/pictograms/pin.svg"
    },
    {
        title: "Erfolge",
        description:
            "Reduktion der Fehlzuordnungen im Routing um über 80 %. Freigabe der Ressourcen zur Automatisierung von 20 % mehr Anliegen bei gleichbleibend hoher Antwortqualität. Etablierung eines durchgängigen Quality-Assurance-Prozesses, der stichprobenartige manuelle Prüfung und kontinuierliches Modell-Monitoring ermöglicht.",
        image: "/pictograms/sun.svg"
    }
]

const relatedStories = getOtherStories("aiCustomerService")

export default function AiCustomerServiceCaseStudyPage() {
    return (
        <CaseStudyTemplate
            heroTitle="AI-based Customer Service Reporting"
            heroDescription="Aufbau eines KI-gestützten Automatisierungssystems für den Customer Service eines großen Handelsunternehmens. Ziel war es, ein datenbasiertes Operations-Reporting zu etablieren, die wichtigsten Kennzahlen wie Anliegenart, Volumen und Bearbeitungszeiten in einer selbstentwickelten Software zu erfassen und auf dieser Grundlage schrittweise die Automatisierung von Service-Center-Anfragen voranzutreiben."
            heroImage="/images/dm-store.jpg"
            highlights={highlights}
            highlightLayout="grid"
            relatedStories={relatedStories}
        />
    )
}
