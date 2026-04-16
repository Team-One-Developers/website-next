"use client"
import ScrollReveal from "@/components/atoms/ScrollReveal"
import cn from "@/utils/cn"
import Image from "next/image"
import { ReactNode, useRef } from "react"

interface FocusItem {
    title: string
    description: ReactNode
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
        <ScrollReveal
            stagger
            staggerColumns={0}
            staggerStep={0.15}
            as="section"
            className={cn("flex flex-col gap-10 rounded-lg lg:gap-20", className)}
        >
            {/* Section heading */}
            <h2 className="font-gteradisplay text-d2 text-center text-black">{sectionTitle}</h2>

            {/* Two-column: sticky image left + scrolling text right */}
            <div className="gap-grid-gutter flex flex-col lg:flex-row">
                {/* Left: sticky image (static on mobile, sticky on desktop) */}
                <div className="lg:sticky lg:top-34 lg:flex-1 lg:self-start">
                    <div className="relative aspect-4/3 w-full overflow-hidden rounded-lg">
                        <Image
                            src={image}
                            alt={sectionTitle}
                            fill
                            sizes="(max-width: 1299px) 100vw, 58vw"
                            className="object-cover"
                        />
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
                            <div className="text-xsmall flex flex-col gap-3 text-black/60">
                                {typeof item.description === "string" ? <p>{item.description}</p> : item.description}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </ScrollReveal>
    )
}
