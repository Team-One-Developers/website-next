"use client"

import cn from "@/utils/cn"
import Image from "next/image"
import { useEffect, useRef } from "react"

interface ImageMarqueeItem {
    src: string
    alt: string
    width: number
    height: number
}

interface ImageMarqueeProps {
    images: ImageMarqueeItem[]
    className?: string
}

export default function ImageMarquee({ images, className }: ImageMarqueeProps) {
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
        <div className={cn("relative overflow-hidden py-12", className)}>
            <div ref={containerRef} className="flex items-center" style={{ willChange: "transform" }}>
                {[0, 1].map((setIndex) => (
                    <div key={setIndex} className="flex shrink-0 items-center gap-12 pr-12">
                        {images.map((img, i) => (
                            <div
                                key={`${setIndex}-${i}`}
                                className="relative shrink-0 overflow-hidden rounded-[18px]"
                                style={{ width: img.width, height: img.height }}
                            >
                                <Image src={img.src} alt={img.alt} fill className="object-cover" />
                                {/* Green gradient overlay */}
                                <div
                                    className="pointer-events-none absolute inset-0 rounded-[18px] mix-blend-multiply"
                                    style={{
                                        backgroundImage:
                                            "linear-gradient(159deg, rgba(255,255,255,0) 5.6%, rgb(70,255,173) 90.4%)"
                                    }}
                                />
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}
