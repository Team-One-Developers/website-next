import Eyebrow from "@/components/atoms/Eyebrow"
import cn from "@/utils/cn"
import Image from "next/image"

interface FocusItem {
    title: string
    description: string
    image: string
}

interface ServiceDetailSectionProps {
    sectionTitle: string
    eyebrowLabel: string
    navItems: string[]
    items: FocusItem[]
    className?: string
}

function ImageBlock({ title, description, image }: FocusItem) {
    return (
        <div className="gap-lg flex flex-col">
            {/* Image */}
            <div className="relative aspect-4/3 w-full overflow-hidden rounded-lg">
                <Image src={image} alt={title} fill className="object-cover" />
            </div>

            {/* Content */}
            <div className="gap-sm px-padding-lg flex w-full flex-col items-start">
                <h3 className="font-gteradisplay text-h4 max-w-130 text-black">{title}</h3>
                <p className="text-xsmall max-w-130 text-black/60">{description}</p>
            </div>
        </div>
    )
}

export default function ServiceDetailSection({
    sectionTitle,
    eyebrowLabel,
    navItems,
    items,
    className
}: ServiceDetailSectionProps) {
    return (
        <section className={cn("flex flex-col gap-20 rounded-lg", className)}>
            {/* Section heading */}
            <h2 className="font-gteradisplay text-d2 text-center text-black">{sectionTitle}</h2>

            {/* Two-column: sticky nav + image blocks */}
            <div className="gap-grid-gutter px-grid-safezone-small flex">
                {/* Left: sticky navigation */}
                <div className="sticky top-20 flex flex-1 flex-col gap-5 self-start pt-20">
                    <Eyebrow label={eyebrowLabel} size="small" />
                    {navItems.map((item) => (
                        <span key={item} className="text-small font-gteratext text-black">
                            {item}
                        </span>
                    ))}
                </div>

                {/* Right: image blocks */}
                <div className="flex flex-1 flex-col gap-35">
                    {items.map((item) => (
                        <ImageBlock key={item.title} {...item} />
                    ))}
                </div>
            </div>
        </section>
    )
}
