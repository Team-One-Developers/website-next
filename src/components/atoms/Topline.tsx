import { ReactNode } from 'react'

import { twJoin } from 'tailwind-merge'

interface TopLineProps {
  colorClassName: string
  opacity?: number
  variant?: 'l' | 'sm'
  uppercase?: boolean
  children: ReactNode
  fontDefaults?: string
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
    fontDefaults,
  } = props

  return (
    <span
      className={twJoin(
        'font-SpaceGroteskMedium',
        uppercase && 'uppercase',
        variant === 'sm' ? 'text-[11px]' : 'text-[16px]',
        colorClassName,
        fontDefaults,
        className
      )}
      style={{ opacity: opacity }}
    >
      {children}
    </span>
  )
}
