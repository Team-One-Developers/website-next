import Link from 'next/link'

import { Button } from '@/components/atoms/Button'
import Copy from '@/components/atoms/Copy'
import { Heading } from '@/components/atoms/Heading'

import ContentWrapper from '@/components/layout/ContentWrapper'
import { FullWidthSectionContainer } from '@/components/layout/FullWidthSectionContainer'
import { PageLayout } from '@/components/layout/PageLayout'

const NotFound = () => {
  return (
    <PageLayout>
      <FullWidthSectionContainer>
        <ContentWrapper>
          <Heading tag="h1">404</Heading>
          <Copy textSize="l" className="mt-4 text-t1-white">
            Die Seite wurde nicht gefunden
          </Copy>
          <br />
          <Copy textSize="sm" className="w-full text-t1-white md:w-1/3">
            Sorry, die Seite die du angefragt hast, scheint nicht zu existieren.
          </Copy>
          <br />
          <Link href="/">
            <Button>Zur Startseite</Button>
          </Link>
        </ContentWrapper>
      </FullWidthSectionContainer>
    </PageLayout>
  )
}

export default NotFound
