import { twJoin } from "tailwind-merge"

import "../styles/global.css"

import { Space_Grotesk } from "next/font/google"
import localFont from "next/font/local"

// do it this way to prevent Error: Cant access lexical declaration before initialitazion
import { siteConfig } from "@/config/siteConfig"
import { Metadata } from "next"
import { Analytics } from "@vercel/analytics/react"

const ABCD = localFont({
	src: [
		{
			path: "../fonts/abc-diatype-regular.woff2",
			weight: "400",
			style: "normal",
		},
		{
			path: "../fonts/abc-diatype-regular-italic.woff2",
			weight: "400",
			style: "italic",
		},
	],
	variable: "--font-ABCD",
	display: "swap",
})

const SpaceFrotesk = Space_Grotesk({
	subsets: ["latin"],
	variable: "--font-SpaceGrotesk",
	display: "swap",
})

export const metadata: Metadata = {
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},
	description: siteConfig.description,
	keywords: ["Consulting", "Tech Consulting", "Software Projekte", "Next.js", "React", "Tailwind CSS"],
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "white" },
		{ media: "(prefers-color-scheme: dark)", color: "black" },
	],
	openGraph: {
		type: "website",
		locale: "de",
		url: siteConfig.url,
		title: siteConfig.name,
		description: siteConfig.description,
		siteName: siteConfig.name,
		images: [
			{
				url: siteConfig.ogImage,
				width: 1200,
				height: 630,
				alt: siteConfig.name,
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: siteConfig.name,
		description: siteConfig.description,
		images: [siteConfig.ogImage],
	},
	icons: {
		icon: "/favicon.ico",
		shortcut: "/favicon-16x16.png",
		apple: "/apple-touch-icon.png",
	},
	manifest: `${siteConfig.url}/site.webmanifest`,
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className={twJoin(ABCD.variable, SpaceFrotesk.variable, "bg-black")}>
				{children}
				<Analytics />
			</body>
		</html>
	)
}
