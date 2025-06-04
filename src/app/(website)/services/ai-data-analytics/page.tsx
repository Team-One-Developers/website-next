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
                            "Lorem ipsum dolor sit amet consectetur adipiscing elitdo eiusmod tempor incididunt ut labore dolore magna utenim minim veniam nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                    },
                    {
                        title: "AI OPERATIONS",
                        description:
                            "Lorem ipsum dolor sit amet consectetur adipiscing elitdo eiusmod tempor incididunt ut labore dolore magna utenim minim veniam nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                    },
                    {
                        title: "AI TRAININGS",
                        description:
                            "Lorem ipsum dolor sit amet consectetur adipiscing elitdo eiusmod tempor incididunt ut labore dolore magna utenim minim veniam nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                    }
                ]}
            />
            <Customers />
            <TextColumns
                title="OUR AI INTEGRATION FRAMEWORK"
                subtitle="AI Subline"
                description="Lorem ipsum dolor sit amet consectetur adipiscing elitdo eiusmod tempor incididunt ut labore dolore magna utenim minim veniam nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                link={{ label: "Kontakt", href: "/contact" }}
                columns={[
                    {
                        title: "Initiate",
                        description:
                            "Lorem ipsum dolor sit amet consectetur adipiscing elitdo eiusmod tempor incididunt ut labore dolore magna utenim minim veniam nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                    },
                    {
                        title: "Test",
                        description:
                            "Lorem ipsum dolor sit amet consectetur adipiscing elitdo eiusmod tempor incididunt ut labore dolore magna utenim minim veniam nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                    },
                    {
                        title: "Implement",
                        description:
                            "Lorem ipsum dolor sit amet consectetur adipiscing elitdo eiusmod tempor incididunt ut labore dolore magna utenim minim veniam nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                    },
                    {
                        title: "Optimize",
                        description:
                            "Lorem ipsum dolor sit amet consectetur adipiscing elitdo eiusmod tempor incididunt ut labore dolore magna utenim minim veniam nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
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
