import CaseStudyTemplate from "@/components/sections/CaseStudyTemplate"
import { getOtherStories } from "@/data/stories"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Porsche Finance Configurator",
    description:
        "Case Study: Digitale Finanzlösung für den Online-Fahrzeugvertrieb – nahtlose Integration in die Customer Journey mit über 300 % mehr qualifizierten Leads und messbarem Business Impact.",
    alternates: {
        canonical: "https://www.team-one.de/referenzen/finanzenkonfigurator"
    }
}

const highlights = [
    {
        title: "Aufgabe",
        description:
            "Strategische und technologische Weiterentwicklung einer digitalen Finanzlösung für Neu- und Gebrauchtfahrzeuge im Online-Vertrieb. Ziel war es, Finanzdienstleistungen nahtlos in die Customer Journey zu integrieren und qualifizierte Leads für Handel und Finanzpartner zu generieren.",
        image: "/pictograms/layers.svg"
    },
    {
        title: "Herausforderung",
        description:
            "Die bestehende Lösung war funktional fragmentiert und primär delivery-getrieben, ohne konsequente Produkt- und Nutzerperspektive. Gleichzeitig mussten internationale Rollouts, Systemintegration und Performance-Anforderungen berücksichtigt werden, um Finance-Touchpoints skalierbar einzubetten.",
        image: "/pictograms/star.svg"
    },
    {
        title: "Lösung",
        description:
            "Transformation hin zu einem produktorientierten, datengetriebenen Ansatz mit klarem Zusammenspiel aus Discovery und Delivery. Integration eines intuitiven Finanzkalkulators inklusive Lead-Übergabe an den Handel, eingebettet in eine skalierbare, cloudbasierte Architektur.",
        image: "/pictograms/pin.svg"
    },
    {
        title: "Erfolge",
        description:
            "Etablierung von Financial Services als strukturiert integrierter Bestandteil der digitalen Fahrzeugstrecke. Signifikante Steigerung von Interaktionen und qualifizierten Leads sowie nachhaltige Unterstützung der Monetarisierungsstrategie im digitalen Vertrieb.",
        image: "/pictograms/sun.svg"
    }
]

const relatedStories = getOtherStories("finanzenkonfigurator")

export default function FinanceConfiguratorCaseStudyPage() {
    return (
        <CaseStudyTemplate
            heroTitle="Finance Configurator"
            heroDescription="Im Rahmen einer internationalen B2B-Finance-Integration wurde eine digitale Finanzlösung für den Online-Fahrzeugvertrieb strategisch und technologisch weiterentwickelt und nahtlos in die Customer Journey integriert."
            heroImage="/images/finanzen.jpg"
            textSection="Die datengetriebene Produkttransformation führte zur Verdopplung der Interaktionen mit dem Financial Services Kalkulator sowie zu einem Anstieg qualifizierter Leads um über 300 % seit 2022. Das Ergebnis: signifikant gesteigerte Conversion-Raten, reduzierte Beratungsaufwände und messbarer Business Impact für Handel und Finanzdienstleister."
            highlights={highlights}
            highlightLayout="grid"
            relatedStories={relatedStories}
        />
    )
}
