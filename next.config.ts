import { withBotId } from "botid/next/config"
import type { NextConfig } from "next"

const nextConfig: NextConfig = {
    experimental: {
        viewTransition: false,
        scrollRestoration: true,
        serverActions: {
            bodySizeLimit: "8mb"
        }
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
