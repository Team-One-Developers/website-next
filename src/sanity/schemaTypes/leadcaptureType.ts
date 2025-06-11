import { TextIcon } from "@sanity/icons"
import { defineField, defineType } from "sanity"

export const leadcaptureType = defineType({
    name: "leadcapture",
    title: "Lead Capture",
    type: "document",
    icon: TextIcon,
    fields: [
        defineField({
            name: "title",
            type: "string",
            validation: (Rule) => Rule.required().error("Title is required for a lead capture page")
        }),
        defineField({
            name: "slug",
            type: "slug",
            description:
                "The auto-generated human-readable url section for this specific job. Can be adjusted manually if needed.",
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
            validation: (Rule) => Rule.required().error("A description is required for a lead capture page")
        }),

        defineField({
            name: "heroImage",
            type: "image",
            description: "This image is the header image for the lead capture page.",
            validation: (Rule) => Rule.required()
        }),
        defineField({
            name: "visibility",
            type: "string",
            description:
                "Wether to display this page publically on the website (in search results, etc.) or only under the specific link (See below for the link once published).",
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
                'The link to this page on the website. When the Visibility is set "Draft" only people with this link can see this page.',
            readOnly: true,
            hidden: ({ document }) => !document?.link
        })
    ],
    preview: {
        select: {
            title: "title",
            visibility: "visibility"
        },
        prepare({ title, visibility }) {
            const previewTitle = visibility === "Public" ? title : `DRAFT: ${title}`

            return {
                title: previewTitle
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
