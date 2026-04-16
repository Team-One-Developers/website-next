"use client"

import cn from "@/utils/cn"
import { useEffect, useRef } from "react"

type AnimationVariant = "shift" | "rise"

interface ScrollRevealProps {
    children: React.ReactNode
    className?: string
    /** Stagger delay in seconds for the element itself */
    delay?: number
    /** IntersectionObserver threshold (0-1) */
    threshold?: number
    /** Animate direct children individually with stagger */
    stagger?: boolean
    /** Stagger delay step between children in seconds */
    staggerStep?: number
    /** Number of columns for row-based stagger (used with variant="shift"). Set to 0 for sequential stagger. */
    staggerColumns?: number
    /** Animation variant: "shift" = from left (for cards), "rise" = from below (default) */
    variant?: AnimationVariant
    as?: React.ElementType
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
    as: Component = "div"
}: ScrollRevealProps) {
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const el = ref.current
        if (!el) return

        const hidden = hiddenClass[variant]
        const visible = visibleClass[variant]

        if (stagger) {
            // Animate direct children individually
            const children = Array.from(el.children) as HTMLElement[]
            const isMobile = window.matchMedia("(max-width: 759px)").matches

            children.forEach((child, i) => {
                // Column-based stagger for grids, sequential for everything else
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
            // Animate the element itself
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
    }, [delay, threshold, stagger, staggerStep, staggerColumns, variant])

    return (
        <Component ref={ref} className={cn(className)}>
            {children}
        </Component>
    )
}
