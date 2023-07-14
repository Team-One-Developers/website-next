import { forwardRef, ReactNode } from 'react'
import { twJoin } from 'tailwind-merge'


interface ImageMaskProps {
  children: ReactNode
  className?: string
}

export const ImageMask = forwardRef<HTMLDivElement, ImageMaskProps>(
  function IMWrapper({ children, className, ...rest }: ImageMaskProps, ref) {
    return (
      <div
        ref={ref}
        className={twJoin('inline-block', className)}
        style={{
          maskImage: 'url(/images/logo/logoform.svg)',
          maskSize: 'contain',
          maskRepeat: 'no-repeat',
          maskPosition: 'center',
        }}
        {...rest}
      >
        {children}
      </div>
    )
  }
)
