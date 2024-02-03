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
            <article className="group relative h-[500px] w-full cursor-pointer overflow-hidden rounded-md bg-t1-darkGray">
                <div className="absolute h-1/2 w-full opacity-40 duration-200 group-hover:opacity-70">
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
                <div className="relative flex h-1/2 flex-col justify-between gap-2 p-3">
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
                <div className="flex h-1/2 flex-col justify-between rounded-b-md p-3 text-white duration-200 ease-in-out group-hover:bg-primary group-hover:text-black">
                    <Typography as="p" variant="paragraph" className="">
                        {blog.descriptionLong}
                    </Typography>

                    <Button
                        color="primary"
                        className="duration-200 ease-in-out group-hover:bg-black group-hover:text-primary"
                    >
                        Read more
                    </Button>
                </div>
            </article>
        </Link>
    )
}
