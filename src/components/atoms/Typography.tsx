import { ReactNode } from "react"
import { twMerge } from "tailwind-merge"
import { tv, VariantProps } from "tailwind-variants"

export const typographyVariants = tv({
    // base: "not-italic tracking-tinyBitTighter",
    variants: {
        variant: {
            h1: "text-3xl lg:text-5xl font-normal leading-110 font-spacegrotesk uppercase",
            h2: "text-2xl lg:text-4xl font-medium leading-110 font-spacegrotesk",
            h3: "text-xl lg:text-3xl font-medium leading-110 font-spacegrotesk",
            h4: "text-lg lg:text-2xl font-medium leading-110 font-spacegrotesk",
            h5: "text-base lg:text-xl font-medium leading-110 font-spacegrotesk",
            h6: "text-sm lg:text-lg font-medium leading-110 font-spacegrotesk",
            link: "text-base hover:text-primary font-abcdiatype",
            subtitle: "text-lg leading-6 font-medium font-abcdiatype",
            paragraph: "font-abcdiatype text-base font-normal leading-140",
            description: "font-abcdiatype text-xs leading-110 font-normal"
        }
    },
    defaultVariants: {
        variant: "paragraph"
    }
})

export interface TypographyProps extends VariantProps<typeof typographyVariants> {
    children: ReactNode
    className?: string
    style?: Object
    as?: any
    onClick?: () => void
}

export function Typography({ as, variant, children, className, style, onClick }: TypographyProps) {
    const Component = as || "p"

    return (
        <Component style={style} className={twMerge(typographyVariants({ variant }), className)} onClick={onClick}>
            {children}
        </Component>
    )
}

export default Typography
