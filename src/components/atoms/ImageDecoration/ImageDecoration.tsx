import { ReactNode } from 'react'
import { twJoin } from 'tailwind-merge'

type CornerPosition = 'top left' | 'top right' | 'bottom left' | 'bottom right'

interface ImageDecorationProps {
  position?: CornerPosition
  element: ReactNode
  children?: ReactNode
  className?: string
}

export const ImageDecoration = (props: ImageDecorationProps) => {
  const { position = 'bottom right', element, children, className } = props

  return (
    <div className="relative">
      <div
        className={twJoin(
          'absolute z-[1000] w-[70px] md:w-[80px] lg:w-[90px] xl:w-[100px]',
          position === 'bottom right'
            ? 'bottom-[5%] right-[5%]'
            : position === 'bottom left'
            ? 'bottom-[5%] left-[5%]'
            : position === 'top left'
            ? 'left-[5%] top-[5%]'
            : 'right-[5%] top-[5%]',
          className
        )}
      >
        {element}
      </div>
      {children}
    </div>
  )
}
