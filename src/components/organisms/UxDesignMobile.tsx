"use client"

import { UX_CATEGORIES } from "@/constants"
import { ReactNode, useState } from "react"
import { twJoin, twMerge } from "tailwind-merge"
import Typography from "../atoms/Typography"
import "./style.css"

export const UxDesignMobile = ({ className }: { className: string }) => {
    const [activeCategory, setActiveCategory] = useState(UX_CATEGORIES.ux_design)

    const CategoryButton = ({ category }: { category: UX_CATEGORIES }) => {
        return (
            <button
                className={twMerge(
                    "relative m-0 cursor-pointer border-none px-[2px] py-2 text-center uppercase text-muted",
                    activeCategory === category &&
                        "text-primary after:absolute after:left-[50%] after:h-[5px] after:w-[5px] after:-translate-x-[50%] after:translate-y-[425%] after:rounded-full after:bg-primary"
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
                    "box-border flex h-full items-center justify-center rounded-lg border-[5px] border-[#31b378] bg-primary px-2 py-4",
                    active ? "border-[#46ffad]" : "brightness-[35%]"
                )}
            >
                <div className="box-border text-center font-spacegrotesk text-black">{text}</div>
            </div>
        )
    }

    const BubbleContainer = ({ children, className }: { children: ReactNode; className?: string }) => {
        return <div className={twJoin("relative z-10", className)}>{children}</div>
    }

    return (
        <div className={twJoin("transitionAll", className)}>
            <div className="mb-4 flex flex-col flex-nowrap items-center gap-4">
                <Typography className="text-primary" variant="subtitle">
                    ( WE DEVELOP )
                </Typography>
                <Typography as="h2" variant="h2">
                    UX DESIGN
                </Typography>
            </div>

            <div className="mb-8 flex justify-center">
                <div className="w-3/4 text-center">
                    <Typography variant="paragraph" className="text-white">
                        Mindestens so wichtig wie der Code den wir schreiben, ist das Design, in welchem digitale
                        Produkte von ihren Anwendern wahrgenommen und regelmäßig genutzt werden. Die integrative
                        Zusammenarbeit von Softwareentwicklung und –design ist ein gerne unterschätzter Erfolgsfaktor
                        performanter, interdisziplinärer Entwicklungsteams und entscheidend für den Produkterfolg.
                    </Typography>
                    <Typography variant="paragraph" className="text-white">
                        Ausgehend von geschäfts- oder produkstrategischen Rahmenbedingungen bildet das User Experience
                        Design die zentrale Schnittstelle zwischen Nutzer und Technologie. Wir unterstützen dabei
                        ganzheitlich, entlang der gesamten UX-Wertschöpfung: von der Marktrecherche bis zum Visual
                        Design.
                    </Typography>
                </div>
            </div>

            <div className="mb-4 grid grid-cols-2 grid-rows-2 justify-center gap-x-0 gap-y-1 font-spacegrotesk uppercase text-muted sm:grid-cols-4 sm:grid-rows-1">
                <CategoryButton category={UX_CATEGORIES.ux_design} />

                <CategoryButton category={UX_CATEGORIES.application_development} />

                <CategoryButton category={UX_CATEGORIES.ui_development} />

                <CategoryButton category={UX_CATEGORIES.ui_design} />
            </div>

            <div className="flex justify-center">
                <div className="grid w-full grid-cols-[1fr_1.5fr_1.5fr_1fr] grid-rows-[0.5fr_1fr_fr_1fr_0.5fr] gap-3">
                    <div className="col-span-2 col-start-2 row-start-1 flex items-center justify-center">
                        <div className="z-10 w-1/3 rounded-xl border-2 border-[#21754f] bg-[rgb(6,25,17)] px-3 py-[6px] text-center font-spacegrotesk text-xs uppercase text-white">
                            Human Focused
                        </div>
                    </div>

                    <BubbleContainer className="col-start-4 row-span-3 row-start-2 vertical-lr">
                        <Bubble
                            active={
                                activeCategory === UX_CATEGORIES.ux_design || activeCategory === UX_CATEGORIES.ui_design
                            }
                            text="Information Design"
                        />
                    </BubbleContainer>

                    <BubbleContainer className="col-start-1 row-span-3 row-start-2 justify-self-end vertical-lr">
                        <Bubble
                            active={
                                activeCategory === UX_CATEGORIES.ui_development ||
                                activeCategory === UX_CATEGORIES.ui_design
                            }
                            text="Visual Design"
                        />
                    </BubbleContainer>

                    <BubbleContainer className="col-start-2 row-start-2">
                        <Bubble active={activeCategory === UX_CATEGORIES.ux_design} text="Research & Insight" />
                    </BubbleContainer>

                    <BubbleContainer className="col-start-3 row-start-2">
                        <Bubble
                            active={
                                activeCategory === UX_CATEGORIES.ux_design || activeCategory === UX_CATEGORIES.ui_design
                            }
                            text="Strategy"
                        />
                    </BubbleContainer>

                    <BubbleContainer className="col-span-2 col-start-2 row-start-3">
                        <Bubble
                            active={
                                activeCategory === UX_CATEGORIES.ux_design ||
                                activeCategory === UX_CATEGORIES.ui_development ||
                                activeCategory === UX_CATEGORIES.ui_design
                            }
                            text="Interaction Design"
                        />
                    </BubbleContainer>
                    <BubbleContainer className="col-start-2 row-start-4">
                        <Bubble
                            active={
                                activeCategory === UX_CATEGORIES.application_development ||
                                activeCategory === UX_CATEGORIES.ui_development
                            }
                            text="Frontend HTML / CSS / JS"
                        />
                    </BubbleContainer>

                    <BubbleContainer className="col-start-3 row-start-4">
                        <Bubble active={activeCategory === UX_CATEGORIES.application_development} text="Backend" />
                    </BubbleContainer>

                    <div className="col-span-2 col-start-2 row-start-5 flex items-center justify-center">
                        <div className="z-10 w-1/3 rounded-xl border-2 border-[#21754f] bg-[rgb(6,25,17)] px-3 py-[6px] text-center font-spacegrotesk text-xs uppercase text-white">
                            Tech Focused
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
