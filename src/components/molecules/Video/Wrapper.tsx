import { ImageMask } from "@/components/atoms/ImageMask"
import { VideoProps } from "../Video"

export const Wrapper = ({ children, variant }: Pick<VideoProps, "children" | "variant">) => {
    if (variant === "mask") {
        return <ImageMask className="aspect-[119/150]">{children}</ImageMask>
    }

    return children
}
