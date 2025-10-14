import TripleImageColumn from "@/components/sections/TripleImageColumn"
import { client } from "@/sanity/lib/client"
import { QUERY_NEWEST_BLOGS } from "@/sanity/queries"
import { QUERY_NEWEST_BLOGSResult } from "@/sanity/types"
import { formatDate } from "@/utils/formatDate"
import { Suspense } from "react"

export const BlogAndNews = async () => {
    const cacheMode = process.env.NODE_ENV === "development" ? "no-store" : "force-cache"
    const newestBlogs: QUERY_NEWEST_BLOGSResult = await client.fetch(QUERY_NEWEST_BLOGS, {}, { cache: cacheMode })

    return (
        <Suspense fallback={<div className="h-96 animate-pulse rounded-lg bg-gray-200" />}>
            <TripleImageColumn
                title="Blog & News Update"
                columns={[
                    {
                        title: newestBlogs[0].title,
                        text: newestBlogs[0].descriptionShort,
                        image: newestBlogs[0].heroImage?.asset?.url || "/images/culture/coffetalk.webp",
                        tags: [formatDate(newestBlogs[0].date)],
                        href: `/blog/${newestBlogs[0].slug?.current}`
                    },
                    {
                        title: newestBlogs[1].title,
                        text: newestBlogs[1].descriptionShort,
                        image: newestBlogs[1].heroImage?.asset?.url || "/images/culture/coffetalk.webp",
                        tags: [formatDate(newestBlogs[1].date)],
                        href: `/blog/${newestBlogs[1].slug?.current}`
                    },
                    {
                        title: newestBlogs[2].title,
                        text: newestBlogs[2].descriptionShort,
                        image: newestBlogs[2].heroImage?.asset?.url || "/images/culture/coffetalk.webp",
                        tags: [formatDate(newestBlogs[2].date)],
                        href: `/blog/${newestBlogs[2].slug?.current}`
                    }
                ]}
                layout="blog"
            />
        </Suspense>
    )
}
