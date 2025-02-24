import { PageLayout } from "@/components/layout/PageLayout"
import About9 from "@/components/tailgrid/About9"
import Portfolio from "@/components/tailgrid/Portfolio"
import Portfolio5 from "@/components/tailgrid/Portfolio5"
import Testimonial3 from "@/components/tailgrid/Testimonial3"
import { PAGE_THEME } from "@/constants"
import { client } from "@/sanity/lib/client"
import { QUERY_ALL_CAREERS } from "@/sanity/queries"
import { QUERY_ALL_CAREERSResult } from "@/sanity/types"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Karriere",
    description:
        "Wir sind immer auf der Suche nach Menschen, die Veränderungen vorantreiben und die Welt von morgen gestalten wollen."
}

const Career = async () => {
    const careers: QUERY_ALL_CAREERSResult = await client.fetch(
        QUERY_ALL_CAREERS,
        {},
        { cache: process.env.NODE_ENV === "development" ? "no-store" : "force-cache" }
    )

    const publicCareers = careers.filter((career) => career.visibility === "Public")

    const sortedCareers = publicCareers.reduce(
        (acc, career) => {
            const { division } = career
            if (division) {
                acc[division] ??= []
                acc[division].push(career)
            }
            return acc
        },
        {} as Record<string, QUERY_ALL_CAREERSResult>
    )

    return (
        <PageLayout theme={PAGE_THEME.light}>
            <About9 />
            <Portfolio5 />
            <Portfolio careers={publicCareers} usedDivisions={Object.keys(sortedCareers)} />
            <Testimonial3 person="melanie" />
        </PageLayout>
    )
}

export default Career
