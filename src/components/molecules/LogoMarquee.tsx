"use client"

import cn from "@/utils/cn"
import Image from "next/image"
import { useEffect, useRef } from "react"

interface LogoMarqueeProps {
    logos: { src: string; alt: string; width: number; height: number }[]
    fadeColor?: "white" | "primary-soft"
    className?: string
}

export default function LogoMarquee({ logos, fadeColor = "white", className }: LogoMarqueeProps) {
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const container = containerRef.current
        if (!container) return

        let animationId: number
        let position = 0
        const speed = 0.5

        function animate() {
            position -= speed
            const firstSet = container!.firstElementChild as HTMLElement
            if (firstSet && Math.abs(position) >= firstSet.scrollWidth) {
                position = 0
            }
            container!.style.transform = `translateX(${position}px)`
            animationId = requestAnimationFrame(animate)
        }

        animationId = requestAnimationFrame(animate)
        return () => cancelAnimationFrame(animationId)
    }, [])

    return (
        <div className={cn("relative overflow-hidden py-24", className)}>
            <div ref={containerRef} className="flex items-center" style={{ willChange: "transform" }}>
                {/* Duplicate logos for seamless loop */}
                {[0, 1].map((setIndex) => (
                    <div key={setIndex} className="flex shrink-0 items-center gap-64 pr-64">
                        {logos.map((logo, i) => (
                            <Image
                                key={`${setIndex}-${i}`}
                                src={logo.src}
                                alt={logo.alt}
                                width={logo.width}
                                height={logo.height}
                                className="h-10 w-auto shrink-0 object-contain brightness-0"
                            />
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}
