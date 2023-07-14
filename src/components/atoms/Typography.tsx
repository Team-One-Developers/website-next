import { ReactNode } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

import { cn } from '@/lib/utils'

export const typographyVariants = tv({
  base: 'm-0 mb-4 not-italic tracking-tinyBitTighter',
  variants: {
    variant: {
      text_sm: 'font-ABCDiatypeRegular font-normal leading-144 text-base',
      text_lg:
        'font-ABCDiatypeRegular font-normal leading-150 text-xl md:text-2xl',
      text_xl:
        'font-SpaceGroteskRegular font-normal leading-130 text-2xl md:text-2.5xl lg:text-3.5xl',
      text_topline: 'font-SpaceGroteskRegular font-medium leading-110 text-2xs',
      text_topline_lg:
        'font-SpaceGroteskRegular font-medium leading-110 text-base',
      h1: 'uppercase font-SpaceGroteskRegular font-medium leading-115 text-6xl md:text-8xl',
      h2: 'uppercase font-SpaceGroteskRegular font-normal leading-115 text-2xl md:text-5xl lg:text-6xl',
      h2_sm:
        'uppercase font-SpaceGroteskRegular font-normal leading-115 text-xl md:text-2.5xl lg:text-4.5xl',
      h2_bold:
        'uppercase font-SpaceGroteskRegular font-medium leading-110 text-2.5xl md:text-5xl lg:6xl',
      h3: 'uppercase font-SpaceGroteskRegular font-medium leading-110 text-2.5xl md:text-5xl',
      h4: 'font-SpaceGroteskRegular font-medium leading-110 text-3.5xl',
      h5: 'font-SpaceGroteskRegular font-medium leading-110 text-xl',
      cta_button: 'font-SpaceGroteskRegular font-normal leading-84 text-sm',
      paragraph_label:
        'font-SpaceGroteskRegular font-semibold leading-144 text-base',
      sub_column: 'font-SpaceGroteskRegular font-medium leading-110 text-sm',
      changing_words:
        'font-SpaceGroteskRegular font-normal leading-97 text-6xl md:text-8xl lg:text-10xl',
      changing_words_sm:
        'font-SpaceGroteskRegular font-medium leading-110 text-xs',
    },
  },
  defaultVariants: {
    variant: 'text_sm',
  },
})

export interface TypographyProps
  extends VariantProps<typeof typographyVariants> {
  children: ReactNode
  className?: string
  style?: Object
  as?: any
  onClick?: () => void
}

export function Typography({
  as,
  variant,
  children,
  className,
  style,
  onClick,
}: TypographyProps) {
  const Component = as || 'p'

  return (
    <Component
      style={style}
      className={cn(typographyVariants({ variant }), className)}
      onClick={onClick}
    >
      {children}
    </Component>
  )
}

export default Typography
