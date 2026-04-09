"use client"

import { StoryCard, type SuccessStory } from "@/components/sections/SuccessStoriesGrid"
import cn from "@/utils/cn"
import { useEffect, useRef } from "react"

interface StoriesGridProps {
    title?: string
    stories: SuccessStory[]
    className?: string
    gridClassName?: string
    children?: React.ReactNode
}

export default function StoriesGrid({ title, stories, className, gridClassName, children }: StoriesGridProps) {
    const gridRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const grid = gridRef.current
        if (!grid) return

        const cards = Array.from(grid.children) as HTMLElement[]
        const isMobile = window.matchMedia("(max-width: 759px)").matches

        // Start hidden and set stagger delay per card within its visual row
        cards.forEach((card, i) => {
            card.style.transitionDelay = isMobile ? "0s" : `${(i % 3) * 0.2}s`
            card.classList.add("animate-shift-hidden")
        })

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    entry.target.classList.toggle("animate-shift", entry.isIntersecting)
                })
            },
            { threshold: 0.1 }
        )

        cards.forEach((card) => observer.observe(card))

        return () => observer.disconnect()
    }, [stories])

    return (
        <section className={cn("gap-grid-gutter flex flex-col", className)}>
            {title && <h2 className="font-gteradisplay text-d2 text-black">{title}</h2>}
            <div
                ref={gridRef}
                className={cn("gap-grid-gutter grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3", gridClassName)}
            >
                {stories.map((story, i) => (
                    <StoryCard key={i} {...story} />
                ))}
                {children}
            </div>
        </section>
    )
}
