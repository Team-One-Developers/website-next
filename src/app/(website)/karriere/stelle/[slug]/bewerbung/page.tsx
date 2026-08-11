import { DraftMarker } from "@/components/atoms/DraftMarker"
import ContentBlock from "@/components/layout/ContentBlock"
import ApplicationForm from "@/components/sections/ApplicationForm"
import Hero from "@/components/sections/Hero"
import HeroGradientBackdrop from "@/components/sections/HeroGradientBackdrop"
import { client } from "@/sanity/lib/client"
import { getCareerBySlug } from "@/sanity/lib/getCareer"
import { QUERY_ALL_CAREERS_DANGER_ONLY_FOR_STATIC_PARAMS } from "@/sanity/queries"
import { QUERY_ALL_CAREERS_DANGER_ONLY_FOR_STATIC_PARAMSResult } from "@/sanity/types"
import { Metadata } from "next"
import { notFound } from "next/navigation"

interface ApplicationPageProps {
    params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: ApplicationPageProps): Promise<Metadata> {
    const { slug } = await params
    const career = await getCareerBySlug(slug)

    if (!career || !career.slug?.current) {
        return {}
    }

    return {
        title: `Bewerbung: ${career.title}`,
        robots: {
            index: false,
            follow: false
        },
        alternates: {
            canonical: `https://www.team-one.de/karriere/stelle/${career.slug.current}/bewerbung`
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

export default async function ApplicationPage({ params }: ApplicationPageProps) {
    const { slug } = await params
    const career = await getCareerBySlug(slug)

    if (!career || career.visibility !== "Public") {
        notFound()
    }

    const eyebrows = [career.employmentType, career.schedule, career.location].filter(Boolean) as string[]

    return (
        <div className="relative">
            <HeroGradientBackdrop />

            <main className="gap-vertical-inner relative z-10 flex flex-col">
                <ContentBlock>
                    <Hero
                        title={`Bewerbung: ${career.title}`}
                        eyebrows={eyebrows}
                        backLink={{ label: "Zurück zur Stelle", href: `/karriere/stelle/${slug}` }}
                    />
                </ContentBlock>

                <ContentBlock>
                    <section className="gap-grid-gutter flex flex-col lg:flex-row">
                        {/* Left: job context */}
                        <div className="gap-md flex shrink-0 flex-col pt-8 lg:sticky lg:top-34 lg:w-1/3 lg:self-start">
                            <p className="text-medium text-black">{career.description}</p>
                        </div>

                        {/* Right: application form */}
                        <div className="min-w-0 flex-1">
                            <ApplicationForm jobSlug={slug} />
                        </div>
                    </section>
                </ContentBlock>
            </main>
        </div>
    )
}
