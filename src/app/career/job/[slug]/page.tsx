import { Mdx } from "@/components/MdxComponents"
import { Link as LinkComponent } from "@/components/atoms/Link"
import { StructuredData } from "@/components/atoms/StructuredData"
import Typography from "@/components/atoms/Typography"
import { PageLayout } from "@/components/layout/PageLayout"
import { TwoColumnsFullScreenContainer } from "@/components/layout/TwoColumnsFullScreenContainer"
import Icon, { IconProps } from "@/components/molecules/Icon"
import { JobType } from "@/components/molecules/JobType"
import { T1ProseArticle } from "@/components/molecules/T1ProseArticle"
import { FESTANSTELLUNG_BENEFITS, PRAKTIKUMS_BENEFITS, WERKSTUDENT_BENEFITS } from "@/constants/benefits"
import { mostRelated } from "@/lib/mostRelated"
import { allCareers } from "contentlayer/generated"
import { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"

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

export default async function CareerPage({ params }: CareerProps) {
    const career = await getCareerFromParams(params)

    if (!career) {
        notFound()
    }

    const mostRelatedCareers = mostRelated({
        allItems: allCareers,
        currentItem: career
    })

    const structuredData = {
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
                postalCode: "70174",
                streetAddress: "Hospitalstraße 35"
            }
        },
        hiringOrganization: {
            "@type": "Organization",
            name: "Team One Developers GmbH"
        },
        employmentType: `${career.employmentType} - ${career.schedule}`,
        jobBenefits: (career.employmentType === "Festanstellung" ? FESTANSTELLUNG_BENEFITS : PRAKTIKUMS_BENEFITS).map(
            (benefit) => benefit.text
        ),
        datePosted: career.date
    }

    return (
        <PageLayout>
            <StructuredData data={structuredData} />

            <TwoColumnsFullScreenContainer
                left={
                    <div className="flex flex-col sticky top-0">
                        <LinkComponent
                            href="/career#jobs"
                            className="w-fit md:w-fit md:py-0"
                            label={
                                <div className="flex items-center">
                                    <Icon name="backarrow" className="-ml-8 md:-ml-6" />
                                    <Typography className="uppercase -ml-2 hover:text-inherit" variant="link">
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
                        <div className={"flex flex-col gap-4 mt-12"}>
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
                        <article className=" text-white max-w-none font-abcdiatype">
                            {career.description && (
                                <Typography className="text-xl mt-0 font-abcdiatype" variant="h5">
                                    {career.description}
                                </Typography>
                            )}
                            <T1ProseArticle>
                                <Mdx code={career.body.code} />
                            </T1ProseArticle>
                            <Typography as="h2" variant="h2" className="mt-8">
                                Unsere Benefits:
                            </Typography>
                            <ul className="w-full pl-0 flex flex-col">
                                {(career.employmentType === "Festanstellung"
                                    ? FESTANSTELLUNG_BENEFITS
                                    : career.employmentType === "Werkstudent"
                                    ? WERKSTUDENT_BENEFITS
                                    : PRAKTIKUMS_BENEFITS
                                ).map((benefit, index) => (
                                    <li className="flex items-center gap-2 my-1" key={index}>
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
                        <div className="w-full mt-32 gap-4 flex flex-col">
                            <Typography variant="h4">Weitere Jobs</Typography>
                            {mostRelatedCareers.map((career, index) => (
                                <Link href={career.slug} key={index} className="group">
                                    <div className="flex flex-col bg-t1-darkGray p-8 gap-4 rounded-lg group-hover:brightness-[140%]">
                                        <div className="flex gap-8 text-primary uppercase">
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
