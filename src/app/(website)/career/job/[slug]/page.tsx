import { DraftMarker } from "@/components/atoms/DraftMarker"
import Icon, { IconProps } from "@/components/atoms/Icon"
import { LinkComponent } from "@/components/atoms/LinkComponent"
import Typography from "@/components/atoms/Typography"
import { StructuredData } from "@/components/layout/StructuredData"
import { TwoColumnsFullScreenContainer } from "@/components/layout/TwoColumnsFullScreenContainer"
import { JobType } from "@/components/molecules/JobType"
import { T1PortableText } from "@/components/molecules/T1PortableText"
import { FESTANSTELLUNG_BENEFITS, PRAKTIKUMS_BENEFITS, WERKSTUDENT_BENEFITS } from "@/constants/benefits"
import { organization } from "@/data/schemaOrg"
import { client } from "@/sanity/lib/client"
import {
    QUERY_ALL_CAREERS_DANGER_ONLY_FOR_STATIC_PARAMS,
    QUERY_ALL_PUBLIC_CAREERS,
    QUERY_SPECIFIC_CAREER
} from "@/sanity/queries"
import {
    Career,
    QUERY_ALL_CAREERS_DANGER_ONLY_FOR_STATIC_PARAMSResult,
    QUERY_SPECIFIC_CAREERResult
} from "@/sanity/types"
import { mostRelatedCareers } from "@/utils/mostRelated"
import { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { JobPosting, WithContext } from "schema-dts"

interface CareerProps {
    params: Promise<{ slug: string }>
}

async function getCareerFromParams(slug: string): Promise<QUERY_SPECIFIC_CAREERResult | null> {
    const career = await client.fetch(
        QUERY_SPECIFIC_CAREER,
        { slug },
        { cache: process.env.NODE_ENV === "development" ? "no-store" : "force-cache" }
    )

    if (!career) {
        return null
    }

    return career
}

export async function generateMetadata({ params }: CareerProps): Promise<Metadata> {
    const { slug } = await params
    const career = await getCareerFromParams(slug)

    if (!career || !career.slug?.current) {
        return {}
    }

    const isPublic = career.visibility === "Public"

    return {
        openGraph: {
            images: `/api/og/career?title=${career.title}`,
            type: "website",
            url: `https://www.team-one.de/career/${career.slug.current}`
        },
        title: career.title,
        description: career.description,
        robots: {
            index: isPublic,
            follow: isPublic
        }
    }
}

export async function generateStaticParams() {
    const allCareers: QUERY_ALL_CAREERS_DANGER_ONLY_FOR_STATIC_PARAMSResult = await client.fetch(
        QUERY_ALL_CAREERS_DANGER_ONLY_FOR_STATIC_PARAMS
    )

    return allCareers
        .filter((career) => career.slug?.current)
        .map((career) => ({
            slug: career.slug!.current!
        }))
}

// export async function getStaticProps({ params }: CareerProps) {
//     const career = await client.fetch
// }

export default async function CareerPage({ params }: CareerProps) {
    const { slug } = await params
    const career = await getCareerFromParams(slug)
    const allCareers = await client.fetch(QUERY_ALL_PUBLIC_CAREERS)

    if (!career) {
        notFound()
    }

    const isDraft = career.visibility !== "Public"

    const relatedCareers = mostRelatedCareers({
        allItems: allCareers,
        currentItem: career
    })

    const structuredData: WithContext<JobPosting> = {
        "@context": "https://schema.org",
        "@type": "JobPosting",
        hiringOrganization: organization,
        title: career.title,
        description: `<p>${career.description}</p>`,
        jobLocation: {
            "@type": "Place",
            address: {
                "@type": "PostalAddress",
                addressRegion: "Baden-Württemberg",
                addressCountry: "DE",
                addressLocality: "Stuttgart",
                postalCode: "70184",
                streetAddress: "Stafflenbergstraße 44"
            }
        },
        employmentType: career.employmentType
            ? career.employmentType === "Festanstellung"
                ? "FULL_TIME"
                : "INTERN"
            : "FULL_TIME",
        jobBenefits: (career.employmentType === "Festanstellung" ? FESTANSTELLUNG_BENEFITS : PRAKTIKUMS_BENEFITS).map(
            (benefit: { text: string }) => benefit.text
        ),
        datePosted: career.date,
        directApply: true
    }

    return (
        <>
            <StructuredData data={structuredData} />
            {isDraft ? <DraftMarker /> : null}
            <TwoColumnsFullScreenContainer
                left={
                    <div className="sticky top-0 flex flex-col">
                        <LinkComponent
                            href="/career#jobs"
                            className="w-fit md:w-fit md:py-0"
                            label={
                                <div className="flex items-center">
                                    <Icon name="backarrow" className="text-t1-black -ml-8 md:-ml-6" />
                                    <Typography className="text-t1-black -ml-2 uppercase" variant="link">
                                        Zurück zu den Jobs
                                    </Typography>
                                </div>
                            }
                        />
                        <Typography as="h1" variant="h2" className="text-t1-black lg:mt-12">
                            {career.title}
                        </Typography>
                        {career.employmentType && career.schedule && career.location && (
                            <JobType
                                employmentType={career.employmentType}
                                schedule={career.schedule}
                                location={career.location}
                                className="text-black"
                            />
                        )}
                        <div className={"mt-12 flex flex-col gap-4"}>
                            <LinkComponent href="/contact" color="black" label="JETZT BEWERBEN" className="md:w-fit" />
                        </div>
                    </div>
                }
                right={
                    <div className="">
                        <article className="font-abcdiatype max-w-none">
                            {career.description && (
                                <Typography className="font-abcdiatype mt-0 text-xl" variant="paragraph">
                                    {career.description}
                                </Typography>
                            )}
                            {career.content && <T1PortableText value={career.content} />}

                            <Typography as="h2" variant="h4" className="mt-12 mb-8 uppercase">
                                Unsere Benefits:
                            </Typography>
                            <ul className="flex w-full flex-col pl-0">
                                {(career.employmentType === "Festanstellung"
                                    ? FESTANSTELLUNG_BENEFITS
                                    : career.employmentType === "Werkstudent"
                                      ? WERKSTUDENT_BENEFITS
                                      : PRAKTIKUMS_BENEFITS
                                ).map((benefit, index) => (
                                    <li className="my-1 flex items-center gap-2" key={index}>
                                        <div className="text-primary mt-0">
                                            <Icon name={benefit.icon as IconProps["name"]} height={32} width={32} />
                                        </div>
                                        <Typography as="p" className="my-0">
                                            {benefit.text}
                                        </Typography>
                                    </li>
                                ))}
                            </ul>
                        </article>
                        <div className="mt-32 flex w-full flex-col gap-4">
                            <Typography variant="h4" className="uppercase">
                                Weitere Jobs
                            </Typography>
                            {relatedCareers.map(
                                (career: Career, index: number) =>
                                    career.slug?.current && (
                                        <Link href={career.slug?.current} key={index} className="group">
                                            <div className="bg-t1-darkgray flex flex-col gap-4 rounded-lg p-8 transition-all duration-300 group-hover:scale-103">
                                                <div className="text-primary flex gap-8 uppercase">
                                                    <Typography variant="paragraph">{`${career.employmentType}, ${career.schedule}`}</Typography>
                                                    <Typography variant="paragraph">{career.location}</Typography>
                                                </div>
                                                <div>
                                                    <Typography variant="h3" className="uppercase">
                                                        {career.title}
                                                    </Typography>
                                                </div>
                                            </div>
                                        </Link>
                                    )
                            )}
                        </div>
                    </div>
                }
            />
        </>
    )
}
