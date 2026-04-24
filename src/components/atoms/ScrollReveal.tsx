"use client"

import cn from "@/utils/cn"
import { useEffect, useRef } from "react"

type AnimationVariant = "shift" | "rise"

interface ScrollRevealProps {
    children: React.ReactNode
    className?: string
    delay?: number
    threshold?: number
    stagger?: boolean
    staggerStep?: number
    staggerColumns?: number
    variant?: AnimationVariant
    as?: React.ElementType
    animate?: boolean
}

const hiddenClass: Record<AnimationVariant, string> = {
    shift: "animate-shift-hidden",
    rise: "animate-rise-hidden"
}

const visibleClass: Record<AnimationVariant, string> = {
    shift: "animate-shift",
    rise: "animate-rise"
}

export default function ScrollReveal({
    children,
    className,
    delay = 0,
    threshold = 0.1,
    stagger = false,
    staggerStep = 0.15,
    staggerColumns = 3,
    variant = "rise",
    as: Component = "div",
    animate = true
}: ScrollRevealProps) {
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!animate) return

        const el = ref.current
        if (!el) return

        const hidden = hiddenClass[variant]
        const visible = visibleClass[variant]

        if (stagger) {
            const children = Array.from(el.children) as HTMLElement[]
            const isMobile = window.matchMedia("(max-width: 759px)").matches

            children.forEach((child, i) => {
                const delayValue = isMobile
                    ? 0
                    : staggerColumns > 0
                      ? (i % staggerColumns) * staggerStep
                      : i * staggerStep
                child.style.transitionDelay = `${delayValue}s`
                child.classList.add(hidden)
            })

            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add(visible)
                            observer.unobserve(entry.target)
                        }
                    })
                },
                { threshold }
            )

            children.forEach((child) => observer.observe(child))
            return () => observer.disconnect()
        } else {
            el.style.transitionDelay = `${delay}s`
            el.classList.add(hidden)

            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        el.classList.add(visible)
                        observer.unobserve(el)
                        observer.disconnect()
                    }
                },
                { threshold }
            )

            observer.observe(el)
            return () => observer.disconnect()
        }
    }, [animate, delay, threshold, stagger, staggerStep, staggerColumns, variant])

    return (
        <Component ref={ref} className={cn(className)}>
            {children}
        </Component>
    )
}
