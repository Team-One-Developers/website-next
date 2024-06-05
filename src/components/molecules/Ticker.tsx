"use client"

import { PAGE_THEME } from "@/constants"
import { PageTheme } from "@/types"
import Marquee from "react-fast-marquee"
import { twJoin } from "tailwind-merge"
import { useMediaQuery } from "usehooks-ts"
import { Image } from "../atoms/Image"

interface TickerProps {
    theme: PageTheme
    text?: string
    speed?: number
    textClassName?: string | undefined
    includeLogo?: boolean
    className?: string
}

export const Ticker = (props: TickerProps) => {
    const { text = "Team One Developers", speed = 300, includeLogo = true, theme, className, textClassName } = props
    const marqueeItems: any[] = []

    const isLg = useMediaQuery("(min-width: 992px)")

    Array.from(Array(10).keys()).forEach((key) => {
        marqueeItems.push(
            <div className="flex items-center overflow-hidden" aria-hidden aria-disabled key={key}>
                <p
                    className={twJoin(
                        " font-spacegrotesk text-[82px] font-normal uppercase leading-none -tracking-[0.01em] sm:text-[120px] md:text-[175px]",
                        textClassName ? textClassName : theme === PAGE_THEME.dark ? "text-t1-darkGray" : "text-primary"
                    )}
                >
                    {text}
                </p>
                {includeLogo === true ? (
                    <div className="mx-[60px] my-0">
                        <Image
                            src={
                                theme === PAGE_THEME.dark
                                    ? "/images/logo/t1d-sticker-darkgray.svg"
                                    : "/images/logo/t1d-sticker-neongreen.svg"
                            }
                            alt="Team One Developers Logo"
                            height={80}
                            width={63}
                        />
                    </div>
                ) : (
                    <div
                        className={twJoin(
                            "mx-[75px] text-[82px]",
                            textClassName
                                ? textClassName
                                : theme === PAGE_THEME.dark
                                  ? "text-t1-darkGray"
                                  : "text-primary"
                        )}
                    >
                        •
                    </div>
                )}
            </div>
        )
    })

    return (
        <aside>
            <Marquee
                className={twJoin("mx-0 my-16 flex min-w-full shrink-0 grow-0 basis-auto select-none", className)}
                speed={isLg ? speed : speed / 3}
                gradient={false}
                aria-disabled
            >
                {marqueeItems}
            </Marquee>
        </aside>
    )
}
