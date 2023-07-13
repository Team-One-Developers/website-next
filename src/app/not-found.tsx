import Image from 'next/image'
import Link from 'next/link'
import { PAGE_THEME } from '@/constants'

import { Button } from '@/components/atoms/Button'
import Typography from '@/components/atoms/Typography'
import { Heading } from '@/components/atoms/Heading'

import ContentWrapper from '@/components/layout/ContentWrapper'
import { FullWidthSectionContainer } from '@/components/layout/FullWidthSectionContainer'
import { PageLayout } from '@/components/layout/PageLayout'

export const NotFound = () => {
  return (
    <PageLayout>
      <FullWidthSectionContainer>
        <ContentWrapper>
          <Heading tag="h1">404</Heading>
          <Typography variant="lg" className="mt-4 text-t1-white">
            Die Seite wurde nicht gefunden
          </Typography>
          <br />
          <Typography variant="md" className="w-full text-t1-white md:w-1/3">
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
