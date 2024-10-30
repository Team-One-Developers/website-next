import { type SchemaTypeDefinition } from "sanity"
import { careerType } from "./careerType"
import { authorType } from "./authorType"
import { blogType } from "./blogType"

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [blogType, careerType, authorType]
}
