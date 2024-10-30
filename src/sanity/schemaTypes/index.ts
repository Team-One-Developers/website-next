import { type SchemaTypeDefinition } from "sanity"
import { jobType } from "./jobType"
import { authorType } from "./authorType"
import { blogType } from "./blogType"

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [jobType, authorType, blogType]
}
