"use client"

import { motion, useAnimation } from "framer-motion"
import { useEffect } from "react"
import { useInView } from "react-intersection-observer"

export const ArrowUpIcon = ({ className }: { className?: string }) => {
    const animation = useAnimation()
    const [ref, inView] = useInView({
        triggerOnce: true
    })

    const rectVariants = {
        hidden: { opacity: 0, scale: 0 },
        visible: { opacity: 1, scale: 1 }
    }

    const transition = { duration: 0.5, ease: "easeInOut" }

    const rects = [
        { y: "800", width: "200", height: "200" },
        { x: "200", y: "600", width: "200", height: "200" },
        { x: "400", y: "400", width: "200", height: "200" },
        { x: "600", y: "200", width: "200", height: "200" },
        { x: "800", width: "200", height: "200" },
        { x: "800", y: "200", width: "200", height: "200" },
        { x: "800", y: "400", width: "200", height: "200" },
        { x: "600", width: "200", height: "200" },
        { x: "400", width: "200", height: "200" }
    ]

    useEffect(() => {
        if (inView) {
            animation.start("visible")
            const interval = setInterval(() => {
                animation.start("hidden").then(() => animation.start("visible"))
            }, 10000)
            return () => clearInterval(interval)
        }
    }, [animation, inView])

    return (
        <svg
            className={className}
            width="1000"
            height="1000"
            viewBox="0 0 1000 1000"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            ref={ref}
            shapeRendering="crispEdges"
        >
            <title>ArrowUp</title>
            {rects.map((rect, index) => (
                <motion.rect
                    key={index}
                    {...rect}
                    variants={rectVariants}
                    initial="hidden"
                    animate={animation}
                    transition={{ ...transition, delay: 0.1 * index }}
                />
            ))}
        </svg>
    )
}
