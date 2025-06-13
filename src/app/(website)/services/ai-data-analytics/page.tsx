import Customers from "@/components/sections/Customers"
import Expert from "@/components/sections/Expert"
import Hero from "@/components/sections/Hero"
import Magazine from "@/components/sections/Magazine"
import TextColumns from "@/components/sections/TextColumns"
import TripleImageColumn from "@/components/sections/TripleImageColumn"

export default function Services() {
    return (
        <div>
            <Hero
                subtitle="AI BUSINESS TRANSFORMATION"
                title="WIR MACHEN KI IM UNTERNEHMEN WIRKSAM."
                description="Team One unterstützt Unternehmen aus Industrie, Handel und Mittelstand bei der Umsetzung datengetriebener Geschäftsmodelle. Unser Fokus: konkrete Anwendungsfälle, technische Umsetzbarkeit und nachhaltige Verankerung in der Organisation."
                blobs={{ active: true, className: "from-[#21352b] to-[#46ffad] opacity-40", shape: "zigzag" }}
                link={{ label: "Experten sprechen", url: "/contact" }}
            />
            <TextColumns
                title="OUR AI SERVICEPORTFOLIO"
                subtitle="Our Services"
                link={{ label: "All Services", href: "/services" }}
                columns={[
                    {
                        title: "AI STRATEGY",
                        description:
                            "Wir identifizieren wertschöpfende Einsatzfelder für GenAI in Ihrem Unternehmen – mit Fokus auf skalierbare Use Cases, klare Business-Ziele und organisationales Alignment. Von der Use-Case-Discovery bis zur Roadmap für KI-getriebene Geschäftsmodelle."
                    },
                    {
                        title: "AI OPERATIONS",
                        description:
                            "Wir helfen beim Aufbau robuster KI-Infrastrukturen – von der Tool-Auswahl über Datenanbindung bis zu Prompt-Chains und Governance-Strukturen. Für alle, die GenAI nicht nur testen, sondern sicher und skalierbar betreiben wollen."
                    },
                    {
                        title: "AI TRAININGS",
                        description:
                            "Wir qualifizieren Fach- und Führungskräfte entlang realer Workflows – nicht mit PowerPoint, sondern mit Prompts, Praxis und produktivem Output. Mit individuellen Sessions, kompakten Team-Trainings oder skalierbaren Akademie-Formaten."
                    }
                ]}
            />
            <Customers />
            <TextColumns
                title="OUR AI INTEGRATION FRAMEWORK"
                subtitle="Vom POC bis zum Rollout"
                description="Unser AI Integration Framework adressiert genau das: Es liefert den strukturierten Weg von der Idee zur wirkungsvollen Umsetzung – mit klarem Fokus auf Priorisierung, Skalierung und sichere Integration in bestehende Systeme."
                link={{ label: "Kontakt", href: "/contact" }}
                columns={[
                    {
                        title: "Initiate",
                        description:
                            "Wir schaffen die Grundlagen. Ziel ist eine praxisnahe fundierte Integrations-Roadmap – inklusive Use Case-Priorisierung und Architektur-Empfehlung."
                    },
                    {
                        title: "Test",
                        description:
                            "Wir entwickeln funktionierende MVPs mit echten Daten, realen Nutzer:innen und sofort sichtbarem Nutzen. Kernfokus auf Schnelligkeit, Machbarkeit und internes Alignment."
                    },
                    {
                        title: "Implement",
                        description:
                            "Wir überführen KI-Lösungen in produktive Systeme – mit stabiler Architektur, klaren Schnittstellen und sauberer Datenanbindung. Ziel: belastbarer Betrieb mit messbarem Business Impact."
                    },
                    {
                        title: "Optimize",
                        description:
                            "Wir sichern den Betrieb produktiver KI-Anwendungen – mit MLOps, Performance-Monitoring und Analytics. Für skalierbare Modelle, bessere Nutzererlebnisse und kontinuierliche Feature-Erweiterung."
                    }
                ]}
                divider={false}
                bg="primary"
            />
            <Magazine />
            <TripleImageColumn
                title="CONFERENCES & KEYNOTES"
                layout="blog"
                columns={[
                    {
                        title: "KI BIG BANG FESTIVAL",
                        text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et",
                        image: "/images/assets/k5.png",
                        tags: ["24+25. Juni 2025"],
                        href: "https://www.k5.de/"
                    },
                    {
                        title: "K5 BERLIN",
                        text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et",
                        image: "/images/assets/k5.png",
                        tags: ["24+25. Juni 2025"],
                        href: "https://www.k5.de/"
                    },
                    {
                        title: "ANOTHER BLOG ARTICLE",
                        text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et",
                        image: "/images/assets/k5.png",
                        tags: ["24+25. Juni 2025"],
                        href: "https://www.k5.de/"
                    }
                ]}
            />
            <Expert
                image="/images/culture/paul.png"
                text="„Angetrieben von dem Ziel, digitale Zukunftsprojekte erfolgreich zu gestalten und jeden Tag ein bisschen besser zu werden, beraten wir unsere Kunden pragmatisch und mit klarem Blick auf die jeweiligen Unternehmensziele.“"
                name="Paul Krauss"
                position="Partner AI"
            />
        </div>
    )
}
