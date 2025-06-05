import Hero from "@/components/sections/Hero"

export default function Win() {
    return (
        <div>
            <Hero
                subtitle="WIN"
                title="Gewinnspiel WIP"
                description="Team One unterstützt Unternehmen aus Industrie, Handel und Mittelstand bei der Umsetzung datengetriebener Geschäftsmodelle. Unser Fokus: konkrete Anwendungsfälle, technische Umsetzbarkeit und nachhaltige Verankerung in der Organisation."
                blobs={{ active: true, className: "from-[#21352b] to-[#46ffad] opacity-40", shape: "zigzag" }}
            />
        </div>
    )
}
