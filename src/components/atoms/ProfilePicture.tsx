import { Image } from "./Image";
import { ImageMask } from "./ImageMask";


export const ProfilePicture = ({ imgSrc, objectFit }: { imgSrc: string; objectFit: "cover" | "contain" }) => {
    return (
        <ImageMask className="overflow-hidden flex h-16 w-16 items-center justify-center ">
            <Image src={imgSrc} alt="Profilpicture" fill style={{ objectFit: objectFit }} />
        </ImageMask>
    )
}

