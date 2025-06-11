import StructuredData from "@/components/layout/StructuredData"
import { organization } from "@/data/schemaOrg"
import { siteConfig } from "@/data/siteConfig"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"
import "./prism.css"

const ABCD = localFont({
    src: [
        {
            path: "../fonts/abc-diatype-regular.woff2",
            weight: "400",
            style: "normal"
        },
        {
            path: "../fonts/abc-diatype-regular-italic.woff2",
            weight: "400",
            style: "italic"
        }
    ],
    variable: "--abcdiatype",
    display: "swap"
})

const SpaceGrotesk = localFont({
    src: [
        {
            path: "../fonts/space-grotesk-regular.ttf",
            weight: "400",
            style: "normal"
        },
        {
            path: "../fonts/space-grotesk-light.ttf",
            weight: "200",
            style: "normal"
        },
        {
            path: "../fonts/space-grotesk-medium.ttf",
            weight: "600",
            style: "normal"
        }
    ],
    variable: "--spacegrotesk",
    display: "swap"
})

export const metadata: Metadata = {
    title: {
        default: siteConfig.name,
        template: `%s`
    },
    description: siteConfig.description,
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
                alt: siteConfig.name
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: siteConfig.name,
        description: siteConfig.description,
        images: [siteConfig.ogImage]
    },
    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon-16x16.png",
        apple: "/apple-touch-icon.png"
    },
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
    manifest: `${siteConfig.url}/site.webmanifest`
}

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={`${ABCD.variable} ${SpaceGrotesk.variable} font-abcd relative antialiased`}>
                {children}
                <StructuredData data={organization as object} />
                <Analytics />
                <SpeedInsights />
            </body>
        </html>
    )
}
