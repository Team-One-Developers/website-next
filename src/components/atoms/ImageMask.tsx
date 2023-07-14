import { forwardRef, ReactNode } from 'react'
import { twJoin } from 'tailwind-merge'

import "./Mask.css"


interface ImageMaskProps {
  children: ReactNode
  className?: string
}

export const ImageMask = forwardRef<HTMLDivElement, ImageMaskProps>(
  function IMWrapper({ children, className, ...rest }: ImageMaskProps, ref) {
    return (
      <div
        ref={ref}
        className={twJoin('mask inline-block', className)}
        {...rest}
      >
        {children}
      </div>
    )
  }
)
