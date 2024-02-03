import React, { forwardRef } from "react"
import { tv, VariantProps } from "tailwind-variants"

export const buttonVariants = tv({
    base: "w-full md:w-auto flex md:inline-flex justify-center rounded-sm cursor-pointer font-spacegrotesk uppercase hover:shadow-t1glow hover:brightness-[85%] transition-colors duration-[250ms] px-3.5 py-2.5",
    variants: {
        color: {
            primary: "bg-primary text-t1-darkGray hover:brightness-[85%]",
            secondary: "bg-black text-primary hover:brightness-[85%] "
        },
        size: {
            md: "text-[16px]",
            lg: "text-[16px] md:px-5 md:py-3"
        }
    },
    defaultVariants: {
        color: "primary",
        size: "md"
    }
})

export interface ButtonProps
    extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "color">,
        VariantProps<typeof buttonVariants> {}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, color, size, children, ...props }, ref) => {
        return (
            <button type="button" className={buttonVariants({ color, size, className })} ref={ref} {...props}>
                {children}
            </button>
        )
    }
)

Button.displayName = "Button"
