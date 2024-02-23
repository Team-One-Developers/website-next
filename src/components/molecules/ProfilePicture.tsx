import { Image } from "../atoms/Image"
import { ImageMask } from "../atoms/ImageMask"

export const ProfilePicture = ({ imgSrc, authorName }: { imgSrc?: string; authorName?: string }) => {
    return imgSrc ? (
        <ImageMask className="relative flex aspect-[0.75] size-16 items-center justify-center overflow-hidden">
            <Image src={imgSrc} alt={`Profilpicture of ${authorName}`} fill sizes="(min-width: 1200px) 5vw, 10vw" />
        </ImageMask>
    ) : (
        <div className="relative aspect-[0.75] size-16">
            <Image
                src="/images/logo/t1d-sticker-darkgray.svg"
                alt="T1Developers Logo"
                fill
                sizes="(min-width: 1200px) 5vw, 10vw"
                style={{ objectFit: "contain" }}
            />
        </div>
    )
}
