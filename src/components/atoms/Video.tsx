"use client"

import {
    useEffect,
    useState,
    useRef,
    useCallback,
    DetailedHTMLProps,
    VideoHTMLAttributes,
    MutableRefObject,
    ReactNode
} from "react"
import { IntersectionOptions, useInView } from "react-intersection-observer"

import "./video.css"
import { twJoin } from "tailwind-merge"

type VideoDefaultProps = DetailedHTMLProps<VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement>
type VideoState = {
    loadedMetadata: boolean
    duration: number | undefined
    currentTime: number | undefined
}

export type VideoProps = Omit<VideoDefaultProps, "autoPlay"> & {
    children?: ReactNode
    className?: string
    autoPlay: boolean | undefined | "visible"
    threshold?: IntersectionOptions["threshold"]
}

export const Video = ({ autoPlay, children, className, threshold = 0, ...props }: VideoProps) => {
    const customAutoPlay = autoPlay === "visible"
    const [videoState, setVideoState] = useState<VideoState>({
        currentTime: undefined,
        duration: undefined,
        loadedMetadata: false
    })
    const hasVideoState =
        typeof videoState.currentTime === "number" &&
        typeof videoState.duration === "number" &&
        typeof videoState.loadedMetadata === "boolean"
    const updateVideoState = (update: Partial<VideoState>) => {
        setVideoState({ ...videoState, ...update })
    }
    const [isPlaying, setIsPlaying] = useState<boolean>(false)
    const [showControls, setShowControls] = useState<boolean>(false)

    const { reactRef, observerRefs, inView } = useIntersectionRefs({ threshold })
    const [videoElement] = useVideo(reactRef)

    const play = () => {
        videoElement?.play()
        setIsPlaying(true)
    }
    const pause = () => {
        videoElement?.pause()
        setIsPlaying(false)
    }
    const togglePlay = () => {
        toggleVideoPlay(videoElement!)
        setIsPlaying(!videoElement!.paused)
    }

    useEffect(() => {
        if (videoElement) {
            setTimeout(async () => {
                if (autoPlay === "visible") {
                    inView ? play() : pause()
                }
            }, 0)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [videoElement, inView])

    return (
        <div className="relative">
            <video
                onPlaying={() => {
                    setIsPlaying(true)
                }}
                onLoadedMetadata={(e) => {
                    updateVideoState({
                        loadedMetadata: true,
                        duration: videoElement?.duration,
                        currentTime: videoElement?.currentTime
                    })
                }}
                onTimeUpdate={(e) => {
                    updateVideoState({ currentTime: videoElement!.currentTime })
                }}
                ref={observerRefs}
                {...props}
                // make sure to set autoPlay last to override
                // spreaded props
                autoPlay={customAutoPlay ? undefined : autoPlay}
            ></video>
            <div
                onMouseEnter={() => {
                    setShowControls(true)
                }}
                onMouseLeave={() => {
                    setShowControls(false)
                }}
                className={twJoin(
                    "controls",
                    className,
                    showControls ? "controlsVisible" : null
                )}
                onClick={() => togglePlay()}
            >
                <div
                    onClick={(e) => {
                        e.stopPropagation()
                        togglePlay()
                        console.log("play button click")
                    }}
                >
                    {isPlaying ? "⏸" : "⏵"}
                </div>

                <input
                    type="range"
                    value={hasVideoState ? (videoState.currentTime! / videoState.duration!) * 100 : undefined}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        e.stopPropagation()

                        if (hasVideoState && videoElement) {
                            videoElement.currentTime = (videoState.duration! / 100) * parseInt(e.target.value)
                        }
                    }}
                    onClick={(e) => e.stopPropagation()}
                    min="1"
                    max="100"
                    step="1"
                />
            </div>
        </div>
    )
}

const toggleVideoPlay = (e: HTMLVideoElement) => (e.paused ? e.play() : e.pause())

/**
 * Returns videoElement via ref
 */
const useVideo = (ref: MutableRefObject<HTMLVideoElement | null | undefined>) => {
    const [videoElement, setVideoElement] = useState<undefined | HTMLVideoElement>(undefined)

    useEffect(() => {
        if (ref && ref.current instanceof HTMLVideoElement && videoElement === undefined) {
            setVideoElement(ref.current)
        }
    }, [ref, videoElement])

    return [videoElement]
}

/**
 * Returns needed refs for react-intersection-observer
 * and 'normal' react ref
 *
 * see @url https://github.com/thebuilder/react-intersection-observer?tab=readme-ov-file#how-can-i-assign-multiple-refs-to-a-component
 *
 * @returns {reactRef, observerRef}
 */
const useIntersectionRefs = (options: IntersectionOptions) => {
    const reactRef = useRef<HTMLVideoElement | null>()
    const { ref: inViewRef, inView } = useInView(options)

    // Use `useCallback` so we don't recreate the function on each render
    const observerRefs = useCallback(
        (node: HTMLVideoElement | null | undefined) => {
            // Ref's from useRef needs to have the node assigned to `current`
            reactRef.current = node
            // Callback refs, like the one from `useInView`, is a function that takes the node as an argument
            inViewRef(node)
        },
        [inViewRef]
    )

    return { inView, reactRef, observerRefs }
}

export default Video
