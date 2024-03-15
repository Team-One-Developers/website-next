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
import { PAGE_THEME } from "@/constants"
import { organization } from "@/data/schemaOrg"
import { formatDate } from "@/lib/formateDate"
import { getAuthor } from "@/lib/getAuthor"
import { mostRelated } from "@/lib/mostRelated"
import { allBlogs } from "contentlayer/generated"
import { Metadata } from "next"
import { notFound } from "next/navigation"
import type { BlogPosting, WithContext } from "schema-dts"
import "../../../styles/headings.css"

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
        image: blog.heroImage ?? undefined,
        datePublished: blog.date,
        author: {
            "@type": "Person",
            name: blog.author
        },
        publisher: organization
    }

    return (
        <PageLayout theme={PAGE_THEME.light}>
            <StructuredData data={structuredData} />
            <Section>
                <div className="flex w-full auto-rows-auto flex-col gap-24 pt-0 lg:grid xl:grid-cols-[800px_1fr] 2xl:grid-cols-[800px_1fr] 3xl:grid-cols-[1fr_800px_1fr]">
                    {/* {blog.toc && (
                            <TOC
                                blog={blog}
                                className="xl:col-start-2 xl:row-start-1 3xl:col-start-1 3xl:row-start-1 "
                            />
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
                            <ProfilePicture imgSrc={author.profileImg} authorName={author.name} />
                            <div className="ml-4">
                                <Typography as="p" variant="subtitle">
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
                        <hr className=" my-8 h-px border-dashed bg-t1-darkGray" />
                        {blog.heroImage && (
                            <div className="relative h-fit w-full">
                                <Image
                                    src={blog.heroImage}
                                    alt="Hero Background Image"
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    style={{ width: "100%", height: "auto" }} // optional
                                    // placeholder="blur"
                                    // blurDataURL={blog.blurDataURL}
                                    // TODO: Preprocess contentlayer images
                                />
                                {/* <hr className="my-8" /> */}
                            </div>
                        )}
                        <Mdx code={blog.body.code} theme="light" />
                        <hr className=" my-8 h-px border-dashed bg-t1-darkGray" />
                        <AboutTheAuthor author={author} />
                    </div>
                </div>
            </Section>
            <Section>
                <div className="flex flex-col gap-4">
                    <Typography as="h3" variant="h3" className="uppercase">
                        Verwandte Artikel
                    </Typography>
                    <BlogRow blogs={mostRelatedBlogs} />
                </div>
            </Section>
            {blog.cta !== "NONE" && (
                <Section>
                    <div className="flex flex-col gap-4">
                        <Typography as="h3" variant="h3" className="uppercase">
                            Dein Job bei Team One Developers?
                        </Typography>
                        <BlogCTA variant={blog.cta} />
                    </div>
                </Section>
            )}
        </PageLayout>
    )
}
