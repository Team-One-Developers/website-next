/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || "https://www.team-one.de",
    generateRobotsTxt: false,
    exclude: [
        "/icon.png",
        "/apple-icon.png",
        "/robots.txt",
        "/draft-*",
        "/blog/draft-*",
        "/career/job/draft-*",
        "/studio",
        "/sandbox"
    ],
    transform: async (config, path) => {
        return {
            loc: path,
            changefreq: config.changefreq,
            priority: config.priority,
            lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
            alternateRefs: config.alternateRefs ?? []
        }
    }
}
