import { Image } from "@/components/atoms/Image"
import Typography from "@/components/atoms/Typography"
import { PageLayout } from "@/components/layout/PageLayout"
import { Section } from "@/components/layout/Section"
import { BlogRow } from "@/components/organisms/BlogRow"
import { allBlogs } from "contentlayer/generated"
import { Metadata } from "next"
import BlogHeroBG from "/public/images/optimized/t1d_nov22_149_optimized.webp"

export const metadata: Metadata = {
    title: "Blog"
}

const BlogOverview = () => {
    return (
        <PageLayout>
            <div className="relative h-auto w-full">
                <Image
                    src={BlogHeroBG}
                    alt="Blog Hero Background Image"
                    fill
                    placeholder="blur"
                    className="top-0 left-0"
                />
                <div className="absolute mt-0 top-0 left-0 w-full h-full bg-black opacity-70" />
                <Section className="relative -mt-[75px] py-[180px] md:py-[180px] pb-[80px]">
                    <div className="max-w-[80%] 4xl:max-w-[1920px] flex flex-col gap-4 relative">
                        <Typography as="h1" variant="h1">
                            Read our blog
                        </Typography>
                        <Typography as="h2" variant="h4" className="text-primary">
                            Hier posten wir über erreichte Meilensteine, Erfahrungen und vor allem gesammeltes Wissen
                            aus unserem Arbeitsleben.
                        </Typography>
                    </div>
                </Section>
            </div>
            <Section>
                <div className="flex flex-col gap-4">
                    <Typography as="h2" variant="h2">
                        News / Culture / Experience
                    </Typography>
                    <Typography as="p" variant="paragraph">
                        Blogbeiträge über unser internes Firmenleben, Neuigkeiten und Themen die uns bewegen.
                    </Typography>
                    <BlogRow
                        blogs={allBlogs.filter(
                            (blog) => blog.category === "NEWS/CULTURE/EXPERIENCE" && blog.status === "PUBLISHED"
                        )}
                    />
                </div>
                <div className="flex flex-col gap-4 mt-16">
                    <Typography as="h2" variant="h2">
                        Software Engineering
                    </Typography>
                    <Typography as="p" variant="paragraph">
                        Blogbeiträge über alles was zur Softwareentwicklung gehört. Von Typescript über React hin zu
                        Produktivität steigernden simplen Shortcuts ist alles dabei.
                    </Typography>
                    <BlogRow
                        blogs={allBlogs.filter(
                            (blog) => blog.category === "SOFTWARE ENGINEERING" && blog.status === "PUBLISHED"
                        )}
                    />
                </div>
            </Section>
        </PageLayout>
    )
}

export default BlogOverview
