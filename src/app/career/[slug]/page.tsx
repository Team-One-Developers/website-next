import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { allCareers } from 'contentlayer/generated'

import { Button } from '@/components/atoms/Button'
import Typography from '@/components/atoms/Typography'

import ContentWrapper from '@/components/layout/ContentWrapper'
import { PageLayout } from '@/components/layout/PageLayout'
import { TwoColumnsFullScreenContainer } from '@/components/layout/TwoColumnsFullScreenContainer'

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
    <PageLayout ticker={false} footer={false}>
      <TwoColumnsFullScreenContainer
        left={
          <>
            <Typography as="h1" variant="h2_bold" className="text-black">
              {career.title}
            </Typography>
            <Link href="/contact">
              <Button color="secondary" size="lg" className="mt-8">
                Jetzt bewerben
              </Button>
            </Link>
          </>
        }
        right={
          <article className="py-6 text-white">
            {career.description && (
              <p className="text-xl mt-0">{career.description}</p>
            )}
            <hr className="my-4" />
            <Mdx code={career.body.code} />
          </article>
        }
      />
    </PageLayout>
  )
}
