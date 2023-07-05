'use client'

import { ReactNode, useEffect, useRef, useState } from 'react'
import useInterval from 'use-interval'
import { FONT_CONFIGS } from '@/constants'
import { twJoin, twMerge } from 'tailwind-merge'
import { useMediaQuery } from 'usehooks-ts'
import './pseudo.css'

const LINE_HEIGHTS = {
  small: {
    className: 'h-[0.825rem]',
    value: { mobile: 0.825, md: 0.825, lg: 0.825 },
  },
  big: {
    className: 'h-[3.6375rem] md:h-[5.335rem] lg:h-[10.67rem]',
    value: { mobile: 3.6375, md: 5.335, lg: 10.67 },
  },
}

type ChangingWordsProps = {
  words: string[]
  delay?: number
  className?: string
  smallVariant?: boolean
}

export const ChangingWords = (props: ChangingWordsProps) => {
  const { words, delay = 1500, className, smallVariant = false } = props

  const isMd = useMediaQuery('(min-width: 768px)')
  const isLg = useMediaQuery('(min-width: 992px)')

  const height = smallVariant ? LINE_HEIGHTS.small : LINE_HEIGHTS.big

  const fontDefaults = smallVariant
    ? FONT_CONFIGS.changing_words_small
    : FONT_CONFIGS.changing_words

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

  const width = smallVariant
    ? undefined
    : listItemsRefs.current[activeListItemIndex]
        ?.querySelector('span')
        ?.getBoundingClientRect().width + 'px'

  const wordList = (
    <ul
      className={twJoin(
        'pointer-events-none overflow-hidden',
        height.className
      )}
      style={{
        width: width,
        transition: `width 400ms`,
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
                  height.value.lg as number
                )}`
              : isMd
              ? `translateY(${calculateScrollOffset(
                  activeListItemIndex,
                  height.value.md
                )}`
              : `translateY(${calculateScrollOffset(
                  activeListItemIndex,
                  height.value.lg
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
        smallVariant
          ? 'changingWordsSmallWrapper h-[0.825rem] gap-2'
          : 'changingWordsBigWrapper items-center justify-center gap-4 ',
        height.className,
        className
      )}
    >
      {wordList}
    </figure>
  )
}
