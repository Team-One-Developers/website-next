import { slugify } from "@/lib/slugify"
import { Blog } from "@/sanity/types"
import { twJoin, twMerge } from "tailwind-merge"
import { Link } from "../atoms/Link"
import Typography from "../atoms/Typography"

type Heading = {
    level: number
    text: string
    slug: string
}

type ExtractBlock<T> = T extends { _type: "block" } ? T : never

type BlogBlock = ExtractBlock<NonNullable<Blog["content"]>[number]>

function isBlogBlock(block: any): block is BlogBlock {
    return block._type === "block"
}

export const TOC = ({ blog, className }: { blog: Blog; className?: string }) => {
    if (!blog.content) return null

    const headings: BlogBlock[] = blog.content
        // filter out images and code
        .filter(isBlogBlock)
        // filter out non headings
        .filter(
            (block) =>
                block.children && block.style && (block.style === "h2" || block.style === "h3" || block.style === "h4")
        )

    const headingsWithAddedTocData = headings.map((headingBlock) => ({
        ...headingBlock,
        toc: {
            headingLevelNumeric: Number(headingBlock.style!.slice(1)),
            text: headingBlock.children![0]?.text,
            slug: slugify(headingBlock.children![0].text)
        }
    }))

    const lowest = Math.min(...headingsWithAddedTocData.map((heading: any) => heading.toc.headingLevelNumeric))

    return (
        <div className={twMerge("w-fit", className)}>
            <div className="sticky top-[140px] rounded bg-white p-4">
                <Typography as="h3" variant="h4" className="uppercase">
                    Outline
                </Typography>

                <ul className="mt-4 flex flex-col gap-1">
                    {headingsWithAddedTocData.map((heading: any) => {
                        return (
                            <li
                                key={`#${heading.toc.slug}`}
                                // only h2-4 possible (3 levels), but we keep the logic for future need
                                className={twJoin(
                                    "flex",
                                    heading.toc.headingLevelNumeric === lowest &&
                                        "ml-0 before:text-primary before:content-['-_']",
                                    heading.toc.headingLevelNumeric === 1 + lowest &&
                                        "ml-8 before:text-primary before:content-['•_']",
                                    heading.toc.headingLevelNumeric === lowest + 2 &&
                                        "ml-16 before:text-primary before:content-['·_']",
                                    heading.toc.headingLevelNumeric === lowest + 3 &&
                                        "ml-24 before:text-primary before:content-['‣_']",
                                    heading.toc.headingLevelNumeric === lowest + 4 &&
                                        "ml-32 before:text-primary before:content-['-_']"
                                )}
                                //   className="data-[level='1']:pl-0 data-[level='2']:pl-4 data-[level='3']:pl-8 data-[level='4']:pl-12 data-[level='5']:pl-16"
                            >
                                <Link
                                    href={`#${heading.toc.slug}`}
                                    label={heading.toc.text}
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
