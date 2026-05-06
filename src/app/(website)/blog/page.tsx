import BlogOverview from "@/components/sections/BlogOverview"
import { client } from "@/sanity/lib/client"
import { QUERY_ALL_PUBLIC_BLOGS } from "@/sanity/queries"
import { QUERY_ALL_PUBLIC_BLOGSResult } from "@/sanity/types"
import { formatDate } from "@/utils/formatDate"
import { compareDesc } from "date-fns"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Blog",
    description:
        "Der Team One Blog: Technische Einblicke, Praxisberichte und Perspektiven aus Software Engineering, AI, Cloud-Architektur und digitaler Transformation.",
    alternates: {
        canonical: "https://www.team-one.de/blog"
    }
}

const Blog = async () => {
    const allBlogs: QUERY_ALL_PUBLIC_BLOGSResult = await client.fetch(QUERY_ALL_PUBLIC_BLOGS)

    const filteredBlogs = allBlogs
        .filter((blog) => blog)
        .sort((a, b) => {
            return compareDesc(new Date(a.date!), new Date(b.date!))
        })
        .map((blog) => ({
            ...blog,
            formattedDate: formatDate(blog.date!)
        }))

    return <BlogOverview blogs={filteredBlogs} />
}

export default Blog
