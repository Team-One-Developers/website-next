import { PageLayout } from "@/components/layout/PageLayout"
import Blog from "@/components/tailgrid/Blog"
import { PAGE_THEME } from "@/constants"
import { client } from "@/sanity/lib/client"
import { QUERY_ALL_BLOGS } from "@/sanity/queries"
import { Blog as BlogType, QUERY_ALL_BLOGSResult } from "@/sanity/types"
import { compareDesc } from "date-fns"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Blog",
    description: "Inside our creative minds."
}

const fitsCategory = (blog: BlogType, categories: string[]): boolean => {
    if (!blog.category) return false

    if (categories.includes(blog.category)) {
        return true
    } else {
        return false
    }
}

const BlogOverview = async () => {
    const allBlogs: QUERY_ALL_BLOGSResult = await client.fetch(
        QUERY_ALL_BLOGS,
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
        .filter((blog) => blog && blog.date && blog.category && blog.visibility === "Public")
        .sort((a, b) => {
            const categoryComparison = categoryOrder.indexOf(a.category!) - categoryOrder.indexOf(b.category!)

            if (categoryComparison !== 0) {
                return categoryComparison
            }

            return compareDesc(new Date(a.date!), new Date(b.date!))
        })

    return (
        <PageLayout theme={PAGE_THEME.light}>
            <Blog blogs={filteredBlogs} />
        </PageLayout>
    )
}

export default BlogOverview
