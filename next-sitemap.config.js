/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || "https://www.teamonedevelopers.de",
    generateRobotsTxt: false,
    exclude: ["/icon.png", "/blog/draft-*", "/career/job/draft-*"],
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
