import { Blog } from "contentlayer/generated"
import { BlogArticle } from "../molecules/BlogArticle"

export const BlogRow = ({ blogs }: { blogs: Blog[] }) => {
    return (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-cols-1 gap-4 w-full ">
            {blogs.map((blog, index) => (
                <BlogArticle blog={blog} key={index} />
            ))}
        </div>
    )
}
