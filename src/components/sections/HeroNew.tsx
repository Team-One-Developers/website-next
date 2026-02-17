import Eyebrow from "@/components/atoms/Eyebrow"
import cn from "@/utils/cn"

interface HeroNewProps {
    title: string
    description: string
    eyebrows: string[]
    className?: string
}

export default function HeroNew({ title, description, eyebrows, className }: HeroNewProps) {
    return (
        <section className={cn("relative flex flex-col gap-20 pt-32", className)}>
            {/* Heading block */}
            <div className="gap-lg flex flex-col">
                <h1 className="font-gteradisplay text-d1 max-w-300 font-light text-black">{title}</h1>
                {/* Eyebrow tag bar */}
                <div className="gap-lg flex flex-wrap items-center">
                    {eyebrows.map((label) => (
                        <Eyebrow key={label} label={label} size="small" />
                    ))}
                </div>
            </div>

            {/* Description */}
            <p className="text-small max-w-159.25 text-black/70">{description}</p>
        </section>
    )
}
