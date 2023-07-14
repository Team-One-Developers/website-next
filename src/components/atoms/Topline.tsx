import { ReactNode } from 'react'
import { twJoin } from 'tailwind-merge'

import Typography, { TypographyProps } from './Typography'

interface TopLineProps {
  colorClassName: string
  opacity?: number
  variant?: 'lg' | 'sm'
  uppercase?: boolean
  children: ReactNode
  fontVariant?: TypographyProps['variant']
  className?: string
}

export const TopLine = (props: TopLineProps) => {
  const {
    children,
    colorClassName,
    opacity = 1,
    variant = 'sm',
    uppercase = true,
    className = '',
    fontVariant,
  } = props

  return (
    <span
      className={twJoin(
        'font-SpaceGroteskMedium',
        uppercase && 'uppercase',
        variant === 'sm' ? 'text-[11px]' : 'text-[16px]',
        colorClassName,
        className
      )}
      style={{ opacity: opacity }}
    >
      <Typography variant={fontVariant}>{children}</Typography>
    </span>
  )
}
