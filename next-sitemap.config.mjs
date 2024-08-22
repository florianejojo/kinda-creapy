/** @type {import('next-sitemap').IConfig} */

import { artworks } from "./build/data/artwork.js";

import { formatNameToId } from "./build/components/utils.js";
const sitemapConfig = {
    siteUrl: "https://kindacreapy.art",
    generateRobotsTxt: true,
    sitemapSize: 5000,
    generateIndexSitemap: false,
    //   exclude: ['/admin/*'],

    async additionalPaths(config) {
        const paths = [];

        paths.push({
            loc: `/home`,
            changefreq: "weekly",
            priority: 0.7,
            lastmod: new Date().toISOString(),
        });

        const artPiecesNamesIds = artworks.map((artwork) => {
            return formatNameToId(artwork.name);
        });

        artPiecesNamesIds.forEach((name) => {
            paths.push({
                loc: `/gallery/${name}`,
                changefreq: "monthly",
                priority: 0.7,
                lastmod: new Date().toISOString(),
            });
        });

        return paths;
    },
};
export default sitemapConfig;
