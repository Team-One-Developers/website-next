import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { allBlogs } from 'contentlayer/generated'

import ContentWrapper from '@/components/layout/ContentWrapper'
import { PageLayout } from '@/components/layout/PageLayout'

import { Mdx } from '@/components/MdxComponents'

interface BlogProps {
  params: {
    slug: string
  }
}

async function getBlogFromParams(params: BlogProps['params']) {
  const blog = allBlogs.find((blog) => blog.slugAsParams === params.slug)

  if (!blog) {
    null
  }

  return blog
}

export async function generateMetadata({
  params,
}: BlogProps): Promise<Metadata> {
  const blog = await getBlogFromParams(params)

  if (!blog) {
    return {}
  }

  return {
    title: blog.title,
    description: blog.description,
  }
}

export async function generateStaticParams(): Promise<BlogProps['params'][]> {
  return allBlogs.map((blog) => ({
    slug: blog.slugAsParams,
  }))
}

export default async function BlogPage({ params }: BlogProps) {
  const blog = await getBlogFromParams(params)

  if (!blog) {
    notFound()
  }

  return (
    <PageLayout>
      <ContentWrapper>
        <article className="py-6 prose dark:prose-invert">
          <h1 className="mb-2">{blog.title}</h1>
          {blog.description && (
            <p className="text-xl mt-0 text-slate-700 dark:text-slate-200">
              {blog.description}
            </p>
          )}
          <hr className="my-4" />
          <Mdx code={blog.body.code} />
        </article>
      </ContentWrapper>
    </PageLayout>
  )
}
