import { withContentlayer } from "next-contentlayer"

/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        ppr: true,
    },
    images: {
        dangerouslyAllowSVG: true
    }
}

export default withContentlayer(nextConfig)
