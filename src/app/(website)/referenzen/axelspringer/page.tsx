import CaseStudyTemplate from "@/components/sections/CaseStudyTemplate"
import { getOtherStories } from "@/data/stories"

const highlights = [
    {
        title: "Aufgabe",
        description:
            "Strategische Beratung zur Entwicklung einer herstellerunabhängigen digitalen Plattform für Fahrzeugdienstleistungen. Ziel war der Aufbau eines belastbaren B2B-Business-Cases für ein neues digitales Produktportfolio sowie die Konzeption eines skalierbaren Angebotsmodells mit Service-Bundles und Flatrate-Angeboten. Ergänzend wurde eine integrierte Payment- und Billing-Architektur für abonnementbasierte Leistungsmodelle entwickelt und die Vorbereitung möglicher Finanzierungsmaßnahmen sowie der Investoren-Story unterstützt.",
        image: "/new/images/pictograms/layers.svg"
    },
    {
        title: "Herausforderung",
        description:
            "Die Konzeption erforderte die Entwicklung eines neuen Geschäftsmodells sowie eines Angebotskonstrukts, das mehrere Serviceanbieter und B2B-Accounts in einer Plattform bündelt. Die Aggregation verschiedener Anbieter in einem Multi-Merchant-Modell erhöhte die rechtliche und operative Komplexität, insbesondere im Hinblick auf Reseller-Strukturen und Vertragslogiken. Parallel mussten technologische Anforderungen berücksichtigt werden, da neben einer mobilen Plattform auch eine hardwarebasierte Lösung zur kameragestützten Fahrzeugerkennung integriert werden sollte.",
        image: "/new/images/pictograms/star.svg"
    },
    {
        title: "Lösung",
        description:
            "Entwicklung einer ganzheitlichen Plattformstrategie mit Fokus auf B2B-Wertschöpfung und skalierbare Serviceintegration. Aufbau eines modularen Angebotsmodells zur Aggregation verschiedener Dienstleister sowie Definition der Rollen- und Vertragsstrukturen innerhalb eines Multi-Merchant-Ökosystems. Ergänzend Konzeption einer skalierbaren Payment- und Billing-Struktur sowie Definition einer integrierten Produktarchitektur aus App-Plattform und Hardware-Komponente zur automatisierten Fahrzeugerkennung.",
        image: "/new/images/pictograms/pin.svg"
    },
    {
        title: "Erfolge",
        description:
            "Etablierung eines tragfähigen B2B-Geschäftsmodells für ein digitales Serviceportfolio im Automotive-Umfeld. Entwicklung eines skalierbaren Plattformkonzepts zur Bündelung mehrerer Dienstleister, zur Integration von Hardware- und Softwarelösungen sowie zur Abwicklung abonnementbasierter Serviceangebote. Ergebnis: eine strategische Grundlage für ein herstellerunabhängiges Ökosystem mit neuen Monetarisierungs- und Wachstumsperspektiven im digitalen Mobilitätsmarkt.",
        image: "/new/images/pictograms/sun.svg"
    }
]

const relatedStories = getOtherStories("b2b2cplattform")

export default function AxelSpringerCaseStudyPage() {
    return (
        <CaseStudyTemplate
            heroTitle="New Venture Plattformstrategie"
            heroDescription="Im Rahmen eines strategischen Plattformprojekts wurde für ein Spin-Off der Axel Springer Gruppe die Grundlage für ein herstellerunabhängiges digitales Ökosystem für Fahrzeugdienstleistungen entwickelt. Ziel war es, ein skalierbares B2B-Geschäftsmodell inklusive innovativer Service-Bundles und Flatrate-Angebote zu konzipieren sowie eine integrierte Payment- und Billing-Architektur für abonnementbasierte Leistungen aufzubauen."
            heroImage="/new/images/arrows.jpg"
            textSection="Die Plattformstrategie umfasste die Aggregation mehrerer Serviceanbieter in einem Multi-Merchant-Modell, die Definition von Reseller- und Vertragsstrukturen sowie die Konzeption einer Produktarchitektur aus mobiler App und IoT-Cloud. Ergänzend wurde die Investoren-Story für mögliche Finanzierungsrunden strategisch vorbereitet. Das Ergebnis: ein tragfähiges Plattformkonzept für ein herstellerunabhängiges Service-Ökosystem mit skalierbarer Monetarisierungslogik und neuen Wachstumsperspektiven im digitalen Mobilitätsmarkt."
            highlights={highlights}
            highlightLayout="grid"
            relatedStories={relatedStories}
        />
    )
}
