import {
  Button,
  ContentWrapper,
  Copy,
  Footer,
  FullWidthSectionContainer,
  Header,
  Heading,
  Ticker,
} from '@/components'
import { PAGE_THEME } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'

export const NotFound = () => {
  return (
    <div className="bg-theme-bgColor text-theme-textColor" data-theme="dark">
      <Header theme={PAGE_THEME.dark} />
      <main>
        <FullWidthSectionContainer>
          <ContentWrapper>
            <Heading tag="h1">404</Heading>
            <Copy textSize="l" className="mt-4 text-t1-white">
              Die Seite wurde nicht gefunden
            </Copy>
            <br />
            <Copy textSize="sm" className="w-full text-t1-white md:w-1/3">
              Sorry, die Seite die du angefragt hast, scheint nicht zu
              existieren.
            </Copy>
            <br />
            <Link href="/">
              <Button>Zur Startseite</Button>
            </Link>
          </ContentWrapper>
        </FullWidthSectionContainer>
      </main>
      <Ticker theme={PAGE_THEME.dark} />
      <ContentWrapper>
        <Footer />
      </ContentWrapper>
    </div>
  )
}
export default NotFound
