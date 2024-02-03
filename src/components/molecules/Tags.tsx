import { Blog } from "contentlayer/generated"
import React, { forwardRef } from "react"
import { twMerge } from "tailwind-merge"
import { tv, VariantProps } from "tailwind-variants"
import Typography from "../atoms/Typography"
import Icon from "../molecules/Icon"

export const tagsVariants = tv({
    slots: {
        ul: "flex",
        li: "rounded-md p-1"
    },
    variants: {
        size: {
            sm: {
                li: "text-xs"
            },
            md: { li: "text-xs" },
            lg: { li: "text-base p-2" }
        },
        gap: {
            sm: { ul: "gap-2" },
            md: { ul: "gap-4" }
        },
        color: {
            primary: { li: "bg-primary text-black" },
            secondary: { li: "bg-t1-darkGray text-white" }
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
    blog: Blog
    category?: boolean
}

export const Tags = forwardRef<HTMLUListElement, TagsProps>(
    ({ blog, className, size, gap, color, category = false, ...props }, ref) => {
        return (
            <ul className={twMerge(tagsVariants({ gap }).ul())} ref={ref} {...props}>
                <Typography
                    as="li"
                    variant="description"
                    key="readingTime"
                    className={twMerge(tagsVariants({ size, color }).li(), "flex items-center gap-1", className)}
                >
                    <Icon name="clock" height={16} width={16} fill="none" stroke="black" />
                    {`${blog.readingTime}min`}
                </Typography>
                <Typography
                    as="li"
                    variant="description"
                    key="readingTime"
                    className={twMerge(tagsVariants({ size, color }).li(), "flex items-center gap-1", className)}
                >
                    {blog.language.toLocaleUpperCase()}
                </Typography>

                {category ? (
                    <Typography
                        as="li"
                        variant="description"
                        className={twMerge(tagsVariants({ size, color }).li(), className)}
                    >
                        {blog.category}
                    </Typography>
                ) : (
                    blog.tags?.map((tag, index) => (
                        <Typography
                            as="li"
                            variant="description"
                            key={index}
                            className={twMerge(tagsVariants({ size, color }).li(), className)}
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
