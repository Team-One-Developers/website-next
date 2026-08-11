import { client } from "@/sanity/lib/client"
import { QUERY_SPECIFIC_CAREER } from "@/sanity/queries"
import { QUERY_SPECIFIC_CAREERResult } from "@/sanity/types"
import { cache } from "react"

export const getCareerBySlug = cache(async (slug: string): Promise<QUERY_SPECIFIC_CAREERResult | null> => {
    const career = await client.fetch(
        QUERY_SPECIFIC_CAREER,
        { slug },
        { cache: process.env.NODE_ENV === "development" ? "no-store" : "force-cache" }
    )

    return career ?? null
})
