import { Metadata } from 'next'
import Link from 'next/link'

import 'contentlayer/generated'

import { format, parseISO } from 'date-fns'
import { twJoin } from 'tailwind-merge'

import { Image } from '@/components/atoms/Image'
import Typography from '@/components/atoms/Typography'

import ContentWrapper from '@/components/layout/ContentWrapper'
import { PageLayout } from '@/components/layout/PageLayout'

import { Mdx } from '@/components/MdxComponents'

import { allHappens } from '.contentlayer/generated'
import { Happen } from '.contentlayer/generated/types'

export const metadata: Metadata = {
  title: 'Happen',
}

const HappenPage = () => {
  const HappenCard = ({ happen }: { happen: Happen }) => {
    return (
      <div className="relative rounded-lg h-80 no-scrollbar overflow-y-auto text-black w-full md:max-w-[45%] lg:max-w-[30%] bg-muted-foreground">
        <div className="p-4">
          <Typography as="h3" variant="h5">
            {happen.title}
          </Typography>
          <div className="border-t border-black w-full my-3" />
          <div className="prose">
            <Mdx code={happen.body.code} />
          </div>
        </div>
      </div>
    )
  }

  return (
    <PageLayout>
      <ContentWrapper>
        <div className="mt-24">
          <Typography as="h1" variant="h2">
            All unsere Häppchen
          </Typography>
        </div>
        <div className="w-full gap-8 py-24 flex flex-wrap justify-between">
          {allHappens.map((happen, index) => {
            return <HappenCard key={index} happen={happen} />
          })}
        </div>
      </ContentWrapper>
    </PageLayout>
  )
}

export default HappenPage
