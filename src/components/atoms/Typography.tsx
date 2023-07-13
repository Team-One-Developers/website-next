import { ReactNode } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

import { cn } from '@/lib/utils'

export const typographyVariants = tv({
  base: 'm-0 mb-4 inline-block font-light leading-[1.25em]',
  variants: {
    variant: {
      subtitle: "",
      p: "",
      h1: "",
      h2: "",
      h3: "",
      h4: "",
      h5: "",
      h6: "",
    },
    size: {
      sm: 'font-ABCDiatypeRegular text-sm',
      md: 'font-ABCDiatypeRegular text-base',
      lg: 'font-ABCDiatypeRegular text-2xl',
      xl: 'font-SpaceGroteskRegular text-4xl',
    },
    as: {},
  },
  defaultVariants: {
    variant: "p"
  },
})

interface TypographyProps extends VariantProps<typeof typographyVariants> {
  children: ReactNode
  className: string
  fontDefaults?: string
  as: any
}

export function Typography({
  as,
  size,
  fontDefaults,
  children,
  className,
}: TypographyProps) {
  const Component = as || 'p'

  return (
    <Component
      className={cn(typographyVariants({ size }), fontDefaults, className)}
    >
      {children}
    </Component>
  )
}

export default Typography
