import Link from 'next/link'
import { twJoin } from 'tailwind-merge'

import { Button, ButtonProps } from '../atoms/Button'
import { Heading } from '../atoms/Heading'
import Typography, { TypographyProps } from '../atoms/Typography'

interface CtaSectionProps {
  subtitleText?: string
  headlineText?: string
  contentText: string
  link: string
  linkLabel: string
  linkColor?: ButtonProps['color']
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
    linkColor,
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
          className="mb-4 flex items-center text-black"
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
        <Typography className="m-0 mb-6 text-black" variant={contentVariant}>
          {contentText}
        </Typography>

        <Link href={link}>
          <Button color={linkColor}>{linkLabel}</Button>
        </Link>
      </div>
    </section>
  )
}
