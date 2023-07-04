import { ReactNode } from 'react'

import clsx from 'clsx'

interface CopyProps {
  children: ReactNode
  className: string
  textSize?: 'xl' | 'l' | 'sm'
}

export const Copy = (props: CopyProps) => {
  const { children, className, textSize } = props

  return (
    <p
      className={clsx(
        'm-0 mb-4 inline-block font-light leading-5',
        textSize === 'sm' && 'font-ABCDiatypeRegular text-base',
        textSize === 'l' && 'font-ABCDiatypeRegular text-2xl',
        textSize === 'xl' && 'font-SpaceGroteskRegular text-4xl',
        className
      )}
    >
      {children}
    </p>
  )
}

export default Copy
