import { Image } from "../atoms/Image"
import { ImageMask } from "../atoms/ImageMask"

export const ProfilePicture = ({ imgSrc, objectFit }: { imgSrc: string; objectFit: "cover" | "contain" }) => {
    return (
        <ImageMask className="relative flex aspect-[0.75] size-16 items-center justify-center overflow-hidden">
            <Image src={imgSrc} alt="Profilpicture" fill style={{ objectFit: objectFit }} />
        </ImageMask>
    )
}
