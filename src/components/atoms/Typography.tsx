import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'
import { tv, VariantProps } from 'tailwind-variants'

export const typographyVariants = tv({
  base: 'm-0 not-italic tracking-tinyBitTighter font-spacegrotesk',
  variants: {
    variant: {
      text_xs: 'font-abcdiatype font-normal text-xs leading-144',
      text_sm: 'font-abcdiatype font-normal text-base leading-144',
      text_lg: 'font-abcdiatype font-normal text-xl md:text-2xl leading-150 ',
      text_xl: 'font-normal  text-2xl md:text-2.5xl lg:text-3.5xl leading-130',
      subtitle: 'font-medium text-xs leading-110',
      subtitle_lg: 'font-medium text-base leading-110',
      h1: 'uppercase font-medium text-6xl md:text-8xl leading-115 ',
      h2: 'uppercase font-normal text-2xl md:text-3.5xl lg:text-5xl leading-115',
      h2_sm:
        'uppercase font-normal  text-xl md:text-2.5xl lg:text-4.5xl leading-115',
      h2_bold:
        'uppercase font-medium text-2.5xl md:text-5xl lg:text-6xl leading-110',
      h3: 'uppercase font-medium text-2.5xl md:text-5xl leading-110',
      h4: 'font-medium text-3.5xl leading-110',
      h5: 'font-medium text-xl leading-110',
      cta_button: 'font-normal text-sm leading-84',
      paragraph_label: 'font-semibold text-base leading-144',
      sub_column: 'font-medium text-sm leading-110',
      changing_words:
        'font-normal text-6xl md:text-8xl lg:text-10xl leading-97',
      changing_words_sm: 'font-medium text-xs leading-110',
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
      className={twMerge(typographyVariants({ variant }), className)}
      onClick={onClick}
    >
      {children}
    </Component>
  )
}

export default Typography
