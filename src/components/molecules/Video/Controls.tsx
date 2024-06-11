"use client"

import { useRef } from "react"
import { twJoin } from "tailwind-merge"

import { Icon } from "@/components/molecules/Icon"

import { Duration } from "./Duration"
import { MediaButton } from "./MediaButton"

import styles from "./index.module.css"

export const Controls = ({ callbacks, videoElement, videoState, isPlaying, showControls, controlsRef, ...props }) => {
    const hasVideoState =
        typeof videoState?.currentTime === "number" &&
        typeof videoState?.duration === "number" &&
        typeof videoState?.loadedMetadata === "boolean"

    return (
        <div
            ref={controlsRef}
            {...props}
            className={twJoin(
                styles.controls,
                `absolute inset-0 flex w-full flex-wrap items-end justify-center`,
                showControls ? styles.controlsVisible : null
            )}
        >
            <div className="flex grow flex-wrap">
                <div className="flex grow justify-between px-3">
                    <div className="flex flex-nowrap content-center">
                        <MediaButton
                            onClick={(e) => {
                                callbacks.togglePlay()
                            }}
                        >
                            {isPlaying ? <Icon name="media_pause" /> : <Icon name="media_play" />}
                        </MediaButton>

                        <Duration element={videoElement} />
                    </div>
                    <div className="flex flex-nowrap content-center">
                        <MediaButton
                            onClick={(e) => {
                                callbacks.toggleMuted()
                            }}
                        >
                            {videoElement?.muted ? (
                                <Icon name="media_volume_mute" />
                            ) : (
                                <Icon name="media_volume_unmute" />
                            )}
                        </MediaButton>
                        <MediaButton
                            onClick={(e) => {
                                if (typeof videoElement.webkitEnterFullScreen === "function") {
                                    videoElement.webkitEnterFullScreen()
                                } else {
                                    videoElement?.requestFullscreen()
                                }
                            }}
                        >
                            <Icon name="media_fullscreen" />
                        </MediaButton>
                    </div>
                </div>

                <input
                    type="range"
                    className={twJoin(styles.inputRange, "w-full pt-3")}
                    // @TODO: round to some decimals
                    value={hasVideoState ? (videoState.currentTime! / videoState.duration!) * 100 : 0}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
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

export default Controls
