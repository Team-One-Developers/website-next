const { withContentlayer } = require("next-contentlayer")

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		dangerouslyAllowSVG: true,
	},
}

module.exports = withContentlayer(nextConfig)
