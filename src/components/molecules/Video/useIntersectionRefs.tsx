"use client"
import { useRef, useCallback } from "react"
import { IntersectionOptions, useInView } from "react-intersection-observer"

/**
 * Returns needed refs for react-intersection-observer
 * and 'normal' react ref
 *
 * see @url https://github.com/thebuilder/react-intersection-observer?tab=readme-ov-file#how-can-i-assign-multiple-refs-to-a-component
 *
 * @returns {reactRef, observerRef}
 */
export const useIntersectionRefs = (options: IntersectionOptions) => {
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
