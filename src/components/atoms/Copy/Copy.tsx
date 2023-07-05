import { ReactNode } from 'react'

import { twMerge } from 'tailwind-merge'

interface CopyProps {
  children: ReactNode
  className: string
  textSize?: 'xl' | 'l' | 'sm'
  fontDefaults?: string
}

export const Copy = (props: CopyProps) => {
  const { children, className, textSize, fontDefaults } = props

  return (
    <p
      className={twMerge(
        'm-0 mb-4 inline-block font-light leading-[1.25em]',
        textSize === 'sm' && 'font-ABCDiatypeRegular text-[1rem]',
        textSize === 'l' && 'font-ABCDiatypeRegular text-[1.5rem]',
        textSize === 'xl' && 'font-SpaceGroteskRegular text-[2.25rem]',
        fontDefaults,
        className
      )}
    >
      {children}
    </p>
  )
}

export default Copy
