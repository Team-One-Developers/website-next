import Hero from "@/components/sections/Hero"
import ImageDivider from "@/components/sections/ImageDivider"
import Values from "@/components/sections/Values"

export default function CulturePage() {
    return (
        <div>
            <Hero
                title="Wir stellen den Menschen in den Mittelpunkt."
                subtitle="Wir machen das, wovon alle sprechen:"
                link={{ label: "Unsere offenen Stellen", url: "/career#careers" }}
                blobs={{ active: true, className: "from-primary to-primary opacity-40", shape: "organic" }}
            />
            <ImageDivider />
            <Values />
        </div>
    )
}
