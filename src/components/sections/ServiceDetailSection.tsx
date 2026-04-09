"use client"
import cn from "@/utils/cn"
import Image from "next/image"
import { useRef } from "react"

interface FocusItem {
    title: string
    description: string
}

interface ServiceDetailSectionProps {
    sectionTitle: string
    image: string
    items: FocusItem[]
    className?: string
}

export default function ServiceDetailSection({ sectionTitle, image, items, className }: ServiceDetailSectionProps) {
    const itemRefs = useRef<(HTMLDivElement | null)[]>([])

    return (
        <section className={cn("flex flex-col gap-10 rounded-lg lg:gap-20", className)}>
            {/* Section heading */}
            <h2 className="font-gteradisplay text-d2 text-center text-black">{sectionTitle}</h2>

            {/* Two-column: sticky image left + scrolling text right */}
            <div className="gap-grid-gutter flex flex-col lg:flex-row">
                {/* Left: sticky image (static on mobile, sticky on desktop) */}
                <div className="lg:sticky lg:top-34 lg:flex-[1.4] lg:self-start">
                    <div className="relative aspect-4/3 w-full overflow-hidden rounded-lg">
                        <Image src={image} alt={sectionTitle} fill className="object-cover" />
                    </div>
                </div>

                {/* Right: scrolling text */}
                <div className="flex flex-1 flex-col gap-12 pt-4 lg:gap-35">
                    {items.map((item, i) => (
                        <div
                            key={item.title}
                            ref={(el) => {
                                itemRefs.current[i] = el
                            }}
                            className="gap-sm flex flex-col items-start"
                        >
                            <h3 className="font-gteradisplay text-h4 text-black">{item.title}</h3>
                            <p className="text-xsmall text-black/60">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
