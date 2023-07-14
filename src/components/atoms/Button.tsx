import React, { forwardRef } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

export const buttonVariants = tv({
  base: 'w-full cursor-pointer rounded-sm border-none px-[22px] py-4 font-SpaceGroteskRegular uppercase tracking-normal outline-none md:w-auto',
  variants: {
    color: {
      black: 'bg-t1-black text-t1-green',
      neongreen: 'bg-t1-green text-t1-darkGray',
    },
    size: {
      md: 'text-[14px] md:px-[14px] md:py-[10px]',
      lg: 'text-[16px] md:px-5 md:py-3',
    },
  },
  defaultVariants: {
    color: 'neongreen',
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
        className={(buttonVariants({ color, size, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'