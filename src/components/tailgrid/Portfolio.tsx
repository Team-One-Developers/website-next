"use client"
import { Button } from "@/components/atoms/Button"
import { Link } from "@/components/atoms/Link"
import Typography from "@/components/atoms/Typography"
import { QUERY_ALL_CAREERSResult } from "@/sanity/types"
import Image from "next/image"
import { SetStateAction, useState } from "react"

const Portfolio = ({ careers, usedDivisions }: { careers: QUERY_ALL_CAREERSResult; usedDivisions: string[] }) => {
    const [showCard, setShowCard] = useState("all")

    const handleProject = (category: SetStateAction<string>) => {
        setShowCard(category)
    }

    // console.log(careers)
    return (
        <>
            <section className="pb-12 pt-20 lg:pb-[90px] lg:pt-[120px]">
                <div className="container mx-auto">
                    <div className="-mx-4 flex flex-wrap">
                        <div className="w-full px-4">
                            <div className="mx-auto mb-[60px] max-w-[550px] text-center">
                                <Typography as="span" className="mb-2 block">
                                    Career
                                </Typography>
                                <Typography as="h2" variant="h2" className="mb-3">
                                    Our current open positions
                                </Typography>
                                <Typography className="t">
                                    There are many variations of passages of Lorem Ipsum available but the majority have
                                    suffered alteration in some form.
                                </Typography>
                            </div>
                        </div>
                    </div>

                    <div className="-mx-4 flex w-full flex-wrap justify-center">
                        <div className="w-full px-4">
                            <ul className="mb-12 flex flex-wrap justify-center space-x-1">
                                <li className="mb-1">
                                    <Button
                                        color={showCard === "all" ? "primary" : "black"}
                                        variant={showCard === "all" ? "solid" : "ghost"}
                                        onClick={() => handleProject("all")}
                                        disabled={showCard === "all"}
                                    >
                                        {"All Positions"}
                                    </Button>
                                </li>
                                {usedDivisions.map((division) => (
                                    <li className="mb-1" key={division}>
                                        <Button
                                            color={showCard === division ? "primary" : "black"}
                                            variant={showCard === division ? "solid" : "ghost"}
                                            onClick={() => handleProject(division)}
                                            disabled={showCard === division}
                                        >
                                            {division}
                                        </Button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="-mx-4 flex flex-wrap" suppressHydrationWarning>
                        {careers.map((career) => {
                            return (
                                <PortfolioCard
                                    key={career.slug?.current ?? ""}
                                    image={
                                        Math.random() < 0.25
                                            ? "/images/optimized/t1d_kai_knoerzer_126_optimized.webp"
                                            : Math.random() < 0.25
                                              ? "/images/optimized/t1d_kai_knoerzer_055_optimized.webp"
                                              : Math.random() > 0.5
                                                ? "/images/optimized/t1d_kai_knoerzer_062_optimized.webp"
                                                : "/images/optimized/t1d_kai_knoerzer_079_optimized.webp"
                                    }
                                    division={career.division ?? ""}
                                    title={career.title ?? ""}
                                    button="View Details"
                                    buttonHref={career.path ?? "#"}
                                    showCard={showCard}
                                />
                            )
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Portfolio

const PortfolioCard = ({
    showCard,
    division,
    image,
    title,
    button,
    buttonHref
}: {
    showCard: string
    division: string
    image: string
    title: string
    button: string
    buttonHref: string
}) => {
    return (
        <>
            <div
                className={`w-full px-4 md:w-1/2 xl:w-1/3 ${
                    showCard === "all" || showCard.toLocaleLowerCase() === division.toLowerCase() ? "block" : "hidden"
                } }`}
            >
                <div className="relative mb-12">
                    <div className="overflow-hidden rounded-[10px]">
                        <Image src={image} alt="portfolio" className="w-full" width={500} height={800} />
                    </div>
                    <div className="shadow-portfolio relative z-10 mx-7 -mt-20 rounded-lg bg-white px-3 py-[34px] text-center">
                        <Typography as="span" className="mb-2 block text-t1-darkGreen">
                            {division}
                        </Typography>
                        <Typography as="h3" variant="h4" className="mb-5">
                            {title}
                        </Typography>
                        <Link href={buttonHref} className="" label={button} />
                    </div>
                </div>
            </div>
        </>
    )
}
