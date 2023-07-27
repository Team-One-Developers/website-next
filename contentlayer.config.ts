import {
  ComputedFields,
  defineDocumentType,
  makeSource,
} from 'contentlayer/source-files'

const computedFields: ComputedFields = {
  slug: {
    type: 'string',
    resolve: (doc) => `/${doc._raw.flattenedPath}`,
  },
  slugAsParams: {
    type: 'string',
    resolve: (doc) => doc._raw.flattenedPath.split('/').slice(1).join('/'),
  },
}

export const Blog = defineDocumentType(() => ({
  name: 'Blog',
  filePathPattern: 'blog/**/*.mdx',
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    description: { type: 'string', required: true },
    date: { type: 'date', required: true },
  },
  computedFields: computedFields,
}))

export const Career = defineDocumentType(() => ({
  name: 'Career',
  filePathPattern: 'career/**/*.mdx',
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    description: { type: 'string', required: true },
    location: { type: 'string', required: true },
    schedule: { type: 'string', required: true },
    employmentType: { type: 'string', required: true },
  },
  computedFields: computedFields,
}))

export const Happen = defineDocumentType(() => ({
  name: 'Happen',
  filePathPattern: 'happen/**/*.mdx',
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    author: { type: 'string', required: false },
    // draft, to review, reviewed, show/done
    status: { type: 'string', required: true },
    tags: { type: 'list', of: { type: 'string' }, required: false },
  },
}))

export default makeSource({
  contentDirPath: './src/content',
  documentTypes: [Blog, Career, Happen],
})
