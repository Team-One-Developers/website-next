import { ComputedFields, defineDocumentType, makeSource } from "contentlayer/source-files"

const computedFields: ComputedFields = {
	slug: {
		type: "string",
		resolve: (doc) => `/${doc._raw.flattenedPath}`,
	},
	slugAsParams: {
		type: "string",
		resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/"),
	},
}

export const Post = defineDocumentType(() => ({
	name: "Post",
	filePathPattern: "posts/**/*.mdx",
	contentType: "mdx",
	fields: {
		title: { type: "string", required: true },
		description: { type: "string", required: true },
		date: { type: "date", required: true },
	},
	computedFields: computedFields,
}))

export const Career = defineDocumentType(() => ({
	name: "Career",
	filePathPattern: "careers/**/*.mdx",
	contentType: "mdx",
	fields: {
		title: { type: "string", required: true },
		description: { type: "string", required: true },
	},
	computedFields: computedFields,
}))

export default makeSource({
	contentDirPath: "./src/content",
	documentTypes: [Post, Career],
})