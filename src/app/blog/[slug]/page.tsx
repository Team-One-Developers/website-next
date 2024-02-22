/* eslint-disable tailwindcss/no-custom-classname */
import { Mdx } from "@/components/MdxComponents"
import { Image } from "@/components/atoms/Image"
import { StructuredData } from "@/components/atoms/StructuredData"
import Typography from "@/components/atoms/Typography"
import { PageLayout } from "@/components/layout/PageLayout"
import { Section } from "@/components/layout/Section"
import { AboutTheAuthor } from "@/components/molecules/AboutTheAuthor"
import { BlogCTA } from "@/components/molecules/BlogCTA"
import { ProfilePicture } from "@/components/molecules/ProfilePicture"
import { Tags } from "@/components/molecules/Tags"
import { BlogRow } from "@/components/organisms/BlogRow"
import { formatDate } from "@/lib/formateDate"
import { getAuthor } from "@/lib/getAuthor"
import { mostRelated } from "@/lib/mostRelated"
import { allBlogs } from "contentlayer/generated"
import { Metadata } from "next"
import { notFound } from "next/navigation"
import type { BlogPosting, WithContext } from "schema-dts"

import "../../../styles/headings.css"
import { PAGE_THEME } from "@/constants"

interface BlogProps {
    params: {
        slug: string
    }
}

async function getBlogFromParams(params: BlogProps["params"]) {
    const blog = allBlogs.find((blog) => blog.slugAsParams === params.slug)

    if (!blog) {
        null
    }

    return blog
}

export async function generateMetadata({ params }: BlogProps): Promise<Metadata> {
    const blog = await getBlogFromParams(params)

    if (!blog) {
        return {}
    }

    return {
        openGraph: {
            images: `/api/og/blog?title=${blog.title}`
        },
        title: blog.title,
        description: blog.descriptionShort
    }
}

export async function generateStaticParams(): Promise<BlogProps["params"][]> {
    return allBlogs.map((blog) => ({
        slug: blog.slugAsParams
    }))
}

export default async function BlogPage({ params }: BlogProps) {
    const blog = await getBlogFromParams(params)

    if (!blog) {
        notFound()
    }

    const mostRelatedBlogs = mostRelated({
        allItems: allBlogs,
        currentItem: blog,
        amount: 4
    })

    const author = getAuthor(blog.author)
    // TODO public link for image?

    const structuredData: WithContext<BlogPosting> = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: blog.title,
        image: blog.heroImage ? blog.heroImage : undefined,
        datePublished: blog.date,
        author: {
            "@type": "Person",
            name: blog.author
        },
        publisher: {
            "@type": "Organization",
            name: "Team One Developers",
            url: "https://www.teamonedevelopers.de"
        }
    }

    return (
        <PageLayout theme={PAGE_THEME.light}>
            <StructuredData data={structuredData} />
            {
                // mover under header
            }

            <Section>
                <div className="grid-rows-auto flex w-full flex-col gap-24 pt-0 lg:grid lg:gap-24 lg:py-4 xl:grid-cols-[600px_1fr] 2xl:grid-cols-[700px_1fr] 3xl:grid-cols-[0.8fr_800px_1fr] 4xl:px-0">
                    {/* 
                    // for go-live not relevant. needs to be revisited later
                    {blog.toc && (
                        <TOC blog={blog} className="xl:col-start-2 xl:row-start-1 3xl:col-start-1 3xl:row-start-1 " />
                    )} */}
                    <div className="scrollMarginTopFix xl:col-start-1 xl:row-start-1 3xl:col-start-2">
                        <Typography as="h1" variant="h1" className="uppercase">
                            {blog.title}
                        </Typography>
                        <Typography as="p" variant="paragraph" className="my-2">
                            {blog.descriptionLong}
                        </Typography>
                        <Tags blog={blog} size="md" className="my-2" color="primary" />
                        <div className="relative mt-4 flex items-center">
                            <ProfilePicture imgSrc={author.profileImg} objectFit={author.profileImgObjectFit} />
                            <div className="ml-4">
                                <Typography as="p" variant="h6">
                                    {author.name}
                                </Typography>
                                <Typography as="p" variant="paragraph" className="text-muted">
                                    {author.position}
                                </Typography>
                                <Typography as="time" variant="paragraph">
                                    {formatDate(blog.date)}
                                </Typography>
                            </div>
                        </div>
                        <hr className="my-8" />
                        {blog.heroImage && (
                            <div className="relative h-fit w-full">
                                <Image
                                    src={blog.heroImage}
                                    alt="Hero Background Image"
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    style={{ width: "100%", height: "auto" }} // optional
                                />
                                <hr className="my-8" />
                            </div>
                        )}
                        <Mdx code={blog.body.code} theme="light" />
                        <AboutTheAuthor author={author} />
                    </div>
                </div>
            </Section>
            {blog.cta !== "NONE" && (
                <Section>
                    <BlogCTA variant={blog.cta} className="mt-16" />
                </Section>
            )}
            <Section>
                <div className="mt-32 flex flex-col gap-4">
                    <Typography as="h3" variant="h3">
                        Verwandte Artikel
                    </Typography>
                    <BlogRow blogs={mostRelatedBlogs} />
                </div>
            </Section>
        </PageLayout>
    )
}
