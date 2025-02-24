import { StructuredData } from "@/components/atoms/StructuredData"
import { PageLayout } from "@/components/layout/PageLayout"
import BlogDetails2 from "@/components/tailgrid/BlogDetails2"
import { PAGE_THEME } from "@/constants"
import { organization } from "@/data/schemaOrg"
import { highlightCode } from "@/lib/codeStringToHighlightedHTML"
import { mostRelatedBlogs } from "@/lib/mostRelated"
import { client } from "@/sanity/lib/client"
import { QUERY_ALL_BLOGS, QUERY_SPECIFIC_BLOG } from "@/sanity/queries"
import { QUERY_ALL_BLOGSResult } from "@/sanity/types"
import "@/styles/headings.css"
import { Metadata } from "next"
import { Inter as Inter_Google } from "next/font/google"
import { notFound } from "next/navigation"
import type { BlogPosting, WithContext } from "schema-dts"

const Inter = Inter_Google({
    subsets: ["latin"],
    variable: "--font-Inter",
    display: "swap"
})

interface BlogProps {
    params: Promise<{ slug: string }>
}

async function getBlogFromParams(slug: string) {
    const blog = await client.fetch(
        QUERY_SPECIFIC_BLOG,
        { slug },
        { cache: process.env.NODE_ENV === "development" ? "no-store" : "force-cache" }
    )

    if (!blog) {
        null
    }

    return blog
}

export async function generateMetadata({ params }: BlogProps): Promise<Metadata> {
    const { slug } = await params
    const blog = await getBlogFromParams(slug)

    if (!blog) {
        return {}
    }

    const isPublic = blog.visibility === "Public"

    return {
        openGraph: {
            images: `/api/og/blog?title=${blog.title}`
        },
        title: blog.title,
        description: blog.descriptionShort,
        robots: {
            index: isPublic,
            follow: isPublic
        }
    }
}

export async function generateStaticParams() {
    const allBlogs: QUERY_ALL_BLOGSResult = await client.fetch(QUERY_ALL_BLOGS)

    return allBlogs
        .filter((blog) => blog.slug?.current)
        .map(({ slug }) => ({
            slug: slug!.current!
        }))
}

export default async function BlogPage({ params }: BlogProps) {
    const { slug } = await params
    const blog = await getBlogFromParams(slug)

    if (!blog) {
        notFound()
    }

    const isDraft = blog.visibility !== "Public"

    const allBlogs = await client.fetch(QUERY_ALL_BLOGS)
    const ptBlocksHighlighted = await highlightCode(blog.content)

    const relatedBlogs = mostRelatedBlogs({
        allItems: allBlogs,
        currentItem: blog,
        amount: 3
    })

    const structuredData: WithContext<BlogPosting> = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: blog.title,
        image: blog.heroImage?.asset?.url ?? undefined,
        datePublished: blog.date,
        author: {
            "@type": "Person",
            name: blog.author?.name
        },
        publisher: organization
    }

    return (
        <PageLayout theme={PAGE_THEME.light}>
            <StructuredData data={structuredData} />
            <BlogDetails2
                blog={blog}
                highlightedContent={ptBlocksHighlighted}
                relatedBlogs={relatedBlogs}
                className={Inter.variable}
            />
        </PageLayout>
    )
}
