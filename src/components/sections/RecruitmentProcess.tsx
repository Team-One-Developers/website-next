"use client"

import Eyebrow from "@/components/atoms/Eyebrow"
import { BLUR_DATA_URL } from "@/constants/blur"
import cn from "@/utils/cn"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"

interface ProcessStep {
    title: string
    description: string
    image: string
}

interface RecruitmentProcessProps {
    title: string
    eyebrowLabel: string
    steps: ProcessStep[]
    className?: string
}

export default function RecruitmentProcess({ title, eyebrowLabel, steps, className }: RecruitmentProcessProps) {
    const [activeIndex, setActiveIndex] = useState(0)
    const stepRefs = useRef<(HTMLDivElement | null)[]>([])

    useEffect(() => {
        const observers: IntersectionObserver[] = []

        stepRefs.current.forEach((el, i) => {
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
    }, [steps.length])

    function scrollToStep(index: number) {
        stepRefs.current[index]?.scrollIntoView({ behavior: "smooth", block: "center" })
    }

    return (
        <section
            className={cn(
                "gap-grid-gutter px-grid-safezone relative flex flex-col rounded-lg py-20 lg:flex-row",
                className
            )}
        >
            {/* Green background */}
            <div className="bg-primary-soft absolute inset-x-0 inset-y-0 -mx-[calc((100vw-100%)/2)] rounded-4xl" />

            {/* Left: sticky sidebar */}
            <div className="relative top-20 flex w-full shrink-0 flex-col gap-10 self-start pt-20 lg:sticky lg:top-34 lg:w-142.5">
                <h2 className="font-gteradisplay text-h2 max-w-114.25 text-black">{title}</h2>
                <div className="flex flex-col gap-5">
                    <Eyebrow label={eyebrowLabel} size="small" />
                    {steps.map((step, i) => (
                        <button
                            key={`step-nav-${i}`}
                            type="button"
                            onClick={() => scrollToStep(i)}
                            className={cn(
                                "text-small cursor-pointer text-left transition-colors duration-200",
                                activeIndex === i ? "font-medium text-black" : "text-black/40"
                            )}
                        >
                            {step.title}
                        </button>
                    ))}
                </div>
            </div>

            {/* Right: stacked image blocks */}
            <div className="relative flex w-full flex-col gap-35 lg:w-142.5">
                {steps.map((step, i) => (
                    <div
                        key={`step-${i}`}
                        ref={(el) => {
                            stepRefs.current[i] = el
                        }}
                        className="gap-lg flex flex-col items-center"
                    >
                        <div className="relative aspect-[340.25/255.19] w-full overflow-hidden rounded-lg">
                            <Image
                                src={step.image}
                                alt={step.title}
                                fill
                                sizes="(max-width: 1299px) 100vw, 570px"
                                className="object-cover"
                                placeholder="blur"
                                blurDataURL={BLUR_DATA_URL}
                            />
                        </div>
                        <div className="gap-sm flex flex-col px-8">
                            <h4 className="font-gteradisplay text-h4 text-black">{step.title}</h4>
                            <p className="text-xsmall text-black/60">{step.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
