import cn from "@/utils/cn"
import { ElementType, ReactNode } from "react"
import { tv, VariantProps } from "tailwind-variants"

export const typographyVariants = tv({
    variants: {
        variant: {
            h1: "wrap-break-word font-spacegrotesk text-4xl xs:text-5xl font-normal uppercase sm:text-6xl font-medium",
            h2: "wrap-break-word font-spacegrotesk text-3xl xs:text-4xl font-medium uppercase sm:text-5xl font-bold",
            h3: "wrap-break-word font-spacegrotesk text-2xl xs:text-3xl font-medium uppercase sm:text-4xl font-bold",
            h4: "wrap-break-word font-spacegrotesk text-xl xs:text-xl font-medium uppercase sm:text-3xl font-bold",
            h5: "wrap-break-word font-spacegrotesk text-lg xs:text-xl font-medium uppercase sm:text-2xl font-bold",
            h6: "wrap-break-word font-spacegrotesk text-base xs:text-lg font-medium uppercase sm:text-xl",
            link: "font-abcdiatype text-lg underline cursor-pointer sm:text-xl",
            subtitle: "font-abcdiatype text-lg font-medium sm:text-xl",
            paragraph: "font-abcdiatype text-lg font-normal"
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
    const headingVariants = ["h1", "h2", "h3", "h4", "h5", "h6"] as const

    function isHeadingVariant(v: unknown): v is (typeof headingVariants)[number] {
        return typeof v === "string" && (headingVariants as readonly string[]).includes(v)
    }

    const Component: ElementType = as ? as : isHeadingVariant(variant) ? variant : "p"

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
