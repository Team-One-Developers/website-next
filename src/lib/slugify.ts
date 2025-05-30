import speakingurl from "speakingurl"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function slugify(sourceValue: any): string {
    const slugifyOpts = { truncate: 200, symbols: true }
    return sourceValue ? speakingurl(sourceValue, slugifyOpts) : ""
}
