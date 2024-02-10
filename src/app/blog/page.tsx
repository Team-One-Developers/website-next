import Typography from "@/components/atoms/Typography"
import { PageLayout } from "@/components/layout/PageLayout"
import { Section } from "@/components/layout/Section"
import { BlogRow } from "@/components/organisms/BlogRow"
import { PAGE_THEME } from "@/constants"
import { allBlogs } from "contentlayer/generated"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Blog"
}

const BlogOverview = () => {
    return (
        <PageLayout theme={PAGE_THEME.light}>
            <Section>
                <Typography as="h1" variant="h1" className="font-medium">
                    Read our blog
                </Typography>
            </Section>

            {/* <div className="relative h-auto w-full hidden">
                <Image
                    src={BlogHeroBG}
                    alt="Blog Hero Background Image"
                    fill
                    placeholder="blur"
                    className="left-0 top-0"
                />
                <div className="absolute left-0 top-0 mt-0 size-full bg-black opacity-70" />
                <Section className="relative -mt-[75px] py-[180px] pb-[80px] md:py-[180px]">
                    <div className="relative flex max-w-[80%] flex-col gap-4 4xl:max-w-[1920px]">
                        <Typography as="h1" variant="h1">
                            Read our blog
                        </Typography>
                        <Typography as="h2" variant="h4" className="text-primary">
                            Hier posten wir über erreichte Meilensteine, Erfahrungen und vor allem gesammeltes Wissen
                            aus unserem Arbeitsleben.
                        </Typography>
                    </div>
                </Section>
            </div> */}
            <Section>
                <div className="flex flex-col gap-4">
                    <Typography as="h2" variant="h2" className="uppercase">
                        News / Culture / Experience
                    </Typography>
                    <Typography as="p" variant="paragraph">
                        Blogbeiträge über unser internes Firmenleben, Neuigkeiten und Themen die uns bewegen.
                    </Typography>
                    <BlogRow
                        blogs={allBlogs.filter(
                            (blog) =>
                                (blog.category === "METHODOLOGY" ||
                                    blog.category === "NEWS" ||
                                    blog.category === "CULTURE" ||
                                    blog.category === "EXPERIENCE") &&
                                blog.status === "PUBLISHED"
                        )}
                    />
                </div>
                <div className="mt-16 flex flex-col  gap-4">
                    <Typography as="h2" variant="h2" className="uppercase">
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
