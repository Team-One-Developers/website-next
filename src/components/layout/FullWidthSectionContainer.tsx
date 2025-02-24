import cn from "@/lib/cn"
import { ReactNode } from "react"

interface FullWidthSectionContainerProps {
    children: ReactNode
    className?: string
}

export const FullWidthSectionContainer = ({ children, className }: FullWidthSectionContainerProps) => {
    return <div className={cn("mt-8 block pl-0 pr-0", className)}>{children}</div>
}
