import Typography from "@/components/atoms/Typography"
import { Section } from "@/components/layout/Section"
import { formatDate } from "@/lib/formateDate"
import { QUERY_ALL_BLOGSResult } from "@/sanity/types"
import Image from "next/image"
import Link from "next/link"

const Blog = ({ blogs }: { blogs: QUERY_ALL_BLOGSResult }) => {
    return (
        <>
            <Section>
                <div className="">
                    <div className="flex flex-wrap">
                        <div className="w-full">
                            <div className="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
                                {/* <span className="mb-2 block text-lg font-semibold text-foreground">Our Blogs</span> */}
                                <Typography as="h2" variant="h1">
                                    Our Blog
                                </Typography>
                                <Typography>
                                    There are many variations of passages of Lorem Ipsum available but the majority have
                                    suffered alteration in some form.
                                </Typography>
                            </div>
                        </div>
                    </div>

                    <div className="grid w-full grid-cols-1 gap-x-4 gap-y-16 md:grid-cols-2 lg:grid-cols-4">
                        {blogs.map((blog) => {
                            return (
                                <BlogCard
                                    date={blog.date ?? new Date().toLocaleDateString()}
                                    CardTitle={blog.title ?? ""}
                                    CardDescription={blog.descriptionShort ?? ""}
                                    image={blog.heroImage?.asset?.url ?? null}
                                    href={blog.path ?? ""}
                                />
                            )
                        })}
                    </div>
                </div>
            </Section>
        </>
    )
}

export default Blog

const BlogCard = ({
    image,
    date,
    CardTitle,
    CardDescription,
    href
}: {
    image: string | null
    date: string
    CardTitle: string
    CardDescription: string
    href: string
}) => {
    return (
        <Link href={href} className="rounded p-4 hover:bg-foreground/5">
            <div className="w-full">
                <div className="mb-10 w-full">
                    <div className="relative mb-8 aspect-square overflow-hidden rounded">
                        <Image
                            src={image || "/images/optimized/hero_optimized.webp"}
                            alt="BlogHeroImage"
                            fill
                            className="w-full"
                            style={{ objectFit: "cover" }}
                        />
                    </div>
                    <div>
                        {date && (
                            <Typography
                                as="span"
                                className="mb-5 inline-block rounded bg-primary px-4 py-1 text-center text-sm text-foreground"
                            >
                                {formatDate(date)}
                            </Typography>
                        )}
                        <Typography as="h3" variant="h3">
                            {CardTitle}
                        </Typography>

                        <Typography className="">{CardDescription}</Typography>
                    </div>
                </div>
            </div>
        </Link>
    )
}
