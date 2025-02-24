import cn from "@/lib/cn"
import { ReactNode } from "react"

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
            className={cn(
                "box-border grid w-full grid-cols-1 justify-center gap-8 bg-transparent px-[2vw] py-8 md:grid-cols-2",
                className
            )}
        >
            <div>
                <div className={cn("w-full", leftComponentClass)}>{left}</div>
            </div>
            <div className="flex items-center">
                <div className={cn("w-full", rightComponentClass)}>{right}</div>
            </div>
        </div>
    )
}
