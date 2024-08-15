// next-sitemap.config.js

import { artworks } from "./build/data/artwork.js";

const sitemapConfig = {
    siteUrl: "https://kindacreapy.art",
    generateRobotsTxt: true,
    //   exclude: ['/admin/*'], // Si vous avez des pages à exclure
    async additionalPaths() {
        const paths = [];
        const artPiecesNames = artworks.map((artwork) =>
            artwork.name.toString()
        );

        artPiecesNames.forEach((name) => {
            paths.push({
                loc: `/gallery/${name.split(" ").join("-")}`,
                changefreq: "monthly",
                priority: 0.7,
                lastmod: new Date().toISOString().split("T")[0],
            });
        });

        return paths;
    },
};
export default sitemapConfig;
