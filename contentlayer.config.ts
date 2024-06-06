import { ComputedFields, defineDocumentType, makeSource } from "contentlayer/source-files"
import GithubSlugger from "github-slugger"
import readingTime from "reading-time"
import rehypePrismPlus from "rehype-prism-plus"
import rehypeSlug from "rehype-slug"
import remarkGfm from "remark-gfm"

const computedFieldsBlog = (): ComputedFields => {
    return {
        slug: {
            type: "string",
            resolve: (doc) => `/${doc._raw.flattenedPath}`
        },
        slugAsParams: {
            type: "string",
            resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/")
        },
        readingTime: {
            type: "json",
            resolve: (doc) => Math.ceil(readingTime(doc.body.raw, { wordsPerMinute: 240 }).minutes)
        },
        headings: {
            type: "json",
            resolve: async (doc) => {
                // Regex matching all headings in the mdx
                const headingsRegex = /\n(?<flag>#{1,6})\s+(?<content>.+)/g
                const slugger = new GithubSlugger()
                const headings = Array.from(doc.body.raw.matchAll(headingsRegex)).map(({ groups }: any) => {
                    return {
                        level: groups?.flag.length,
                        text: groups?.content,
                        slug: groups?.content ? slugger.slug(groups.content) : undefined
                    }
                })
                return headings
            }
        }
    }
}

const computedFieldsCareer = (): ComputedFields => {
    return {
        slug: {
            type: "string",
            resolve: (doc) => `/${doc._raw.flattenedPath}`
        },
        slugAsParams: {
            type: "string",
            resolve: (doc) => doc._raw.flattenedPath.split("/").slice(2).join("/")
        }
    }
}

export const Author = defineDocumentType(() => ({
    name: "Author",
    filePathPattern: "authors/**/*.mdx",
    contentType: "mdx",
    fields: {
        name: { type: "string", required: true },
        position: { type: "string", required: false },
        profileImg: {
            type: "string",
            required: false
        }
    }
}))

export const Blog = defineDocumentType(() => ({
    name: "Blog",
    filePathPattern: "blog/**/*.mdx",
    contentType: "mdx",
    fields: {
        title: { type: "string", required: true },
        author: { type: "string", required: true },
        positionTitle: {
            type: "string",
            required: false,
            default: "Software Engineer"
        },
        // for the subtitle on the blog page itself and in the "related articles" component
        descriptionShort: { type: "string", required: true },
        // for the longer and more detailed description on the blog overview page
        descriptionLong: { type: "string", required: true },
        heroImage: { type: "string", required: false },
        status: {
            type: "enum",
            options: ["DRAFT", "TO REVIEW", "PUBLISHED", "TESTING"],
            required: true
        },
        length: {
            type: "enum",
            options: ["IGNITE", "BLOG"],
            required: true
        },
        language: {
            type: "enum",
            options: ["Deutsch", "Englisch"],
            required: true
        },
        tags: { type: "list", of: { type: "string" }, required: false },
        category: {
            type: "enum",
            options: ["SOFTWARE ENGINEERING", "METHODOLOGY", "NEWS", "CULTURE", "EXPERIENCE"],
            required: true
        },
        cta: {
            type: "enum",
            options: ["CONTACT", "CAREER", "BLOG", "NONE"],
            default: "NONE",
            required: false
        },
        date: { type: "date", required: true },
        toc: {
            type: "boolean",
            required: false,
            default: false
        }
    },
    computedFields: computedFieldsBlog()
}))

export const Career = defineDocumentType(() => ({
    name: "Career",
    filePathPattern: "career/**/*.mdx",
    contentType: "mdx",
    fields: {
        title: { type: "string", required: true },
        description: { type: "string", required: true },
        location: {
            type: "enum",
            options: ["Stuttgart"],
            required: true
        },
        schedule: {
            type: "enum",
            options: ["Vollzeit", "Teilzeit"],
            required: true
        },
        employmentType: {
            type: "enum",
            options: ["Festanstellung", "Praktikum", "Werkstudent"],
            required: true
        },
        division: {
            type: "enum",
            options: ["Software Engineering", "Agile Transformation", "Operations", "Marketing"],
            required: true
        },
        tags: { type: "list", of: { type: "string" }, required: true },
        date: { type: "date", required: true },
        status: {
            type: "enum",
            options: ["DRAFT", "TO REVIEW", "PUBLISHED"],
            required: true
        }
    },
    computedFields: computedFieldsCareer()
}))

export default makeSource({
    contentDirPath: "./src/content",
    documentTypes: [Author, Blog, Career],
    mdx: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [[rehypePrismPlus, { defaultLanguage: "typescript", showLineNumbers: true }], rehypeSlug]
    }
})
