"use client"

import Section from "@/components/layout/Section"
import cn from "@/lib/cn"
import { formatDate } from "@/lib/formateDate"
import { QUERY_ALL_PUBLIC_BLOGSResult } from "@/sanity/types"
import Image from "next/image"
import Link from "next/link"
import { SetStateAction, useState } from "react"

export const BlogOverview = ({ blogs }: { blogs: QUERY_ALL_PUBLIC_BLOGSResult }) => {
    const [showTags, setShowTags] = useState("all")

    const handleTagClick = (category: SetStateAction<string>) => {
        setShowTags(category)
    }

    const getTagsWithMoreThanOneOccurence = () => {
        const tagCount: Record<string, number> = {}

        // Count occurrences of each tag
        blogs.forEach((blog) => {
            if (!blog.tags) return

            blog.tags.forEach((tag) => {
                tagCount[tag] = (tagCount[tag] || 0) + 1
            })
        })

        // Filter tags that occur more than once
        return Object.keys(tagCount).filter((tag) => tagCount[tag] > 1)
    }
    const tagsWithMoreThanOneOccurence = getTagsWithMoreThanOneOccurence()

    return (
        <Section className="bg-t1-white py-24 sm:py-32">
            <h1 className="text-t1-black font-spacegrotesk text-4xl font-semibold tracking-tight text-pretty uppercase sm:text-5xl">
                From Our Blog
            </h1>
            <p className="mt-2 text-lg/8 text-gray-600">Lorem ipsum totallum fidibus.</p>

            <div className="mt-12 w-full">
                <p className="text-t1-black font-spacegrotesk text-lg font-bold uppercase">Themen:</p>
                <ul className="mt-4 mb-12 flex flex-wrap gap-x-4 space-x-1">
                    <li className="mb-1">
                        <button
                            className={cn(
                                "font-spacegrotesk text-t1-black rounded-xs px-4 py-2 uppercase hover:cursor-pointer",
                                showTags === "all" ? "bg-primary" : ""
                            )}
                            onClick={() => handleTagClick("all")}
                            disabled={showTags === "all"}
                        >
                            {"Alle"}
                        </button>
                    </li>
                    {tagsWithMoreThanOneOccurence.map((tag) => (
                        <li className="mb-1" key={tag}>
                            <button
                                className={cn(
                                    "font-spacegrotesk text-t1-black hover:cursor-pointe rounded-xs px-4 py-2 uppercase",
                                    showTags === tag ? "bg-primary" : ""
                                )}
                                onClick={() => handleTagClick(tag)}
                                disabled={showTags === tag}
                            >
                                {tag}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-24">
                {blogs.map((blog) => (
                    <Link
                        href={`/blog/${blog.slug?.current}`}
                        key={blog._id}
                        className={cn(
                            "group hidden transition-all duration-300 hover:scale-101",
                            (showTags === "all" || blog.tags.includes(showTags)) && "block"
                        )}
                    >
                        <article key={blog._id} className="relative isolate flex flex-col gap-8 lg:flex-row">
                            <div className="relative aspect-video sm:aspect-2/1 lg:aspect-square lg:w-64 lg:shrink-0">
                                <Image
                                    alt=""
                                    src={blog.heroImage.asset?.url || "/images/culture/coffetalk.webp"}
                                    className="bg-t1-white absolute inset-0 size-full rounded-2xl object-cover"
                                    width={256}
                                    height={256}
                                />
                                <div className="ring-t1-black/10 absolute inset-0 rounded-2xl ring-1 ring-inset" />
                            </div>
                            <div>
                                <div className="flex items-center gap-x-4 text-xs">
                                    <p className="h relative z-10 rounded-full py-1.5 font-medium text-gray-600">
                                        {blog.category + " | " + formatDate(blog.date)}
                                    </p>
                                </div>
                                <div className="group relative max-w-xl">
                                    <h3 className="text-t1-black mt-3 text-lg/6 font-semibold">
                                        <div>
                                            <span className="absolute inset-0" />
                                            {blog.title}
                                        </div>
                                    </h3>
                                    <p className="text-t1-black mt-5 text-sm/6">{blog.descriptionLong}</p>
                                </div>
                                <div className="border-t1-black/20 mt-6 flex border-t pt-6">
                                    <div className="relative flex items-center gap-x-4">
                                        <div className="text-sm/6">
                                            <p className="text-t1-black font-semibold">
                                                <span className="absolute inset-0" />
                                                {blog.author.name}
                                            </p>
                                            <p className="text-t1-black/60">{blog.author.position}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </Link>
                ))}
            </div>
        </Section>
    )
}

export default BlogOverview
