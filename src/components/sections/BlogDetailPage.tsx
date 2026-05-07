/* eslint-disable @typescript-eslint/no-explicit-any */
import Eyebrow from "@/components/atoms/Eyebrow"
import Tag from "@/components/atoms/Tag"
import ContentBlock from "@/components/layout/ContentBlock"
import AuthorInfo from "@/components/molecules/AuthorInfo"
import BlogCard from "@/components/molecules/BlogCard"
import { T1PortableText } from "@/components/molecules/T1PortableText"
import ContactSection from "@/components/sections/ContactSection"
import HeroGradientBackdrop from "@/components/sections/HeroGradientBackdrop"
import ImageTeaser from "@/components/sections/ImageTeaser"
import {
    QUERY_ALL_BLOGS_DANGER_ONLY_FOR_STATIC_PARAMSResult,
    QUERY_ALL_PUBLIC_BLOGSResult,
    QUERY_SPECIFIC_BLOGResult
} from "@/sanity/types"
import cn from "@/utils/cn"
import { formatDate } from "@/utils/formatDate"
import Link from "next/link"

export interface BlogDetailPageProps {
    blog: NonNullable<QUERY_SPECIFIC_BLOGResult>
    highlightedContent: any[]
    relatedBlogs: QUERY_ALL_BLOGS_DANGER_ONLY_FOR_STATIC_PARAMSResult | QUERY_ALL_PUBLIC_BLOGSResult
    className?: string
}

const BlogDetailPage = async ({ blog, highlightedContent, relatedBlogs, className }: BlogDetailPageProps) => {
    const authorImageUrl = blog.author?.profileImg?.asset?.url
    const heroImageUrl = blog.heroImage?.asset?.url
    const tags = blog.tags ?? []
    const formattedDate = formatDate(blog.date)

    const relatedBlogCards = relatedBlogs.slice(0, 3).map((related: any) => ({
        title: related.title ?? "",
        description: related.descriptionShort ?? "",
        image: related.heroImage?.asset?.url ?? "",
        eyebrowLabel: related.category ?? "",
        tagLabel: related.date ? formatDate(related.date) : undefined,
        author: {
            name: `by ${related.author?.name ?? ""}`,
            role: related.author?.position ?? "",
            avatarUrl: related.author?.profileImg?.asset?.url ?? ""
        },
        href: `/blog/${related.slug?.current ?? ""}`
    }))

    return (
        <div className={cn("relative", className)}>
            <HeroGradientBackdrop />

            <div className="gap-vertical-inner relative z-10 flex flex-col">
                {/* Heading block */}
                <ContentBlock>
                    <div className="mx-auto flex max-w-180 flex-col">
                        {/* Back link */}
                        <Link
                            href="/blog"
                            className="gap-sm text-small mb-lg flex items-center pt-20 text-black lg:pt-32"
                        >
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                className="rotate-180"
                                aria-hidden="true"
                            >
                                <path
                                    d="M5 12H19M19 12L12 5M19 12L12 19"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            Zurück zur Übersicht
                        </Link>

                        {/* Title */}
                        <h1 className="font-gteradisplay text-d1 mb-lg font-light text-black">{blog.title}</h1>

                        {/* Eyebrow tags */}
                        {tags.length > 0 && (
                            <div className="gap-lg mb-lg flex flex-wrap items-center">
                                {tags.map((tag) => (
                                    <Eyebrow key={tag} label={tag} size="small" />
                                ))}
                            </div>
                        )}

                        {/* Subtitle */}
                        {blog.descriptionShort && (
                            <p className="font-gteradisplay text-medium mb-lg max-w-150 text-black">
                                {blog.descriptionShort}
                            </p>
                        )}

                        {/* Author info + date */}
                        <div className="gap-sm flex items-center">
                            {authorImageUrl && (
                                <AuthorInfo
                                    name={`by ${blog.author?.name ?? ""}`}
                                    role={blog.author?.position ?? ""}
                                    avatarUrl={authorImageUrl}
                                />
                            )}
                            <Tag label={formattedDate} />
                        </div>
                    </div>
                </ContentBlock>

                {/* Hero image teaser */}
                {heroImageUrl && (
                    <ContentBlock>
                        <ImageTeaser
                            image={heroImageUrl}
                            alt={blog.title}
                            title="AI Summary"
                            description={blog.descriptionLong}
                        />
                    </ContentBlock>
                )}

                {/* Article body */}
                <ContentBlock>
                    <div className="mx-auto max-w-180">
                        <T1PortableText value={highlightedContent} />
                    </div>
                </ContentBlock>

                {/* Contact section */}
                <ContentBlock>
                    <ContactSection title="Lass uns über Software sprechen, die Wachstum schafft." />
                </ContentBlock>

                {/* Related articles */}
                {relatedBlogCards.length > 0 && (
                    <ContentBlock>
                        <section className="gap-grid-gutter flex flex-col">
                            <h2 className="font-gteradisplay text-d2 text-black">Ähnliche Artikel</h2>
                            <div className="gap-grid-gutter grid grid-cols-1 md:grid-cols-2 md:grid-rows-[repeat(6,auto)] lg:grid-cols-3 lg:grid-rows-[repeat(6,auto)]">
                                {relatedBlogCards.map((post: any) => (
                                    <BlogCard key={post.href} {...post} />
                                ))}
                            </div>
                        </section>
                    </ContentBlock>
                )}
            </div>
        </div>
    )
}

export default BlogDetailPage
