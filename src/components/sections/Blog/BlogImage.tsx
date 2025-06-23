import type { SanityImageAsset } from "@/sanity/types"
import { getImageDimensions } from "@sanity/asset-utils"
import Image from "next/image"

interface HeroImageProps {
    image: SanityImageAsset
    priority?: boolean
    className?: string
}

export const BlogImage = ({ image, className, priority = false }: HeroImageProps) => {
    if (!image?.url || !image?.metadata) {
        return null
    }

    const { width, height } = getImageDimensions(image)

    return (
        <Image
            src={image.url}
            alt={image.altText || "Blog Image"}
            className={className}
            width={width}
            height={height}
            sizes="100vw"
            placeholder="blur"
            blurDataURL={image.metadata.lqip}
            priority={priority}
        />
    )
}
