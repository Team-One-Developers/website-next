import { TextIcon } from "@sanity/icons"
import { defineArrayMember, defineField, defineType } from "sanity"

export const blogType = defineType({
    name: "blog",
    title: "Blog Post",
    type: "document",
    icon: TextIcon,
    fields: [
        defineField({
            name: "title",
            type: "string",
            validation: (Rule) => Rule.required().error("Title is required for a blog post")
        }),
        defineField({
            name: "slug",
            type: "slug",
            readOnly: true,
            description: "The auto-generated human-readable url section for this specific job.",
            hidden: ({ document }) => !document?.slug
        }),
        defineField({
            name: "path",
            type: "string",
            hidden: true
        }),
        defineField({
            name: "author",
            type: "reference",
            to: [{ type: "author" }]
        }),
        defineField({
            name: "language",
            type: "string",
            options: {
                list: ["Deutsch", "Englisch"],
                layout: "radio"
            }
        }),
        defineField({
            name: "tags",
            type: "array",
            of: [{ type: "string" }]
        }),
        defineField({
            name: "category",
            type: "string",
            options: {
                list: ["SOFTWARE ENGINEERING", "BUSINESS TECHNOLOGY", "METHODOLOGY", "NEWS", "CULTURE", "EXPERIENCE"],
                layout: "radio"
            }
        }),
        defineField({
            name: "descriptionShort",
            type: "string",
            validation: (Rule) => Rule.required().error("A short description is required for a blog post"),
            description: "This description will be used for blog preview and metadata."
        }),
        defineField({
            name: "descriptionLong",
            type: "string",
            validation: (Rule) => Rule.required().error("A long description is required for a blog post"),
            description: "This description is displayed at the beginning of the post after the title."
        }),
        defineField({
            name: "date",
            type: "date"
        }),
        defineField({
            name: "heroImage",
            type: "image",
            description: "This image is the header image for the blog post."
        }),
        defineField({
            name: "toc",
            title: "Table of Content",
            type: "boolean",
            description:
                "CURRENTLY DISABLED. Wether to add a table of content or not. Makes sense for very long blog posts.",
            initialValue: false
        }),
        defineField({
            name: "content",
            title: "Content",
            type: "array",
            description: "The actual content of the blog post. The content will be displayed as formatted here.",
            of: [
                defineArrayMember({
                    type: "block",
                    styles: [
                        { title: "Normal", value: "normal" },
                        { title: "H2", value: "h2" },
                        { title: "H3", value: "h3" },
                        { title: "H4", value: "h4" },
                        { title: "Quote", value: "blockquote" }
                    ]
                }),
                defineArrayMember({
                    type: "image"
                }),
                defineArrayMember({
                    type: "code"
                })
            ]
        }),
        defineField({
            name: "cta",
            type: "string",
            description:
                "Call to action: Adds a small section according to the selected type at the end of the post (e.g. a career post).",
            options: {
                list: ["CONTACT", "CAREER", "BLOG", "NONE"],
                layout: "radio"
            }
        }),
        defineField({
            name: "visibility",
            type: "string",
            description:
                "Wether to display this post publically on the website (in overview pages, search results, etc.) or only under the specific link (See below for the link once published).",
            options: {
                list: ["Draft", "Public"],
                layout: "radio"
            },
            initialValue: "Draft"
        }),
        defineField({
            name: "link",
            type: "url",
            description:
                'The link to this post on the website. When the Visibility is set "Draft" only people with this link can see this post.',
            readOnly: true,
            hidden: ({ document }) => !document?.link
        })
    ],
    preview: {
        select: {
            title: "title",
            author: "author.name",
            visibility: "visibility"
        },
        prepare({ title, author, visibility }) {
            const previewTitle = visibility === "Public" ? title : `DRAFT: ${title}`
            const previewSubtitle = author

            return {
                title: previewTitle,
                subtitle: previewSubtitle
            }
        }
    },
    orderings: [
        {
            title: "Visibility (DRAFT first)",
            name: "visibility",
            by: [{ field: "visibility", direction: "asc" }]
        }
    ]
})
