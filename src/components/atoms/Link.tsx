import { default as NextLink } from "next/link"
import React, { forwardRef, ReactNode } from "react"
import { twMerge } from "tailwind-merge"
import { tv, VariantProps } from "tailwind-variants"

export const linkVariants = tv({
    base: "w-full md:w-auto flex md:inline-flex justify-center rounded-sm cursor-pointer font-spacegrotesk uppercase hover:brightness-[85%] transition-colors duration-[250ms] px-3.5 py-2.5",
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
        <NextLink ref={ref} href={href} className={twMerge(linkVariants({ color, size }), className)} {...props}>
            {label}
        </NextLink>
    )
)

Link.displayName = "Link"
