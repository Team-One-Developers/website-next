import { Mdx } from "@/components/MdxComponents"
import { Link as LinkComponent } from "@/components/atoms/Link"
import { StructuredData } from "@/components/atoms/StructuredData"
import Typography from "@/components/atoms/Typography"
import { PageLayout } from "@/components/layout/PageLayout"
import { TwoColumnsFullScreenContainer } from "@/components/layout/TwoColumnsFullScreenContainer"
import Icon, { IconProps } from "@/components/molecules/Icon"
import { JobType } from "@/components/molecules/JobType"
import { FESTANSTELLUNG_BENEFITS, PRAKTIKUMS_BENEFITS, WERKSTUDENT_BENEFITS } from "@/constants/benefits"
import { mostRelated } from "@/lib/mostRelated"
import { Career, allCareers } from "contentlayer/generated"
import { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { JobPosting, WithContext } from "schema-dts"

interface CareerProps {
    params: {
        slug: string
    }
}

async function getCareerFromParams(params: CareerProps["params"]) {
    const career = allCareers.find((career) => career.slugAsParams === params.slug)

    if (!career) {
        null
    }

    return career
}

export async function generateMetadata({ params }: CareerProps): Promise<Metadata> {
    const career = await getCareerFromParams(params)

    if (!career) {
        return {}
    }

    return {
        openGraph: {
            images: `/api/og/career?title=${career.title}`
        },
        title: career.title,
        description: career.description
    }
}

export async function generateStaticParams(): Promise<CareerProps["params"][]> {
    return allCareers.map((career) => ({
        slug: career.slugAsParams
    }))
}

const employmentTypeMap: Record<Career["employmentType"], JobPosting["employmentType"]> = {
    Festanstellung: "FULL_TIME",
    Teilzeit: "PART_TIME",
    Praktikum: "INTERN",
    Werkstudent: "INTERN"
}

export default async function CareerPage({ params }: CareerProps) {
    const career = await getCareerFromParams(params)

    if (!career) {
        notFound()
    }

    const mostRelatedCareers = mostRelated({
        allItems: allCareers,
        currentItem: career
    })

    const structuredData: WithContext<JobPosting> = {
        "@context": "https://schema.org",
        "@type": "JobPosting",
        title: career.title,
        // Description is a paragraph above a list with all requirements
        description: `<p>${career.description}</p>`,
        jobLocation: {
            "@type": "Place",
            address: {
                "@type": "PostalAddress",
                addressRegion: "Baden-Württemberg",
                addressCountry: "Germany",
                addressLocality: "Stuttgart",
                postalCode: "70184",
                streetAddress: "Stafflenbergstraße 44"
            }
        },
        hiringOrganization: {
            "@type": "Organization",
            name: "Team One Developers GmbH",
            sameAs: "https://www.teamonedevelopers.de"
        },
        employmentType: employmentTypeMap[career.employmentType],
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
                        <JobType
                            employmentType={career.employmentType}
                            schedule={career.schedule}
                            location={career.location}
                            className="text-black"
                        />
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
                            <Mdx code={career.body.code} theme="dark" />
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
                            {mostRelatedCareers.map((career: Career, index: number) => (
                                <Link href={career.slug} key={index} className="group">
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
                            ))}
                        </div>
                    </div>
                }
            />
        </PageLayout>
    )
}
