import { withBotId } from "botid/next/config"
import type { NextConfig } from "next"

const nextConfig: NextConfig = {
    experimental: {
        viewTransition: true
    },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "cdn.sanity.io"
            }
        ],
        minimumCacheTTL: 2678400 // 31 days
    },
    redirects: async () => [
        {
            source: "/trainings",
            destination: "https://training.team-one.de",
            permanent: false
        }
    ]
}

export default withBotId(nextConfig)
