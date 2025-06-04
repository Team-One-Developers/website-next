import cn from "@/lib/cn"
import { ElementType, ReactNode } from "react"
import { tv, VariantProps } from "tailwind-variants"

export const typographyVariants = tv({
    variants: {
        variant: {
            h1: "font-spacegrotesk text-5xl font-normal uppercase sm:text-6xl font-medium",
            h2: "font-spacegrotesk text-4xl font-medium uppercase sm:text-5xl font-bold",
            h3: "font-spacegrotesk text-3xl font-medium uppercase sm:text-4xl font-bold",
            h4: "font-spacegrotesk text-2xl font-medium uppercase sm:text-3xl font-bold",
            h5: "font-spacegrotesk text-xl font-medium uppercase sm:text-2xl font-bold",
            h6: "font-spacegrotesk text-lg font-medium uppercase sm:text-xl",
            link: "font-abcdiatype text-lg underline cursor-pointer sm:text-xl",
            subtitle: "font-abcdiatype text-lg font-medium sm:text-xl",
            paragraph: "font-abcdiatype text-lg font-normal sm:text-xl"
        }
    },
    defaultVariants: {
        variant: "paragraph"
    }
})

export interface TypographyProps<V extends ElementType = ElementType> extends VariantProps<typeof typographyVariants> {
    as?: V
    children: ReactNode
    className?: string
    style?: React.CSSProperties
    id?: string
    onClick?: () => void
}

export function Typography<V extends ElementType = "p">({
    as,
    variant,
    children,
    className,
    style,
    id,
    onClick,
    ...props
}: TypographyProps<V> & Omit<React.ComponentPropsWithRef<V>, keyof TypographyProps>) {
    const Component = as || "p"

    return (
        <Component
            id={id}
            style={style}
            className={cn(typographyVariants({ variant }), className)}
            onClick={onClick}
            {...props}
        >
            {children}
        </Component>
    )
}

export default Typography
