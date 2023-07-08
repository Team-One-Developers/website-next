import { Copy, CtaLink, Heading, TopLine } from '@/components'
import { twJoin } from 'tailwind-merge'

interface CtaSectionProps {
  topLineText?: string
  headlineText?: string
  contentText: string
  ctaButtonLink: string
  ctaButtonLabel: string
  buttonColor?: 'black' | 'green'
  animate?: boolean
  children?: React.ReactNode
  fontDefaultsContent?: string
  fontDefaultsHeadline?: string
  headlineMarginBottomClass?: string
  className?: string
}

export const CtaSection = (props: CtaSectionProps) => {
  const {
    topLineText,
    headlineText,
    contentText,
    ctaButtonLabel,
    ctaButtonLink,
    buttonColor,
    children,
    animate,
    fontDefaultsContent,
    fontDefaultsHeadline,
    headlineMarginBottomClass = 'mb-8',
    className,
  } = props

  return (
    <section className={className}>
      {topLineText && (
        <TopLine
          className="mb-4 flex items-center "
          opacity={1}
          colorClassName="text-t1-black"
        >
          {/* We should refactor this as only icons are passed into here */}
          {children}
          {topLineText}
        </TopLine>
      )}
      {headlineText && (
        <Heading
          className={twJoin('', headlineMarginBottomClass)}
          fontDefaults={fontDefaultsHeadline}
          tag="h2"
        >
          {headlineText}
        </Heading>
      )}
      <div
        style={{
          transition: '500ms',
          opacity: animate ? '0' : 'inherit',
          translate: animate ? '0 20px' : '',
        }}
      >
        <Copy
          className="m-0 mb-6 text-t1-black"
          textSize="sm"
          fontDefaults={fontDefaultsContent}
        >
          {contentText}
        </Copy>
        <CtaLink variant={buttonColor} href={ctaButtonLink}>
          {ctaButtonLabel}
        </CtaLink>
      </div>
    </section>
  )
}
