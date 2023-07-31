import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { allBlogs } from 'contentlayer/generated'
import { format, parseISO } from 'date-fns'

import StructuredData from '@/components/atoms/StructuredData'
import Typography from '@/components/atoms/Typography'

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

  const structuredData = {
    '@type': 'BlogPost',
    title: blog.title,
    // Description is a paragraph above a list with all requirements
    description: `<p>${blog.description}</p>`,
    postingOrganization: {
      '@type': 'Organization',
      name: 'Team One Developers GmbH',
    },
  }

  const RelatedArticle = ({
    title,
    subtitle,
    iconText,
  }: {
    title: string
    subtitle: string
    iconText: string
  }) => {
    return (
      <div className="grid grid-flow-row grid-cols-[4rem_1fr] gap-2">
        <div className="flex h-16 w-16 items-center justify-center rounded bg-primary text-black">
          {iconText}
        </div>
        <div>
          <Typography variant="text_sm">{title}</Typography>
          <Typography variant="text_xs">{subtitle}</Typography>
        </div>
      </div>
    )
  }

  return (
    <PageLayout>
      <StructuredData data={structuredData} />
      <ContentWrapper>
        <div className="w-full rounded p-24">
          <div className="max-w-[80%]">
            <Typography as="h1" variant="h2_bold">
              {blog.title}
            </Typography>
            <Typography as="h2" variant="h4" className="text-primary">
              {blog.description}
            </Typography>
            <time
              dateTime={blog.date}
              className="mb-2 block text-base text-gray-300"
            >
              {format(parseISO(blog.date), 'LLLL d, yyyy')}
            </time>
          </div>
          <div className="mt-16 flex items-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-black">
              SB
            </div>
            <div className="ml-4">
              <Typography as="p" variant="h5">
                Simon Broß
              </Typography>
              <Typography
                as="p"
                variant="text_sm"
                className="text-muted-foreground"
              >
                Software Engineer
              </Typography>
            </div>
          </div>
        </div>
        <div className="grid w-full gap-8 p-24 pt-0 lg:grid-cols-[1fr_600px_1fr] xl:grid-cols-[1fr_800px_1fr]">
          <div className="">
            <div className="sticky top-[140px] rounded border border-primary p-4">
              <h3 className="text-xl font-bold">Table of Content</h3>

              <ul className="mt-4 flex flex-col gap-1">
                <li>- What is AutoGPTs goal? </li>
                <li>- How to use it?</li>
                <li>- How good it is for its purpose?</li>
                <li>- Is it futureproof?</li>
                <li>- How can it improve everydaylife?</li>
                <li>- Conclusion</li>
              </ul>
            </div>
          </div>
          <article className="gap-4 p-4 prose max-w-none dark:prose-invert w-full">
            <h1 className="mb-2">{blog.title}</h1>
            {blog.description && (
              <p className="text-xl mt-0 text-slate-700 dark:text-slate-200">
                {blog.description}
              </p>
            )}
            <hr className="my-4" />
            <Mdx code={blog.body.code} />
          </article>
          <div>
            <div className="sticky top-[140px] flex flex-col gap-4">
              <h3 className="text-2xl">Mentioned articles:</h3>
              <RelatedArticle
                iconText="TOD"
                title="Is Team One Developers?"
                subtitle="Insights into the work-life"
              />
              <RelatedArticle
                iconText="JID"
                title="Tauren Spa ist ein must-visit"
                subtitle="Urlaub in Österreich? Tauren Spa ist ein MUST-VISIT!"
              />
              <RelatedArticle
                iconText="ZDH"
                title="Geht ein Keks die Treppe runter, unten merkt er, er hat garkeine
                Füße."
                subtitle="Geht er die Treppe wieder hoch."
              />
              <RelatedArticle
                iconText="RSF"
                title="Expedition Maisi Flitzer"
                subtitle="Jetzt Mais-Salat essend den Berg runter mit 150 KM/h"
              />
            </div>
          </div>
        </div>
      </ContentWrapper>
    </PageLayout>
  )
}
