import type { SanityImageAsset } from "@/sanity/types"
import { getImageDimensions } from "@sanity/asset-utils"
import { Image } from "../atoms/Image"

interface HeroImageProps {
    image: SanityImageAsset
}

export const BlogHeroImage = ({ image }: HeroImageProps) => {
    if (!image.url || !image.metadata) {
        return null
    }

    const { width, height } = getImageDimensions(image)

    return (
        <Image
            src={image.url}
            alt={image.altText || ""}
            width={width}
            height={height}
            sizes="100vw"
            placeholder="blur"
            blurDataURL={image.metadata.lqip}
            priority
        />
    )
}
