/* eslint-disable @typescript-eslint/no-unused-vars */
import Section from "@/components/layout/Section"
import StructuredData from "@/components/layout/StructuredData"
import BlogDetailPageTemp from "@/components/sections/BlogDetailPage"
import { organization } from "@/data/schemaOrg"
import { client } from "@/sanity/lib/client"
import {
    QUERY_ALL_BLOGS_DANGER_ONLY_FOR_STATIC_PARAMS,
    QUERY_ALL_PUBLIC_BLOGS,
    QUERY_SPECIFIC_BLOG
} from "@/sanity/queries"
import { QUERY_ALL_BLOGS_DANGER_ONLY_FOR_STATIC_PARAMSResult } from "@/sanity/types"
import { highlightCode } from "@/utils/codeStringToHighlightedHTML"
import { mostRelatedBlogs } from "@/utils/mostRelated"
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
        return null
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
    const allBlogs: QUERY_ALL_BLOGS_DANGER_ONLY_FOR_STATIC_PARAMSResult = await client.fetch(
        QUERY_ALL_BLOGS_DANGER_ONLY_FOR_STATIC_PARAMS
    )

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

    const allBlogs = await client.fetch(QUERY_ALL_PUBLIC_BLOGS)
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
        <Section>
            <StructuredData data={structuredData} />
            <BlogDetailPageTemp
                blog={blog}
                highlightedContent={ptBlocksHighlighted}
                relatedBlogs={relatedBlogs}
                className="font-inter"
            />
        </Section>
    )
}
