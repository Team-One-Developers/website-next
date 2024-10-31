import { defineField, defineType } from "sanity"

export const blogType = defineType({
    name: "blog",
    title: "Blog Post",
    type: "document",
    fields: [
        defineField({
            name: "title",
            type: "string",
            validation: (Rule) => Rule.required().error("Title is required for a blog post")
        }),
        defineField({
            name: "slug",
            type: "slug",
            options: {
                source: "title",
                maxLength: 96
            },
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
            name: "positionTitle",
            type: "string",
            initialValue: "Software Engineer"
        }),
        defineField({
            name: "descriptionShort",
            type: "string",
            validation: (Rule) => Rule.required().error("A short description is required for a blog post")
        }),
        defineField({
            name: "descriptionLong",
            type: "string",
            validation: (Rule) => Rule.required().error("A long description is required for a blog post")
        }),
        defineField({
            name: "body",
            type: "array",
            of: [{ type: "block" }],
            validation: (Rule) => Rule.required().error("A body is required for a blog post")
        }),
        defineField({
            name: "heroImage",
            type: "string"
        }),
        defineField({
            name: "status",
            type: "string",
            options: {
                list: ["DRAFT", "TO REVIEW", "PUBLISHED", "TESTING"],
                layout: "radio"
            }
        }),
        defineField({
            name: "length",
            type: "string",
            options: {
                list: ["IGNITE", "BLOG"],
                layout: "radio"
            }
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
                list: ["SOFTWARE ENGINEERING", "METHODOLOGY", "NEWS", "CULTURE", "EXPERIENCE"],
                layout: "radio"
            }
        }),
        defineField({
            name: "cta",
            type: "string",
            options: {
                list: ["CONTACT", "CAREER", "BLOG", "NONE"],
                layout: "radio"
            }
        }),
        defineField({
            name: "date",
            type: "date"
        }),
        defineField({
            name: "toc",
            type: "boolean",
            initialValue: false
        })
    ]
})
