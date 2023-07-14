import { ReactNode } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

export const imageDecorationVariants = tv({
  base: 'absolute z-[1000] w-[70px] md:w-[80px] lg:w-[90px] xl:w-[100px]',
  variants: {
    position: {
      'bottom-left': 'bottom-[5%] left-[5%]',
      'bottom-right': 'bottom-[5%] right-[5%]',
      'top-left': 'left-[5%] top-[5%]',
      'top-right': 'right-[5%] top-[5%]',
    },
  },
  defaultVariants: {
    position: 'bottom-right',
  },
})

interface ImageDecorationProps
  extends VariantProps<typeof imageDecorationVariants> {
  element: ReactNode
  children?: ReactNode
  className?: string
}

export const ImageDecoration = ({
  position,
  element,
  children,
  className,
}: ImageDecorationProps) => {
  return (
    <div className="relative">
      <div className={imageDecorationVariants({ position, className })}>
        {element}
      </div>
      {children}
    </div>
  )
}
