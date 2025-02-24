import cn from "@/lib/cn"
import { default as NextLink } from "next/link"
import React, { forwardRef, ReactNode } from "react"
import { tv, VariantProps } from "tailwind-variants"

export const linkVariants = tv({
    base: "flex w-full cursor-pointer justify-center rounded-[5px] font-medium px-7 py-3 font-spacegrotesk uppercase transition-colors duration-[250ms] hover:brightness-[85%] md:inline-flex md:w-auto",

    variants: {
        variant: {
            outline: "border",
            solid: "",
            ghost: ""
        },
        color: {
            primary: "bg-primary text-t1-darkGray",
            black: "bg-black text-primary",
            white: "bg-white text-black"
        },
        size: {
            md: "text-[16px]",
            lg: "text-[16px] md:px-5 md:py-3"
        }
    },
    compoundVariants: [
        {
            variant: "outline",
            color: "primary",
            className: "border-primary text-primary bg-transparent"
        },
        {
            variant: "outline",
            color: "black",
            className: "border-black text-black bg-transparent"
        },
        {
            variant: "outline",
            color: "white",
            className: "border-white text-white bg-transparent"
        },
        {
            variant: "ghost",
            color: "primary",
            className: "bg-transparent text-primary hover:bg-primary/10 "
        },
        {
            variant: "ghost",
            color: "black",
            className: "bg-transparent text-black hover:bg-black/10"
        },
        {
            variant: "ghost",
            color: "white",
            className: "bg-transparent text-white hover:bg-black/ "
        }
    ],
    defaultVariants: {
        color: "primary",
        variant: "solid",
        size: "md"
    }
})

export interface ButtonProps
    extends Omit<React.LinkHTMLAttributes<HTMLAnchorElement>, "color">,
        VariantProps<typeof linkVariants> {
    label: string | ReactNode
    href: string
}

export const Link = forwardRef<HTMLAnchorElement, ButtonProps>(
    ({ className, color, size, variant, label, href, ...props }, ref) => (
        <NextLink ref={ref} href={href} className={cn(linkVariants({ color, size, variant }), className)} {...props}>
            {label}
        </NextLink>
    )
)

Link.displayName = "Link"
