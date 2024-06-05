"use client"

import { useInView } from "react-intersection-observer"
import { twJoin, twMerge } from "tailwind-merge"
import Typography from "../atoms/Typography"
import "./style.css"

type AnimatedTeaserProps = {
    className?: string
    innerClassName?: string
}

export const AnimatedTeaser = ({ className, innerClassName }: AnimatedTeaserProps) => {
    // Triggers Animation for Animated Teaser
    const [animatedTeaserContainerRef, animatedTeaserInView] = useInView({
        threshold: 0.8,
        triggerOnce: true
    })

    return (
        <div
            ref={animatedTeaserContainerRef}
            className={twJoin(
                "w-full py-8 2xl:py-0 bg-background duration-[1500ms]",
                animatedTeaserInView ? "bg-primary" : "bg-background",
                className
            )}
        >
            <div className="relative mx-auto my-0 flex aspect-[1.5] w-full max-w-[1680px] items-center justify-center">
                <div
                    className={twMerge(
                        "bgDancers absolute inset-0 h-full w-full bg-primary transition-all duration-[1500ms]",
                        animatedTeaserInView ? "bg-white" : "bg-primary",
                        innerClassName
                    )}
                />
                <div className="relative w-[85%] text-center md:w-[70%] lg:w-[55%] xl:w-2/5">
                    <div className="mb-3">
                        <Typography variant="subtitle" className="m-0 text-black">
                            Wir arbeiten
                        </Typography>
                    </div>

                    <Typography className="mb-20 lg:text-6xl 2xl:mb-[11.25rem]" as="h2" variant="h1">
                        Integrativ & Agil
                    </Typography>

                    <Typography className="font-abcdiatype text-black" variant="h4">
                        Integrativ bedeutet für uns nicht nur, nah am Kunden zu sein, sondern vor allem auch die
                        Produkte, an denen wir arbeiten, so zu entwickeln, als wären es unsere eigenen.
                    </Typography>

                    <Typography className="font-abcdiatype text-black" variant="h4">
                        Team One for One Team.
                    </Typography>
                </div>
            </div>
        </div>
    )
}
