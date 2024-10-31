import { formatDate } from "@/lib/formateDate"
import Link from "next/link"
import Typography from "../atoms/Typography"
import { Tags } from "./Tags"
import { Blog, QUERY_ALL_BLOGSResult } from "@/sanity/types"

export type ResultBlogElement = QUERY_ALL_BLOGSResult[number]

export const BlogArticle = ({ blog }: { blog: ResultBlogElement }) => {
    return blog.path ? (
        <Link href={blog.path} className="size-full">
            <article className="group relative flex size-full cursor-pointer flex-col overflow-hidden rounded-md bg-white transition-shadow hover:shadow-md">
                <div className="flex grow flex-col rounded-b-md p-3 text-black">
                    <div className="flex flex-col gap-2 pb-4">
                        <Tags blog={blog} color="secondary" category={true} />
                    </div>
                    <div className="flex grow flex-col justify-between">
                        <div className="flex flex-col gap-2 pb-4">
                            <Typography as="h3" variant="h3" className="uppercase">
                                {blog.title}
                            </Typography>
                            <Typography as="p" variant="paragraph" className="pt-1 text-t1-darkGray">
                                {blog.descriptionShort}
                            </Typography>
                        </div>
                        {blog.date && (
                            <Typography as="span" variant="description" className="text-t1-darkGray">
                                {`${blog.author?.name} - ${formatDate(blog.date)}`}
                            </Typography>
                        )}
                    </div>
                </div>
            </article>
        </Link>
    ) : undefined
}
