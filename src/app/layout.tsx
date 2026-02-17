import StructuredData from "@/components/layout/StructuredData"
import { organization } from "@/data/schemaOrg"
import { siteConfig } from "@/data/siteConfig"
import { GoogleTagManager } from "@next/third-parties/google"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"

const GTEraText = localFont({
    src: [
        {
            path: "../fonts/gt-era-text-regular.woff2",
            weight: "400",
            style: "normal"
        }
    ],
    variable: "--font-gteratext",
    display: "swap"
})

const GTEraDisplay = localFont({
    src: [
        {
            path: "../fonts/gt-era-display-regular.woff2",
            weight: "400",
            style: "normal"
        }
    ],
    variable: "--font-gteradisplay",
    display: "swap"
})

export const metadata: Metadata = {
    title: {
        default: siteConfig.name,
        template: "%s | team one - Tech-driven business transformation"
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
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000")
}

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="de">
            <GoogleTagManager gtmId="GTM-M6HQZGMQ" />

            <body className={`${GTEraText.variable} ${GTEraDisplay.variable} font-gteratext relative antialiased`}>
                {children}
                <StructuredData data={organization as object} />
                <Analytics />
                <SpeedInsights />
            </body>
        </html>
    )
}
