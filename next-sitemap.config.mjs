// next-sitemap.config.js

import { artworks } from "./build/data/artwork.js";

import { formatNameToId } from "./build/components/utils.js";

const sitemapConfig = {
    siteUrl: "https://kindacreapy.art",
    generateRobotsTxt: true,
    //   exclude: ['/admin/*'],
    async additionalPaths() {
        const paths = [];
        const artPiecesNamesIds = artworks.map((artwork) => {
            return formatNameToId(artwork.name);
        });

        artPiecesNamesIds.forEach((name) => {
            paths.push({
                loc: `/gallery/${name}`,
                changefreq: "monthly",
                priority: 0.7,
                lastmod: new Date().toISOString().split("T")[0],
            });
        });

        return paths;
    },
};
export default sitemapConfig;
