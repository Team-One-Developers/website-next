'use client'

import { ReactNode, useRef, useState } from 'react'
import useInterval from 'use-interval'
import { FONT_CONFIGS } from '@/constants'
import { twJoin, twMerge } from 'tailwind-merge'
import { useMediaQuery } from 'usehooks-ts'
import './pseudo.css'

const LINE_HEIGHTS = {
  small: {
    mobile: 0.825,
    tablet: 0.825,
    desktop: 0.825,
  },
  big: {
    mobile: 3.6375,
    tablet: 5.335,
    desktop: 10.67,
  },
}

type ChangingWordsProps = {
  words: string[]
  delay?: number
  className?: string
  isSmall?: boolean
}

export const ChangingWords = (props: ChangingWordsProps) => {
  const { words, delay = 1500, className, isSmall = false } = props

  const isMd = useMediaQuery('(min-width: 768px)')
  const isLg = useMediaQuery('(min-width: 992px)')

  const fontDefaults = isSmall
    ? FONT_CONFIGS.changing_words_small
    : FONT_CONFIGS.changing_words

  const heights = isSmall ? LINE_HEIGHTS.small : LINE_HEIGHTS.big

  const listItemsRefs = useRef<Array<HTMLLIElement | null>>([])
  const listRef = useRef<HTMLUListElement | null>(null)
  const [activeListItemIndex, setActiveListItemIndex] = useState(0)

  useInterval(() => {
    setActiveListItemIndex(activeListItemIndex + 1)
    if (activeListItemIndex === words.length - 1) {
      setActiveListItemIndex(0)
    }
  }, delay)

  const calculateScrollOffset = (index: number, height: number) =>
    `${-1 * index * height}rem`
  const cssSafeHeight = (height: number) => (height ? `${height}rem` : 'auto')

  const width = isSmall
    ? undefined
    : listItemsRefs.current[activeListItemIndex]
        ?.querySelector('span')
        ?.getBoundingClientRect().width + 'px'

  const wordList = (
    <ul
      className={twJoin('pointer-events-none overflow-hidden')}
      style={{
        width: width,
        transition: `width 400ms`,
        height: isSmall
          ? cssSafeHeight(heights.mobile)
          : isLg
          ? cssSafeHeight(heights.desktop)
          : isMd
          ? cssSafeHeight(heights.tablet)
          : cssSafeHeight(heights.mobile),
      }}
      ref={listRef}
    >
      {words.map((wordString, index) => (
        <li
          className="whitespace-nowrap"
          style={{
            transform: isLg
              ? `translateY(${calculateScrollOffset(
                  activeListItemIndex,
                  heights.desktop
                )}`
              : isMd
              ? `translateY(${calculateScrollOffset(
                  activeListItemIndex,
                  heights.tablet
                )}`
              : `translateY(${calculateScrollOffset(
                  activeListItemIndex,
                  heights.mobile
                )})`,

            transition: 'transform 500ms',
          }}
          key={index}
          ref={(listItemRef: any) => listItemsRefs.current.push(listItemRef)}
        >
          <span>{wordString}</span>
        </li>
      ))}
    </ul>
  )

  return (
    <figure
      className={twMerge(
        fontDefaults,
        'flex uppercase',
        isSmall
          ? 'changingWordsSmallWrapper gap-2'
          : 'changingWordsBigWrapper items-center justify-center gap-4',
        className
      )}
      style={{
        height: isSmall
          ? cssSafeHeight(heights.mobile)
          : isMd
          ? cssSafeHeight(heights.tablet)
          : isLg
          ? cssSafeHeight(heights.desktop)
          : cssSafeHeight(heights.mobile),
      }}
    >
      {wordList}
    </figure>
  )
}
