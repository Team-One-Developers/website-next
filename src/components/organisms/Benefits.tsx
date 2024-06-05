"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { twJoin } from "tailwind-merge"
import Typography from "../atoms/Typography"
import Icon, { IconProps } from "../molecules/Icon"

export const Benefits = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | undefined>(1)

    const videoSources = [
        "/images/webm/hardware.webm",
        "/images/webm/education.webm",
        "/images/webm/workation.webm",
        "/images/webm/bonus.webm",
        "/images/webm/homeoffice.webm",
        "/images/webm/bike.webm",
        "/images/webm/qualitrain.webm"
    ]

    const BenefitElement = ({
        index,
        iconName,
        headline,
        text
    }: {
        index: number
        iconName: IconProps["name"]
        headline: string
        text: string
    }) => {
        return (
            <div
                className="z-[2] pr-2"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(undefined)}
            >
                <Icon name={iconName} height={36} width={36} className="text-primary" />
                <Typography className="my-2 text-base uppercase text-primary" as="h3" variant="subtitle">
                    {headline}
                </Typography>
                <Typography variant="paragraph" className="m-0 text-white">
                    {text}
                </Typography>
            </div>
        )
    }

    return (
        <div className="bg-black text-white lg:flex">
            <div className="relative lg:basis-1/2">
                <Typography as="h2" variant="h1" className="lg:max-w-[60%]">
                    Unsere Benefits auf einen Blick
                </Typography>
                {hoveredIndex !== undefined && (
                    <motion.video
                        className={twJoin(
                            "absolute right-0 h-[200px] aspect-[16/9] object-cover top-[30%] hidden lg:block"
                        )}
                        initial={{ x: 50, y: 50, scale: 0.8 }}
                        animate={{ x: -50, y: -50, scale: 1 }}
                        transition={{
                            duration: 0.8,
                            type: "spring",
                            stiffness: 25,
                            damping: 10
                        }}
                        tabIndex={-1}
                        aria-hidden="true"
                        autoPlay
                        muted
                        loop
                        playsInline
                        src={hoveredIndex !== undefined ? videoSources[hoveredIndex] : ""}
                    />
                )}
            </div>

            <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:mt-0 lg:basis-1/2 xl:grid-cols-3">
                <BenefitElement
                    index={0}
                    iconName="monitor"
                    headline="Hardware"
                    text="Du erhältst bei uns natürlich alles was Du zum Arbeiten brauchst. Du
            wählst dabei deine Arbeitsmittel selbst aus damit Du vom Start weg
            bestmöglich arbeitsfähig bist."
                />

                <BenefitElement
                    index={1}
                    iconName="education"
                    headline="Weiterbildung"
                    text="Von internationalen Konferenz-Besuchen bis hin zu regelmäßigen
            Work-Retreats und Persönlichkeitscoachings, den Möglichkeiten zur
            individuellen fachlichen wie persönlichen Weiterentwicklung sind bei
            uns keine Grenzen gesetzt."
                />

                <BenefitElement
                    index={2}
                    iconName="workation"
                    headline="Workation"
                    text="Wir haben Gefallen daran gefunden dort zu arbeiten wo andere Urlaub
            machen. Ein bis zweimal jährlich wechseln wir unser Arbeitsumfeld
            und reisen gemeinsam an spannenden Locations im In- und Ausland."
                />

                <BenefitElement
                    index={3}
                    iconName="bonus"
                    headline="Boni"
                    text="Neben Weihnachts- und Urlaubsgeld erhältst Du bei uns
            erfolgsabhängige Prämien."
                />

                <BenefitElement
                    index={4}
                    iconName="homeoffice"
                    headline="Home Office"
                    text="Auch wenn wir tolle Büroräumlichkeiten in Stuttgarts Halbhöhenlage
            haben, unterstützen wir flexible Arbeitszeiten ebenso wie Home-Office."
                />

                <BenefitElement
                    index={5}
                    iconName="bike"
                    headline="Jobrad"
                    text="Bei uns erhältst Du attraktive Konditionen für dein Jobrad durch
            unser hauseigenes und selbst-finanziertes Firmenradprogramm."
                />

                <BenefitElement
                    index={6}
                    iconName="person"
                    headline="Wellpass"
                    text="Alternativ hast Du die Möglichkeit über unseren Fitness-Partner
            Wellpass in 9.000 hochwertigen Sport- und
            Gesundheits&shy;einrichtungen in ganz Deutschland zu trainieren."
                />
            </div>
        </div>
    )
}
