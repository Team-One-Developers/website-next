import { ReactNode } from 'react'

import clsx from 'clsx'

interface CopyProps {
  children: ReactNode
  className: string
}

export const Copy = (props: CopyProps) => {
  const { children, className } = props

  return (
    <p
      className={clsx('m-0 mb-4 inline-block font-light leading-5', className)}
    >
      {children}
    </p>
  )
}

export default Copy
