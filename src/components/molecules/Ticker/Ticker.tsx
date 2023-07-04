import Marquee from 'react-fast-marquee'

import clsx from 'clsx'
import { PageTheme } from '@/types'
import { PAGE_THEME } from '@/constants'
import Image from 'next/image'

interface TickerProps {
  theme: PageTheme
  text?: string
  speed?: number
  textClassName?: string | undefined
  includeLogo?: boolean
  className?: string
}

export const Ticker = (props: TickerProps) => {
  const {
    text = 'Team One Developers',
    speed = 300,
    includeLogo = true,
    theme,
    className,
    textClassName,
  } = props
  const marqueeItems: any[] = []

  Array.from(Array(10).keys()).forEach((key) => {
    marqueeItems.push(
      <div className="mt-[200px] flex items-center overflow-hidden" key={key}>
        <p
          className={clsx(
            ' font-SpaceGroteskRegular text-[82px] font-normal uppercase leading-none -tracking-[0.01em] sm:text-[120px] md:text-[175px]',
            textClassName
              ? textClassName
              : theme === PAGE_THEME.dark
              ? 'text-t1-darkGray'
              : 'text-t1-green'
          )}
          style={{
            textShadow:
              theme === PAGE_THEME.dark
                ? '1px 1px 2px var(--t1-lightGray)'
                : '1px 1px 2px gray',
          }}
        >
          {text}
        </p>
        {includeLogo === true ? (
          <div className="mx-[60px] my-0">
            <Image
              src={
                theme === PAGE_THEME.dark
                  ? '/images/logo/t1d-sticker-darkgray.svg'
                  : '/images/logo/t1d-sticker-neongreen.svg'
              }
              alt="Team One Developers Logo"
              height={80}
              width={63}
            />
          </div>
        ) : (
          <div
            className={clsx(
              'mx-[75px] text-[82px]',
              textClassName
                ? textClassName
                : theme === PAGE_THEME.dark
                ? 'text-t1-darkGray'
                : 'text-t1-green'
            )}
          >
            •
          </div>
        )}
      </div>
    )
  })

  return (
    <Marquee
      className={clsx(
        'mx-0 my-16 flex min-w-full shrink-0 grow-0 basis-auto select-none',
        className
      )}
      //TODO: mediaQuery, speed/3, lg+ speed
      speed={speed}
      gradient={false}
    >
      {marqueeItems}
    </Marquee>
  )
}
