import cn from "@/utils/cn"
import { forwardRef } from "react"

export type BlobShape = "organic" | "zigzag" | "star"

export const blobShapes: Record<BlobShape, string> = {
    organic:
        "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
    zigzag: "polygon(0% 60%, 10% 40%, 20% 60%, 30% 40%, 40% 60%, 50% 40%, 60% 60%, 70% 40%, 80% 60%, 90% 40%, 100% 60%, 100% 100%, 0% 100%)",
    star: "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)"
}

interface BlobProps {
    position: "top" | "bottom"
    clipPath: string
    className?: string
}

export const HeroBlob = forwardRef<HTMLDivElement, BlobProps>(({ position, clipPath, className }, ref) => {
    const baseClass =
        position === "top"
            ? "fixed inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            : "fixed inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-50rem)]"

    const innerClass = "relative aspect-1155/678 w-144.5 bg-linear-to-tr sm:w-288.75"

    const initialTransform = position === "top" ? "translateX(-50%) rotate(30deg)" : "translateX(-50%)"

    const leftPosition =
        position === "top"
            ? "left-[calc(50%-11rem)] sm:left-[calc(50%-30rem)]"
            : "left-[calc(50%+3rem)] sm:left-[calc(50%+36rem)]"

    return (
        <div aria-hidden="true" className={baseClass}>
            <div
                ref={ref}
                style={{ clipPath, transform: initialTransform, willChange: "transform" }}
                className={cn(innerClass, leftPosition, className)}
            />
        </div>
    )
})

HeroBlob.displayName = "HeroBlob"
