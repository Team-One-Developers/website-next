import { twJoin } from "tailwind-merge"
import { ButtonProps } from "../atoms/Button"
import { Link } from "../atoms/Link"
import Typography, { TypographyProps } from "../atoms/Typography"

interface CtaSectionProps {
    subtitleText?: string
    headlineText?: string
    contentText: string
    link: string
    linkLabel: string
    linkColor?: ButtonProps["color"]
    icon?: React.ReactNode
    contentVariant: TypographyProps["variant"]
    headlineVariant: TypographyProps["variant"]
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
        icon,
        contentVariant,
        headlineVariant,
        headlineClassName = "",
        className
    } = props

    return (
        <section className={className}>
            {subtitleText && (
                <div className="flex items-center mb-4">
                    {icon}
                    <Typography className="text-black" variant="description">
                        {subtitleText}
                    </Typography>
                </div>
            )}
            {headlineText && (
                <Typography className={twJoin("mb-8", headlineClassName)} as="h2" variant={headlineVariant}>
                    {headlineText}
                </Typography>
            )}
            <div>
                <Typography className="m-0 mb-6 text-black" variant={contentVariant}>
                    {contentText}
                </Typography>

                <Link href={link} color={linkColor} label={linkLabel} />
            </div>
        </section>
    )
}
