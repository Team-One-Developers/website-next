import Benefits from "@/components/sections/Benefits"
import Careers from "@/components/sections/Careers"
import DoubleImageHero from "@/components/sections/DoubleImageHero"
import { client } from "@/sanity/lib/client"
import { QUERY_ALL_PUBLIC_CAREERS } from "@/sanity/queries"
import { QUERY_ALL_PUBLIC_CAREERSResult } from "@/sanity/types"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Karriere",
    description:
        "Wir sind immer auf der Suche nach Menschen, die Veränderungen vorantreiben und die Welt von morgen gestalten wollen."
}

const Career = async () => {
    const careers: QUERY_ALL_PUBLIC_CAREERSResult = await client.fetch(
        QUERY_ALL_PUBLIC_CAREERS,
        {},
        { cache: process.env.NODE_ENV === "development" ? "no-store" : "force-cache" }
    )

    const sortedCareers = careers.reduce(
        (acc, career) => {
            const { division } = career
            if (division) {
                acc[division] ??= []
                acc[division].push(career)
            }
            return acc
        },
        {} as Record<string, QUERY_ALL_PUBLIC_CAREERSResult>
    )

    return (
        <div>
            <DoubleImageHero />
            <Benefits />
            <div id="careers">
                <Careers careers={sortedCareers} />
            </div>
        </div>
    )
}

export default Career
