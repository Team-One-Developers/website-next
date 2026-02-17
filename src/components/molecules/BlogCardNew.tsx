import Eyebrow from "@/components/atoms/Eyebrow"
import Tag from "@/components/atoms/Tag"
import AuthorInfo from "@/components/molecules/AuthorInfo"
import cn from "@/utils/cn"
import Image from "next/image"
import Link from "next/link"

interface BlogCardNewProps {
    title: string
    description: string
    image: string
    eyebrowLabel: string
    tagLabel?: string
    author: {
        name: string
        role: string
        avatarUrl: string
    }
    href: string
    className?: string
}

export default function BlogCardNew({
    title,
    description,
    image,
    eyebrowLabel,
    tagLabel,
    author,
    href,
    className
}: BlogCardNewProps) {
    return (
        <Link
            href={href}
            className={cn(
                "group row-span-6 grid grid-rows-subgrid gap-0 transition-transform hover:scale-[1.01]",
                className
            )}
        >
            {/* Image */}
            <div className="relative aspect-4/3 w-full overflow-hidden rounded-lg">
                <Image src={image} alt={title} fill className="object-cover" />
            </div>

            {/* Eyebrow */}
            <div className="px-padding-lg pt-lg self-end">
                <Eyebrow label={eyebrowLabel} size="small" />
            </div>

            {/* Title */}
            <h4 className="font-gteradisplay text-h4 px-padding-lg max-w-130 text-black">{title}</h4>

            {/* Tag */}
            <div className="px-padding-lg">{tagLabel ? <Tag label={tagLabel} /> : null}</div>

            {/* Description */}
            <p className="text-xsmall px-padding-lg max-w-130 text-black opacity-60">{description}</p>

            {/* Author */}
            <div className="px-padding-lg self-end">
                <AuthorInfo name={author.name} role={author.role} avatarUrl={author.avatarUrl} />
            </div>
        </Link>
    )
}
