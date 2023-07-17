import { twJoin } from 'tailwind-merge'

import { Heading } from '../atoms/Heading'
import { Link, LinkProps } from '../atoms/Link'
import { TopLine } from '../atoms/Topline'
import Typography, { TypographyProps } from '../atoms/Typography'

interface CtaSectionProps {
  topLineText?: string
  headlineText?: string
  contentText: string
  link: string
  linkLabel: string
  linkVariant?: LinkProps['variant']
  animate?: boolean
  children?: React.ReactNode
  contentVariant: TypographyProps['variant']
  headlineVariant: TypographyProps['variant']
  headlineClassName?: string
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
    contentVariant,
    headlineVariant,
    headlineClassName = '',
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
        <Typography
          className={twJoin('mb-8', headlineClassName)}
          as="h2"
          variant={headlineVariant}
        >
          {headlineText}
        </Typography>
      )}
      <div
        style={{
          transition: '500ms',
          opacity: animate ? '0' : 'inherit',
          translate: animate ? '0 20px' : '',
        }}
      >
        <Typography className="m-0 mb-6 text-t1-black" variant={contentVariant}>
          {contentText}
        </Typography>

        <Link variant={linkVariant} href={link} mode="cta">
          {linkLabel}
        </Link>
      </div>
    </section>
  )
}
