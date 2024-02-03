import { Blog } from "contentlayer/generated"
import { twJoin, twMerge } from "tailwind-merge"
import { Link } from "../atoms/Link"
import Typography from "../atoms/Typography"

export const TOC = ({ blog, className }: { blog: Blog; className?: string }) => {
    let lowest = 5
    blog.headings.forEach((heading) => {
        if (heading.level < lowest) lowest = heading.level
    })

    return (
        <div className={twMerge("w-fit", className)}>
            <div className="sticky top-[140px] rounded p-4 bg-t1-darkGray">
                <Typography as="h3" variant="h3">
                    Table of Content
                </Typography>

                <ul className="mt-4 flex flex-col gap-1">
                    {blog.headings.map((heading) => {
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
                                    className="normal-case px-1 md:px-1 py-1 md:py-1 w-auto"
                                />
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}
