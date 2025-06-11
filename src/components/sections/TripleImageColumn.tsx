import Typography from "@/components/atoms/Typography"
import Section from "@/components/layout/Section"
import cn from "@/utils/cn"
import Image from "next/image"
import Link from "next/link"

export interface TripleImageColumnBlogItem {
    title: string
    text: string
    image: string
    tags?: string[]
    href: string // required in blog mode
}

export interface TripleImageColumnDefaultItem {
    title: string
    text: string
    image: string
    tags?: string[]
    href?: never // not allowed in default mode
}

export type TripleImageColumnProps =
    | {
          layout: "blog"
          title: string
          columns: [TripleImageColumnBlogItem, TripleImageColumnBlogItem, TripleImageColumnBlogItem]
          className?: string
      }
    | {
          layout: "default"
          title: string
          columns: [TripleImageColumnDefaultItem, TripleImageColumnDefaultItem, TripleImageColumnDefaultItem]
          className?: string
      }

export function isBlogLayout(
    props: TripleImageColumnProps
): props is Extract<TripleImageColumnProps, { layout: "blog" }> {
    return props.layout === "blog"
}

export const TripleImageColumn = (props: TripleImageColumnProps) => {
    const isBlog = isBlogLayout(props)

    const Tags = ({ tags, className }: { tags?: string[]; className: string }) => {
        if (!tags || tags.length === 0) return null
        return (
            <div className={cn("flex flex-wrap gap-2", className)}>
                {tags.map((tag, index) => (
                    <span
                        key={index}
                        className="bg-primary text-t1-black font-spacegrotesk rounded-sm px-2 py-1 text-sm uppercase"
                    >
                        {tag}
                    </span>
                ))}
            </div>
        )
    }

    const DefaultCard = ({
        title,
        description,
        image,
        tags
    }: {
        title: string
        description: string
        image: string
        tags?: string[]
    }) => {
        return (
            <div className="flex w-full flex-col gap-6 lg:row-span-4 lg:grid lg:grid-cols-1 lg:grid-rows-subgrid lg:gap-4">
                <Image
                    src={image}
                    alt={title}
                    width={300}
                    height={200}
                    className="row-start-1 h-64 w-full object-cover"
                />

                <Typography variant="h5" className="text-t1-black dark:text-t1-white row-start-2">
                    {title}
                </Typography>
                <div className="text-t1-black dark:text-t1-white row-start-3">
                    <Typography className="text-md sm:text-lg">{description}</Typography>
                    <Tags className="mt-4" tags={tags} />
                </div>
            </div>
        )
    }

    const BlogCard = ({
        title,
        description,
        image,
        tags,
        href
    }: {
        title: string
        description: string
        image: string
        tags?: string[]
        href: string
    }) => {
        return (
            <Link
                href={href}
                className="flex w-full flex-col gap-6 hover:scale-101 lg:row-span-4 lg:grid lg:grid-cols-1 lg:grid-rows-subgrid lg:gap-4"
            >
                <Image
                    src={image}
                    alt={title}
                    width={300}
                    height={200}
                    className="row-start-1 h-64 w-full object-cover"
                />
                <Tags className="row-start-2" tags={tags} />
                <Typography variant="h5" className="text-t1-black dark:text-t1-white row-start-3">
                    {title}
                </Typography>
                <div className="text-t1-black dark:text-t1-white row-start-4">
                    <Typography className="text-md sm:text-lg">{description}</Typography>
                </div>
            </Link>
        )
    }

    return (
        <Section className={cn("bg-t1-white dark:bg-t1-black py-24 sm:py-32", props.className)}>
            <Typography variant="h3" className="text-t1-black dark:text-t1-white">
                {props.title}
            </Typography>
            <div
                className={cn(
                    "mt-16 grid grid-cols-1 gap-24 lg:grid-cols-3 lg:grid-rows-[auto_auto_auto_auto] lg:gap-4"
                )}
            >
                {props.columns.map((column, index) =>
                    isBlog ? (
                        <BlogCard
                            key={index}
                            title={column.title}
                            description={column.text}
                            image={column.image}
                            tags={column.tags}
                            href={(column as TripleImageColumnBlogItem).href}
                        />
                    ) : (
                        <DefaultCard
                            key={index}
                            title={column.title}
                            description={column.text}
                            image={column.image}
                            tags={column.tags}
                        />
                    )
                )}
            </div>
        </Section>
    )
}

export default TripleImageColumn
