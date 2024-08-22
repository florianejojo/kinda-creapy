import { NextResponse } from "next/server";
import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env.NOTION_API_KEY });

export async function GetArtwork() {
    const pageId = process.env;

    try {
        const response = await notion.pages.retrieve({ page_id: pageId });
        console.log({ response });
        return NextResponse.json(response);
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
