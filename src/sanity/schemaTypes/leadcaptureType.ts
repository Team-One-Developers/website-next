import { combinations } from "@/components/sections/CTA"
import { TextIcon } from "@sanity/icons"
import { defineArrayMember, defineField, defineType } from "sanity"

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
            name: "portalId",
            type: "string",
            description: "The HubSpot portal ID for the hero-form. This is used to connect the form from HubSpot.",
            validation: (Rule) => Rule.required()
        }),
        defineField({
            name: "formId",
            type: "string",
            description: "The HubSpot form ID for the hero-form. This is used to connect the form from HubSpot.",
            validation: (Rule) => Rule.required()
        }),
        defineField({
            name: "content",
            title: "Content",
            type: "array",
            description:
                "The content section of the lead capture page. The content will be displayed as formatted here.",
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
                })
            ],
            validation: (Rule) => Rule.required()
        }),
        defineField({
            name: "contentTheme",
            type: "string",
            description: "The theme of the content section.",
            options: {
                list: ["dark", "light"]
            },
            validation: (Rule) => Rule.required()
        }),
        defineField({
            name: "cta",
            type: "string",
            description: "The CTA that will be displayed on the lead capture page.",
            options: {
                list: combinations.map((combination) => ({
                    title: combination,
                    value: combination
                }))
            },
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
