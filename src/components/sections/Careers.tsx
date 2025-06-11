import Typography from "@/components/atoms/Typography"
import Section from "@/components/layout/Section"
import { QUERY_ALL_PUBLIC_CAREERSResult } from "@/sanity/types"
import Link from "next/link"
import React from "react"

export interface CareersProps {
    careers: Record<string, QUERY_ALL_PUBLIC_CAREERSResult>
}

const Careers = ({ careers }: CareersProps) => {
    const CareerElement = ({
        career,
        listIndex
    }: {
        career: QUERY_ALL_PUBLIC_CAREERSResult[number]
        listIndex: number
    }) => {
        return (
            <div className="border-t1-white border-t-2 last:border-b-2">
                <Link href={`/career/job/${career?.slug?.current}`} aria-label={`Link zur Jobseite ${career.title}`}>
                    <div className="hover:text-primary grid cursor-pointer grid-cols-1 gap-[4px] p-3 md:grid-cols-[0.1fr_2fr_0.5fr] md:gap-0 md:p-0">
                        <div className="shrink-0 grow-0 basis-[2.5%] md:m-4">
                            <Typography className="" variant="paragraph">
                                {listIndex.toString().padStart(2, "0")}
                            </Typography>
                        </div>
                        <div className="md:m-4">
                            <Typography as="h3" variant="h3" className="font-normal uppercase">
                                {career.title}
                            </Typography>
                        </div>
                        <div className="flex flex-wrap md:m-4">
                            <div className="flex basis-full">
                                <Typography className="uppercase" variant="paragraph">
                                    {career.employmentType},&nbsp;
                                </Typography>
                                <Typography className="uppercase" variant="paragraph">
                                    {career.schedule}
                                </Typography>
                            </div>
                            {/* <div className="mb-1 flex basis-full">
                            <Typography className="uppercase text-white" variant="subtitle">
                                {career.location}
                            </Typography>
                        </div> */}
                        </div>
                    </div>
                </Link>
            </div>
        )
    }

    return (
        <Section className="py-24 lg:py-36">
            <Typography as="h2" variant="h1" className="lg:max-w-[60%]">
                Aktuelle Jobs:
            </Typography>
            <div>
                {Object.keys(careers).map((division) => {
                    const category = careers[division]
                    return (
                        <React.Fragment key={division}>
                            <Typography
                                as="h3"
                                variant="h2"
                                className="text-primary mt-12 mb-4 font-normal lg:max-w-[60%]"
                                key={division}
                            >
                                {division}
                            </Typography>
                            <div>
                                {category?.map((career, index) => (
                                    <CareerElement listIndex={index + 1} key={career.slug?.current} career={career} />
                                ))}
                            </div>
                        </React.Fragment>
                    )
                })}
            </div>
        </Section>
    )
}

export default Careers
