import type { NextConfig } from "next"

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "cdn.sanity.io"
            },
            {
                protocol: "https",
                hostname: "cdn.tailgrids.com"
            }
        ]
    }
}

export default nextConfig
