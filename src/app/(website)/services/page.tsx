import Customers from "@/components/sections/Customers"
import Hero from "@/components/sections/Hero/Hero"
import ServiceInfo from "@/components/sections/ServiceInfo"
import TripleImageColumn from "@/components/sections/TripleImageColumn"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Leistungen",
    description:
        "Wir kombinieren umfassendes Fachwissen mit der Begeisterung für neue Technologien, um innovative, hochmoderne, stabile und skalierbare Enterprise Plattformen zu entwickeln."
}

export default function Services() {
    return (
        <div>
            <Hero
                subtitle="Unsere Leistungen"
                title="VON DER VISION BIS ZUR UM&shy;SETZ&shy;UNG."
                description="Wir schaffen nachhaltige Mehrwerte durch exzellente Software & menschenzentrierte Arbeitsweisen."
                blobs={{ active: true, className: "from-[#21352b] to-[#46ffad] opacity-50", shape: "organic" }}
            />

            <ServiceInfo
                title="ENTER&shy;PRISE SOFT&shy;WARE ENGI&shy;NEERING"
                description="Als Software-Beratung befähigen wir unsere Kunden, im digitalen Wettbewerb erfolgreich zu sein: 
                        Strategisch, technologisch und methodisch. Unser Ziel ist es, Unternehmen dabei zu unterstützen,
                        die Chancen und Herausforderungen neuer Technologien zu nutzen und ihre Geschäftsmodelle
                        zukunftssicher zu machen. Von der strategischen Planung bis zur technologischen Umsetzung."
                // image="/images/culture/coding.webp"
                alt="Enterprise Software Engineering"
                textBlocks={[
                    {
                        title: "WEB-FRONTENDS, DIE SKALIEREN.",
                        description:
                            "Wir entwickeln performante Web-Anwendungen mit React und JavaScript - seit Version 0.13.1. Unser Fokus: saubere Architekturen, gutes UX-Verständnis, agile Umsetzung. Ideal für komplexe Enterprise-Setups."
                    },
                    {
                        title: "BACKEND-PLATTFORMEN, DIE WACHSEN.",
                        description:
                            " Wir bauen skalierbare Backend-Systeme für datengetriebene Produkte – mit Fokus auf Performance, Security und Automatisierung. Ideal für komplexe Geschäftsprozesse und dynamische Plattformanforderungen."
                    }
                ]}
                // link={{
                //     href: "/services/software-engineering",
                //     label: "Mehr erfahren"
                // }}
            />

            <ServiceInfo
                title="OPE&shy;RATIONAL AI & DATA ANA&shy;LYTICS"
                description="Vom Aufbau interner Kompetenzen bis zur Entwicklung produktionsreifer Systeme. Unsere Leistungen decken das gesamte Spektrum ab: von klassischen Ansätzen bis hin zu Gen AI-Anwendungen mit integriertem Governance-Modell."
                // image="/images/culture/coffetalk.webp"
                alt="Enterprise AI & DATA"
                textBlocks={[
                    {
                        title: "KI, DIE WIRKT.",
                        description:
                            "LÖSUNGEN, DIE PASSEN. Wir identifizieren konkrete Potenziale, validieren Use Cases und entwickeln KI-Lösungen, die echten Mehrwert liefern - von automatisierten Prozessen bis zu datengetriebenen Entscheidungen. End-to-End, mit Fokus auf Wirkung statt Hype."
                    },
                    {
                        title: "VON DER KI-SCHULUNG BIS ZUR KI-STRATEGIE",
                        description:
                            "Ob Digitalstrategie, Portfolio-Governance oder Product Coaching: Wir verbinden Analyse, Strategiearbeit und Schulung zu einem klaren Ziel - Selbstwirksamkeit in einer dynamischen Welt."
                    }
                ]}
                // link={{
                //     href: "/services/ai-data-analytics",
                //     label: "Mehr erfahren"
                // }}
            />

            <ServiceInfo
                title="BUSINESS & DIGITAL-STRA&shy;TEGIE & TRANS&shy;FOR&shy;MATION"
                description="Wir machen Organisationen handlungsfähig für digitale Produkte – strategisch, technologisch und operativ. Von der Reifegradanalyse bis zum produktbasierten Operating Model oder Produktstrategie."
                // image="/images/culture/officelife.webp"
                alt="Enterprise Strategy & Transformation"
                textBlocks={[
                    {
                        title: "BUSINESS & PRODUCT STRATEGY",
                        description:
                            "Von der digitalen Geschäfts- und Geschäftsfeldstrategie, über die Produktstrategie bis hin zur UX-Strategie beraten wir branchenübergreifend mit unseren Strategie-Experten Startups von Early stage bis Grownup ebenso wie Corporates."
                    },
                    {
                        title: "DIGITAL ORGANIZATION DESIGN",
                        description:
                            "Ob Aufbau oder Umbau: Wir begleiten Unternehmen bei der strukturellen Gestaltung digitaler Organisationen – mit klarem Zielbild und Fokus auf Umsetzung. Statt Theorie liefern wir ein belastbares Modell für performante Teams und skalierbare Produktbereiche."
                    }
                ]}
                // link={{
                //     href: "/services/digital-strategy-transformation",
                //     label: "Mehr erfahren"
                // }}
            />
            <TripleImageColumn
                title="Auszug unserer Referenzen"
                columns={[
                    {
                        title: "PORSCHE ONLINE-VERTRIEBSPLATTFORM",
                        text: "„Porsche-Enthusiasten die bestmögliche Such- und Kauferfahrung zu bieten“. Nicht weniger war und ist unser Anspruch im Rahmen der Entwicklung der Porsche Vertriebsplattform für Neu- und Gebrauchtfahrzeuge.",
                        image: "/images/customers/porsche-cropped.jpg"
                        // tags: ["Typescript", "AWS", "React"]
                    },
                    {
                        title: "MERCEDES-BENZ DIGITAL SERVICE STRATEGY",
                        text: "Gemeinsam mit Mercedes-Benz haben wir eine innovative Serviceportfolio-Strategie entwickelt, die nicht nur vollkommen neue Umsatzpotentiale eröffnet, sondern auch echte Probleme von Kunden und Partnern löst. Von der Geschäftsfeldanalyse bis hin zur Businesscaseerstellung und dem MVP-Scoping gelang es uns Strategie & Umsetzung nahtlos zu verknüpfen.",
                        image: "/images/customers/mercedes-cropped.jpg"
                    },
                    {
                        title: "RECARO PEER REVIEW COACHING",
                        text: "Code-Reviews sind ein zentrales Element in unserem Programmier-Alltag. Doch wie gestaltet sich ein effektives Mehr-Augen-Prinzip? Wie gibt man Feedback und wie erzeugt man einen offenen Raum für Verbesserung? Gemeinsam mit RECARO sind wir unter anderem diesen Fragen im Rahmen unseres Peer Review Coachings auf den Grund gegangen.",
                        image: "/images/customers/recaro.jpg"
                    }
                ]}
                layout="default"
            />
            <Customers />
        </div>
    )
}
