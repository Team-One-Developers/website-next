import { forwardRef, ReactNode } from 'react'
import { twJoin } from 'tailwind-merge'
import './Mask.css'
interface ImageMaskProps {
  children: ReactNode
  position?: 'center' | 'top'
  className?: string
}

export const ImageMask = forwardRef<HTMLDivElement, ImageMaskProps>(
  function IMWrapper(props: ImageMaskProps, ref) {
    const { children, position = 'center', className } = props
    return (
      <div ref={ref} className={twJoin('testing inline-block', className)}>
        {children}
      </div>
    )
  }
)
