import { forwardRef, ReactNode } from 'react'
import { twJoin } from 'tailwind-merge'
import Mask from './Mask.module.css'


interface ImageMaskProps {
  children: ReactNode
  position?: 'center' | 'top'
  className?: string
}

export const ImageMask = forwardRef<HTMLDivElement, ImageMaskProps>(
  function IMWrapper(props: ImageMaskProps, ref) {
    const { children, position = 'center', className } = props
    return (
      <div ref={ref} className={twJoin('inline-block',Mask.testing, className)}>
        {children}
      </div>
    )
  }
)
