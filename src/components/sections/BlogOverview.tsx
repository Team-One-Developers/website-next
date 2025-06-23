"use client"

import Section from "@/components/layout/Section"
import { QUERY_ALL_PUBLIC_BLOGSResult } from "@/sanity/types"
import cn from "@/utils/cn"
import Image from "next/image"
import Link from "next/link"
import { SetStateAction, useState } from "react"

type BlogWithFormattedDate = QUERY_ALL_PUBLIC_BLOGSResult[number] & { formattedDate: string }

interface BlogOverviewProps {
    blogs: BlogWithFormattedDate[]
}

export const BlogOverview = ({ blogs }: BlogOverviewProps) => {
    const [showTags, setShowTags] = useState("all")

    const handleTagClick = (category: SetStateAction<string>) => {
        setShowTags(category)
    }

    const usedCategories = blogs
        .map((blog) => blog.category)
        .filter((category) => category !== undefined && category !== null)
    const uniqueCategories = Array.from(new Set(usedCategories))

    // const getTagsWithMoreThanOneOccurence = () => {
    //     const tagCount: Record<string, number> = {}

    //     // Count occurrences of each tag
    //     blogs.forEach((blog) => {
    //         if (!blog.tags) return

    //         blog.tags.forEach((tag) => {
    //             tagCount[tag] = (tagCount[tag] || 0) + 1
    //         })
    //     })

    //     // Filter tags that occur more than once
    //     return Object.keys(tagCount).filter((tag) => tagCount[tag] > 1)
    // }
    // const tagsWithMoreThanOneOccurence = getTagsWithMoreThanOneOccurence()

    return (
        <Section className="bg-t1-white pb-24">
            <div className="py-16 sm:py-24">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="font-spacegrotesk text-t1-black text-4xl font-semibold tracking-tight text-pretty uppercase sm:text-5xl">
                        From the blog
                    </h2>
                    <p className="mt-2 text-lg/8 text-gray-600">
                        Insights into our creative minds, latest trends, and innovative solutions.
                    </p>
                </div>

                <div className="mx-auto mt-12 max-w-2xl lg:mx-0">
                    <p className="text-t1-black font-spacegrotesk text-lg font-bold uppercase">Themenfelder:</p>
                    <ul className="mt-4 mb-12 flex flex-wrap gap-x-4 space-x-1">
                        <li className="mb-1">
                            <button
                                className={cn(
                                    "font-spacegrotesk text-t1-black rounded-xs px-4 py-2 uppercase hover:cursor-pointer",
                                    showTags === "all" ? "bg-primary" : "hover:cursor-pointer hover:bg-white"
                                )}
                                onClick={() => handleTagClick("all")}
                                disabled={showTags === "all"}
                            >
                                {"Alle"}
                            </button>
                        </li>
                        {uniqueCategories.map((category) => (
                            <li className="mb-1 flex" key={category}>
                                <button
                                    className={cn(
                                        "font-spacegrotesk text-t1-black hover:cursor-pointe rounded-xs px-4 py-2 uppercase",
                                        showTags === category ? "bg-primary" : "hover:cursor-pointer hover:bg-white"
                                    )}
                                    onClick={() => handleTagClick(category)}
                                    disabled={showTags === category}
                                >
                                    {category}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-32 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    {blogs.map((blog) => (
                        <Link
                            href={`/blog/${blog.slug?.current}`}
                            key={blog._id}
                            className={cn(
                                "relative hidden transition-all duration-300 ease-in-out hover:scale-102",
                                (blog.category === showTags || showTags === "all") && "flex"
                            )}
                        >
                            <article className={cn("max-w-xl flex-col items-start justify-between")}>
                                <div className="flex items-center gap-x-4 text-xs">
                                    <time dateTime={blog.date} className="text-gray-800">
                                        {blog.formattedDate}
                                    </time>
                                    <span className="relative z-10 rounded-sm bg-white px-3 py-1.5 font-medium text-gray-600">
                                        {blog.category}
                                    </span>
                                </div>
                                <div className="group relative">
                                    <h3 className="mt-3 text-lg/6 font-semibold text-gray-900">
                                        <span className="absolute inset-0" />
                                        {blog.title}
                                    </h3>
                                    <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">{blog.descriptionLong}</p>
                                </div>
                                <div className="relative mt-8 flex items-center gap-x-4">
                                    <Image
                                        alt={blog.title}
                                        height={100}
                                        width={100}
                                        src={blog.author.profileImg?.asset?.url || "/images/logos/t1-only-dark.svg"}
                                        className="size-10 rounded-full bg-gray-50"
                                    />
                                    <div className="text-sm/6">
                                        <p className="font-semibold text-gray-900">
                                            <span className="absolute inset-0" />
                                            {blog.author.name}
                                        </p>
                                        <p className="text-gray-600">{blog.author.position}</p>
                                    </div>
                                </div>
                            </article>
                        </Link>
                    ))}
                </div>
            </div>
        </Section>
    )
}

export default BlogOverview
