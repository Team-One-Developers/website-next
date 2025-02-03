import cn from "@/lib/cn"
import { default as NextLink } from "next/link"
import React, { forwardRef, ReactNode } from "react"
import { tv, VariantProps } from "tailwind-variants"

export const linkVariants = tv({
    base: "flex w-full cursor-pointer justify-center rounded-sm px-3.5 py-2.5 font-spacegrotesk uppercase transition-colors duration-[250ms] hover:brightness-[85%] md:inline-flex md:w-auto",
    variants: {
        color: {
            primary: "bg-primary text-t1-darkGray hover:shadow-t1glow",
            secondary: "bg-black text-primary hover:shadow-t1glow",
            transparent: "bg-transparent"
        },
        size: {
            md: "text-[16px]",
            lg: "text-[16px]"
        }
    },
    defaultVariants: {
        color: "primary",
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
    ({ className, color, size, label, href, ...props }, ref) => (
        <NextLink ref={ref} href={href} className={cn(linkVariants({ color, size }), className)} {...props}>
            {label}
        </NextLink>
    )
)

Link.displayName = "Link"
