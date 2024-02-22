import { Tags } from "@/components/molecules/Tags"
import { formatDate } from "@/lib/formateDate"
import { Blog } from "contentlayer/generated"
import Link from "next/link"
import { Button } from "../atoms/Button"
import { Image } from "../atoms/Image"
import Typography from "../atoms/Typography"
import FallbackImg from "/public/images/optimized/nate-johnston-obOin8-m5sw-unspla_optimized.webp"

export const BlogArticle = ({ blog }: { blog: Blog }) => {
    return (
        <Link href={blog.slug} className="size-full">
            <article className="group relative flex flex-col size-full cursor-pointer overflow-hidden rounded-md bg-white transition-shadow hover:shadow-md">
                <div className="relative h-[250px] w-full">
                    <Image
                        src={blog.heroImage ?? FallbackImg}
                        alt={blog.title}
                        fill
                        sizes="(min-width: 576px) 50vw, (min-width: 992px) 33vw, (min-width: 1400px) 25vw, 90vw"
                    />
                    <div className="absolute top-0 flex flex-col justify-between gap-2 p-3">
                        <Tags blog={blog} color="primary" category={true} />
                    </div>
                </div>
                <div className="relative flex flex-col justify-between rounded-b-md p-3 text-black flex-grow">
                    <div className="flex flex-col gap-2 pb-4">
                        <Typography as="span" variant="description" className="text-t1-darkGray">
                            {`${blog.author} - ${formatDate(blog.date)}`}
                        </Typography>
                        <Typography as="h3" variant="h3" className="uppercase">
                            {blog.title}
                        </Typography>
                        <Typography as="p" variant="paragraph" className="py-4 text-t1-darkGray">
                            {blog.descriptionLong}
                        </Typography>
                    </div>
                    <Button color="primary">Read more</Button>
                </div>
            </article>
        </Link>
    )
}
