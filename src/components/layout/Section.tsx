import cn from "@/utils/cn"
import { ReactNode } from "react"

interface SectionProps {
    fullWidth?: boolean
    className?: string
    children: ReactNode
}

export const Section = ({ children, className, fullWidth = false }: SectionProps) => {
    return (
        // full width section with bg-color and padding
        <section className={cn("bg-t1-black relative z-0 overflow-x-hidden", className)}>
            {/* container with max content width */}
            <div className={cn("mx-auto", fullWidth ? "max-w-[1800px]" : "max-w-7xl px-6 2xl:px-0")}>{children}</div>
        </section>
    )
}

export default Section
