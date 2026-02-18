import ButtonNew from "@/components/atoms/ButtonNew"
import Eyebrow from "@/components/atoms/Eyebrow"
import cn from "@/utils/cn"
import Image from "next/image"

export interface SuccessStory {
    title: string
    description: string
    image: string
    eyebrowLabel: string
    buttonLabel?: string
    href?: string
}

interface SuccessStoriesGridProps {
    title: string
    stories: SuccessStory[]
    className?: string
}

export function StoryCard({ title, description, image, eyebrowLabel, buttonLabel = "Mehr lesen", href }: SuccessStory) {
    return (
        <div className="gap-lg flex flex-1 flex-col items-center">
            {/* Image */}
            <div className="relative aspect-4/3 w-full overflow-hidden rounded-lg">
                <Image src={image} alt={title} fill className="object-cover" />
            </div>

            {/* Content */}
            <div className="gap-sm px-padding-lg flex w-full flex-col items-start">
                <Eyebrow label={eyebrowLabel} size="small" />
                <h3 className="font-gteradisplay text-h4 max-w-130 text-black">{title}</h3>
                <p className="text-xsmall max-w-130 text-black/60">{description}</p>
                <ButtonNew label={buttonLabel} variant="outline" href={href} />
            </div>
        </div>
    )
}

export default function SuccessStoriesGrid({ title, stories, className }: SuccessStoriesGridProps) {
    return (
        <section className={cn("relative", className)}>
            {/* Green background */}
            <div className="bg-primary-soft absolute inset-x-0 inset-y-0 -mx-[calc((100vw-100%)/2)] rounded-4xl" />

            <div className="gap-xl relative flex flex-col overflow-hidden pt-20 pb-25">
                {/* Section title */}
                <div className="flex flex-col items-center pb-15">
                    <h2 className="font-gteradisplay text-center text-[clamp(32px,4vw,61px)] leading-[1.28] text-black">
                        {title}
                    </h2>
                </div>

                {/* Stories grid */}
                <div className="gap-grid-gutter grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {stories.map((story, i) => (
                        <StoryCard key={`${story.title}-${i}`} {...story} />
                    ))}
                </div>
            </div>
        </section>
    )
}
