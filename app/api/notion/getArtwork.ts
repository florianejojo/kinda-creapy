import { Client } from "@notionhq/client";
import { NextResponse } from "next/server";
import path from "path";
import fs from "fs";
import https from "https";
import { generateImageImports } from "@/scripts/generateImagesImports";
import { shuffleArray } from "@/app/components/utils";

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const imagesDir = path.resolve("./public/images/ici");

/** download images into the right place */
async function downloadImage(url, imagePath) {
    console.log({ imagePath });
    try {
        if (fs.existsSync(imagePath)) {
            console.log("File already exists", imagePath);
            return;
        }
        https.get(url, (response) => {
            const file = fs.createWriteStream(imagePath);
            response.pipe(file);

            file.on("finish", () => {
                file.close();
                console.log("Download completed");
            });
        });
    } catch (error) {
        console.log({ error });
    }
}

export async function saveImages(files) {
    console.log("icii heyy 2 ----- ", imagesDir);
    // si dossier existe pas
    if (!fs.existsSync(imagesDir)) {
        fs.mkdirSync(imagesDir, { recursive: true });
    }

    for (const file of files) {
        const imagePath = path.join(imagesDir, file.name);

        await downloadImage(file.file.url, imagePath);
    }
}

export async function getArtwork() {
    try {
        const response = await notion.databases.query({
            database_id: process.env.NOTION_DATABASE_ID || "",
        });
        // @todo faire une fonction de mapping

        // console.log({ extractedData });
        const shuffledArtworks = shuffleArray(response.results);
        return shuffledArtworks;
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

const mapData = (artwork) => {
    return artwork.map((page) => {
        const height = page.properties.height?.number || 0;
        const width = page.properties.width?.number || 0;

        return {
            id: page.id,
            name: page.properties.name?.title?.[0]?.plain_text || "",
            description:
                page.properties.longDescription?.rich_text?.[0]?.plain_text ||
                "",
            images: page.properties.images.files.map((file) => {
                return file.name;
            }),

            technique:
                page.properties.technique?.rich_text?.[0]?.plain_text || "",
            size: `${height} x ${width} cm`,

            isSpinable: !!page.properties.isSpinable?.checkbox,
            alt:
                page.properties.shortDescription?.rich_text?.[0]?.plain_text ||
                "",
        };
    });
};

export const fetchArtworkAndSaveImages = async () => {
    const artwork = await getArtwork();
    const files = artwork.flatMap((artPiece) => {
        return artPiece.properties.images.files;
    });

    saveImages(files);
    generateImageImports();
    const mappedData = mapData(artwork);
    return mappedData;
};
