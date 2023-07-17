import { ReactNode } from 'react'
import { twJoin } from 'tailwind-merge'

type HeroProps = {
  imageNode: ReactNode
  overlayNode: ReactNode
  overlayPosition?: 'center' | 'offsetTop'
  className?: string
}

export const Hero = (props: HeroProps) => {
  const {
    imageNode,
    overlayNode,
    overlayPosition = 'center',
    className,
  } = props

  return (
    <div
      className={twJoin(
        'relative h-[80vh] w-screen max-w-full bg-white',
        className
      )}
    >
      {imageNode}
      <div
        className={twJoin(
          'absolute left-1/2 right-0 m-auto w-full text-center',
          overlayPosition === 'center' ? 'top-1/2' : 'top-0'
        )}
        style={{ transform: 'translate(-50%, -50%)' }}
      >
        {overlayNode}
      </div>
    </div>
  )
}
