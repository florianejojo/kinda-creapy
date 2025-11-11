"use client"

import Image from "next/image"
import { useRef, useState } from "react"

type ImageInputProps = {
  onChange: (file: File | null) => void
}

export const InputImage = ({ onChange }: ImageInputProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null
    onChange(file)

    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => setPreviewUrl(reader.result as string)
      reader.readAsDataURL(file)
    } else {
      setPreviewUrl(null)
    }
  }

  return (
    <div className="flex flex-col items-start gap-2">
      {previewUrl && (
        <Image
          src={previewUrl}
          alt="Preview"
          className="w-32 h-32 object-cover rounded shadow"
          width={20}
          height={20}
        />
      )}
      <button
        type="button"
        onClick={() => fileInputRef.current?.click()}
        className="px-3 py-2 bg-stone-800 text-white rounded text-sm hover:bg-stone-700 transition"
      >
        {previewUrl ? "Changer l’image" : "Choisir une image"}
      </button>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
      />
    </div>
  )
}
