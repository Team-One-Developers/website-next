'use client'

import { useState } from 'react'
import Image from 'next/image'
import { FONT_CONFIGS } from '@/constants'
import { twJoin } from 'tailwind-merge'

import Copy from '../atoms/Copy'
import { Heading } from '../atoms/Heading'

export const Benefits = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | undefined>(1)

  const videoSources = [
    '/images/webm/hardware.webm',
    '/images/webm/education.webm',
    '/images/webm/workation.webm',
    '/images/webm/bonus.webm',
    '/images/webm/homeoffice.webm',
    '/images/webm/bike.webm',
    '/images/webm/qualitrain.webm',
  ]

  const BenefitElement = ({
    index,
    icon,
    headline,
    text,
  }: {
    index: number
    icon: string
    headline: string
    text: string
  }) => {
    return (
      <div
        className="z-[2] pr-2"
        onMouseEnter={() => setHoveredIndex(index)}
        onMouseLeave={() => setHoveredIndex(undefined)}
      >
        <Image src={icon} alt="Little icon" height={36} width={36} />
        <Heading
          className="mb-2 text-base text-primary mt-2"
          tag="h3"
          fontDefaults={FONT_CONFIGS.desktop_topline_large}
        >
          {headline}
        </Heading>
        <Copy
          textSize="sm"
          className="m-0 text-white"
          fontDefaults={FONT_CONFIGS.desktop_copy_small}
        >
          {text}
        </Copy>
      </div>
    )
  }

  return (
    <div className="bg-t1-black text-white lg:flex">
      <div className="relative lg:basis-[50%]">
        <Heading
          tag="h2"
          fontDefaults={FONT_CONFIGS.desktop_h3}
          className="lg:max-w-[60%]"
        >
          Unsere Benefits auf einen Blick
        </Heading>
        <video
          className={twJoin(
            'absolute right-0 h-[200px] aspect-[16/9] object-cover translate-y-[50px] translate-x-[50px] hidden lg:block',
            hoveredIndex !== undefined
              ? 'opacity-[100%] -translate-y-[20px] -translate-x-[20px]'
              : 'opacity-0'
          )}
          style={{ transition: '500ms' }}
          tabIndex={-1}
          aria-hidden="true"
          autoPlay
          muted
          loop
          playsInline
          src={hoveredIndex !== undefined ? videoSources[hoveredIndex] : ''}
        />
      </div>

      <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:basis-[50%]  lg:mt-0 xl:grid-cols-3">
        <BenefitElement
          index={0}
          icon="/images/icons/monitor.svg"
          headline="Hardware"
          text="Du erhältst bei uns natürlich alles was Du zum Arbeiten brauchst. Du
            wählst dabei deine Arbeitsmittel selbst aus damit Du vom Start weg
            bestmöglich arbeitsfähig bist."
        />

        <BenefitElement
          index={1}
          icon="/images/icons/education.svg"
          headline="Weiterbildung"
          text="Von internationalen Konferenz-Besuchen bis hin zu regelmäßigen
            Work-Retreats und Persönlichkeitscoachings, den Möglichkeiten zur
            individuellen fachlichen wie persönlichen Weiterentwicklung sind bei
            uns keine Grenzen gesetzt."
        />

        <BenefitElement
          index={2}
          icon="/images/icons/workation.svg"
          headline="Workation"
          text="Wir haben Gefallen daran gefunden dort zu arbeiten wo andere Urlaub
            machen. Ein bis zweimal jährlich wechseln wir unser Arbeitsumfeld
            und reisen gemeinsam an spannenden Locations im In- und Ausland."
        />

        <BenefitElement
          index={3}
          icon="/images/icons/bonus.svg"
          headline="Boni"
          text="Neben Weihnachts- und Urlaubsgeld erhältst Du bei uns
            erfolgsabhängige Prämien."
        />

        <BenefitElement
          index={4}
          icon="/images/icons/homeoffice.svg"
          headline="Home Office"
          text="Auch wenn wir tolle Büroräumlichkeiten in der Stuttgarter Innenstadt
            haben, unterstützen wir flexible Arbeitszeiten ebenso wie
            Home-Office."
        />

        <BenefitElement
          index={5}
          icon="/images/icons/bike.svg"
          headline="Jobrad"
          text="Bei uns erhältst Du attraktive Konditionen für dein Jobrad durch
            unser hauseigenes und selbst-finanziertes Firmenradprogramm."
        />

        <BenefitElement
          index={6}
          icon="/images/icons/person.svg"
          headline="Qualitrain"
          text="Alternativ hast Du die Möglichkeit über unseren Fitness-Partner
            Qualitrain in 6.000 hochwertigen Sport- und
            Gesundheits&shy;einrichtungen in ganz Deutschland zu trainieren."
        />
      </div>
    </div>
  )
}
