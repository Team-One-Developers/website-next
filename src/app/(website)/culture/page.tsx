import Hero from "@/components/sections/Hero/Hero"
import ImageDivider from "@/components/sections/ImageDivider"
import Values from "@/components/sections/Values"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Kultur",
    description: "Wir machen das, wovon alle sprechen: Wir stellen den Menschen in den Mittelpunkt."
}

export default function CulturePage() {
    return (
        <div>
            <Hero
                title="Wir stel&shy;len den Men&shy;schen in den Mittel&shy;punkt."
                subtitle="Wir machen das, wovon alle sprechen:"
                link={{ label: "Unsere offenen Stellen", url: "/career#jobs" }}
                blobs={{ active: true, className: "from-primary to-primary opacity-40", shape: "organic" }}
            />
            <ImageDivider />
            <Values />
        </div>
    )
}
