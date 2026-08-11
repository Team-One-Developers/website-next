import "server-only"

// Best-effort, in-memory sliding-window rate limiter.
//
// NOTE: on serverless this state is per-instance and resets on cold start, so it
// throttles bursts hitting a warm instance but is NOT a hard, cross-instance
// guarantee. For durable global limits, back this with Upstash/Vercel KV.
const WINDOW_MS = 60_000
const MAX_REQUESTS = 5

const hits = new Map<string, number[]>()

export function rateLimit(key: string, max = MAX_REQUESTS, windowMs = WINDOW_MS): boolean {
    const now = Date.now()
    const recent = (hits.get(key) ?? []).filter((timestamp) => now - timestamp < windowMs)

    if (recent.length >= max) {
        hits.set(key, recent)
        return false
    }

    recent.push(now)
    hits.set(key, recent)
    return true
}
