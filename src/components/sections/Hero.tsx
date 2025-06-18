"use client"

import Typography from "@/components/atoms/Typography"
import cn from "@/utils/cn"
import Link from "next/link"
import { useEffect, useRef } from "react"

type BlobShape = "organic" | "zigzag" | "star"

const blobShapes: Record<BlobShape, string> = {
    organic:
        "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
    zigzag: "polygon(0% 60%, 10% 40%, 20% 60%, 30% 40%, 40% 60%, 50% 40%, 60% 60%, 70% 40%, 80% 60%, 90% 40%, 100% 60%, 100% 100%, 0% 100%)",
    star: "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)"
}

export default function Hero({
    title,
    subtitle,
    description,
    link,
    blobs
}: {
    title: string
    subtitle?: string
    description?: string
    link?: { label: string; url: string }
    blobs?: { active: boolean; className?: string; shape?: BlobShape }
}) {
    const topBlobRef = useRef<HTMLDivElement>(null)
    const bottomBlobRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!blobs || !blobs.active) return

        function handleScroll() {
            const scrollY = window.scrollY
            if (topBlobRef.current) {
                topBlobRef.current.style.transform = `translateY(${scrollY * 0.5}px)`
            }
            if (bottomBlobRef.current) {
                bottomBlobRef.current.style.transform = `translateY(${scrollY * -0.3}px)`
            }
        }
        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [blobs])

    const clipPath = blobShapes[blobs?.shape ?? "organic"]

    return (
        <div className="bg-t1-black -mt-24 overflow-hidden pt-24">
            <div className="relative isolate w-full px-6 pt-14 lg:px-8">
                {blobs?.active && (
                    <div
                        aria-hidden="true"
                        className="fixed inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                        ref={topBlobRef}
                    >
                        <div
                            style={{
                                clipPath
                            }}
                            className={cn(
                                "relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr sm:left-[calc(50%-30rem)] sm:w-288.75",
                                blobs.className
                            )}
                        />
                    </div>
                )}
                <div
                    className={cn(
                        "mx-auto w-full max-w-7xl py-32 sm:py-48 lg:pt-56 lg:pb-84",
                        !description && "pb-72 lg:pb-96"
                    )}
                >
                    <div className="w-full lg:w-4/5">
                        {subtitle && (
                            <Typography variant="subtitle" className="text-primary uppercase">
                                {subtitle}
                            </Typography>
                        )}
                        <Typography variant="h1" className="text-t1-white mt-4 text-wrap">
                            {title}
                        </Typography>
                        {description && (
                            <Typography variant="paragraph" className="text-t1-white mt-8">
                                {description}
                            </Typography>
                        )}
                        {link && (
                            <div className="mt-12">
                                <Link
                                    href={link.url}
                                    className="group text-t1-white hover:text-primary font-semibold transition-all duration-300"
                                >
                                    {link.label}
                                    <span
                                        aria-hidden="true"
                                        className="ml-2 transition-all duration-300 group-hover:ml-3"
                                    >
                                        &rarr;
                                    </span>
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
                {blobs?.active && (
                    <div
                        aria-hidden="true"
                        className="fixed inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-50rem)]"
                        ref={bottomBlobRef}
                    >
                        <div
                            style={{
                                clipPath
                            }}
                            className={cn(
                                "relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr sm:left-[calc(50%+36rem)] sm:w-288.75",
                                blobs.className
                            )}
                        />
                    </div>
                )}
            </div>
        </div>
    )
}
