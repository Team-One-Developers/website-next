import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { allCareers } from 'contentlayer/generated'

import ContentWrapper from '@/components/layout/ContentWrapper'
import { PageLayout } from '@/components/layout/PageLayout'

import { Mdx } from '@/components/MdxComponents'

interface CareerProps {
  params: {
    slug: string
  }
}

async function getCareerFromParams(params: CareerProps['params']) {
  const career = allCareers.find(
    (career) => career.slugAsParams === params.slug
  )

  if (!career) {
    null
  }

  return career
}

export async function generateMetadata({
  params,
}: CareerProps): Promise<Metadata> {
  const career = await getCareerFromParams(params)

  if (!career) {
    return {}
  }

  return {
    openGraph: {
      images: `/api/og/career?title=${career.title}`,
    },
    title: career.title,
    description: career.description,
  }
}

export async function generateStaticParams(): Promise<CareerProps['params'][]> {
  return allCareers.map((career) => ({
    slug: career.slugAsParams,
  }))
}

export default async function CareerPage({ params }: CareerProps) {
  const career = await getCareerFromParams(params)

  if (!career) {
    notFound()
  }

  return (
    <PageLayout>
      <ContentWrapper>
        <article className="py-6 prose dark:prose-invert">
          <h1 className="mb-2">{career.title}</h1>
          {career.description && (
            <p className="text-xl mt-0 text-slate-700 dark:text-slate-200">
              {career.description}
            </p>
          )}
          <hr className="my-4" />
          <Mdx code={career.body.code} />
        </article>
      </ContentWrapper>
    </PageLayout>
  )
}
