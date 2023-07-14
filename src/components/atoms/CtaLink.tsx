import { ReactNode } from 'react'
import Link from 'next/link'
import { twMerge } from 'tailwind-merge'

import Typography from './Typography'

export const CtaLink = ({
  href,
  children,
  variant = 'green',
}: {
  href: string
  children: ReactNode
  variant?: 'black' | 'green'
}) => {
  return (
    <Link
      className={twMerge(
        'inline-block uppercase',
        variant === 'black'
          ? 'bg-t1-black text-t1-green'
          : 'bg-t1-green text-t1-darkGray',
        'md:text-[align:initial] w-full rounded-sm px-0 py-[0.625rem] text-center md:w-[initial] md:px-4'
      )}
      href={href}
    >
      <Typography as="p" variant="cta_button">
        {children}
      </Typography>
    </Link>
  )
}
