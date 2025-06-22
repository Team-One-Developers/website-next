import { BlogAndNews } from "@/components/sections/BlogAndNews"
import Customers from "@/components/sections/Customers"
import Hero from "@/components/sections/Hero/Hero"
import ImageDivider from "@/components/sections/ImageDivider"
import TextColumns from "@/components/sections/TextColumns"
import TripleImageColumn from "@/components/sections/TripleImageColumn"

const Home = () => {
    return (
        <>
            <Hero
                subtitle="Tech-driven business transformation"
                title="Strategisch, datengetrieben, umsetzungsstark."
                description="Team One ist Technologie-Beratungspartner für digitale Produkte, skalierbare Architekturen und KI-gestützte Geschäftsmodelle - mit Tech-Expertise, die in echten Projekten wirkt."
                link={{ label: "About us", url: "/about-us" }}
                blobs={{ active: true, className: "from-[#21352b] to-[#46ffad] opacity-40", shape: "organic" }}
            />
            <TextColumns
                title="WIR STEIGERN DIE WETTBEWERBSFÄHIGKEIT VON UNTERNEHMEN IN EINER DIGITALEN WELT."
                subtitle="Unsere Leistungen"
                link={{ label: "Alle Leistungen", href: "/services" }}
                columns={[
                    {
                        title: "Software Engineering",
                        description:
                            "Wir entwickeln modulare Web- und Plattformarchitekturen - skalierbar, wartbar, produktnah. Unsere Schwerpunkte: komponentenbasierte Entwicklung, klare Schnittstellen, automatisierte Deployment-Prozesse.",
                        href: "/services/software-engineering"
                    },
                    {
                        title: "Operational AI & Data Analytics",
                        description:
                            "Vom Aufbau interner Kompetenzen bis zur Entwicklung produktionsreifer Systeme. Unsere Leistungen decken das gesamte Spektrum ab: von klassischen Ansätzen bis hin zu Gen AI-Anwendungen mit integriertem Governance-Modell.",
                        href: "/services/ai-data-analytics"
                    },
                    {
                        title: "Digital-Strategie & Transformation",
                        description:
                            "Wir machen Organisationen handlungsfähig für digitale Produkte - strategisch, technologisch und operativ. Von der Reifegradanalyse bis zum produktbasierten Operating Model oder Produktstrategie.",
                        href: "/services/digital-strategy-transformation"
                    }
                ]}
            />
            <Customers />
            <TripleImageColumn
                title="Auszug Referenzen"
                columns={[
                    {
                        title: "PORSCHE ONLINE-VERTRIEBSPLATTFORM",
                        text: "„Porsche-Enthusiasten die bestmögliche Such- und Kauferfahrung zu bieten“. Nicht weniger war und ist unser Anspruch im Rahmen der Entwicklung der Porsche Vertriebsplattform für Neu- und Gebrauchtfahrzeuge.",
                        image: "/images/customers/porsche.jpg",
                        tags: ["Typescript", "AWS", "React"]
                    },
                    {
                        title: "MERCEDES-BENZ DIGITAL SERVICE STRATEGY",
                        text: "Gemeinsam mit Mercedes-Benz haben wir eine innovative Serviceportfolio-Strategie entwickelt, die nicht nur vollkommen neue Umsatzpotentiale eröffnet, sondern auch echte Probleme von Kunden und Partnern löst. Von der Geschäftsfeldanalyse bis hin zur Businesscaseerstellung und dem MVP-Scoping gelang es uns Strategie & Umsetzung nahtlos zu verknüpfen.",
                        image: "/images/customers/mercedes.jpg"
                    },
                    {
                        title: "RECARO PEER REVIEW COACHING",
                        text: "Code-Reviews sind ein zentrales Element in unserem Programmier-Alltag. Doch wie gestaltet sich ein effektives Mehr-Augen-Prinzip? Wie gibt man Feedback und wie erzeugt man einen offenen Raum für Verbesserung? Gemeinsam mit RECARO sind wir unter anderem diesen Fragen im Rahmen unseres Peer Review Coachings auf den Grund gegangen.",
                        image: "/images/customers/recaro.jpg"
                    }
                ]}
                layout="default"
            />
            <ImageDivider fullWidth />
            <BlogAndNews />
        </>
    )
}
export default Home
