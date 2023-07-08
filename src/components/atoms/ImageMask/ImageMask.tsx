import { forwardRef, ReactNode } from 'react'
import { twJoin } from 'tailwind-merge'

interface ImageMaskProps {
  children: ReactNode
  position?: 'center' | 'top'
  className?: string
}

export const ImageMask = forwardRef<HTMLDivElement, ImageMaskProps>(
  function IMWrapper(props: ImageMaskProps, ref) {
    const { children, position = 'center', className } = props
    return (
      <div
        ref={ref}
        className={twJoin('inline-block', className)}
        style={{
          WebkitMaskImage: 'url(/images/logo/logoform.svg)',
          WebkitMaskSize: 'contain',
          WebkitMaskRepeat: 'no-repeat',
          WebkitMaskPosition: position,
        }}
      >
        {children}
      </div>
    )
  }
)
