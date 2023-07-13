'use client'

import { ReactNode, useState } from 'react'
import { BREAKPOINTS, FONT_CONFIGS, UX_CATEGORIES } from '@/constants'

import Copy from '../atoms/Copy'
import { Heading } from '../atoms/Heading'
import { TopLine } from '../atoms/Topline'

import './style.css'

import { twJoin, twMerge } from 'tailwind-merge'

export const UxDesignMobile = () => {
  const [activeCategory, setActiveCategory] = useState(UX_CATEGORIES.ux_design)

  const CategoryButton = ({ category }: { category: UX_CATEGORIES }) => {
    return (
      <button
        className={twMerge(
          'relative m-0 cursor-pointer border-none px-[2px] py-2 uppercase text-t1-gray text-center',
          activeCategory === category &&
            'text-t1-green after:absolute after:left-[50%] after:h-[5px] after:w-[5px] after:-translate-x-[50%] after:translate-y-[425%] after:rounded-full after:bg-t1-green'
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
        className={twJoin(
          ' border-[#31b378] border-[5px] box-border flex h-full items-center justify-center rounded-lg bg-t1-green py-4 px-2',
          active ? 'border-[#46ffad]' : 'brightness-[35%]'
        )}
      >
        <div className="text-center font-SpaceGroteskRegular text-t1-black box-border">
          {text}
        </div>
      </div>
    )
  }

  const BubbleContainer = ({
    children,
    className,
  }: {
    children: ReactNode
    className?: string
  }) => {
    return <div className={twJoin('relative z-10', className)}>{children}</div>
  }

  return (
    <div className="transitionAll">
      <div className="flex items-center gap-4 flex-col flex-nowrap mb-4">
        <TopLine colorClassName="text-t1-green">( WE DEVELOP )</TopLine>
        <Heading tag="h2" fontDefaults={FONT_CONFIGS.desktop_h2_medium}>
          UX DESIGN
        </Heading>
      </div>

      <div className="mb-8 flex justify-center">
        <div className="w-[75%] text-center">
          <Copy textSize="sm" className="text-t1-white">
            Mindestens so wichtig wie der Code den wir schreiben, ist das
            Design, in welchem digitale Produkte von ihren Anwendern
            wahrgenommen und regelmäßig genutzt werden. Die integrative
            Zusammenarbeit von Softwareentwicklung und –design ist ein gerne
            unterschätzter Erfolgsfaktor performanter, interdisziplinärer
            Entwicklungsteams und entscheidend für den Produkterfolg.
          </Copy>
          <Copy className="text-t1-white" textSize="sm">
            Ausgehend von geschäfts- oder produkstrategischen Rahmenbedingungen
            bildet das User Experience Design die zentrale Schnittstelle
            zwischen Nutzer und Technologie. Wir unterstützen dabei
            ganzheitlich, entlang der gesamten UX-Wertschöpfung: von der
            Marktrecherche bis zum Visual Design.
          </Copy>
        </div>
      </div>

      <div className="grid-cols-2 grid-rows-2 sm:grid-cols-4 sm:grid-rows-1 mb-4 grid justify-center gap-x-0 gap-y-1 font-SpaceGroteskRegular uppercase text-t1-gray">
        <CategoryButton category={UX_CATEGORIES.ux_design} />

        <CategoryButton category={UX_CATEGORIES.application_development} />

        <CategoryButton category={UX_CATEGORIES.ui_development} />

        <CategoryButton category={UX_CATEGORIES.ui_design} />
      </div>

      <div className="flex justify-center">
        <div className="w-full grid grid-cols-[1fr_1.5fr_1.5fr_1fr] grid-rows-[0.5fr_1fr_fr_1fr_0.5fr] gap-y-3 gap-x-3">
          <div className="flex justify-center items-center row-start-1 col-start-2 col-span-2">
            <div className="rounded-xl text-center w-1/3 z-10 text-t1-white font-SpaceGroteskRegular uppercase text-xs py-[6px] px-3 border-2 border-[#21754f] bg-[rgb(6,25,17)]">
              Human Focused
            </div>
          </div>

          <BubbleContainer className="col-start-4 row-start-2 vertical-lr row-span-3">
            <Bubble
              active={
                activeCategory == UX_CATEGORIES.ux_design ||
                activeCategory == UX_CATEGORIES.ui_design
              }
              text="Information Design"
            ></Bubble>
          </BubbleContainer>

          <BubbleContainer className="row-start-2 col-start-1 row-span-3 vertical-lr justify-self-end">
            <Bubble
              active={
                activeCategory == UX_CATEGORIES.ui_development ||
                activeCategory == UX_CATEGORIES.ui_design
              }
              text="Visual Design"
            ></Bubble>
          </BubbleContainer>

          <BubbleContainer className="row-start-2 col-start-2">
            <Bubble
              active={activeCategory == UX_CATEGORIES.ux_design}
              text="Research & Insight"
            ></Bubble>
          </BubbleContainer>

          <BubbleContainer className="row-start-2 col-start-3">
            <Bubble
              active={
                activeCategory == UX_CATEGORIES.ux_design ||
                activeCategory == UX_CATEGORIES.ui_design
              }
              text="Strategy"
            ></Bubble>
          </BubbleContainer>

          <BubbleContainer className="row-start-3 col-start-2 col-span-2">
            <Bubble
              active={
                activeCategory == UX_CATEGORIES.ux_design ||
                activeCategory == UX_CATEGORIES.ui_development ||
                activeCategory == UX_CATEGORIES.ui_design
              }
              text="Interaction Design"
            ></Bubble>
          </BubbleContainer>
          <BubbleContainer className="row-start-4 col-start-2">
            <Bubble
              active={
                activeCategory == UX_CATEGORIES.application_development ||
                activeCategory == UX_CATEGORIES.ui_development
              }
              text="Frontend HTML / CSS / JS"
            ></Bubble>
          </BubbleContainer>

          <BubbleContainer className="row-start-4 col-start-3">
            <Bubble
              active={activeCategory == UX_CATEGORIES.application_development}
              text="Backend"
            ></Bubble>
          </BubbleContainer>

          <div className="flex justify-center items-center row-start-5 col-start-2 col-span-2">
            <div className="rounded-xl text-center w-1/3 z-10 text-t1-white font-SpaceGroteskRegular uppercase text-xs py-[6px] px-3 border-2 border-[#21754f] bg-[rgb(6,25,17)]">
              Tech Focused
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
