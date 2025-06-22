"use client"

import Typography from "@/components/atoms/Typography"
import { BlobShape, blobShapes, HeroBlob } from "@/components/sections/Hero/HeroBlob"
import cn from "@/utils/cn"
import Link from "next/link"
import { useEffect, useRef } from "react"

interface HeroProps {
    title: string
    subtitle?: string
    description?: string
    link?: { label: string; url: string }
    blobs?: { active: boolean; className?: string; shape?: BlobShape }
}

export default function Hero({ title, subtitle, description, link, blobs }: HeroProps) {
    const topBlobRef = useRef<HTMLDivElement>(null)
    const bottomBlobRef = useRef<HTMLDivElement>(null)

    const clipPath = blobShapes[blobs?.shape ?? "organic"]

    useEffect(() => {
        if (!blobs?.active) return

        let ticking = false

        function handleScroll() {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const scrollY = window.scrollY

                    if (topBlobRef.current) {
                        topBlobRef.current.style.transform = `translateY(${scrollY * 0.5}px) translateX(-50%) rotate(30deg)`
                    }
                    if (bottomBlobRef.current) {
                        bottomBlobRef.current.style.transform = `translateY(${scrollY * -0.3}px) translateX(-50%)`
                    }

                    ticking = false
                })
                ticking = true
            }
        }

        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [blobs?.active])

    return (
        <div className="bg-t1-black -mt-24 overflow-hidden pt-24">
            <div className="relative isolate w-full px-6 pt-14 lg:px-8">
                {blobs?.active && (
                    <>
                        <HeroBlob ref={topBlobRef} position="top" clipPath={clipPath} className={blobs.className} />
                    </>
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
                    <>
                        <HeroBlob
                            ref={bottomBlobRef}
                            position="bottom"
                            clipPath={clipPath}
                            className={blobs.className}
                        />
                    </>
                )}
            </div>
        </div>
    )
}
