import { type SchemaTypeDefinition } from "sanity"
import { authorType } from "./authorType"
import { blogType } from "./blogType"
import { careerType } from "./careerType"
import { leadcaptureType } from "./leadcaptureType"

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [blogType, careerType, authorType, leadcaptureType]
}
