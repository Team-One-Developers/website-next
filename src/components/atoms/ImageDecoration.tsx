import { ReactNode } from "react"
import { tv, VariantProps } from "tailwind-variants"

export const imageDecorationVariants = tv({
    base: "absolute z-[10] w-[70px] sm:w-[100px]  lg:w-[100px]",
    variants: {
        position: {
            "bottom-left": "bottom-[5%] left-[5%] sm:bottom-[5%] sm:left-[5%]",
            "bottom-right": "bottom-[5%] right-[5%] sm:bottom-[10%] sm:right-[10%]",
            "top-left": "left-[5%] top-[5%] sm:left-[5%] sm:top-[5%]",
            "top-right": "right-[5%] top-[5%] sm:right-[5%] sm:top-[5%]"
        }
    },
    defaultVariants: {
        position: "bottom-right"
    }
})

interface ImageDecorationProps extends VariantProps<typeof imageDecorationVariants> {
    element: ReactNode
    children?: ReactNode
    className?: string
}

export const ImageDecoration = ({ position, element, children, className }: ImageDecorationProps) => {
    return (
        <div className="relative w-full">
            <div className={imageDecorationVariants({ position, className })}>{element}</div>
            {children}
        </div>
    )
}
