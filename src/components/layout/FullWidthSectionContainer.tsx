import { ReactNode } from "react"
import { twMerge } from "tailwind-merge"

interface FullWidthSectionContainerProps {
    children: ReactNode
    className?: string
}

export const FullWidthSectionContainer = ({ children, className }: FullWidthSectionContainerProps) => {
    return <div className={twMerge("mt-8 block pl-0 pr-0", className)}>{children}</div>
}
