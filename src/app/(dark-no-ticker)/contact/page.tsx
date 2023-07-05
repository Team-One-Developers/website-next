import { ContentWrapper, Copy, Heading, Ticker } from '@/components'
import { FONT_CONFIGS, PAGE_THEME } from '@/constants'
import { twJoin } from 'tailwind-merge'
import Image from 'next/image'

export const Contact = () => {
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
      <div
        className={twJoin(
          'mt-1 flex w-fit gap-2 border-b border-t1-green text-t1-white',
          FONT_CONFIGS.desktop_copy_xtra_large
        )}
      >
        <ArrowSVG className="h-[1.3em] w-[1.3em] items-center justify-center" />
        <a href={href}>{name}</a>
      </div>
    )
  }

  return (
    <main>
      <ContentWrapper>
        <Heading
          tag="h1"
          fontDefaults={FONT_CONFIGS.desktop_h3}
          className="mt-20"
        >
          Die Eins ist man <br /> niemals alleine.
        </Heading>
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
            <Copy
              className={twJoin(
                '!-mt-3 !mb-0',
                FONT_CONFIGS.desktop_copy_xtra_large
              )}
              textSize="sm"
            >
              Team One Developers GmbH <br />
              Hospitalstraße 35 <br />
              70174 Stuttgart
            </Copy>
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
        textClassName="text-t1-green"
        includeLogo={false}
        className="-mt-[200px] mb-[100px] md:mb-[200px]"
      />
    </main>
  )
}

export default Contact
