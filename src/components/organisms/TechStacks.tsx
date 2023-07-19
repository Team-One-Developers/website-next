'use client'

import { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { twJoin, twMerge } from 'tailwind-merge'

import Typography from '../atoms/Typography'
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
        isBackendActive ? 'bg-black text-white' : 'bg-white text-black'
      )}
    >
      <ContentWrapper>
        <div className="block mx-auto text-center w-full">
          <div className="flex justify-center gap-[30px] text-center my-6">
            <Typography
              as="button"
              variant="subtitle_lg"
              className={twMerge(
                'items-center font-spacegrotesk uppercase pt-4 flex flex-col md:p-4 pb-0',
                isBackendActive
                  ? 'text-muted-foreground'
                  : 'after:content-["⦁"] after:text-xl text-black'
              )}
              onClick={() => setIsBackendActive(false)}
            >
              Frontend
            </Typography>

            <Typography
              as="button"
              variant="subtitle_lg"
              className={twMerge(
                'items-center font-spacegrotesk uppercase pt-4 flex flex-col md:p-4 pb-0',
                isBackendActive
                  ? 'after:content-["⦁"] after:text-xl text-primary'
                  : 'text-t1-darkGray'
              )}
              onClick={() => setIsBackendActive(true)}
            >
              Backend / Platform
            </Typography>
          </div>
          <Typography as="h2" variant="h2_bold" className="text-inherit">
            {isBackendActive ? 'Backend / Platform' : 'Frontend Development'}
          </Typography>

          <div className="flex justify-center mt-4">
            <div className="w-full sm:w-[80%] sm:min-h-auto md:w-[70%] lg:w-[40%]">
              <Typography className="text-inherit" variant="text_sm">
                {isBackendActive ? (
                  <>
                    <Typography
                      as="span"
                      variant="paragraph_label"
                      className="pb-2 block"
                    >
                      Scalable Solutions
                    </Typography>
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
                    <Typography
                      as="span"
                      variant="paragraph_label"
                      className="pb-2 block"
                    >
                      Modern JavaScript
                    </Typography>
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
              </Typography>
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
            isBackendActive ? 'text-white' : 'text-black',
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
