'use client'

import { ReactNode, useState } from 'react'
import { UX_CATEGORIES } from '@/constants'

import './style.css'

import Image from 'next/image'
import { twJoin, twMerge } from 'tailwind-merge'

import { ImageMask } from '../atoms/ImageMask'
import Typography from '../atoms/Typography'

export const UxDesign = () => {
  const [activeCategory, setActiveCategory] = useState(UX_CATEGORIES.ux_design)

  const CategoryButton = ({ category }: { category: UX_CATEGORIES }) => {
    return (
      <button
        className={twMerge(
          'relative m-0 cursor-pointer border-none px-1 py-4 uppercase text-muted-foreground',
          activeCategory === category &&
            'text-primary after:absolute after:left-[50%] after:h-[5px] after:w-[5px] after:-translate-x-[50%] after:translate-y-[425%] after:rounded-full after:bg-primary'
        )}
        onClick={() => setActiveCategory(category)}
      >
        {category}
      </button>
    )
  }

  const Bubble = ({ active, text }: { active: boolean; text: string }) => {
    return (
      <div
        className={twMerge(
          'box-border flex h-[180px] w-[140px] items-center justify-center rounded-[40%] bg-primary p-[20px]',
          active
            ? 'rounded-[39%] border-[#38d38dc5] border-[5px]'
            : 'brightness-[25%]'
        )}
      >
        <div className="text-center font-spacegrotesk text-black">{text}</div>
      </div>
    )
  }

  const BubbleContainer = ({
    children,
    active,
    className,
  }: {
    children: ReactNode
    active: boolean
    className?: string
  }) => {
    return (
      <div
        className={twJoin(
          'relative z-10 after:absolute after:bottom-0 after:right-0 after:top-0 after:mx-0 after:my-auto after:h-[7px] after:w-[7px] after:-translate-x-[5px] after:rounded-[50%] after:bg-t1-darkGreen after:transition-[300ms]',
          active && 'after:bg-primary',
          className
        )}
      >
        {children}
      </div>
    )
  }

  return (
    <div className="transitionAll">
      <div className="mb-6 flex flex-col flex-nowrap items-center ">
        <Typography variant="paragraph_label" className="mb-4 text-primary">
          ( WE DEVELOP )
        </Typography>
        <Typography as="h2" variant="h2_bold" className="font-medium">
          UX DESIGN
        </Typography>
      </div>

      <div className="mb-8 flex justify-center">
        <div className="w-[45%] text-center">
          <Typography variant="text_sm" className="text-white">
            Mindestens so wichtig wie der Code den wir schreiben, ist das
            Design, in welchem digitale Produkte von ihren Anwendern
            wahrgenommen und regelmäßig genutzt werden. Die integrative
            Zusammenarbeit von Softwareentwicklung und –design ist ein gerne
            unterschätzter Erfolgsfaktor performanter, interdisziplinärer
            Entwicklungsteams und entscheidend für den Produkterfolg.
          </Typography>
          <Typography variant="text_sm" className="text-white">
            Ausgehend von geschäfts- oder produkstrategischen Rahmenbedingungen
            bildet das User Experience Design die zentrale Schnittstelle
            zwischen Nutzer und Technologie. Wir unterstützen dabei
            ganzheitlich, entlang der gesamten UX-Wertschöpfung: von der
            Marktrecherche bis zum Visual Design.
          </Typography>
        </div>
      </div>

      <div className="mb-8 flex justify-center gap-x-[20px] gap-y-0 font-spacegrotesk uppercase text-muted-foreground">
        <CategoryButton category={UX_CATEGORIES.ux_design} />

        <CategoryButton category={UX_CATEGORIES.application_development} />

        <CategoryButton category={UX_CATEGORIES.ui_development} />

        <CategoryButton category={UX_CATEGORIES.ui_design} />
      </div>

      <div className="flex justify-center">
        <div className="relative grid h-full w-[1120px] grid-cols-5 grid-rows-5 items-center justify-center gap-x-[20px] gap-y-[10px] overflow-hidden">
          <div
            className={twJoin(
              'absolute left-[20.5%] top-[5%]',
              activeCategory === UX_CATEGORIES.ux_design
                ? 'opacity-25'
                : 'opacity-0'
            )}
          >
            <Image
              src="/images/icons/form1.svg"
              alt="UX Design Icon"
              width={360}
              height={294}
            />
          </div>
          <div
            className={twJoin(
              'absolute right-[18%] top-[17%]',
              activeCategory === UX_CATEGORIES.application_development
                ? 'opacity-25'
                : 'opacity-0'
            )}
          >
            <Image
              src="/images/icons/form2.svg"
              alt="Application Development Icon"
              width={250}
              height={232}
            />
          </div>
          <div
            className={twJoin(
              'absolute left-[25%] right-[13%] top-[1%] ',
              activeCategory === UX_CATEGORIES.ui_development
                ? 'opacity-25'
                : 'opacity-0'
            )}
          >
            <Image
              src="/images/icons/form3.svg"
              alt="UI Development Icon"
              width={800}
              height={1100}
            />
          </div>
          <div
            className={twJoin(
              'absolute left-[29%] top-[1%] h-full',
              activeCategory === UX_CATEGORIES.ui_design
                ? 'opacity-25'
                : 'opacity-0'
            )}
          >
            <Image
              src="/images/icons/form4.svg"
              alt="UI Design Icon"
              width={332}
              height={560}
            />
          </div>

          <div className="col-start-3 row-start-1 flex items-center justify-center text-white">
            <BubbleContainer
              className="after:content-[none]"
              active={
                activeCategory === UX_CATEGORIES.ux_design ||
                activeCategory === UX_CATEGORIES.ui_design
              }
            >
              <ImageMask>
                <Bubble
                  active={
                    activeCategory === UX_CATEGORIES.ux_design ||
                    activeCategory === UX_CATEGORIES.ui_design
                  }
                  text=" Information Design"
                />
              </ImageMask>
            </BubbleContainer>
          </div>

          <div className="col-span-5 row-start-2 grid grid-cols-7 grid-rows-1 items-center justify-center text-white">
            <div className="z-10 w-[80%] rounded-xl border-[#21754f] border-2 bg-[rgb(6,25,17)] px-[12px] py-[6px] text-center font-spacegrotesk text-xs uppercase text-white">
              Human Focused
            </div>
            <BubbleContainer
              active={activeCategory === UX_CATEGORIES.ux_design}
            >
              <ImageMask>
                <Bubble
                  active={activeCategory === UX_CATEGORIES.ux_design}
                  text="Research & Insight"
                />
              </ImageMask>
            </BubbleContainer>
            <BubbleContainer
              active={
                activeCategory === UX_CATEGORIES.ux_design ||
                activeCategory === UX_CATEGORIES.ui_design
              }
            >
              <ImageMask>
                <Bubble
                  active={
                    activeCategory === UX_CATEGORIES.ux_design ||
                    activeCategory === UX_CATEGORIES.ui_design
                  }
                  text="Strategy"
                />
              </ImageMask>
            </BubbleContainer>
            <BubbleContainer
              active={
                activeCategory === UX_CATEGORIES.ux_design ||
                activeCategory === UX_CATEGORIES.ui_development ||
                activeCategory === UX_CATEGORIES.ui_design
              }
            >
              <ImageMask>
                <Bubble
                  active={
                    activeCategory === UX_CATEGORIES.ux_design ||
                    activeCategory === UX_CATEGORIES.ui_design ||
                    activeCategory === UX_CATEGORIES.ui_development
                  }
                  text="Interaction Design"
                />
              </ImageMask>
            </BubbleContainer>
            <BubbleContainer
              active={
                activeCategory === UX_CATEGORIES.application_development ||
                activeCategory === UX_CATEGORIES.ui_development
              }
            >
              <ImageMask>
                <Bubble
                  active={
                    activeCategory === UX_CATEGORIES.ui_development ||
                    activeCategory === UX_CATEGORIES.application_development
                  }
                  text="Frontend HTML/CSS/JS"
                />
              </ImageMask>
            </BubbleContainer>
            <BubbleContainer
              active={activeCategory === UX_CATEGORIES.application_development}
            >
              <ImageMask>
                <Bubble
                  active={
                    activeCategory === UX_CATEGORIES.application_development
                  }
                  text="Backend"
                />
              </ImageMask>
            </BubbleContainer>
            <div className="z-10 w-[80%] rounded-xl border-[#21754f] border-2 bg-[rgb(6,25,17)] px-[12px] py-[6px] text-center font-spacegrotesk text-xs uppercase text-white">
              Tech Focused
            </div>
          </div>

          <div className="col-start-3 row-start-3 flex items-center justify-center text-white">
            <BubbleContainer
              className="after:content-[none]"
              active={
                activeCategory === UX_CATEGORIES.ui_development ||
                activeCategory === UX_CATEGORIES.ui_design
              }
            >
              <ImageMask>
                <Bubble
                  active={
                    activeCategory === UX_CATEGORIES.ui_design ||
                    activeCategory === UX_CATEGORIES.ui_development
                  }
                  text="Visual Design"
                />
              </ImageMask>
            </BubbleContainer>
          </div>
        </div>
      </div>
    </div>
  )
}
