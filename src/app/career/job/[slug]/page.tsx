import { T1PortableText } from "@/components/T1PortableText"
import { Link as LinkComponent } from "@/components/atoms/Link"
import { StructuredData } from "@/components/atoms/StructuredData"
import Typography from "@/components/atoms/Typography"
import { PageLayout } from "@/components/layout/PageLayout"
import { TwoColumnsFullScreenContainer } from "@/components/layout/TwoColumnsFullScreenContainer"
import Icon, { IconProps } from "@/components/molecules/Icon"
import { JobType } from "@/components/molecules/JobType"
import { FESTANSTELLUNG_BENEFITS, PRAKTIKUMS_BENEFITS, WERKSTUDENT_BENEFITS } from "@/constants/benefits"
import { organization } from "@/data/schemaOrg"
import { mostRelatedCareers } from "@/lib/mostRelated"
import { client } from "@/sanity/lib/client"
import { QUERY_ALL_CAREERS, QUERY_SPECIFIC_CAREER } from "@/sanity/queries"
import { Career, QUERY_ALL_CAREERSResult, QUERY_SPECIFIC_CAREERResult } from "@/sanity/types"
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
        null
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
            url: `https://www.teamonedevelopers.de/career/${career.slug.current}`
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
    const allCareers: QUERY_ALL_CAREERSResult = await client.fetch(QUERY_ALL_CAREERS)

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
    const allCareers = await client.fetch(QUERY_ALL_CAREERS)

    if (!career) {
        notFound()
    }

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
            (benefit) => benefit.text
        ),
        datePosted: career.date,
        directApply: true
    }

    return (
        <PageLayout>
            <StructuredData data={structuredData} />

            <TwoColumnsFullScreenContainer
                left={
                    <div className="sticky top-0 flex flex-col">
                        <LinkComponent
                            href="/career#jobs"
                            className="w-fit md:w-fit md:py-0"
                            label={
                                <div className="flex items-center">
                                    <Icon name="backarrow" className="-ml-8 md:-ml-6" />
                                    <Typography className="-ml-2 uppercase hover:text-inherit" variant="link">
                                        Zurück zu den Jobs
                                    </Typography>
                                </div>
                            }
                        />
                        <Typography as="h1" variant="h1" className="lg:mt-12">
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
                            <LinkComponent
                                href="/contact"
                                color="secondary"
                                label="JETZT BEWERBEN"
                                className="md:w-fit"
                            />
                        </div>
                    </div>
                }
                right={
                    <div className="">
                        <article className="max-w-none font-abcdiatype">
                            {career.description && (
                                <Typography className="mt-0 font-abcdiatype text-xl" variant="h5">
                                    {career.description}
                                </Typography>
                            )}
                            {career.content && <T1PortableText value={career.content} />}

                            <Typography as="h2" variant="h4" className="mb-8 mt-12 uppercase">
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
                                        <div className="mt-0 text-primary">
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
                                            <div className="flex flex-col gap-4 rounded-lg bg-t1-darkGray p-8 group-hover:brightness-[140%]">
                                                <div className="flex gap-8 uppercase text-primary">
                                                    <Typography variant="description">{`${career.employmentType}, ${career.schedule}`}</Typography>
                                                    <Typography variant="description">{career.location}</Typography>
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
        </PageLayout>
    )
}
