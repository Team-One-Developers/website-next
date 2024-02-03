import { forwardRef, ReactNode } from "react"
import { twJoin } from "tailwind-merge"
import "./imageMask.css"

interface ImageMaskProps {
    children: ReactNode
    className?: string
}

export const ImageMask = forwardRef<HTMLDivElement, ImageMaskProps>(function Mask(
    { children, className, ...rest },
    ref
) {
    return (
        <div ref={ref} className={twJoin("image-mask", className)} {...rest}>
            {children}
        </div>
    )
})
