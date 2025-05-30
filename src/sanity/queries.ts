import { defineQuery } from "next-sanity"

export const QUERY_ALL_BLOGS = defineQuery(
    `*[_type == 'blog' && defined(slug) && defined(slug.current)]{...,author->,heroImage{asset->}}`
)

export const QUERY_ALL_PUBLIC_BLOGS = defineQuery(
    `*[_type == 'blog' && defined(slug) && defined(slug.current) && visibility == 'Public']{_id,descriptionShort,descriptionLong,author->,heroImage{asset->},title,category,date,slug,tags}`
)

export const QUERY_NEWEST_BLOGS = defineQuery(
    `*[_type == 'blog' && defined(slug) && defined(slug.current) && visibility == 'Public'] | order(_createdAt desc)[0...3]{heroImage{asset->},date,title,descriptionLong,slug}`
)
