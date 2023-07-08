import { ReactNode } from 'react'
import { twJoin } from 'tailwind-merge'

type CenteredSectionContainerProps = {
  left: ReactNode
  right: ReactNode
  backgroundColorClass?: string
  marginTopClass?: string
  marginBottomClass?: string
  widthWrapperLeft?: number
  widthWrapperRight?: number
}

// TODO : doesnt work with ContentWrapper
export const CenteredSectionContainer = (
  props: CenteredSectionContainerProps
) => {
  const {
    left,
    right,
    marginTopClass = 0,
    marginBottomClass = 0,
    backgroundColorClass = 'bg-t1-transparent',
    widthWrapperLeft = 1,
    widthWrapperRight = 1,
  } = props

  return (
    <div
      className={twJoin(
        'box-border grid w-full grid-cols-1 justify-center gap-8 px-[2vw] py-8 md:grid-cols-2',
        marginTopClass,
        marginBottomClass,
        backgroundColorClass
      )}
    >
      <div>
        <div style={{ width: `${widthWrapperLeft * 100}%` }}>{left}</div>
      </div>
      <div className="flex items-center">
        <div
          style={{
            width: widthWrapperRight ? `${widthWrapperRight * 100}%` : '100%',
          }}
        >
          {right}
        </div>
      </div>
    </div>
  )
}
