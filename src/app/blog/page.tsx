import Typography from "@/components/atoms/Typography"
import { PageLayout } from "@/components/layout/PageLayout"
import { Section } from "@/components/layout/Section"
import { BlogRow } from "@/components/organisms/BlogRow"
import { PAGE_THEME } from "@/constants"
import { Blog, allBlogs } from "contentlayer/generated"
import { compareDesc } from "date-fns"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Blog",
    description: "Inside our creative minds."
}

const shouldBeShown = (blog: Blog) => {
    if (blog.status === "PUBLISHED" && blog.length === "BLOG") {
        return true
    } else if (blog.status === "TESTING" && process.env.NEXT_PUBLIC_RENDER_DRAFT_BLOGS === "TRUE") {
        return true
    } else {
        return false
    }
}

const fitsCategory = (blog: Blog, categories: string[]): boolean => {
    if (categories.includes(blog.category)) {
        return true
    } else {
        return false
    }
}

const BlogOverview = () => {
    const blogPosts = allBlogs
        .filter((blog) => shouldBeShown(blog))
        .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))

    return (
        <PageLayout theme={PAGE_THEME.light}>
            <Section>
                <Typography as="h1" variant="h1" className="font-medium">
                    Team One Developers Blog
                </Typography>
            </Section>
            <Section className="py-0 md:py-0">
                <div className="flex flex-col gap-4">
                    <BlogRow blogs={blogPosts} />
                </div>
            </Section>
        </PageLayout>
    )
}

export default BlogOverview
