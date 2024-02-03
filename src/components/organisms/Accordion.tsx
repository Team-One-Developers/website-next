"use client"

import { useEffect, useState } from "react"
import { twMerge } from "tailwind-merge"
import Typography from "../atoms/Typography"

interface AccordionProps {
    allOpen: boolean
    counter: string
    headline: string
    text: string
}

export const Accordion = (props: AccordionProps) => {
    const { allOpen, counter, headline, text } = props

    const [open, setOpen] = useState(allOpen)

    useEffect(() => {
        setOpen(allOpen)
    }, [allOpen])

    return (
        <details
            className={twMerge(
                "group relative cursor-pointer overflow-hidden border-t-2 mt-0 border-white p-2 text-white last:border-b-2 hover:bg-t1-darkGray md:p-4",
                open ? "text-primary py-9" : "hover:py-9 hover:text-primary"
            )}
            open={open}
            style={{ transition: "all 0.25s ease-in-out" }}
            defaultChecked={allOpen}
            onClick={(event) => {
                event.preventDefault()
                setOpen(!open)
            }}
        >
            <summary className="flex list-none list-image-none flex-col md:flex-row">
                <Typography className="mb-[10px] block md:w-[6.6%] text-white" variant="paragraph">
                    {counter}
                </Typography>
                <Typography as="h3" variant="h1" className="text-inherit mb-0" style={{ transition: "0.25s" }}>
                    {headline}
                </Typography>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="228.99 210.87 137.3 173.53"
                    fill="currentColor"
                    className={twMerge(
                        "absolute left-[2.5%] w-[100px] translate-y-[100%] -rotate-[10deg] text-primary opacity-0",
                        !open &&
                            "2xl:group-hover:translate-y-[10%] 2xl:group-hover:-rotate-[10deg] 2xl:group-hover:opacity-100"
                    )}
                    style={{
                        transition: "all 0.25s ease-in-out"
                    }}
                >
                    <path d="M347.7 228.15c-12.4-11.52-29.08-17.28-50.06-17.28s-37.66 5.76-50.06 17.28c-12.4 11.52-18.59 28.01-18.59 49.46v40.05c0 21.45 6.2 37.94 18.59 49.46 12.4 11.52 29.08 17.28 50.06 17.28s37.66-5.76 50.06-17.28c12.4-11.52 18.59-28.01 18.59-49.46v-40.05c0-21.45-6.2-37.94-18.59-49.46Zm-40.19 39.91-13.68 20.47v2.32h13.68v60.06h-19.5v-82.86h-25.19v-16.71h69.89v16.71h-25.2Z" />
                </svg>
            </summary>

            <Typography
                variant="paragraph"
                className="m-0 mt-4 text-base text-white md:ml-[6.6%] md:text-xl lg:w-[40%]"
            >
                {text}
            </Typography>
        </details>
    )
}