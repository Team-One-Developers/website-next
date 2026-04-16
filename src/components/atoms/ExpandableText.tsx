"use client"

import cn from "@/utils/cn"
import { ReactNode, useState } from "react"

interface ExpandableTextProps {
    children: ReactNode
    preview?: string
    className?: string
    label?: string
    collapsedLabel?: string
}

export default function ExpandableText({
    children,
    preview,
    className,
    label = "Mehr lesen",
    collapsedLabel = "Weniger anzeigen"
}: ExpandableTextProps) {
    const [expanded, setExpanded] = useState(false)

    return (
        <div className={cn("flex flex-col", className)}>
            {preview && (
                <div
                    className={cn(
                        "grid overflow-hidden transition-[grid-template-rows] duration-500 ease-in-out",
                        expanded ? "grid-rows-[0fr]" : "grid-rows-[1fr]"
                    )}
                >
                    <div className="min-h-0">
                        <p className="text-xsmall text-black">
                            {preview}
                            {"… "}
                            <button
                                type="button"
                                onClick={() => setExpanded(true)}
                                className="ml-1 cursor-pointer font-medium text-black underline underline-offset-4 transition-colors hover:text-black/60"
                            >
                                {label}
                            </button>
                        </p>
                    </div>
                </div>
            )}
            <div
                className={cn(
                    "grid overflow-hidden transition-[grid-template-rows] duration-500 ease-in-out",
                    expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                )}
            >
                <div className="gap-lg flex min-h-0 flex-col">{children}</div>
            </div>
            {expanded && (
                <button
                    type="button"
                    onClick={() => setExpanded(false)}
                    className="text-xsmall mt-1 cursor-pointer self-start font-medium text-black underline underline-offset-4 transition-colors hover:text-black/60"
                >
                    {collapsedLabel}
                </button>
            )}
        </div>
    )
}
