"use client"

import cn from "@/utils/cn"
import { useState } from "react"

interface ContentAccordionSection {
    title: string
    content: React.ReactNode
}

interface ContentAccordionProps {
    sections: ContentAccordionSection[]
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

export default function ContentAccordion({ sections, className }: ContentAccordionProps) {
    const [openIndices, setOpenIndices] = useState<Set<number>>(() => new Set([0, 1]))

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
        <div className={cn("flex flex-col", className)}>
            {sections.map((section, i) => {
                const isOpen = openIndices.has(i)
                return (
                    <div key={section.title} className="border-t border-black/10">
                        <button
                            type="button"
                            onClick={() => toggle(i)}
                            className="flex w-full cursor-pointer items-center justify-between py-8"
                        >
                            <span className="font-gteradisplay text-h3 text-black">{section.title}</span>
                            <ChevronIcon open={isOpen} />
                        </button>

                        <div
                            className={cn(
                                "grid transition-[grid-template-rows] duration-300",
                                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                            )}
                        >
                            <div className="overflow-hidden">
                                <div className="pr-8 pb-10 lg:pr-32">{section.content}</div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
