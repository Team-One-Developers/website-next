import ButtonNew from "@/components/atoms/ButtonNew"
import { DraftMarker } from "@/components/atoms/DraftMarker"
import ContentBlock from "@/components/layout/ContentBlock"
import { StructuredData } from "@/components/layout/StructuredData"
import { T1PortableText } from "@/components/molecules/T1PortableText"
import ContactSectionNew from "@/components/sections/ContactSectionNew"
import ContentAccordion from "@/components/sections/ContentAccordion"
import HeroGradientBackdrop from "@/components/sections/HeroGradientBackdrop"
import HeroNew from "@/components/sections/HeroNew"
import JobAccordion from "@/components/sections/JobAccordion"
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
import { notFound } from "next/navigation"
import { JobPosting, WithContext } from "schema-dts"

interface CareerDetailProps {
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

export async function generateMetadata({ params }: CareerDetailProps): Promise<Metadata> {
    const { slug } = await params
    const career = await getCareerFromParams(slug)

    if (!career || !career.slug?.current) {
        return {}
    }

    const isPublic = career.visibility === "Public"

    return {
        openGraph: {
            images: `/api/og?title=${career.title}`,
            type: "website",
            url: `https://www.team-one.de/career/job/${career.slug.current}`
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

/**
 * Split portable text content into sections by h4 headings.
 * Each section gets the heading text as title and the blocks until the next heading as content.
 */
function splitContentByHeadings(content: Career["content"]) {
    const sections: { title: string; blocks: Career["content"] }[] = []
    let currentTitle = ""
    let currentBlocks: Career["content"] = []

    for (const block of content) {
        if (block._type === "block" && (block.style === "h4" || block.style === "h5") && block.children?.[0]?.text) {
            // Save previous section if it exists
            if (currentTitle && currentBlocks.length > 0) {
                sections.push({ title: currentTitle, blocks: currentBlocks })
            }
            currentTitle = block.children[0].text
            currentBlocks = []
        } else {
            currentBlocks.push(block)
        }
    }

    // Push the last section
    if (currentTitle && currentBlocks.length > 0) {
        sections.push({ title: currentTitle, blocks: currentBlocks })
    }

    return sections
}

/**
 * Group careers by division for the JobAccordion component.
 */
function groupCareersByDivision(careers: Career[]) {
    const groups = new Map<string, Career[]>()

    for (const career of careers) {
        if (!career.division || !career.slug?.current) continue
        const existing = groups.get(career.division) || []
        existing.push(career)
        groups.set(career.division, existing)
    }

    return Array.from(groups.entries()).map(([division, items]) => ({
        label: division,
        count: items.length,
        jobs: items.map((c) => ({
            title: c.title,
            type: `${c.employmentType}, ${c.schedule}`,
            href: `/career/job/${c.slug!.current!}`
        }))
    }))
}

export default async function CareerDetailPage({ params }: CareerDetailProps) {
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

    // Build eyebrow tags from career metadata
    const eyebrows = [career.employmentType, career.schedule, career.location].filter(Boolean) as string[]

    // Split content into accordion sections
    const contentSections = career.content ? splitContentByHeadings(career.content) : []

    // Build benefits section
    const benefitsList =
        career.employmentType === "Festanstellung"
            ? FESTANSTELLUNG_BENEFITS
            : career.employmentType === "Werkstudent"
              ? WERKSTUDENT_BENEFITS
              : PRAKTIKUMS_BENEFITS

    // Build accordion sections: content sections + benefits
    const accordionSections = [
        ...contentSections.map((section) => ({
            title: section.title,
            content: <T1PortableText value={section.blocks} />
        })),
        {
            title: "Benefits",
            content: (
                <ul className="flex flex-col gap-2">
                    {benefitsList.map((benefit) => (
                        <li key={benefit.text} className="text-xsmall flex items-start gap-2 text-black">
                            <span className="bg-primary mt-2 size-2 shrink-0 rounded-full" />
                            {benefit.text}
                        </li>
                    ))}
                </ul>
            )
        }
    ]

    // Group related careers by division for "Weitere Jobs" accordion
    const weitereJobsCategories = relatedCareers ? groupCareersByDivision(relatedCareers) : []

    // Structured data for SEO
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
        employmentType: career.employmentType === "Festanstellung" ? "FULL_TIME" : "INTERN",
        jobBenefits: benefitsList.map((b) => b.text),
        datePosted: career.date,
        directApply: true
    }

    return (
        <div className="relative">
            <StructuredData data={structuredData} />
            {isDraft && <DraftMarker />}
            <HeroGradientBackdrop />

            <main className="gap-vertical-inner relative z-10 flex flex-col">
                {/* Hero */}
                <ContentBlock>
                    <HeroNew
                        title={career.title.toUpperCase()}
                        eyebrows={eyebrows}
                        backLink={{ label: "Zurück zur Übersicht", href: "/career" }}
                    />
                </ContentBlock>

                {/* Two-column: Description + Content Accordions */}
                <ContentBlock>
                    <section className="gap-grid-gutter px-grid-safezone flex flex-col lg:flex-row">
                        {/* Left: sticky description + CTA */}
                        <div className="gap-md sticky top-20 flex flex-1 flex-col self-start pt-8">
                            <p className="text-medium text-black">{career.description}</p>
                            <ButtonNew label="Jetzt bewerben" href="/contact" variant="primary" />
                        </div>

                        {/* Right: content accordions */}
                        <div className="flex-1">
                            <ContentAccordion sections={accordionSections} />
                        </div>
                    </section>
                </ContentBlock>

                {/* Weitere Jobs */}
                {weitereJobsCategories.length > 0 && (
                    <ContentBlock>
                        <JobAccordion title={"Weitere Jobs"} categories={weitereJobsCategories} />
                    </ContentBlock>
                )}

                {/* Contact */}
                <ContentBlock>
                    <ContactSectionNew
                        title="Lass uns über Software sprechen, die Wachstum schafft."
                        contact={{
                            name: "Klaus Kleber",
                            role: "Director Business Development",
                            imageUrl: "/images/culture/paul.png",
                            phone: "+49 182 9983882",
                            email: "hello@team-one.com"
                        }}
                    />
                </ContentBlock>
            </main>
        </div>
    )
}
