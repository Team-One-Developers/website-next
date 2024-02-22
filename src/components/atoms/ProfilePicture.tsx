import { Image } from "./Image"
import { ImageMask } from "./ImageMask"

export const ProfilePicture = ({ imgSrc, objectFit }: { imgSrc: string; objectFit: "cover" | "contain" }) => {
    return (
        <ImageMask className="relative flex size-16 items-center justify-center overflow-hidden ">
            <Image src={imgSrc} alt="Profilpicture" fill style={{ objectFit: objectFit }} />
        </ImageMask>
    )
}
