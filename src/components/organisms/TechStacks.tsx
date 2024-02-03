"use client"

import { useState } from "react"
import { useInView } from "react-intersection-observer"
import { twJoin, twMerge } from "tailwind-merge"
import Typography from "../atoms/Typography"
import { Section } from "../layout/Section"
import Icon, { IconProps } from "../molecules/Icon"

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

const FrontendTechnologyLogos = [
    "css",
    "gatsby",
    "graphql",
    "html",
    "jest",
    "nextjs",
    "nodejs",
    "react",
    "redux",
    "typescript"
]

const BackendTechnologyLogos = ["aws_lambda", "java", "kotlin", "kubernetes", "python", "spring"]

export const TechStacks = () => {
    const [isBackendActive, setIsBackendActive] = useState(false)

    return (
        <div
            className={twJoin(
                "flex items-start min-h-[820px] duration-[300ms]",
                isBackendActive ? "bg-black text-white" : "bg-muted text-black"
            )}
        >
            <Section>
                <div className="mx-auto block w-full text-center">
                    <div className="my-6 flex justify-center gap-[30px] text-center">
                        <Typography
                            as="button"
                            variant="subtitle"
                            className={twMerge(
                                "items-center font-spacegrotesk uppercase pt-4 flex flex-col md:p-4 pb-0",
                                isBackendActive ? "text-muted" : 'after:content-["⦁"] after:text-xl text-black'
                            )}
                            onClick={() => setIsBackendActive(false)}
                        >
                            Frontend
                        </Typography>

                        <Typography
                            as="button"
                            variant="subtitle"
                            className={twMerge(
                                "items-center font-spacegrotesk uppercase pt-4 flex flex-col md:p-4 pb-0",
                                isBackendActive ? 'after:content-["⦁"] after:text-xl text-primary' : "text-t1-darkGray"
                            )}
                            onClick={() => setIsBackendActive(true)}
                        >
                            Backend / Platform
                        </Typography>
                    </div>
                    <Typography as="h2" variant="h1" className="text-inherit lg:text-6xl">
                        {isBackendActive ? "Backend / Platform" : "Frontend Development"}
                    </Typography>

                    <div className="mt-4 flex justify-center">
                        <div className="sm:min-h-auto w-full sm:w-[80%] md:w-[70%] lg:w-[40%]">
                            <Typography className="text-inherit" variant="paragraph">
                                {isBackendActive ? (
                                    <>
                                        <Typography as="span" variant="paragraph" className="block pb-2 font-bold">
                                            Scalable Solutions
                                        </Typography>
                                        Datengetriebene Produkte erfordern neben skalierbaren und automatisierten
                                        Infrastrukturen hochperformante Backendsysteme, welche nicht nur der Komplexität
                                        und Dynamik der Geschäftsprozesse gerecht werden müssen, sondern auch höchste
                                        Standards in den Bereichen Daten- & Informationssicherheit erfüllen. Wir
                                        unterstützen bei der Entwicklung modernster Backendplatform mit
                                        Cutting-Edge-Technologien und einschlägiger Expertise in den aktuellsten
                                        Techstacks.
                                    </>
                                ) : (
                                    <>
                                        <Typography as="span" variant="paragraph" className="block pb-2 font-bold">
                                            Modern JavaScript
                                        </Typography>
                                        Wir kombinieren modernste Technologien mit Expertise im Bereich der User
                                        Experience sowie agilen Methoden und unterstützen Sie mit unseren erfahrenen
                                        JavaScript Beratern bei der Entwicklung komplexer Web-Frontends. Als React.js
                                        Entwickler der ersten Stunde – genauer gesagt seit Version 0.13.1 - entwickeln
                                        wir qualitative, skalierbare und hochperformante Enterprise Lösungen und fühlen
                                        uns im breiten JavaScript Ökosystem zu Hause.
                                    </>
                                )}
                            </Typography>
                        </div>
                    </div>

                    <div className="flex flex-wrap justify-center p-12">
                        <div className="w-full sm:w-[80%] md:w-[70%] lg:w-[55%]">
                            <TechStackLogos isBackendActive={isBackendActive} />
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    )
}

const TechStackLogos = (props: TechStackLogosProps) => {
    const { isBackendActive, sizeClasses = "h-[52px] w-[52px] lg:h-[75px] lg:w-[75px]" } = props
    const [ref, inView] = useInView({ triggerOnce: true })
    const logos = isBackendActive ? BackendTechnologyLogos : FrontendTechnologyLogos

    return (
        <section ref={ref}>
            {logos.map((logo: IconProps["name"], logoIndex: number) => (
                <figure
                    key={`${isBackendActive ? "be" : "fe"}-${logoIndex}`}
                    className={twJoin(
                        "inline-block m-2 md:6",
                        isBackendActive ? "text-white" : "text-black",
                        sizeClasses
                    )}
                    style={{
                        animation: `FadeIn 0.25s ease-in-out ${175 * logoIndex}ms 1
		normal forwards paused`,
                        animationPlayState: inView ? "running" : "paused",
                        opacity: 0
                    }}
                >
                    <Icon name={logo} className={sizeClasses} />
                </figure>
            ))}
        </section>
    )
}
