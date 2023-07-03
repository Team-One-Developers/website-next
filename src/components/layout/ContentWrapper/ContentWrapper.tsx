import clsx from 'clsx'
import { forwardRef, ReactNode } from 'react'

interface ContentWrapperProps {
  children: ReactNode
  className?: string
  id?: string
  // Flag to indicate to use the new API where the max width is considered in the padding. This enables to have a steady background color without an additional full width wrapper. Usage without this flag is deprecated.
  useMaxWidth?: boolean
}

export const ContentWrapper = forwardRef<HTMLDivElement, ContentWrapperProps>(
  function CWrapper(props: ContentWrapperProps, ref) {
    const { children, className, useMaxWidth = true, id } = props

    return (
      <div
        id={id}
        ref={ref}
        className={clsx('mx-auto my-0 block', className)}
        style={
          useMaxWidth
            ? {
                maxWidth: '1920px',
                paddingLeft: 'max(env(safe-area-inset-left), 2rem)',
                paddingRight: 'max(env(safe-area-inset-right), 2rem)',
              }
            : {
                paddingLeft:
                  'calc(max((100% - 1920px) / 2, env(safe-area-inset-left), 2rem))',
                paddingRight:
                  'calc(max((100% - 1920px) / 2, env(safe-area-inset-right), 2rem))',
              }
        }
      >
        {children}
      </div>
    )
  }
)

export default ContentWrapper
