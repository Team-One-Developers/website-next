import speakingurl from "speakingurl"

export function slugify(sourceValue: string): string {
    const slugifyOpts = { truncate: 200, symbols: true }
    return sourceValue ? speakingurl(sourceValue, slugifyOpts) : ""
}
