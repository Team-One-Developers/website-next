import { ReactNode } from 'react'

import { twJoin } from 'tailwind-merge'

interface FullWidthSectionContainerProps {
  marginTopClassName?: string
  children: ReactNode
  className?: string
}

export const FullWidthSectionContainer = (
  props: FullWidthSectionContainerProps
) => {
  const { children, marginTopClassName = 'mt-8', className } = props

  return (
    <div className={twJoin(marginTopClassName, 'block pl-0 pr-0', className)}>
      {children}
    </div>
  )
}
