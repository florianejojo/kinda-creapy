import { supabase } from "@/lib/supabaseClient"
import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData()

    const title = formData.get("title") as string
    const file = formData.get("file") as File

    if (!file || !title) {
      return NextResponse.json(
        { error: "title ou file manquant" },
        { status: 400 }
      )
    }

    const { data, error } = await supabase.storage
      .from("images")
      .upload(title, file, {
        cacheControl: "3600",
        // replace file with same name
        upsert: true,
        contentType: file.type,
      })

    if (error) {
      return NextResponse.json(
        { error: error.error, message: error.message },
        { status: error.statusCode }
      )
    }

    return NextResponse.json({ data })
  } catch (error) {
    return NextResponse.json({ error })
  }
}
