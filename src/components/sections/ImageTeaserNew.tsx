import ButtonNew from "@/components/atoms/ButtonNew"
import AuthorInfo from "@/components/molecules/AuthorInfo"
import cn from "@/utils/cn"
import Image from "next/image"

interface ImageTeaserProps {
    title: string
    description: string
    buttonLabel?: string
    buttonHref?: string
    image: string
    author?: {
        name: string
        role: string
        avatarUrl: string
    }
    className?: string
}

export default function ImageTeaser({
    title,
    description,
    buttonLabel = "Mehr erfahren",
    buttonHref,
    image,
    author,
    className
}: ImageTeaserProps) {
    return (
        <section className={cn("w-full", className)}>
            <div className="relative flex aspect-1728/900 w-full items-end overflow-hidden rounded-lg p-[8px]">
                {/* Background image */}
                <Image src={image} alt={title} fill className="object-cover" />

                {/* Overlay card */}
                <div className="gap-padding-lg bg-background-soft px-padding-xl py-grid-gutter relative flex w-full max-w-[579px] flex-col rounded-lg backdrop-blur-[16px]">
                    <h3 className="font-gteradisplay text-h3 text-white">{title}</h3>
                    <p className="text-small text-white-soft">{description}</p>
                    <ButtonNew label={buttonLabel} variant="primary" href={buttonHref} />
                    {author && (
                        <AuthorInfo name={author.name} role={author.role} avatarUrl={author.avatarUrl} variant="dark" />
                    )}
                </div>
            </div>
        </section>
    )
}
