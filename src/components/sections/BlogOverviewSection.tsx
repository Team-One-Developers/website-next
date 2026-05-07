"use client"

import BlogCard from "@/components/molecules/BlogCard"
import ImageTeaser from "@/components/sections/ImageTeaser"
import cn from "@/utils/cn"
import { useState } from "react"

interface BlogItem {
    title: string
    description: string
    image: string
    eyebrowLabel: string
    author: {
        name: string
        role: string
        avatarUrl: string
    }
    href: string
}

interface FeaturedPost {
    image: string
    title: string
    description: string
    buttonLabel?: string
    buttonHref?: string
    author?: {
        name: string
        role: string
        avatarUrl: string
    }
}

interface BlogOverviewSectionProps {
    title: string
    categories: string[]
    featured?: FeaturedPost
    posts: BlogItem[]
    className?: string
}

export default function BlogOverviewSection({
    title,
    categories,
    featured,
    posts,
    className
}: BlogOverviewSectionProps) {
    const [activeCategory, setActiveCategory] = useState(categories[0])

    return (
        <section className={cn("gap-grid-gutter flex flex-col", className)}>
            <h2 className="font-gteradisplay text-d2 text-black">{title}</h2>

            <div className="flex gap-8 border-b border-black/10">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={cn(
                            "font-gteratext text-small cursor-pointer pb-3 transition-colors",
                            activeCategory === cat
                                ? "border-b-2 border-black text-black"
                                : "text-black/40 hover:text-black/70"
                        )}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {featured && (
                <ImageTeaser
                    image={featured.image}
                    title={featured.title}
                    description={featured.description}
                    buttonLabel={featured.buttonLabel}
                    buttonHref={featured.buttonHref}
                    author={featured.author}
                />
            )}

            <div className="gap-grid-gutter grid grid-cols-1 md:grid-cols-2 md:grid-rows-[repeat(6,auto)] lg:grid-cols-3 lg:grid-rows-[repeat(6,auto)]">
                {posts.map((post, i) => (
                    <BlogCard key={i} {...post} />
                ))}
            </div>
        </section>
    )
}
