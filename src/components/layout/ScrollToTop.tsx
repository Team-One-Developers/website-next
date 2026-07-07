"use client"

import { usePathname } from "next/navigation"
import { useEffect, useRef } from "react"

/**
 * Resets the scroll position to the top on forward navigation.
 *
 * With `experimental.viewTransition` enabled, React wraps navigations in
 * `document.startViewTransition`, which prevents Next.js from resetting the
 * scroll position to the top on new navigations. This restores that behavior
 * while still letting the browser restore the scroll position on back/forward
 * (popstate) navigations.
 */
export default function ScrollToTop() {
    const pathname = usePathname()
    const isPopNavigation = useRef(false)

    useEffect(() => {
        const handlePopState = () => {
            isPopNavigation.current = true
        }
        window.addEventListener("popstate", handlePopState)
        return () => window.removeEventListener("popstate", handlePopState)
    }, [])

    useEffect(() => {
        if (isPopNavigation.current) {
            isPopNavigation.current = false
            return
        }
        window.scrollTo(0, 0)
    }, [pathname])

    return null
}
