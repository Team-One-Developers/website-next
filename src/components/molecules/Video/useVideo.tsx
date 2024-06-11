import { useEffect, useState, MutableRefObject } from "react"

interface HTMLVideoElementWithProprietaryFunctions extends HTMLVideoElement {
    webkitEnterFullScreen(): void
}
export const useVideo = (ref: MutableRefObject<HTMLVideoElement | null | undefined>) => {
    const [videoElement, setVideoElement] = useState<undefined | HTMLVideoElement>(undefined)

    useEffect(() => {
        if (ref && ref.current instanceof HTMLVideoElement && videoElement === undefined) {
            setVideoElement(ref.current)
        }
    }, [ref, videoElement])

    return [videoElement as HTMLVideoElementWithProprietaryFunctions]
}
