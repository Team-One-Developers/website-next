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
                <Typography as="h1" variant="h1">
                    Inside our creative minds
                </Typography>
            </Section>
            <Section className="pt-0">
                <div className="flex flex-col gap-4">
                    <Typography as="h2" variant="h2" className="uppercase">
                        News / Culture / Experience
                    </Typography>
                    <Typography as="p" variant="paragraph">
                        Beyond Code: Einblicke in unser internes Firmenleben, Neuigkeiten und Themen die uns bewegen.
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
