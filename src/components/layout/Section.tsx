import cn from "@/utils/cn"
import { ReactNode } from "react"

export const Section = ({ children, className }: { children: ReactNode; className?: string }) => {
    return (
        // full width section with bg-color and padding
        <section className={cn("bg-t1-black relative z-0 overflow-x-hidden", className)}>
            {/* container with max content width */}
            <div className="mx-auto max-w-7xl px-6 2xl:px-0">{children}</div>
        </section>
    )
}

export default Section
