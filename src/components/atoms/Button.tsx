import React, { forwardRef } from "react"
import { tv, VariantProps } from "tailwind-variants"

export const buttonVariants = tv({
    base: "flex w-full cursor-pointer justify-center rounded-[5px] font-medium px-7 py-3 font-spacegrotesk uppercase transition-colors duration-[250ms] hover:brightness-[85%] md:inline-flex md:w-auto",

    variants: {
        variant: {
            outline: "border",
            solid: ""
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
        }
    ],
    defaultVariants: {
        color: "primary",
        variant: "solid",
        size: "md"
    }
})

export interface ButtonProps
    extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "color">,
        VariantProps<typeof buttonVariants> {}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, color, size, variant, children, ...props }, ref) => {
        return (
            <button type="button" className={buttonVariants({ color, size, variant, className })} ref={ref} {...props}>
                {children}
            </button>
        )
    }
)

Button.displayName = "Button"
