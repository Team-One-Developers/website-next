import { ReactNode } from "react"
import { twJoin } from "tailwind-merge"

type TwoColumnsSectionContainerProps = {
    left: ReactNode
    right: ReactNode
    leftXLWidthClass?: string
    rightXLWidthClass?: string
    backgroundColorClass?: string
    className?: string
}

export const TwoColumnsSectionContainer = (props: TwoColumnsSectionContainerProps) => {
    const {
        left,
        right,
        leftXLWidthClass = "xl:w-full",
        rightXLWidthClass = "xl:w-full",
        backgroundColorClass = "bg-transparent",
        className
    } = props

    return (
        <div
            className={twJoin(
                "box-border block grid-cols-[1fr] grid-rows-[0.5fr_1fr] gap-x-8 gap-y-0 lg:grid lg:grid-cols-[1fr_1fr] lg:grid-rows-[1fr] lg:pl-0 lg:pr-0",
                backgroundColorClass,
                className
            )}
        >
            {left && <div className={twJoin("grid h-full w-full pb-8 pt-8", leftXLWidthClass)}>{left}</div>}

            {right && (
                <div className={twJoin("grid h-full w-full pb-8 pt-8", rightXLWidthClass)}>
                    <div>{right}</div>
                </div>
            )}
        </div>
    )
}
