import Link from 'next/link'

import { Button } from '@/components/atoms/Button'
import { Heading } from '@/components/atoms/Heading'
import Typography from '@/components/atoms/Typography'

import ContentWrapper from '@/components/layout/ContentWrapper'
import { FullWidthSectionContainer } from '@/components/layout/FullWidthSectionContainer'
import { PageLayout } from '@/components/layout/PageLayout'

const NotFound = () => {
  return (
    <PageLayout>
      <FullWidthSectionContainer>
        <ContentWrapper>
          <Typography variant="h1" as="h1">
            404
          </Typography>
          <Typography variant="text_lg" className="mt-4 text-white">
            Die Seite wurde nicht gefunden
          </Typography>
          <br />
          <Typography variant="text_sm" className="w-full text-white md:w-1/3">
            Sorry, die Seite die du angefragt hast, scheint nicht zu existieren.
          </Typography>
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
