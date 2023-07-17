import { forwardRef } from 'react'
import { twJoin, twMerge } from 'tailwind-merge'

import './style.css'

import { FONT_CONFIGS } from '@/constants'

import Copy from '../atoms/Copy'
import { Heading } from '../atoms/Heading'

type AnimatedTeaserProps = {
  className?: string
  innerClassName?: string
}

export const AnimatedTeaser = forwardRef<HTMLDivElement, AnimatedTeaserProps>(
  function CWrapper(props: AnimatedTeaserProps, ref) {
    const { innerClassName, className } = props

    return (
      <div
        ref={ref}
        className={twJoin('w-full pt-8 md:pt-0 bg-background duration-[1500ms]', className)}
      >
        <div className="relative mx-auto my-0 flex aspect-[1.5] w-full max-w-[1680px] items-center justify-center">
          <div
            className={twMerge(
              'bgDancers absolute inset-0 h-full w-full bg-primary transition-all duration-[1500ms]',
              innerClassName
            )}
          />
          <div className="relative w-[85%] text-center md:w-[70%] lg:w-[55%] xl:w-[40%]">
            <div className="mb-[0.75rem]">
              <Copy
                textSize="l"
                fontDefaults={FONT_CONFIGS.desktop_copy_large}
                className="m-0 text-black"
              >
                Wir arbeiten
              </Copy>
            </div>

            <Heading
              className="mb-20 md:text-[3.75rem] 2xl:mb-[11.25rem]"
              tag="h2"
              fontDefaults={FONT_CONFIGS.desktop_h1_medium}
            >
              Integrativ & Agil
            </Heading>

            <Copy className="text-black" textSize="l">
              Integrativ bedeutet für uns nicht nur, nah am Kunden zu sein,
              sondern vor allem auch die Produkte, an denen wir arbeiten, so zu
              entwickeln, als wären es unsere eigenen. Team One for One Team.
            </Copy>
          </div>
        </div>
      </div>
    )
  }
)
