"use client"

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

export default function JobAccordion({ title, categories, className }: JobAccordionProps) {
    const [openIndex, setOpenIndex] = useState<number>(0)

    return (
        <section
            className={cn(
                "gap-grid-gutter px-grid-safezone relative flex flex-col rounded-lg py-20 lg:flex-row",
                className
            )}
        >
            {/* Gray background */}
            <div className="bg-grey absolute inset-x-0 inset-y-0 -mx-[calc((100vw-100%)/2)] rounded-4xl" />

            {/* Left: title */}
            <div className="relative flex flex-1 items-center py-8">
                <h2 className="font-gteradisplay text-h2 whitespace-pre-line text-black">{title}</h2>
            </div>

            {/* Right: accordion */}
            <div className="relative flex flex-1 flex-col">
                {categories.map((category, i) => {
                    const isOpen = openIndex === i
                    return (
                        <div key={category.label} className="border-t border-black/10">
                            <button
                                type="button"
                                onClick={() => setOpenIndex(isOpen ? -1 : i)}
                                className="gap-lg flex w-full cursor-pointer items-center justify-between py-8"
                            >
                                <div className="gap-lg flex flex-1 items-center">
                                    <span className="font-gteradisplay text-h3 text-black">{category.label}</span>
                                    <span className="bg-primary text-small flex size-10 items-center justify-center rounded-full font-medium text-black">
                                        {category.count}
                                    </span>
                                </div>
                                <ChevronIcon open={isOpen} />
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
        </section>
    )
}
