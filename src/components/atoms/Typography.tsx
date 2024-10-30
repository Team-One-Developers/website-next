import { ReactNode } from "react"
import { twMerge } from "tailwind-merge"
import { tv, VariantProps } from "tailwind-variants"

export const typographyVariants = tv({
    variants: {
        variant: {
            h1: "font-spacegrotesk text-3xl font-normal uppercase leading-110 lg:text-5xl",
            h2: "font-spacegrotesk text-2xl font-medium uppercase leading-110 lg:text-4xl",
            h3: "font-spacegrotesk text-xl font-medium leading-110 lg:text-3xl",
            h4: "font-spacegrotesk text-lg font-medium leading-110 lg:text-2xl",
            h5: "font-spacegrotesk text-base font-medium leading-110 lg:text-xl",
            h6: "font-spacegrotesk text-sm font-medium leading-110 lg:text-lg",
            link: "font-abcdiatype text-base underline cursor-pointer",
            subtitle: "font-abcdiatype text-lg font-medium leading-6",
            paragraph: "font-abcdiatype text-base font-normal",
            description: "font-abcdiatype text-sm font-normal"
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
    id?: string
    onClick?: () => void
}

export function Typography({ as, variant, children, className, style, id, onClick, ...props }: TypographyProps) {
    const Component = as || "p"

    return (
        <Component
            id={id}
            style={style}
            className={twMerge(typographyVariants({ variant }), className)}
            onClick={onClick}
            {...props}
        >
            {children}
        </Component>
    )
}

export default Typography
