import { defineField, defineType } from "sanity"
import { CaseIcon } from "@sanity/icons"

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
                layout: "radio"
            },
            initialValue: "Stuttgart"
        }),
        defineField({
            name: "schedule",
            type: "string",
            description: "",
            options: {
                list: ["Vollzeit", "Teilzeit"],
                layout: "radio"
            }
        }),
        defineField({
            name: "employmentType",
            type: "string",
            options: {
                list: ["Festanstellung", "Praktikum", "Werkstudent"],
                layout: "radio"
            }
        }),
        defineField({
            name: "division",
            type: "string",
            options: {
                list: ["Software Engineering", "Agile Transformation", "Operations", "Marketing"],
                layout: "radio"
            },
            validation: (rule) => rule.required()
        }),
        defineField({
            name: "tags",
            type: "array",
            of: [{ type: "string" }]
        }),
        defineField({
            name: "date",
            type: "date"
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
            ]
        })
    ],
    preview: {
        select: {
            title: "title",
            employmentType: "employmentType",
            location: "location"
        },
        prepare({ title, employmentType, location }) {
            const subtitle = `${employmentType} - ${location}`

            return {
                title,
                subtitle
            }
        }
    },
    orderings: [
        {
            title: "Publishing Date (Newest)",
            name: "dateDesc",
            by: [{ field: "date", direction: "desc" }]
        }
    ]
})
