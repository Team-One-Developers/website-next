import { Image } from "../atoms/Image"
import { ImageMask } from "../atoms/ImageMask"

export const ProfilePicture = ({ imgSrc, authorName }: { imgSrc?: string; authorName?: string }) => {
    return imgSrc ? (
        <ImageMask className="relative flex aspect-[0.75] size-16 items-center justify-center overflow-hidden">
            <Image src={imgSrc} alt={`Profile picture of ${authorName}`} fill sizes="(min-width: 1200px) 5vw, 10vw" />
        </ImageMask>
    ) : (
        <svg width="64" height="80" viewBox="0 0 64 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M55.3343 7.96764C49.5515 2.65588 41.7772 0 32 0C22.2228 0 14.4429 2.65588 8.66573 7.96764C2.88858 13.2794 0 20.8788 0 30.7658V49.2286C0 59.1156 2.88858 66.7206 8.66573 72.0324C14.4429 77.3441 22.2228 80 32 80C41.7772 80 49.5515 77.3441 55.3343 72.0324C61.1114 66.7206 64 59.1212 64 49.2286V30.7658C64 20.8788 61.1114 13.2794 55.3343 7.96206V7.96764ZM48.4231 26.4416H36.756L30.426 35.8265V36.8922H36.756V64.4218H27.7348V26.4416H16.079V18.7809H48.4175V26.4416H48.4231Z"
                fill="#1D1D1D"
            />
        </svg>
    )
}
