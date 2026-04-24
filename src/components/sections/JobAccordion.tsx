"use client"

import ScrollReveal from "@/components/atoms/ScrollReveal"
import cn from "@/utils/cn"
import Link from "next/link"
import { useState } from "react"

interface Job {
    title: string
    type: string
    href: string
}

interface JobCategory {
    label: string
    count: number
    jobs: Job[]
}

interface JobAccordionProps {
    title: string
    categories: JobCategory[]
    className?: string
    animate?: boolean
}

function ChevronIcon({ open }: { open: boolean }) {
    return (
        <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            className={cn("shrink-0 transition-transform duration-300", open && "rotate-180")}
        >
            <path
                d="M6 9L12 15L18 9"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

export default function JobAccordion({ title, categories, className, animate }: JobAccordionProps) {
    const [openIndices, setOpenIndices] = useState<Set<number>>(() => new Set())

    function toggle(index: number) {
        setOpenIndices((prev) => {
            const next = new Set(prev)
            if (next.has(index)) {
                next.delete(index)
            } else {
                next.add(index)
            }
            return next
        })
    }

    return (
        <ScrollReveal
            stagger
            staggerColumns={0}
            staggerStep={0.15}
            animate={animate}
            as="section"
            className={cn("gap-grid-gutter relative flex flex-col rounded-lg py-20 lg:flex-row", className)}
        >
            {/* Gray background */}
            <div className="bg-grey absolute inset-x-0 inset-y-0 -mx-[calc((100vw-100%)/2)] rounded-4xl" />

            {/* Left: title */}
            <div className="relative flex shrink-0 items-center py-8 lg:w-1/3">
                <h2 className="font-gteradisplay text-h2 whitespace-pre-line text-black">{title}</h2>
            </div>

            {/* Right: accordion */}
            <div className="relative flex min-w-0 flex-1 flex-col">
                {categories.map((category, i) => {
                    const isOpen = openIndices.has(i)
                    return (
                        <div key={category.label} className="border-t border-black/10">
                            <button
                                type="button"
                                onClick={() => toggle(i)}
                                className="gap-lg flex w-full cursor-pointer items-center py-8"
                                aria-expanded={isOpen}
                            >
                                <span className="font-gteradisplay text-h3 min-w-0 text-left text-black">
                                    {category.label}
                                </span>
                                <span className="ml-auto flex shrink-0 items-center gap-4">
                                    <span className="bg-primary text-small flex size-10 items-center justify-center rounded-full font-medium text-black">
                                        {category.count}
                                    </span>
                                    <ChevronIcon open={isOpen} />
                                </span>
                            </button>

                            {/* Expanded job listings */}
                            <div
                                className={cn(
                                    "grid transition-[grid-template-rows] duration-300",
                                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                                )}
                            >
                                <div className="overflow-hidden">
                                    {category.jobs.map((job) => (
                                        <div key={job.title} className="flex flex-col gap-1.75 py-8">
                                            <Link
                                                href={job.href}
                                                className="font-gteradisplay text-h4 text-black underline hover:text-black/70"
                                            >
                                                {job.title}
                                            </Link>
                                            <span className="text-xsmall text-black-soft">{job.type}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </ScrollReveal>
    )
}
