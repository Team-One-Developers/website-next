/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || "https://www.teamonedevelopers.de",
    generateRobotsTxt: false,
    exclude: ["/icon.png"],
    transform: async (config, path) => {
        if (excludePath(path)) {
            return null
        }

        return {
            loc: path,
            changefreq: config.changefreq,
            priority: config.priority,
            lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
            alternateRefs: config.alternateRefs ?? []
        }
    }
}

// Exclude paths from sitemap
function excludePath(path) {
    if (process.env.NEXT_PUBLIC_RENDER_BLOG !== "TRUE") {
        return path.includes("/blog")
    }

    return false
}
