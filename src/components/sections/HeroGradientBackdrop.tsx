"use client"

import { useEffect, useRef } from "react"

export default function HeroGradientBackdrop() {
    const leftBlobRef = useRef<HTMLDivElement>(null)
    const rightBlobRef = useRef<HTMLDivElement>(null)
    const accentBlobRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        let ticking = false

        function handleScroll() {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const scrollY = window.scrollY

                    if (leftBlobRef.current) {
                        leftBlobRef.current.style.transform = `translateY(${scrollY * 0.3}px)`
                    }
                    if (rightBlobRef.current) {
                        rightBlobRef.current.style.transform = `translateY(${scrollY * 0.3}px)`
                    }
                    if (accentBlobRef.current) {
                        accentBlobRef.current.style.transform = `translateY(${scrollY * -0.5}px)`
                    }

                    ticking = false
                })
                ticking = true
            }
        }

        window.addEventListener("scroll", handleScroll, { passive: true })
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <div
            className="pointer-events-none absolute -top-24 left-0 z-0 h-310.75 w-full overflow-hidden"
            aria-hidden="true"
        >
            {/* Left blob — fills top-left, curves down toward center */}
            <div
                ref={leftBlobRef}
                className="absolute h-300 w-400 will-change-transform"
                style={{
                    top: "-200px",
                    left: "-200px",
                    borderRadius: "50%",
                    background:
                        "radial-gradient(ellipse at 40% 30%, rgba(70,255,173,0.7) 0%, rgba(70,255,173,0.35) 45%, transparent 70%)"
                }}
            />
            {/* Right blob — fills top-right, curves down */}
            <div
                ref={rightBlobRef}
                className="absolute h-300 w-400 will-change-transform"
                style={{
                    top: "-250px",
                    right: "-300px",
                    borderRadius: "50%",
                    background:
                        "radial-gradient(ellipse at 60% 30%, rgba(70,255,173,0.65) 0%, rgba(70,255,173,0.3) 45%, transparent 70%)"
                }}
            />
            {/* Bottom-right accent glow */}
            <div
                ref={accentBlobRef}
                className="absolute h-125 w-175 will-change-transform"
                style={{
                    bottom: "0px",
                    right: "-50px",
                    borderRadius: "50%",
                    background: "radial-gradient(ellipse at 50% 50%, rgba(70,255,173,0.3) 0%, transparent 70%)"
                }}
            />
        </div>
    )
}
