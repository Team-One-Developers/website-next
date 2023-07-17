import { ReactNode } from 'react'
import NextLink, { LinkProps as NextLinkProps } from 'next/link'
import { tv, VariantProps } from 'tailwind-variants'

import Typography from './Typography'

export const linkVariants = tv({
  base: 'inline-block md:text-[align:initial] w-full rounded-sm px-0 py-[0.625rem] text-center md:w-[initial] md:px-4',
  variants: {
    variant: {
      primary: 'bg-t1-black text-t1-green',
      secondary: 'bg-t1-green text-t1-darkGray',
    },
    mode: {
      cta: 'uppercase',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
})

export interface LinkProps
  extends VariantProps<typeof linkVariants>,
    NextLinkProps {
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
        className: className,
      })}
      href={href}
    >
      <Typography variant="cta_button">{children}</Typography>
    </NextLink>
  )
}
