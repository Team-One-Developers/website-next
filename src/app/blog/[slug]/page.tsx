import { Mdx } from "@/components/MdxComponents"
import { Image } from "@/components/atoms/Image"
import { StructuredData } from "@/components/atoms/StructuredData"
import Typography from "@/components/atoms/Typography"
import { PageLayout } from "@/components/layout/PageLayout"
import { Section } from "@/components/layout/Section"
import { AboutTheAuthor } from "@/components/molecules/AboutTheAuthor"
import { BlogCTA } from "@/components/molecules/BlogCTA"
import { ProfilePicture } from "@/components/molecules/ProfilePicture"
import { T1ProseArticle } from "@/components/molecules/T1ProseArticle"
import { TOC } from "@/components/molecules/TOC"
import { Tags } from "@/components/molecules/Tags"
import { BlogRow } from "@/components/organisms/BlogRow"
import { formatDate } from "@/lib/formateDate"
import { getAuthor } from "@/lib/getAuthor"
import { mostRelated } from "@/lib/mostRelated"
import { allBlogs } from "contentlayer/generated"
import { Metadata } from "next"
import { notFound } from "next/navigation"
import "../../../styles/headings.css"

import BlogHeroBG from "/public/images/optimized/hero_optimized.webp"

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

    const structuredData = {
        "@type": "NewsArticle",
        headline: blog.title,
        image: blog.heroImage ? blog.heroImage : undefined,
        author: [
            {
                "@type": "Person",
                name: blog.author
            }
        ],
        datePublished: blog.date
    }

    return (
        <PageLayout>
            <StructuredData data={structuredData} />
            {
                // mover under header
            }
            <div className="relative h-auto w-full">
                {blog.heroImage && (
                    <div>
                        <Image
                            src={blog.heroImage}
                            alt="Hero Background Image"
                            placeholder="blur"
                            blurDataURL={BlogHeroBG.blurDataURL}
                            fill
                            className="absolute top-0 left-0"
                        />
                        <div className="absolute mt-0 top-0 left-0 w-full h-full bg-black opacity-70" />
                    </div>
                )}
                <Section className="relative -mt-[75px] py-[180px] md:py-[180px] pb-[80px]">
                    <div className="max-w-[80%] 4xl:max-w-[1920px] flex flex-col gap-4 relative">
                        <Typography as="h1" variant="h1">
                            {blog.title}
                        </Typography>
                        <Typography as="h2" variant="h4" className="text-primary">
                            {blog.descriptionShort}
                        </Typography>

                        <Tags blog={blog} size="lg" />
                    </div>
                    <div className="flex items-center relative mt-4">
                        <ProfilePicture imgSrc={author.profileImg} objectFit={author.profileImgObjectFit} />
                        <div className="ml-4">
                            <Typography as="p" variant="h5">
                                {author.name}
                            </Typography>
                            <Typography as="p" variant="paragraph" className="text-muted-dark">
                                {author.position}
                            </Typography>
                            <Typography as="time" variant="paragraph">
                                {formatDate(blog.date)}
                            </Typography>
                        </div>
                    </div>
                </Section>
            </div>
            <Section>
                <div className="flex flex-col gap-24 lg:grid w-full lg:gap-24 grid-rows-auto lg:py-4 4xl:px-0 pt-0 xl:grid-cols-[600px_1fr] 2xl:grid-cols-[700px_1fr] 3xl:grid-cols-[0.8fr_800px_1fr]">
                    {blog.toc && (
                        <TOC blog={blog} className="xl:col-start-2 xl:row-start-1 3xl:col-start-1 3xl:row-start-1 " />
                    )}
                    <div className="scrollMarginTopFix xl:col-start-1 xl:row-start-1 3xl:col-start-2">
                        <Typography as="h2" variant="h2" className="">
                            {blog.title}
                        </Typography>
                        <Typography as="p" variant="subtitle" className="mt-2">
                            {blog.descriptionLong}
                        </Typography>

                        <hr className="my-8" />

                        <T1ProseArticle>
                            <Mdx code={blog.body.code} />
                        </T1ProseArticle>
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
                <div className="flex flex-col gap-4 mt-32">
                    <Typography as="h3" variant="h3">
                        Verwandte Artikel
                    </Typography>
                    <BlogRow blogs={mostRelatedBlogs} />
                </div>
            </Section>
        </PageLayout>
    )
}
