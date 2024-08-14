/** @type {import('next-sitemap').IConfig} */
const config = {
    siteUrl: process.env.SITE_URL || "https://kindacreapy.art",
    generateRobotsTxt: true,
};

module.exports = config;
