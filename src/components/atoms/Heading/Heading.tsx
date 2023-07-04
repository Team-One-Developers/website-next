import { ReactNode } from 'react'

import clsx from 'clsx'

interface HeadingProps {
  tag: 'h1' | 'h2' | 'h3'
  fontDefaults?: string
  className?: string
  children: ReactNode
}

export const Heading = (props: HeadingProps) => {
  const { children, tag, fontDefaults, className } = props

  if (tag === 'h1')
    return (
      <h1
        className={clsx(
          'm-0 font-medium uppercase text-theme-textColor',
          fontDefaults
            ? fontDefaults
            : 'font-SpaceGroteskMedium text-4xl lg:text-[62px]',
          className
        )}
      >
        {children}
      </h1>
    )

  if (tag === 'h2')
    return (
      <h2
        className={clsx(
          'm-0 uppercase text-theme-textColor ',
          fontDefaults
            ? fontDefaults
            : 'font-SpaceGroteskMedium text-4xl lg:text-[62px]',
          className
        )}
      >
        {children}
      </h2>
    )

  if (tag === 'h3')
    return (
      <h3
        className={clsx(
          'm-0 text-5xl font-medium uppercase text-theme-textColor',
          fontDefaults,
          className
        )}
      >
        {children}
      </h3>
    )
}
