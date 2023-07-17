'use client'

import { useState } from 'react'
import { FONT_CONFIGS } from '@/constants'
import { useInView } from 'react-intersection-observer'
import { twJoin, twMerge } from 'tailwind-merge'

import Copy from '../atoms/Copy'
import { Heading } from '../atoms/Heading'
import ContentWrapper from '../layout/ContentWrapper'
import { BackendTechnologyLogos, FrontendTechnologyLogos } from './TechIcons'

export type LogoPath = {
  publicURL: string
}

export type Technology = {
  name: string // Typescript
  logoPath: LogoPath // ../images/technologies.react.svg
}

interface TechStackLogosProps {
  isBackendActive: boolean
  sizeClasses?: string
}

export const TechStacks = () => {
  const [isBackendActive, setIsBackendActive] = useState(false)

  return (
    <div
      className={twJoin(
        'flex items-start pt-[9rem] min-h-[820px] transition-[300ms]',
        isBackendActive
          ? 'bg-t1-black text-white'
          : 'bg-t1-lightGray text-t1-black'
      )}
    >
      <ContentWrapper>
        <div className="block mx-auto text-center w-full">
          <div className="flex justify-center gap-[30px] text-center my-6">
            <button
              className={twMerge(
                FONT_CONFIGS.desktop_topline_large,
                'items-center font-SpaceGroteskMedium uppercase pt-4 flex flex-col md:p-4 pb-0',
                isBackendActive
                  ? 'text-t1-lightGray'
                  : 'after:content-["⦁"] after:text-xl text-t1-black'
              )}
              onClick={() => setIsBackendActive(false)}
            >
              Frontend
            </button>
            <button
              className={twMerge(
                FONT_CONFIGS.desktop_topline_large,
                'items-center font-SpaceGroteskMedium uppercase pt-4 flex flex-col md:p-4 pb-0',
                isBackendActive
                  ? 'after:content-["⦁"] after:text-xl text-primary'
                  : 'text-t1-gray'
              )}
              onClick={() => setIsBackendActive(true)}
            >
              Backend / Platform
            </button>
          </div>
          <Heading
            tag="h2"
            fontDefaults={FONT_CONFIGS.desktop_h2_medium}
            colorClassName="text-inherit"
          >
            {isBackendActive ? 'Backend / Platform' : 'Frontend Development'}
          </Heading>

          <div className="flex justify-center mt-4">
            <div className="w-full sm:w-[80%] sm:min-h-auto md:w-[70%] lg:w-[40%]">
              <Copy
                className="text-inherit"
                textSize="sm"
                fontDefaults={FONT_CONFIGS.desktop_copy_small}
              >
                {isBackendActive ? (
                  <>
                    <span
                      className={twJoin(
                        'pb-2 block',
                        FONT_CONFIGS.paragraph_label
                      )}
                    >
                      Scalable Solutions
                    </span>
                    Datengetriebene Produkte erfordern neben skalierbaren und
                    automatisierten Infrastrukturen hochperformante
                    Backendsysteme, welche nicht nur der Komplexität und Dynamik
                    der Geschätsprozesse gerecht werden müssen, sondern auch
                    höchste Standards in den Bereichen Daten- &
                    Informationssicherheit erfüllen. Wir unterstützen bei der
                    Entwicklung modernster Backendplatform mit
                    Cutting-Edge-Technologien und einschlägiger Expertise in den
                    aktuellsten Techstacks.
                  </>
                ) : (
                  <>
                    <span
                      className={twJoin(
                        'pb-2 block',
                        FONT_CONFIGS.paragraph_label
                      )}
                    >
                      Modern JavaScript
                    </span>
                    Wir kombinieren modernste Technologien mit Expertise im
                    Bereich der User Experience sowie agilen Methoden und
                    unterstützen Sie mit unseren erfahrenen JavaScript Beratern
                    bei der Entwicklung komplexer Web-Frontends. Als React.js
                    Entwickler der ersten Stunde – genauer gesagt seit Version
                    0.13.1 - entwickeln wir qualitative, skalierbare und
                    hochperformante Enterprise Lösungen und fühlen uns im
                    breiten JavaScript Ökosystem zu Hause.
                  </>
                )}
              </Copy>
            </div>
          </div>

          <div className="flex justify-center flex-wrap p-12">
            <div className="w-full sm:w-[80%] md:w-[70%] lg:w-[55%]">
              <TechStackLogos isBackendActive={isBackendActive} />
            </div>
          </div>
        </div>
      </ContentWrapper>
    </div>
  )
}

const TechStackLogos = (props: TechStackLogosProps) => {
  const { isBackendActive, sizeClasses = 'h-[75px] w-[75px]' } = props
  const [ref, inView] = useInView({ triggerOnce: true })
  const logos = isBackendActive
    ? BackendTechnologyLogos
    : FrontendTechnologyLogos

  return (
    <section ref={ref}>
      {logos.map((Logo, logoIndex: number) => (
        <figure
          key={`${isBackendActive ? 'be' : 'fe'}-${logoIndex}`}
          className={twJoin(
            'inline-block m-2 md:6',
            isBackendActive ? 'text-white' : 'text-t1-black',
            sizeClasses
          )}
          style={{
            animation: `FadeIn 0.25s ease-in-out ${175 * logoIndex}ms 1
		normal forwards paused`,
            animationPlayState: inView ? 'running' : 'paused',
            opacity: 0,
          }}
        >
          <Logo />
        </figure>
      ))}
    </section>
  )
}
