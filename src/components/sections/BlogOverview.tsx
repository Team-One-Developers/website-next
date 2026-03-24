"use client"

import ContentBlock from "@/components/layout/ContentBlock"
import EventCard from "@/components/molecules/EventCard"
import { QUERY_ALL_PUBLIC_BLOGSResult } from "@/sanity/types"
import cn from "@/utils/cn"
import { useState } from "react"

type BlogWithFormattedDate = QUERY_ALL_PUBLIC_BLOGSResult[number] & { formattedDate: string }

interface BlogOverviewProps {
    blogs: BlogWithFormattedDate[]
}

export const BlogOverview = ({ blogs }: BlogOverviewProps) => {
    const [activeCategory, setActiveCategory] = useState("all")

    const uniqueCategories = Array.from(new Set(blogs.map((b) => b.category).filter((c) => c != null)))

    const filteredBlogs = activeCategory === "all" ? blogs : blogs.filter((b) => b.category === activeCategory)

    return (
        <div className="gap-vertical-inner flex flex-col pt-20">
            <ContentBlock>
                <div className="gap-grid-gutter flex flex-col">
                    <h2 className="font-gteradisplay text-d2 text-black">Blog</h2>

                    {/* Category filter */}
                    <div className="flex gap-8 border-b border-black/10">
                        <button
                            onClick={() => setActiveCategory("all")}
                            className={cn(
                                "font-gteratext text-small cursor-pointer pb-3 transition-colors",
                                activeCategory === "all"
                                    ? "border-b-2 border-black text-black"
                                    : "text-black/40 hover:text-black/70"
                            )}
                        >
                            Alle
                        </button>
                        {uniqueCategories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={cn(
                                    "font-gteratext text-small cursor-pointer pb-3 transition-colors",
                                    activeCategory === category
                                        ? "border-b-2 border-black text-black"
                                        : "text-black/40 hover:text-black/70"
                                )}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* Blog grid using EventCard */}
                    <div className="gap-grid-gutter grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        {filteredBlogs.map((blog) => (
                            <EventCard
                                key={blog._id}
                                title={blog.title}
                                date={blog.formattedDate}
                                category={blog.category ?? undefined}
                                image={blog.heroImage?.asset?.url ?? undefined}
                            />
                        ))}
                    </div>
                </div>
            </ContentBlock>
        </div>
    )
}

export default BlogOverview
