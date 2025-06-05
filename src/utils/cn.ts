import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 *
 * Combines any number of className strings/objects into a single predictable className string.
 * It uses clsx for its superior string merging (allows objects) and tailwind-merge for predictable class merging/overwriting
 *
 * @param args - any number of className strings/objects
 * @returns a single predictable className string
 *
 */

function cn(...args: ClassValue[]) {
    return twMerge(clsx(args))
}

export default cn
