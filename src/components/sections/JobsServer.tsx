import JobAccordion from "@/components/sections/JobAccordion"
import { client } from "@/sanity/lib/client"
import { QUERY_ALL_PUBLIC_CAREERS } from "@/sanity/queries"
import { Career } from "@/sanity/types"
import { getCareerCategory } from "@/utils/careerCategory"

function groupCareersByCategory(careers: Career[]) {
    const groups = new Map<string, Career[]>()

    for (const career of careers) {
        const category = getCareerCategory(career)
        if (!category || !career.slug?.current) continue
        const existing = groups.get(category) || []
        existing.push(career)
        groups.set(category, existing)
    }

    return Array.from(groups.entries()).map(([category, items]) => ({
        label: category,
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

    const teamOneCategories = groupCareersByCategory(allCareers.filter((c) => c.business !== "Inframotive"))
    const inframotiveCategories = groupCareersByCategory(allCareers.filter((c) => c.business === "Inframotive"))

    return (
        <div className="gap-vertical-inner flex flex-col">
            <JobAccordion title="Open Positions" categories={teamOneCategories} />
            {inframotiveCategories.length > 0 && (
                <JobAccordion title={"Open Positions\nInframotive"} categories={inframotiveCategories} />
            )}
        </div>
    )
}
