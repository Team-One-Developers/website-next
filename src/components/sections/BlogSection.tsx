import BlogCard from "@/components/molecules/BlogCard"
import cn from "@/utils/cn"

interface BlogItem {
    title: string
    description: string
    image: string
    eyebrowLabel: string
    tagLabel?: string
    author: {
        name: string
        role: string
        avatarUrl: string
    }
    href: string
}

interface BlogSectionProps {
    title: string
    posts: BlogItem[]
    className?: string
}

export default function BlogSection({ title, posts, className }: BlogSectionProps) {
    return (
        <section className={cn("gap-grid-gutter flex flex-col", className)}>
            <h2 className="font-gteradisplay text-d2 text-black">{title}</h2>
            <div className="gap-grid-gutter grid grid-cols-1 grid-rows-[repeat(6,auto)] md:grid-cols-2 md:grid-rows-[repeat(6,auto)] lg:grid-cols-3 lg:grid-rows-[repeat(6,auto)]">
                {posts.map((post) => (
                    <BlogCard key={post.title} {...post} />
                ))}
            </div>
        </section>
    )
}
