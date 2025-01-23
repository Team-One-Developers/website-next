"use client"

import { motion } from "framer-motion"
import { ComponentProps, useEffect, useLayoutEffect, useRef, useState } from "react"
import { twJoin } from "tailwind-merge"
import Typography, { TypographyProps } from "../atoms/Typography"

type ChangingWordsProps = {
    words: string[]
    delay?: number
    className?: string
    variant?: TypographyProps["variant"]
    type?: "overview" | "section"
}

export const ChangingWords = ({
    words,
    delay = 2000,
    className,
    type = "overview",
    variant = "h1"
}: ChangingWordsProps) => {
    const listItemsRefs: ComponentProps<any> = useRef<Array<HTMLLIElement>>([])
    const listRef = useRef<HTMLUListElement | null>(null)
    const [activeListItemIndex, setActiveListItemIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveListItemIndex((value) => {
                if (value === words.length - 1) {
                    return 0
                } else {
                    return value + 1
                }
            })
        }, delay)

        return () => {
            clearInterval(interval)
        }
    }, [delay, words])

    const [dimensions, setDimensions] = useState<{
        width: number
        height: number
    }>({
        width: 0,
        height: 0
    })

    useLayoutEffect(() => {
        const activeListItemRef = listItemsRefs.current[activeListItemIndex]

        if (activeListItemRef) {
            setDimensions({
                width: activeListItemRef.querySelector("span")?.getBoundingClientRect().width || 0,
                height: activeListItemRef.getBoundingClientRect().height
            })
        }
    }, [activeListItemIndex, words])

    const wordList = (
        <motion.ul
            aria-hidden={true}
            className={twJoin("pointer-events-none overflow-hidden")}
            style={{
                width: dimensions.width,
                height: dimensions.height,
                transition: "width 400ms"
            }}
            ref={listRef}
        >
            {words.map((wordString, index) => (
                <motion.li
                    className="whitespace-nowrap"
                    animate={{
                        y: `-${activeListItemIndex * dimensions.height}px`
                    }}
                    transition={{ duration: 0.5 }}
                    key={index}
                    ref={(listItemRef) => listItemsRefs.current.push(listItemRef)}
                >
                    <span>{wordString}</span>
                </motion.li>
            ))}
        </motion.ul>
    )

    return (
        <Typography
            as="span"
            className={twJoin(
                "flex items-center justify-center uppercase",
                type === "section"
                    ? 'gap-2 before:content-["▾"]'
                    : 'items-center justify-center before:z-30 before:content-["("] after:z-30 after:content-[")"] sm:gap-2 lg:gap-16',
                className
            )}
            variant={variant}
        >
            {wordList}
        </Typography>
    )
}
