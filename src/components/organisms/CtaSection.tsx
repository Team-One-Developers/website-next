import { twJoin } from 'tailwind-merge'

import { Heading } from '../atoms/Heading'
import { Link, LinkProps } from '../atoms/Link'
import Typography, { TypographyProps } from '../atoms/Typography'

interface CtaSectionProps {
  subtitleText?: string
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
    subtitleText,
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
      {subtitleText && (
        <Typography
          className="mb-4 flex items-center text-t1-black"
          variant="subtitle"
        >
          {/* We should refactor this as only icons are passed into here */}
          {children}
          {subtitleText}
        </Typography>
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
