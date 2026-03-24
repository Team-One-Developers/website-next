"use client"

import cn from "@/utils/cn"
import Image from "next/image"

interface LogoMarqueeProps {
    fadeColor?: "white" | "primary-soft"
    className?: string
}

const logos = [
    { src: "/logos/porsche.svg", alt: "Porsche", width: 314, height: 22 },
    { src: "/logos/mercedes.svg", alt: "Mercedes-Benz", width: 291, height: 35 },
    { src: "/logos/recaro.svg", alt: "Recaro", width: 269, height: 58 },
    { src: "/logos/dm.svg", alt: "dm", width: 107, height: 107 },
    { src: "/logos/otto.svg", alt: "Otto", width: 125, height: 125 },
    { src: "/logos/schwarz.svg", alt: "Schwarz", width: 269, height: 51 }
]

export default function LogoMarquee({ fadeColor = "white", className }: LogoMarqueeProps) {
    return (
        <div className={cn("relative overflow-hidden py-24", className)}>
            <div className="flex w-max items-center" style={{ animation: "marquee 40s linear infinite" }}>
                {/* Two identical sets — translating by -50% loops seamlessly */}
                {[0, 1].map((setIndex) => (
                    <div
                        key={setIndex}
                        className="flex shrink-0 items-center"
                        style={{ gap: "200px", paddingRight: "200px" }}
                    >
                        {logos.map((logo, i) => (
                            <Image
                                key={`${setIndex}-${i}`}
                                src={logo.src}
                                alt={logo.alt}
                                width={logo.width}
                                height={logo.height}
                                className="shrink-0 object-contain brightness-0"
                                style={{ height: logo.height, width: logo.width }}
                            />
                        ))}
                    </div>
                ))}
            </div>

            <style>{`
                @keyframes marquee {
                    from { transform: translateX(0); }
                    to { transform: translateX(-50%); }
                }
            `}</style>
        </div>
    )
}
