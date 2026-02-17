"use client"

import ButtonNew from "@/components/atoms/ButtonNew"
import Eyebrow from "@/components/atoms/Eyebrow"
import CustomerCaseCard from "@/components/molecules/CustomerCaseCard"
import LogoMarquee from "@/components/molecules/LogoMarquee"
import cn from "@/utils/cn"
import { useRef } from "react"

interface CustomerCase {
    title: string
    description: string
    backgroundImage: string
    logoUrl?: string
    logoAlt?: string
    href: string
}

interface CustomersShowcaseProps {
    eyebrowLabel: string
    title: string
    buttonLabel?: string
    buttonHref?: string
    cases: CustomerCase[]
    logos: { src: string; alt: string; width: number; height: number }[]
    className?: string
}

export default function CustomersShowcase({
    eyebrowLabel,
    title,
    buttonLabel = "Alle Success Stories",
    buttonHref = "/customers",
    cases,
    logos,
    className
}: CustomersShowcaseProps) {
    const scrollRef = useRef<HTMLDivElement>(null)

    const scrollNext = () => {
        if (!scrollRef.current) return
        const cardWidth = scrollRef.current.firstElementChild?.clientWidth ?? 543
        scrollRef.current.scrollBy({ left: cardWidth + 60, behavior: "smooth" })
    }

    return (
        <section className={cn("", className)}>
            {/* Green background area */}
            <div className="bg-primary-soft py-vertical-inner">
                <div className="gap-vertical-inner px-grid-safezone mx-auto flex max-w-(--max-content-width) flex-col">
                    {/* Header */}
                    <div className="gap-xl flex flex-col items-start">
                        <div className="gap-padding-lg flex max-w-194.5 flex-col">
                            <Eyebrow label={eyebrowLabel} />
                            <h2 className="font-gteradisplay text-h2 text-black">{title}</h2>
                        </div>
                        <ButtonNew label={buttonLabel} variant="primary" href={buttonHref} />
                    </div>

                    {/* Cards carousel */}
                    <div className="relative">
                        <div
                            ref={scrollRef}
                            className="gap-grid-gutter scrollbar-hide flex overflow-x-auto scroll-smooth"
                        >
                            {cases.map((caseItem) => (
                                <CustomerCaseCard key={caseItem.title} {...caseItem} />
                            ))}
                        </div>

                        {/* Navigation arrow */}
                        {cases.length > 2 && (
                            <button
                                type="button"
                                onClick={scrollNext}
                                className="bg-primary-soft hover:bg-primary/30 absolute top-1/2 left-1/2 z-10 flex size-21.5 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full backdrop-blur-md transition-colors"
                                aria-label="Next slide"
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path
                                        d="M5 12H19M19 12L12 5M19 12L12 19"
                                        stroke="black"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </button>
                        )}
                    </div>

                    {/* Carousel indicators */}
                    <div className="flex items-center justify-center gap-9">
                        {cases.map((_, i) => (
                            <div
                                key={i}
                                className={cn(
                                    "w-1.25 rounded-[30px] backdrop-blur-md",
                                    i === 0 ? "bg-primary h-6.25" : "h-2.75 bg-black"
                                )}
                            />
                        ))}
                    </div>
                </div>

                {/* Logo marquee */}
                <LogoMarquee logos={logos} fadeColor="primary-soft" />
            </div>
        </section>
    )
}
