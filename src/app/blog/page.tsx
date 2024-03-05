import Typography from "@/components/atoms/Typography"
import { PageLayout } from "@/components/layout/PageLayout"
import { Section } from "@/components/layout/Section"
import { BlogRow } from "@/components/organisms/BlogRow"
import { PAGE_THEME } from "@/constants"
import { Blog, allBlogs } from "contentlayer/generated"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Blog",
    description: "Inside our creative minds."
}

const BlogOverview = () => {
    const showTestBlogs = process.env.NEXT_PUBLIC_RENDER_TESTING_BLOGS === "TRUE"

    const fitsCategory = (blog: Blog, categories: string[]): boolean => {
        if (categories.includes(blog.category)) {
            return true
        } else {
            return false
        }
    }

    const shouldBeShown = (blog: Blog): boolean => {
        if (blog.status === "PUBLISHED" || (blog.status === "TESTING" && showTestBlogs)) {
            return true
        } else {
            return false
        }
    }

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
                        News / Culture / Experience / Methodology
                    </Typography>
                    <Typography as="p" variant="paragraph">
                        Beyond Code: Einblicke in unser internes Firmenleben, Neuigkeiten und Themen die uns bewegen.
                    </Typography>
                    <BlogRow
                        blogs={allBlogs.filter(
                            (blog) =>
                                fitsCategory(blog, ["METHODOLOGY", "NEWS", "CULTURE", "EXPERIENCE"]) &&
                                shouldBeShown(blog)
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
                            (blog) => fitsCategory(blog, ["SOFTWARE ENGINEERING"]) && shouldBeShown(blog)
                        )}
                    />
                </div>
            </Section>
        </PageLayout>
    )
}

export default BlogOverview
