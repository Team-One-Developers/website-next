import { twJoin } from 'tailwind-merge'
import { Children, ReactNode } from 'react'

type ButtonProps = {
  variant?: 'neongreen' | 'black'
  size?: 'm' | 'l'
  fontDefaults?: string
  callback?: () => void
  children: ReactNode
}

export const Button = (props: ButtonProps) => {
  const {
    children,
    callback,
    variant = 'neongreen',
    size = 'm',
    fontDefaults,
  } = props

  return (
    <button
      onClick={callback && callback}
      className={twJoin(
        'w-full cursor-pointer rounded-sm border-none px-[22px] py-4 font-SpaceGroteskRegular uppercase tracking-normal outline-none md:w-auto',
        variant === 'black'
          ? 'bg-t1-black text-t1-green'
          : 'bg-t1-green text-t1-darkGray',
        size === 'm'
          ? 'text-[14px] md:px-[14px] md:py-[10px]'
          : 'text-[16px] md:px-5 md:py-3',
        fontDefaults
      )}
      style={{ transition: '0.5s' }}
    >
      {children}
    </button>
  )
}
