import { ReactNode } from "react"
import { twMerge } from "tailwind-merge"

type CenteredSectionContainerProps = {
    left: ReactNode
    right: ReactNode
    className?: string
    leftComponentClass?: string
    rightComponentClass?: string
}

export const CenteredSectionContainer = ({
    left,
    right,
    className,
    leftComponentClass,
    rightComponentClass
}: CenteredSectionContainerProps) => {
    return (
        <div
            className={twMerge(
                "box-border grid w-full grid-cols-1 bg-transparent justify-center gap-8 px-[2vw] py-8 md:grid-cols-2",
                className
            )}
        >
            <div>
                <div className={twMerge("w-full", leftComponentClass)}>{left}</div>
            </div>
            <div className="flex items-center">
                <div className={twMerge("w-full", rightComponentClass)}>{right}</div>
            </div>
        </div>
    )
}
