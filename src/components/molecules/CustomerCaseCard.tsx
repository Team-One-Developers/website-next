import cn from "@/utils/cn"
import Image from "next/image"
import Link from "next/link"

interface CustomerCaseCardProps {
    title: string
    description: string
    backgroundImage: string
    logoUrl?: string
    logoAlt?: string
    buttonLabel?: string
    href: string
    className?: string
}

export default function CustomerCaseCard({
    title,
    description,
    backgroundImage,
    logoUrl,
    logoAlt,
    buttonLabel = "Mehr erfahren",
    href,
    className
}: CustomerCaseCardProps) {
    return (
        <Link
            href={href}
            className={cn(
                "px-padding-xl py-padding-2xl relative flex h-150 w-115 shrink-0 flex-col items-start justify-between rounded-xl lg:h-187.75 lg:w-135.75",
                className
            )}
        >
            {/* Background image + gradient overlay */}
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-xl">
                <Image src={backgroundImage} alt="" fill className="rounded-xl object-cover" />
                <div
                    className="absolute inset-0 rounded-xl mix-blend-multiply"
                    style={{
                        backgroundImage: "linear-gradient(180deg, rgba(70, 255, 173, 0) 12%, rgb(13, 49, 33) 72%)"
                    }}
                />
            </div>

            {/* Logo */}
            {logoUrl && (
                <div className="relative z-10">
                    <Image src={logoUrl} alt={logoAlt || ""} width={87} height={15} className="h-auto" />
                </div>
            )}

            {/* Content */}
            <div className="gap-padding-md relative z-10 flex flex-col">
                <h3 className="font-gteradisplay text-h3 text-white">{title}</h3>
                <p className="text-small text-white-soft">{description}</p>
                <span className="text-small mt-2 inline-flex items-center gap-2 text-white">
                    {buttonLabel}
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path
                            d="M5 12H19M19 12L12 5M19 12L12 19"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </span>
            </div>
        </Link>
    )
}
