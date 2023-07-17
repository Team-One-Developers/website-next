import { twJoin } from 'tailwind-merge'

import Copy from '../atoms/Copy'
import { Link, LinkProps } from '../atoms/Link'
import { Heading } from '../atoms/Heading'
import { TopLine } from '../atoms/Topline'

interface CtaSectionProps {
  topLineText?: string
  headlineText?: string
  contentText: string
  link: string
  linkLabel: string
  linkVariant?: LinkProps["variant"]
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
    link,
    linkLabel,
    linkVariant,
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
          colorClassName="text-black"
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
          className="m-0 mb-6 text-black"
          textSize="sm"
          fontDefaults={fontDefaultsContent}
        >
          {contentText}
        </Copy>
        <Link variant={linkVariant} href={link} mode="cta">
          {linkLabel}
        </Link>
      </div>
    </section>
  )
}
