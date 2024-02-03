import { ImageProps, default as NextImage } from "next/image"
import { twJoin } from "tailwind-merge"
import "./image.css"

export const Image = ({ className, ...rest }: ImageProps) => (
    <NextImage className={twJoin("image", className)} {...rest} />
)
