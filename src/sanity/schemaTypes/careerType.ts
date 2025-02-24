import { DIVISIONS } from "@/constants/divisions"
import { CaseIcon } from "@sanity/icons"
import { defineField, defineType } from "sanity"

export const careerType = defineType({
    name: "career",
    title: "Job Opening",
    type: "document",
    icon: CaseIcon,
    fields: [
        defineField({
            name: "title",
            type: "string",
            validation: (Rule) => Rule.required().error("Title is required for job openings")
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
            name: "description",
            type: "string",
            description: "A short only-text summary of the job opening.",
            validation: (Rule) => Rule.required()
        }),
        defineField({
            name: "location",
            type: "string",
            options: {
                list: ["Stuttgart"],
                layout: "dropdown"
            },
            initialValue: "Stuttgart",
            validation: (Rule) => Rule.required()
        }),
        defineField({
            name: "schedule",
            type: "string",
            description: "",
            options: {
                list: ["Vollzeit", "Teilzeit"],
                layout: "dropdown"
            },
            validation: (Rule) => Rule.required()
        }),
        defineField({
            name: "employmentType",
            type: "string",
            options: {
                list: ["Festanstellung", "Praktikum", "Werkstudent"],
                layout: "dropdown"
            },
            validation: (Rule) => Rule.required()
        }),
        defineField({
            name: "division",
            type: "string",
            options: {
                list: DIVISIONS,
                layout: "dropdown"
            },
            validation: (rule) => rule.required()
        }),
        defineField({
            name: "tags",
            type: "array",
            of: [{ type: "string" }],
            validation: (Rule) => Rule.required().error("Please add atleast one tag")
        }),
        defineField({
            name: "date",
            type: "date",
            validation: (Rule) => Rule.required()
        }),
        defineField({
            name: "content",
            title: "Content",
            type: "array",
            description: "The actual content of the job post. The text will be displayed as formatted here.",
            of: [
                {
                    type: "block",
                    styles: [
                        { title: "Normal", value: "normal" },
                        { title: "H4", value: "h4" },
                        { title: "H5", value: "h5" },
                        { title: "Quote", value: "blockquote" }
                    ]
                },
                {
                    type: "image"
                },
                {
                    type: "code"
                }
            ],
            validation: (Rule) => Rule.required()
        }),
        defineField({
            name: "visibility",
            type: "string",
            description:
                "Wether to display this post publically on the website (in overview pages, search results, etc.) or only under the specific link (See below for the link once published).",
            options: {
                list: ["Draft", "Public"],
                layout: "dropdown"
            },
            initialValue: "Draft",
            validation: (Rule) => Rule.required()
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
            employmentType: "employmentType",
            location: "location",
            visibility: "visibility"
        },
        prepare({ title, employmentType, location, visibility }) {
            const previewTitle = visibility === "Public" ? title : `DRAFT: ${title}`
            const previewSubtitle = `${employmentType} - ${location}`

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
        },
        {
            title: "Publishing Date (Newest)",
            name: "dateDesc",
            by: [{ field: "date", direction: "desc" }]
        }
    ]
})
