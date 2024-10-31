import { defineField, defineType } from "sanity"

export const careerType = defineType({
    name: "career",
    title: "Job Opening",
    type: "document",
    fields: [
        defineField({
            name: "title",
            type: "string",
            validation: (Rule) => Rule.required().error("Title is required for job openings")
        }),
        defineField({
            name: "slug",
            type: "slug",
            options: {
                source: "title",
                maxLength: 96
            },
            validation: (Rule) => Rule.required().error("A slug is required for creating the webpage")
        }),
        defineField({
            name: "description",
            type: "string",
            validation: (Rule) => Rule.required()
        }),
        defineField({
            name: "location",
            type: "string",
            options: {
                list: ["Stuttgart"],
                layout: "radio"
            }
        }),
        defineField({
            name: "schedule",
            type: "string",
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
            name: "details",
            type: "array",
            of: [{ type: "block" }],
            description: "Details about the job opening, to be displayed on the webpage"
        }),
        defineField({
            name: "status",
            type: "string",
            options: {
                list: ["DRAFT", "TO REVIEW", "PUBLISHED"],
                layout: "radio"
            }
        })
    ]
})
