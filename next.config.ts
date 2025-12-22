import { withBotId } from "botid/next/config"
import type { NextConfig } from "next"

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "cdn.sanity.io"
            }
        ],
        minimumCacheTTL: 2678400 // 31 days
    }
}

export default withBotId(nextConfig)
