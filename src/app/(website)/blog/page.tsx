import BlogOverview from "@/components/sections/BlogOverview"
import { client } from "@/sanity/lib/client"
import { QUERY_ALL_PUBLIC_BLOGS } from "@/sanity/queries"
import { Blog as BlogType, QUERY_ALL_PUBLIC_BLOGSResult } from "@/sanity/types"
import { compareDesc } from "date-fns"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Blog",
    description: "Inside our creative minds."
}

const Blog = async () => {
    const allBlogs: QUERY_ALL_PUBLIC_BLOGSResult = await client.fetch(
        QUERY_ALL_PUBLIC_BLOGS,
        {},
        { cache: process.env.NODE_ENV === "development" ? "no-store" : "force-cache" }
    )

    const categoryOrder = [
        "SOFTWARE ENGINEERING",
        "BUSINESS TECHNOLOGY",
        "METHODOLOGY",
        "NEWS",
        "CULTURE",
        "EXPERIENCE"
    ] as const satisfies BlogType["category"][]

    const filteredBlogs = allBlogs
        .filter((blog) => blog)
        .sort((a, b) => {
            const categoryComparison = categoryOrder.indexOf(a.category!) - categoryOrder.indexOf(b.category!)

            if (categoryComparison !== 0) {
                return categoryComparison
            }

            return compareDesc(new Date(a.date!), new Date(b.date!))
        })

    return (
        <div>
            <BlogOverview blogs={filteredBlogs} />
        </div>
    )
}

export default Blog
