import { QUERY_ALL_BLOGSResult } from "@/sanity/types"
import { BlogArticle } from "../molecules/BlogArticle"

export const BlogRow = ({ blogs }: { blogs: QUERY_ALL_BLOGSResult }) => {
    return (
        <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog, index) => (
                <BlogArticle blog={blog} key={index} />
            ))}
        </div>
    )
}
