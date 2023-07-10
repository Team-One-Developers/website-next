import { ReactNode } from 'react'
import { twJoin } from 'tailwind-merge'

type CenteredSectionContainerProps = {
  left: ReactNode
  right: ReactNode
  backgroundColorClass?: string
  marginTopClass?: string
  marginBottomClass?: string
  leftWidthClass?: string
  rightWidthClass?: string
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
    leftWidthClass = 'w-full',
    rightWidthClass = 'w-full',
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
        <div className={leftWidthClass}>{left}</div>
      </div>
      <div className="flex items-center">
        <div className={rightWidthClass}>{right}</div>
      </div>
    </div>
  )
}
