import { defineField, defineType } from "sanity"

export const authorType = defineType({
    name: "author",
    title: "Autor",
    type: "document",
    fields: [
        defineField({
            name: "name",
            type: "string",
            validation: (Rule) => Rule.required().error("Ein Autor muss einen Namen haben")
        }),
        defineField({
            name: "position",
            type: "string"
        }),
        defineField({
            name: "profileImg",
            type: "string"
        }),
        defineField({
            name: "about",
            type: "array",
            of: [{ type: "block" }]
        })
    ]
})
