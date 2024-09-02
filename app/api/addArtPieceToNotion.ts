import { Client } from "@notionhq/client";
import { ArtPiece, ArtPieceNotion } from "@/types/global";
import { artworks } from "./artwork";
const NOTION_API_KEY = "secret_mH39YPLRMVzVUJkzszLuGXJklHbG76W1lds9cZYW9Xe";
const NOTION_DATABASE_ID = "48c09948-e983-4339-8d91-c348cf5c0070";

// Initialiser le client Notion
const notion = new Client({ auth: NOTION_API_KEY });

const databaseId = NOTION_DATABASE_ID; // Assurez-vous que l'ID de votre base de données est défini dans vos variables d'environnement

async function addArtPieceToNotion(artPiece: Partial<ArtPieceNotion>) {
    console.log({ artPiece });
    try {
        const response = await notion.pages.create({
            parent: { database_id: databaseId },
            properties: {
                Name: {
                    title: [
                        {
                            text: {
                                content: artPiece.name || "", // Assurez-vous que c'est une chaîne de caractères
                            },
                        },
                    ],
                },

                ShortDescription: {
                    rich_text: [
                        {
                            text: {
                                content: artPiece.shortDescription || "", // Assurez-vous que c'est une chaîne de caractères
                            },
                        },
                    ],
                },
                LongDescription: {
                    rich_text: [
                        {
                            text: {
                                content: artPiece.longDescription || "", // Assurez-vous que c'est une chaîne de caractères
                            },
                        },
                    ],
                },
            },
        });

        console.log("ArtPiece successfully added:", response);
    } catch (error) {
        console.error("Error adding ArtPiece:", error);
    }
}

export async function addAllArtworks() {
    for (const artPiece of artworks) {
        const notionArtPiece = {
            name: artPiece.name,
            shortDescription: artPiece.alt,
            longDescription: artPiece.description,
        };
        await addArtPieceToNotion(notionArtPiece);
    }
}
