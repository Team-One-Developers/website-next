import React, { forwardRef } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

export const buttonVariants = tv({
  base: 'w-full rounded-sm cursor-pointer border-none hover:shadow-t1glow px-[22px] py-4 font-spacegrotesk uppercase tracking-normal outline-none md:w-auto',
  variants: {
    color: {
      primary: 'bg-primary text-t1-darkGray hover:brightness-[120%]',
      secondary: 'bg-black text-primary hover:brightness-[140%] ',
    },
    size: {
      md: 'text-[14px] md:px-[14px] md:py-[10px] leading-[100%]',
      lg: 'text-[16px] md:px-5 md:py-3',
    },
  },
  defaultVariants: {
    color: 'primary',
    size: 'md',
  },
})

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'color'>,
    VariantProps<typeof buttonVariants> {}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, color, size, children, ...props }, ref) => {
    return (
      <button
        className={buttonVariants({ color, size, className })}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'
