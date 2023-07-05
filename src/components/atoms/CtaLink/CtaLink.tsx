import { FONT_CONFIGS } from '@/constants'
import Link from 'next/link'
import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

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
        'inline-block',
        FONT_CONFIGS.cta_button,
        'uppercase',
        variant === 'black'
          ? 'bg-t1-black text-t1-green'
          : 'bg-t1-green text-t1-darkGray',
        'md:text-[align:initial] w-full rounded-sm px-0 py-[0.625rem] text-center md:w-[initial] md:px-4'
      )}
      href={href}
    >
      {children}
    </Link>
  )
}
