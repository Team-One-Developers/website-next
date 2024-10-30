import { UserIcon } from "@sanity/icons"
import { defineField, defineType } from "sanity"

export const authorType = defineType({
    name: "author",
    title: "Author",
    type: "document",
    icon: UserIcon,
    fields: [
        defineField({
            name: "name",
            title: "Vorname",
            type: "string",
            validation: (Rule) => Rule.required().error("Ein Autor muss einen Vornamen haben")
        }),
        defineField({
            name: "surname",
            title: "Nachname",
            type: "string"
        }),
        defineField({
            name: "position",
            type: "string"
        }),
        defineField({
            name: "profileImg",
            type: "image"
        }),
        defineField({
            name: "about",
            type: "array",
            description: "A rough overview about the author.",
            of: [{ type: "block" }]
        })
    ],
    preview: {
        select: {
            title: "name",
            subtitle: "position"
        }
    }
})
