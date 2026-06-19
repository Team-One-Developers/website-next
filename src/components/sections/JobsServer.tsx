import JobAccordion from "@/components/sections/JobAccordion"
import { client } from "@/sanity/lib/client"
import { QUERY_ALL_PUBLIC_CAREERS } from "@/sanity/queries"
import { Career } from "@/sanity/types"

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
            href: `/karriere/stelle/${c.slug!.current!}`
        }))
    }))
}


export const JobsServer = async () => {
    const allCareers = await client.fetch(QUERY_ALL_PUBLIC_CAREERS)
    const jobCategories = groupCareersByDivision(allCareers)

    return (
        <JobAccordion title="Open Positions" categories={jobCategories} />
    )
}
