import Image from 'next/image'
import { PAGE_THEME } from '@/constants'
import { twJoin } from 'tailwind-merge'

import { Heading } from '@/components/atoms/Heading'
import Typography from '@/components/atoms/Typography'

import { Ticker } from '@/components/molecules/Ticker'

import ContentWrapper from '@/components/layout/ContentWrapper'
import { PageLayout } from '@/components/layout/PageLayout'

const Contact = () => {
  const ArrowSVG = ({
    className,
    style,
  }: {
    className: string
    style?: any
  }) => {
    return (
      <svg
        width="40"
        height="40"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        style={style}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14 4H12H10H8V6H10V8H8V10H6V12H4V14H6V12H8V10H10V8H12V10H14V8V6V4Z"
          fill="#46FFAD"
        />
      </svg>
    )
  }

  const ExternalLink = ({ href, name }: { href: string; name: string }) => {
    return (
      <Typography
        as="div"
        className="mt-0 flex w-fit gap-2 border-b border-primary text-white"
        variant="text_xl"
      >
        <ArrowSVG className="h-[1.3em] w-[1.3em] items-center justify-center" />
        <a href={href}>{name}</a>
      </Typography>
    )
  }

  return (
    <PageLayout ticker={false}>
      <ContentWrapper>
        <Typography as="h1" variant="h2" className="mt-20">
          Die Eins ist man <br /> niemals alleine.
        </Typography>
        <section className="mb-40 mt-20 flex flex-wrap items-center gap-16">
          <div className="relative min-w-[260px] max-w-[460px] grow">
            <Image
              src="/images/cropped/dinosaur_call.webp"
              alt="A person in a T-Rex costume with an inflated cell phone is standing in an office. They are pretending to be on a call."
              width={460}
              height={580}
              style={{
                flex: 1,
              }}
            />
          </div>
          <div className={'flex grow-[2] flex-col gap-2 p-4'}>
            <Typography className={twJoin('-mt-3 mb-0')} variant="text_xl">
              Team One Developers GmbH <br />
              Hospitalstraße 35 <br />
              70174 Stuttgart
            </Typography>
            <ExternalLink
              href="mailto:kontakt@t1dev.de"
              name="kontakt@t1dev.de"
            />
            <ExternalLink href="tel:+4971125298690" name="+49 711 252 98 690" />
          </div>
        </section>
      </ContentWrapper>
      <Ticker
        theme={PAGE_THEME.dark}
        text="Get In Touch"
        speed={300}
        textClassName="text-primary"
        includeLogo={false}
        className="-mt-[200px] mb-[100px] md:mb-[200px]"
      />
    </PageLayout>
  )
}

export default Contact
