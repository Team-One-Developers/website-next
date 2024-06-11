const formatSeconds = (timeInSeconds: number | undefined | null) => {
    if (timeInSeconds === null || timeInSeconds === undefined) return

    const hours = (timeInSeconds / 60 / 60) | 0
    const minutes = String((timeInSeconds / 60 / 60) | 0).padStart(2, "0")
    const seconds = String(Math.floor(timeInSeconds % 60)).padStart(2, "0")

    if (hours > 0) return `${hours}:${minutes}:${seconds}`

    return `${minutes}:${seconds}`
}
export const Duration = ({ element }: { element?: HTMLVideoElement }) => {
    if (!element) return

    const hasTime = typeof element?.currentTime === "number"
    const hasDuration = typeof element?.duration === "number"

    return hasTime && hasDuration ? (
        <span className="my-2 flex items-center p-1 font-abcdiatype text-sm font-medium text-primary">
            {formatSeconds(element.currentTime)} / {formatSeconds(element.duration)}
        </span>
    ) : null
}
