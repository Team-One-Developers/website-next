import { StoryCard, type SuccessStory } from "@/components/sections/SuccessStoriesGrid"
import cn from "@/utils/cn"

interface StoriesGridProps {
    title?: string
    stories: SuccessStory[]
    className?: string
}

export default function StoriesGrid({ title, stories, className }: StoriesGridProps) {
    return (
        <section className={cn("gap-grid-gutter flex flex-col", className)}>
            {title && <h2 className="font-gteradisplay text-d2 text-black">{title}</h2>}
            <div className="gap-grid-gutter grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {stories.map((story, i) => (
                    <StoryCard key={i} {...story} />
                ))}
            </div>
        </section>
    )
}
