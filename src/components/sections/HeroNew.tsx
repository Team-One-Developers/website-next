import Eyebrow from "@/components/atoms/Eyebrow"
import cn from "@/utils/cn"
import Link from "next/link"

interface HeroNewProps {
    title: string
    description?: string
    eyebrows?: string[]
    backLink?: { label: string; href: string }
    className?: string
}

export default function HeroNew({ title, description, eyebrows, backLink, className }: HeroNewProps) {
    return (
        <section className={cn("relative flex flex-col gap-20 pt-32", className)}>
            {/* Heading block */}
            <div className="gap-lg flex flex-col">
                {backLink && (
                    <Link href={backLink.href} className="gap-sm text-small flex items-center text-black">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="rotate-180">
                            <path
                                d="M5 12H19M19 12L12 5M19 12L12 19"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                        {backLink.label}
                    </Link>
                )}
                <h1 className="font-gteradisplay text-d1 max-w-300 font-light text-black">{title}</h1>
                {/* Eyebrow tag bar */}
                {eyebrows && eyebrows.length > 0 && (
                    <div className="gap-lg flex flex-wrap items-center">
                        {eyebrows.map((label) => (
                            <Eyebrow key={label} label={label} size="small" />
                        ))}
                    </div>
                )}
            </div>

            {/* Description */}
            {description && <p className="text-small max-w-159.25 text-black/70">{description}</p>}
        </section>
    )
}
