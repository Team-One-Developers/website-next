import { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
            disallow: ["/_nextjs/", "/api/", "/studio"]
        },
        sitemap: "https://www.team-one.de/sitemap.xml"
    }
}
