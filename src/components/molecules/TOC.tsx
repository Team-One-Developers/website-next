import { Blog } from "contentlayer/generated"
import { twJoin, twMerge } from "tailwind-merge"
import { Link } from "../atoms/Link"
import Typography from "../atoms/Typography"

type Heading = {
    level: number
    text: string
    slug: string
}

export const TOC = ({ blog, className }: { blog: Blog; className?: string }) => {
    let lowest = 5

    blog.headings.forEach((heading: Heading) => {
        if (heading.level < lowest) lowest = heading.level
    })

    return (
        <div className={twMerge("w-fit", className)}>
            <div className="sticky top-[140px] rounded bg-white p-4">
                <Typography as="h3" variant="h4" className="uppercase">
                    Outline
                </Typography>

                <ul className="mt-4 flex flex-col gap-1">
                    {blog.headings.map((heading: Heading) => {
                        return (
                            <li
                                key={`#${heading.slug}`}
                                className={twJoin(
                                    "flex",
                                    heading.level === lowest && "ml-0 before:content-['-_'] before:text-primary",
                                    heading.level === 1 + lowest && "ml-8 before:content-['•_'] before:text-primary",
                                    heading.level === lowest + 2 && "ml-16 before:content-['·_'] before:text-primary",
                                    heading.level === lowest + 3 && "ml-24 before:content-['‣_'] before:text-primary",
                                    heading.level === lowest + 4 && "ml-32 before:content-['-_'] before:text-primary"
                                )}
                                //   className="data-[level='1']:pl-0 data-[level='2']:pl-4 data-[level='3']:pl-8 data-[level='4']:pl-12 data-[level='5']:pl-16"
                            >
                                <Link
                                    href={`#${heading.slug}`}
                                    label={heading.text}
                                    color="transparent"
                                    className="w-auto p-1 font-abcdiatype normal-case md:p-1"
                                />
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}
