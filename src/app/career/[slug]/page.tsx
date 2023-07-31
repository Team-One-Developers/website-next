import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { BENEFITS } from '@/constants/benefits'
import { allCareers } from 'contentlayer/generated'

import { Button } from '@/components/atoms/Button'
import StructuredData from '@/components/atoms/StructuredData'
import Typography from '@/components/atoms/Typography'

import ContentWrapper from '@/components/layout/ContentWrapper'
import { PageLayout } from '@/components/layout/PageLayout'
import { TwoColumnsFullScreenContainer } from '@/components/layout/TwoColumnsFullScreenContainer'

import { Mdx } from '@/components/MdxComponents'
import { ExternalLink } from '@/app/contact/page'

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

  const structuredData = {
    '@type': 'JobPosting',
    title: career.title,
    // Description is a paragraph above a list with all requirements
    description: `<p>${career.description}</p>`,
    jobLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressRegion: 'Baden-Württemberg',
        addressCountry: 'Germany',
        addressLocality: 'Stuttgart',
        postalCode: '70174',
        streetAddress: 'Hospitalstraße 35',
      },
    },
    hiringOrganization: {
      '@type': 'Organization',
      name: 'Team One Developers GmbH',
    },
    employmentType: `${career.employmentType} - ${career.schedule}`,
    jobBenefits: BENEFITS,
  }

  return (
    <PageLayout ticker={false} footer={false}>
      <StructuredData data={structuredData} />
      <TwoColumnsFullScreenContainer
        left={
          <div className="h-full flex flex-col justify-between">
            <Typography as="h1" variant="h2_bold">
              {career.title}
            </Typography>

            <div className={'flex flex-col gap-4'}>
              <Typography as="h2" variant="h3">
                Jetzt Aktiv Bewerben!
              </Typography>
              <Typography className={'-mt-3 mb-0'} variant="text_xl">
                Team One Developers GmbH <br />
                Hospitalstraße 35 <br />
                70174 Stuttgart
              </Typography>
              <ExternalLink
                className="text-primary-foreground border-primary-foreground"
                arrowClass="text-primary-foreground"
                href="mailto:kontakt@t1dev.de"
                name="kontakt@t1dev.de"
              />
              <ExternalLink
                className="text-primary-foreground border-primary-foreground"
                arrowClass="text-primary-foreground"
                href="tel:+4971125298690"
                name="+49 711 252 98 690"
              />
            </div>
          </div>
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
