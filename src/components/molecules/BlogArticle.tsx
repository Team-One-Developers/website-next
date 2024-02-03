import { Tags } from "@/components/molecules/Tags"
import { formatDate } from "@/lib/formateDate"
import { Blog } from "contentlayer/generated"
import Link from "next/link"
import { Button } from "../atoms/Button"
import { Image } from "../atoms/Image"
import Typography from "../atoms/Typography"

export const BlogArticle = ({ blog }: { blog: Blog }) => {
    return (
        <Link href={blog.slug} className="w-full">
            <article className="group relative bg-t1-darkGray rounded-md w-full cursor-pointer h-[500px] overflow-hidden">
                <div className="absolute opacity-40 group-hover:opacity-70 duration-200 w-full h-1/2">
                    <Image
                        src={
                            blog.heroImage
                                ? blog.heroImage
                                : "/images/optimized/nate-johnston-obOin8-m5sw-unspla_optimized.webp"
                        }
                        alt="Blogartikel Hero Image"
                        fill
                    />
                </div>
                <div className="p-3 relative flex flex-col gap-2 h-1/2 justify-between">
                    <Tags blog={blog} color="primary" category={true} />

                    <div className="flex flex-col gap-2">
                        <Typography as="p" variant="description">
                            {`${blog.author} - ${formatDate(blog.date)}`}
                        </Typography>
                        <Typography as="h3" variant="h3" className="uppercase">
                            {blog.title}
                        </Typography>
                    </div>
                </div>
                <div className="text-white group-hover:text-black group-hover:bg-primary flex flex-col justify-between h-1/2 ease-in-out duration-200 p-3 rounded-b-md">
                    <Typography as="p" variant="paragraph" className="">
                        {blog.descriptionLong}
                    </Typography>

                    <Button
                        color="primary"
                        className="group-hover:bg-black group-hover:text-primary ease-in-out duration-200"
                    >
                        Read more
                    </Button>
                </div>
            </article>
        </Link>
    )
}
