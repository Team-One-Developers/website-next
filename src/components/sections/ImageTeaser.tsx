import Button from "@/components/atoms/Button"
import AuthorInfo from "@/components/molecules/AuthorInfo"
import cn from "@/utils/cn"
import Image from "next/image"

interface ImageTeaserProps {
    title?: string
    description?: string
    buttonLabel?: string
    buttonHref?: string
    buttonVariant?: "primary" | "outline" | "light"
    image: string
    alt?: string
    author?: {
        name: string
        role: string
        avatarUrl: string
    }
    showOverlay?: boolean
    priority?: boolean
    className?: string
}

export default function ImageTeaser({
    title,
    description,
    buttonLabel,
    buttonHref,
    buttonVariant = "primary",
    image,
    alt,
    author,
    showOverlay = true,
    priority = false,
    className
}: ImageTeaserProps) {
    const hasOverlay = showOverlay && title && description

    return (
        <section className={cn("w-full", className)}>
            <div className="relative flex aspect-1728/900 w-full items-end overflow-hidden rounded-lg p-[8px]">
                {/* Background image */}
                <Image src={image} alt={alt ?? title ?? ""} fill className="object-cover" priority={priority} />

                {/* Overlay card */}
                {hasOverlay && (
                    <div className="gap-padding-lg bg-background-soft px-padding-xl py-grid-gutter relative flex w-full max-w-[579px] flex-col rounded-lg backdrop-blur-lg">
                        <h3 className="font-gteradisplay text-h3 text-white">{title}</h3>
                        <p className="text-small text-white-soft">{description}</p>
                        {buttonLabel && <Button label={buttonLabel} variant={buttonVariant} href={buttonHref} />}
                        {author && (
                            <AuthorInfo
                                name={author.name}
                                role={author.role}
                                avatarUrl={author.avatarUrl}
                                variant="light"
                            />
                        )}
                    </div>
                )}
            </div>
        </section>
    )
}
