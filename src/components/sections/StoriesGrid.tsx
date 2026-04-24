"use client"

import ScrollReveal from "@/components/atoms/ScrollReveal"
import { StoryCard, type SuccessStory } from "@/components/sections/SuccessStoriesGrid"
import cn from "@/utils/cn"

interface StoriesGridProps {
    title?: string
    stories: SuccessStory[]
    className?: string
    gridClassName?: string
    children?: React.ReactNode
    imageBorder?: boolean
    animate?: boolean
}

export default function StoriesGrid({
    title,
    stories,
    className,
    gridClassName,
    children,
    imageBorder,
    animate
}: StoriesGridProps) {
    return (
        <section className={cn("gap-grid-gutter flex flex-col", className)}>
            {title && <h2 className="font-gteradisplay text-d2 text-black">{title}</h2>}
            <ScrollReveal
                stagger
                variant="shift"
                staggerStep={0.2}
                staggerColumns={3}
                animate={animate}
                className={cn("gap-grid-gutter grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3", gridClassName)}
            >
                {stories.map((story, i) => (
                    <StoryCard key={i} {...story} imageBorder={imageBorder} />
                ))}
                {children}
            </ScrollReveal>
        </section>
    )
}
