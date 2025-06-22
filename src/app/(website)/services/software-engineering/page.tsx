import Hero from "@/components/sections/Hero/Hero"

export default function Services() {
    return (
        <div>
            <Hero
                subtitle="REACT"
                title="SOFTWARE ENGINEERING"
                description="Team One unterstützt Unternehmen aus Industrie, Handel und Mittelstand bei der Umsetzung datengetriebener Geschäftsmodelle. Unser Fokus: konkrete Anwendungsfälle, technische Umsetzbarkeit und nachhaltige Verankerung in der Organisation."
                blobs={{ active: true, className: "from-[#21352b] to-[#46ffad] opacity-40", shape: "zigzag" }}
                link={{ label: "Experten sprechen", url: "/contact" }}
            />
        </div>
    )
}
