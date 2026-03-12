"use client"

import Eyebrow from "@/components/atoms/Eyebrow"
import cn from "@/utils/cn"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"

interface FocusItem {
    title: string
    description: string
    image: string
}

interface ServiceDetailSectionProps {
    sectionTitle: string
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

export default function ServiceDetailSection({ sectionTitle, items, className }: ServiceDetailSectionProps) {
    const [activeIndex, setActiveIndex] = useState(0)
    const itemRefs = useRef<(HTMLDivElement | null)[]>([])

    useEffect(() => {
        const observers: IntersectionObserver[] = []

        itemRefs.current.forEach((el, i) => {
            if (!el) return
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setActiveIndex(i)
                    }
                },
                { rootMargin: "-40% 0px -40% 0px", threshold: 0 }
            )
            observer.observe(el)
            observers.push(observer)
        })

        return () => observers.forEach((o) => o.disconnect())
    }, [items.length])

    function scrollToItem(index: number) {
        itemRefs.current[index]?.scrollIntoView({ behavior: "smooth", block: "center" })
    }

    return (
        <section className={cn("flex flex-col gap-20 rounded-lg", className)}>
            {/* Section heading */}
            <h2 className="font-gteradisplay text-d2 text-center text-black">{sectionTitle}</h2>

            {/* Two-column: sticky nav + image blocks */}
            <div className="gap-grid-gutter px-grid-safezone-small flex">
                {/* Left: sticky navigation */}
                <div className="sticky top-20 flex flex-1 flex-col gap-5 self-start pt-20">
                    {items.map((item, i) =>
                        activeIndex === i ? (
                            <button
                                key={item.title}
                                type="button"
                                onClick={() => scrollToItem(i)}
                                className="cursor-pointer text-left"
                            >
                                <Eyebrow label={item.title} size="small" />
                            </button>
                        ) : (
                            <button
                                key={item.title}
                                type="button"
                                onClick={() => scrollToItem(i)}
                                className="text-small font-gteratext cursor-pointer text-left text-black/40 transition-colors duration-200"
                            >
                                {item.title}
                            </button>
                        )
                    )}
                </div>

                {/* Right: image blocks */}
                <div className="flex flex-1 flex-col gap-35">
                    {items.map((item, i) => (
                        <div
                            key={item.title}
                            ref={(el) => {
                                itemRefs.current[i] = el
                            }}
                        >
                            <ImageBlock {...item} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
