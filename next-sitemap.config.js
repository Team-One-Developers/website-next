/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || "https://www.teamonedevelopers.de",
    generateRobotsTxt: true, // (optional)
    exclude: ["/icon.png"]
}
