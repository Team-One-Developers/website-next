import cn from "@/lib/cn"
import { QUERY_SPECIFIC_BLOGResult } from "@/sanity/types"
import React, { forwardRef } from "react"
import { tv, VariantProps } from "tailwind-variants"
import Typography from "../atoms/Typography"
import { ResultBlogElement } from "./BlogArticle"

export const tagsVariants = tv({
    slots: {
        ul: "flex",
        li: "rounded-md p-1 px-2 uppercase"
    },
    variants: {
        size: {
            sm: {
                li: "text-xs"
            },
            md: { li: "text-xs" },
            lg: { li: "p-2 text-base" }
        },
        gap: {
            sm: { ul: "gap-2" },
            md: { ul: "gap-4" }
        },
        color: {
            primary: { li: "bg-primary text-black" },
            secondary: { li: "bg-background text-black" }
        }
    },
    defaultVariants: {
        size: "sm",
        gap: "sm",
        color: "secondary"
    }
})

export interface TagsProps
    extends Omit<React.HTMLAttributes<HTMLUListElement>, "color">,
        VariantProps<typeof tagsVariants> {
    blog: QUERY_SPECIFIC_BLOGResult | ResultBlogElement
    category?: boolean
}

export const Tags = forwardRef<HTMLUListElement, TagsProps>(
    ({ blog, className, size, gap, color, category = false, ...props }, ref) => {
        return (
            <ul className={cn(tagsVariants({ gap }).ul(), "flex-wrap")} ref={ref} {...props}>
                {/* <Typography
                    as="li"
                    variant="description"
                    key="readingTime"
                    className={cn(
                        tagsVariants({ size, color }).li(),
                        "flex items-center gap-1 font-spacegrotesk uppercase",
                        className
                    )}
                >
                    <Icon name="clock" height={16} width={16} fill="none" stroke="black" />
                    {`${blog.readingTime}min`}
                </Typography>
                <Typography
                    as="li"
                    variant="description"
                    key="readingTime"
                    className={cn(tagsVariants({ size, color }).li(), "flex items-center gap-1 ", className)}
                >
                    {blog.language.toLocaleUpperCase()}
                </Typography> */}

                {category ? (
                    <Typography
                        as="li"
                        variant="description"
                        className={cn(tagsVariants({ size, color }).li(), className)}
                    >
                        {blog?.category}
                    </Typography>
                ) : (
                    blog?.tags
                        ?.filter((tag) => tag)
                        .map((tag, index) => (
                            <Typography
                                as="li"
                                variant="description"
                                key={index}
                                className={cn(tagsVariants({ size, color }).li(), className)}
                            >
                                {tag}
                            </Typography>
                        ))
                )}
            </ul>
        )
    }
)

Tags.displayName = "Tags"
