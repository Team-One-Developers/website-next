import ContentBlock from "@/components/layout/ContentBlock"
import StructuredData from "@/components/layout/StructuredData"
import { T1PortableText } from "@/components/molecules/T1PortableText"
import ContactSection from "@/components/sections/ContactSection"
import HeroGradientBackdrop from "@/components/sections/HeroGradientBackdrop"
import LeadCaptureHero from "@/components/sections/LeadCaptureHero"
import { organization } from "@/data/schemaOrg"
import { client } from "@/sanity/lib/client"
import { QUERY_ALL_LEADCAPTURES_DANGER_ONLY_FOR_STATIC_PARAMS, QUERY_SPECIFIC_LEADCAPTURE } from "@/sanity/queries"
import { QUERY_ALL_LEADCAPTURES_DANGER_ONLY_FOR_STATIC_PARAMSResult } from "@/sanity/types"
import { Metadata } from "next"
import { notFound } from "next/navigation"
import type { WebPage, WithContext } from "schema-dts"

import { DraftMarker } from "@/components/atoms/DraftMarker"
import { HubspotProvider } from "next-hubspot"

interface LeadcaptureProps {
    params: Promise<{ slug: string }>
}

async function getLeadcaptureFromParams(slug: string) {
    const leadcapture = await client.fetch(QUERY_SPECIFIC_LEADCAPTURE, { slug })

    if (!leadcapture) {
        return null
    }

    return leadcapture
}

export async function generateMetadata({ params }: LeadcaptureProps): Promise<Metadata> {
    const { slug } = await params
    const leadcapture = await getLeadcaptureFromParams(slug)

    if (!leadcapture) {
        return {}
    }

    const isPublic = leadcapture.visibility === "Public"

    return {
        openGraph: {
            images: `/api/og?title=${leadcapture.title}`,
            type: "website",
            url: `https://www.team-one.de/${slug}`
        },
        title: leadcapture.title,
        description: leadcapture.description,
        robots: {
            index: isPublic,
            follow: isPublic
        },
        alternates: {
            canonical: `https://www.team-one.de/${slug}`
        }
    }
}

export async function generateStaticParams() {
    const allLeadCaptures: QUERY_ALL_LEADCAPTURES_DANGER_ONLY_FOR_STATIC_PARAMSResult = await client.fetch(
        QUERY_ALL_LEADCAPTURES_DANGER_ONLY_FOR_STATIC_PARAMS
    )

    return allLeadCaptures
        .filter((leadCapture) => leadCapture.slug?.current)
        .map(({ slug }) => ({
            slug: slug!.current!
        }))
}

export default async function LeadCapturePage({ params }: LeadcaptureProps) {
    const { slug } = await params
    const leadcapture = await getLeadcaptureFromParams(slug)

    if (!leadcapture) {
        notFound()
    }

    // Structured data for a lead capture page (WebPage type)
    const structuredData: WithContext<WebPage> = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: leadcapture.title,
        description: leadcapture.description ?? "",
        image: leadcapture.heroImage?.asset?.url ?? undefined,
        publisher: organization
    }

    return (
        <HubspotProvider>
            <div className="relative">
                <HeroGradientBackdrop />
                <StructuredData data={structuredData} />
                {leadcapture.visibility !== "Public" && <DraftMarker />}

                <main className="gap-vertical-inner relative z-10 flex flex-col">
                    <ContentBlock>
                        <LeadCaptureHero
                            image={{
                                src: leadcapture.heroImage?.asset?.url ?? "",
                                alt: leadcapture.title,
                                blurDataURL: leadcapture.heroImage?.asset?.metadata?.lqip ?? "",
                                width: 1200,
                                height: 630
                            }}
                            title={leadcapture.title}
                            description={leadcapture.description}
                            portalId={leadcapture.portalId}
                            formId={leadcapture.formId}
                        />
                    </ContentBlock>

                    <ContentBlock className="py-16 md:py-24 lg:py-36">
                        <T1PortableText value={leadcapture.content} />
                    </ContentBlock>

                    <ContentBlock>
                        <ContactSection />
                    </ContentBlock>
                </main>
            </div>
        </HubspotProvider>
    )
}
