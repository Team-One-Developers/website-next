import { ReactNode } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

import { cn } from '@/lib/utils'

export const typographyVariants = tv({
  base: 'm-0 mb-4 not-italic tracking-tinyBitTighter',
  variants: {
    variant: {
      text_sm: 'font-ABCDiatypeRegular font-normal text-base leading-144',
      text_lg:
        'font-ABCDiatypeRegular font-normal text-xl md:text-2xl leading-150 ',
      text_xl:
        'font-SpaceGroteskRegular font-normal  text-2xl md:text-2.5xl lg:text-3.5xl leading-130',
      subtitle: 'font-SpaceGroteskMedium font-medium text-xs leading-110',
      subtitle_lg: 'font-SpaceGroteskMedium font-medium text-base leading-110',
      h1: 'uppercase font-SpaceGroteskRegular font-medium text-6xl md:text-8xl leading-115 ',
      h2: 'uppercase font-SpaceGroteskRegular font-normal text-2xl md:text-3.5xl lg:text-5xl leading-115',
      h2_sm:
        'uppercase font-SpaceGroteskRegular font-normal  text-xl md:text-2.5xl lg:text-4.5xl leading-115',
      h2_bold:
        'uppercase font-SpaceGroteskRegular font-medium text-2.5xl md:text-5xl lg:text-6xl leading-110',
      h3: 'uppercase font-SpaceGroteskRegular font-medium text-2.5xl md:text-5xl leading-110',
      h4: 'font-SpaceGroteskRegular font-medium text-3.5xl leading-110',
      h5: 'font-SpaceGroteskRegular font-medium text-xl leading-110',
      cta_button: 'font-SpaceGroteskRegular font-normal text-sm leading-84',
      paragraph_label:
        'font-SpaceGroteskRegular font-semibold text-base leading-144',
      sub_column: 'font-SpaceGroteskRegular font-medium text-sm leading-110',
      changing_words:
        'font-SpaceGroteskRegular font-normal text-6xl md:text-8xl lg:text-10xl leading-97',
      changing_words_sm:
        'font-SpaceGroteskRegular font-medium text-xs leading-110',
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
