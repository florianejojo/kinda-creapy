"use client"

import { artworks } from "@/app/_src/shared/constants/artwork"
import { PUBLIC_ENV } from "@/env.client"
import { supabase } from "@/lib/supabaseClient"
import { useState } from "react"

export function UploadImagesButton() {
  const [status, setStatus] = useState<"idle" | "uploading" | "done">("idle")
  const [message, setMessage] = useState<string | null>(null)

  // This is a big security mistake
  // const handleConnect = async () => {
  //   await supabase.auth.signInWithPassword({
  //     email: process.env.NEXT_PUBLIC_SUPABASE_ADMIN_EMAIL || "",
  //     password: process.env.NEXT_PUBLIC_SUPABASE_ADMIN_KEY || "",
  //   })
  //   const session = await supabase.auth.getSession()

  //   console.log("auth.uid =", session?.data?.session?.user?.id)
  // }

  const handleUpload = async () => {
    setStatus("uploading")
    setMessage(null)
    artworks.forEach(async (artwork) => {
      await supabase.from("images").insert({
        url: `${PUBLIC_ENV.NEXT_PUBLIC_SUPABASE_URL_BUCKET}${artwork.image}`,
        alt: artwork.alt,
        product_id: artwork.id,
        name: artwork.name + " full",
      })
    })

    setStatus("done")
    setMessage("✅ Upload terminé")
  }

  return (
    <div className="my-6 flex flex-col items-start gap-2">
      <button
        className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition"
        onClick={() => {}}
        disabled={status === "uploading"}
      >
        Se connecter
      </button>
      <button
        className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition"
        onClick={handleUpload}
        disabled={status === "uploading"}
      >
        {status === "uploading" ? "Uploading..." : "Upload les images"}
      </button>
      {message && <p className="text-sm text-green-700">{message}</p>}
    </div>
  )
}
