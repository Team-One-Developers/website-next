"use client"

/**
 * TODO: add volume change input range
 * TODO: test for autoplay "visible"
 * TODO: test for default autoplay
 * TODO: test to ensure that range change does not trigger togglePlay
 * TODO: test formatSeconds (with hours, minutes, only seconds)
 * TODO: check if useSyncExternalStore is an alternative to manually recreating the video API like .muted or .paused
 * TODO: schema.org?
 */

import { useEffect, useState, useRef, DetailedHTMLProps, VideoHTMLAttributes, ReactNode } from "react"

import { IntersectionOptions } from "react-intersection-observer"

import { useIntersectionRefs } from "./Video/useIntersectionRefs"
import { Wrapper } from "./Video/Wrapper"

import { useVideo } from "./Video/useVideo"
import { Controls } from "./Video/Controls"
import { twJoin } from "tailwind-merge"

export type VideoDefaultProps = DetailedHTMLProps<VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement>
export type VideoState = {
    loadedMetadata: boolean
    duration: number | undefined
    currentTime: number | undefined
    muted: boolean
}

export type VideoProps = Omit<VideoDefaultProps, "autoPlay" | "controls"> & {
    children?: ReactNode
    className?: string
    autoPlay?: boolean | "visible"
    /* true: standard HTML5, false: no controls, "custom": themed */
    controls?: boolean | "custom"
    variant?: "mask"
    threshold?: IntersectionOptions["threshold"]
}

export const Video = ({
    autoPlay,
    children,
    className,
    controls = false,
    variant,
    threshold = 0,
    ...props
}: VideoProps) => {
    const [videoState, setVideoState] = useState<VideoState>({
        currentTime: undefined,
        duration: undefined,
        loadedMetadata: false,
        muted: props.muted || false
    })
    const updateVideoState = (update: Partial<VideoState>) => {
        setVideoState({ ...videoState, ...update })
    }

    const [isPlaying, setIsPlaying] = useState<boolean>(false)
    const [controlsVisible, setControlsVisible] = useState<boolean>(false)
    const hasCustomControls = controls === "custom"

    const { reactRef, observerRefs, inView } = useIntersectionRefs({ threshold })
    const [videoElement] = useVideo(reactRef)

    const controlsRef = useRef<HTMLDivElement>(null)

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
    const toggleMuted = () => {
        if (videoElement) {
            const newState = !videoState.muted
            videoElement.muted = newState
            updateVideoState({ muted: newState })
        }
    }

    useEffect(() => {
        if (videoElement) {
            // setIsPlaying(videoElement.paused)
            setTimeout(async () => {
                if (autoPlay === "visible") {
                    inView ? play() : pause()
                }
            }, 0)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [videoElement, inView])

    const customAutoPlay = autoPlay === "visible"

    return (
        <div className={twJoin(className, "relative w-fit")}>
            <Wrapper variant={variant}>
                <video
                    // className={variant === "mask" ? "h-full" : undefined}
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
                    // make sure to set autoPlay& controls last
                    // to override spreaded props
                    autoPlay={customAutoPlay ? undefined : autoPlay}
                    controls={!controls || controls === "custom" ? undefined : true}
                />
            </Wrapper>

            {hasCustomControls ? (
                <Controls
                    controlsRef={controlsRef}
                    videoState={videoState}
                    isPlaying={isPlaying}
                    controlsVisible={controlsVisible}
                    videoElement={videoElement}
                    callbacks={{ togglePlay, toggleMuted }}
                    onMouseEnter={() => {
                        setControlsVisible(true)
                    }}
                    onMouseLeave={() => {
                        setControlsVisible(false)
                    }}
                    onTouchStart={(e) => {
                        const isThisElement = (e.target as HTMLElement).isEqualNode(controlsRef.current)
                        if (isThisElement) {
                            setControlsVisible(!controlsVisible)
                        }
                    }}
                    onPointerDown={(e) => {
                        const isThisElement = (e.target as HTMLElement).isEqualNode(controlsRef.current)

                        // e.button === 0 --> left/default click
                        if (e.pointerType !== "touch" && isThisElement && e.button === 0) {
                            togglePlay()
                        }
                    }}
                />
            ) : null}
        </div>
    )
}

export const toggleVideoPlay = (e: HTMLVideoElement) => (e.paused ? e.play() : e.pause())

export default Video
