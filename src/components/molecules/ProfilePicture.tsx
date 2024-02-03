import { Image } from "../atoms/Image"
import { ImageMask } from "../atoms/ImageMask"

export const ProfilePicture = ({ imgSrc, objectFit }: { imgSrc: string; objectFit: "cover" | "contain" }) => {
    return (
        <ImageMask className="overflow-hidden flex h-16 w-16 items-center justify-center relative aspect-[0.75]">
            <Image src={imgSrc} alt="Profilpicture" fill style={{ objectFit: objectFit }} />
        </ImageMask>
    )
}
