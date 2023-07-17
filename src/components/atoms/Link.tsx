import { ReactNode } from 'react'
import NextLink, { LinkProps as NextLinkProps } from 'next/link'
import { FONT_CONFIGS } from '@/constants'
import { twMerge } from 'tailwind-merge'
import { tv, VariantProps } from 'tailwind-variants'

export const linkVariants = tv({
  base: 'inline-block md:text-[align:initial] w-full rounded-sm px-0 py-[0.625rem] text-center md:w-[initial] md:px-4',
  variants: {
    variant: {
      primary: 'bg-black text-primary',
      secondary: 'bg-primary text-t1-darkGray',
    },
    mode: {
      cta: 'uppercase',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
})

export interface LinkProps extends VariantProps<typeof linkVariants>, NextLinkProps {
  children: ReactNode
  className?: string
}

export const Link = ({
  href,
  children,
  variant,
  mode,
  className,
}: LinkProps) => {
  return (
    <NextLink
      className={linkVariants({
        variant,
        mode,
        className: twMerge(FONT_CONFIGS.cta_button, className),
      })}
      href={href}
    >
      {children}
    </NextLink>
  )
}
