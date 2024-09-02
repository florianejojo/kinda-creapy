import { Client } from "@notionhq/client";
import path from "path";
import fs from "fs";
import https from "https";
import {
    FilesPropertyItemObjectResponse,
    QueryDatabaseResponse,
} from "@notionhq/client/build/src/api-endpoints";
import { generateImageImports } from "@/utils/generateImagesImports.utils";
import { shuffleArray } from "@/utils/generic.utils";
import { ArtPiece, ArtworkResponse } from "@/types/global";

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const imagesDir = path.resolve("./public/images/ici");

/** download images into the right place */
async function downloadImage(url: string, imagePath: string) {
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

export async function saveImagesIntoProject(files: any) {
    if (!fs.existsSync(imagesDir)) {
        fs.mkdirSync(imagesDir, { recursive: true });
    }

    for (const file of files) {
        const imagePath = path.join(imagesDir, file.name);

        await downloadImage(file.file.url, imagePath);
    }
}

export async function getArtwork(): Promise<ArtworkResponse> {
    try {
        const response = await notion.databases.query({
            database_id: process.env.NOTION_DATABASE_ID || "",
        });

        return shuffleArray(response.results);
    } catch (error) {
        console.log({ error });
        return [];
    }
}

/** Map data for component */
const mapData = (artwork: ArtworkResponse): ArtPiece[] => {
    return artwork.map((artPiece) => {
        const {
            height,
            width,
            name,
            images,
            isSpinable,
            shortDescription,
            technique,
            longDescription,
            //@ts-ignore
        } = artPiece.properties;

        return {
            id: artPiece.id,
            name: name?.title?.[0]?.plain_text || "",
            description: longDescription.rich_text?.[0]?.plain_text || "",
            images: images.files.map((file: any) => {
                return file.name;
            }),

            technique: technique.rich_text?.[0]?.plain_text || "",
            size: `${height.number || 0} x ${width.number || 0} cm`,

            isSpinable: !!isSpinable?.checkbox,
            alt: shortDescription?.rich_text?.[0]?.plain_text || "",
        };
    });
};

/** fetch + download + generate imports + map data  */
export const fetchArtworkAndSaveImages = async () => {
    const artwork: QueryDatabaseResponse["results"] | [] = await getArtwork();
    const files: FilesPropertyItemObjectResponse[] = artwork.flatMap(
        (artPiece) => {
            if ("properties" in artPiece) {
                // @todo type more precisely when notion is set
                const properties = artPiece.properties as Record<string, any>;
                if (properties.images && properties.images.files) {
                    return properties.images.files;
                }
            }
            return [];
        }
    );

    await saveImagesIntoProject(files);
    generateImageImports();
    return mapData(artwork);
};
