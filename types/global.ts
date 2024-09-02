import { QueryDatabaseResponse } from "@notionhq/client/build/src/api-endpoints";

export type Artwork = ArtPiece[];

export type ArtPiece = {
    id: string;
    name: string;
    description: string;
    images: string[];
    technique: string;
    size: string;
    isSpinable: boolean;
    alt: string;
};

export type ArtPieceNotion = {
    id: string;
    name: string;
    longDescription: string;
    images: string[];
    technique: string;
    isSpinable: boolean;
    shortDescription: string;
    height: number;
    width: number;
};

export type ArtworkResponse = QueryDatabaseResponse["results"] | [];
