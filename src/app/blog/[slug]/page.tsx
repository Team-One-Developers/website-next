import { T1PortableText } from "@/components/T1PortableText"
import { DraftMarker } from "@/components/atoms/DraftMarker"
import { StructuredData } from "@/components/atoms/StructuredData"
import Typography from "@/components/atoms/Typography"
import { PageLayout } from "@/components/layout/PageLayout"
import { Section } from "@/components/layout/Section"
import { BlogCTA } from "@/components/molecules/BlogCTA"
import { ProfilePicture } from "@/components/molecules/ProfilePicture"
import { Tags } from "@/components/molecules/Tags"
import { BlogHeroImage } from "@/components/organisms/BlogHeroImage"
import { BlogRow } from "@/components/organisms/BlogRow"
import { PAGE_THEME } from "@/constants"
import { organization } from "@/data/schemaOrg"
import { highlightCode } from "@/lib/codeStringToHighlightedHTML"
import { formatDate } from "@/lib/formateDate"
import { mostRelatedBlogs } from "@/lib/mostRelated"
import { client } from "@/sanity/lib/client"
import { QUERY_ALL_BLOGS, QUERY_SPECIFIC_BLOG } from "@/sanity/queries"
import { QUERY_ALL_BLOGSResult } from "@/sanity/types"
import { Metadata } from "next"
import { notFound } from "next/navigation"
import type { BlogPosting, WithContext } from "schema-dts"
import "../../../styles/headings.css"

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
        amount: 4
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
            {isDraft ? <DraftMarker /> : null}
            <Section>
                <div className="3xl:grid-cols-[1fr_800px_1fr] flex w-full auto-rows-auto flex-col gap-24 pt-0 lg:grid xl:grid-cols-[800px_1fr] 2xl:grid-cols-[800px_1fr]">
                    {/* {blog.toc && (
                        <TOC blog={blog} className="xl:col-start-2 xl:row-start-1 3xl:col-start-1 3xl:row-start-1 " />
                    )} */}
                    <div className="scrollMarginTopFix 3xl:col-start-2 xl:col-start-1 xl:row-start-1">
                        <Typography as="h1" variant="h1" className="uppercase">
                            {blog.title}
                        </Typography>
                        <Typography as="p" variant="paragraph" className="my-2">
                            {blog.descriptionLong}
                        </Typography>
                        <Tags blog={blog} size="md" className="my-2" color="primary" />
                        <div className="relative mt-4 flex items-center">
                            <ProfilePicture image={blog?.author?.profileImg?.asset} authorName={blog?.author?.name} />
                            <div className="ml-4">
                                <Typography as="p" variant="subtitle">
                                    {blog?.author?.name}
                                </Typography>
                                <Typography as="p" variant="paragraph" className="text-muted">
                                    {blog?.author?.position}
                                </Typography>
                                <Typography as="time" variant="paragraph">
                                    {formatDate(blog?.date!)}
                                </Typography>
                            </div>
                        </div>
                        <hr className="my-8 h-px border-dashed bg-t1-darkGray" />
                        {blog.heroImage?.asset && (
                            <div className="relative h-fit w-full pb-4">
                                <BlogHeroImage image={blog.heroImage.asset} />
                            </div>
                        )}
                        {blog.content && <T1PortableText value={ptBlocksHighlighted} />}
                        <hr className="my-8 h-px border-dashed bg-t1-darkGray" />
                        {/* <AboutTheAuthor author={blog.author} /> */}
                    </div>
                </div>
            </Section>
            <Section>
                <div className="flex flex-col gap-4">
                    {
                        // TODO fix sorting
                    }
                    <Typography as="h3" variant="h3" className="uppercase">
                        Verwandte Artikel
                    </Typography>
                    <BlogRow blogs={relatedBlogs} />
                </div>
            </Section>
            {blog.cta !== "NONE" && (
                <Section>
                    <div className="flex flex-col gap-4">
                        <Typography as="h3" variant="h3" className="uppercase">
                            Dein Job bei Team One Developers?
                        </Typography>
                        <BlogCTA variant={blog?.cta!} />
                    </div>
                </Section>
            )}
        </PageLayout>
    )
}
