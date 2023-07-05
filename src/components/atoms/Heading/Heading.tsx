import { ReactElement, ReactNode } from 'react'

import { twJoin, twMerge } from 'tailwind-merge'

interface HeadingProps {
  tag: 'h1' | 'h2' | 'h3'
  fontDefaults?: string
  className?: string
  children: ReactNode
  colorClassName?: string
}

export const Heading = (props: HeadingProps): ReactElement => {
  const { children, tag, fontDefaults, className, colorClassName } = props

  if (tag === 'h1')
    return (
      <h1
        className={twMerge(
          'm-0 font-medium uppercase leading-[1]',
          fontDefaults
            ? fontDefaults
            : 'font-SpaceGroteskMedium text-[2.25rem] lg:text-[62px]',
          colorClassName ? colorClassName : 'text-theme-textColor',
          className
        )}
      >
        {children}
      </h1>
    )

  if (tag === 'h2')
    return (
      <h2
        className={twMerge(
          'm-0 uppercase leading-[1]',
          fontDefaults
            ? fontDefaults
            : 'font-SpaceGroteskMedium text-[2.25rem] lg:text-[62px]',
          colorClassName ? colorClassName : 'text-theme-textColor',
          className
        )}
      >
        {children}
      </h2>
    )

  //H3
  return (
    <h3
      className={twMerge(
        'm-0 text-[3rem] font-medium uppercase leading-[1]',
        fontDefaults,
        colorClassName ? colorClassName : 'text-theme-textColor',
        className
      )}
    >
      {children}
    </h3>
  )
}
