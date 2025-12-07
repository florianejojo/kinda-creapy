import "server-only"
import { ENV } from "@/env.server"
import sharp from "sharp"
import convert from "heic-convert"

const MAX_FILE_SIZE_BYTES = Number(ENV.MAX_FILE_SIZE_MB) * 1024 * 1024

const replaceExtension = (filename: string, newExt: string) => {
  return filename.replace(/\.[^/.]+$/, `.${newExt}`)
}

export async function normalizeImageFile(file: File): Promise<File> {
  const isHeic =
    file.type === "image/heic" ||
    file.type === "image/heif" ||
    /\.heic$/i.test(file.name) ||
    /\.heif$/i.test(file.name)

  if (!isHeic) return normalizeNonHeicImageFile(file)

  const input = Buffer.from(await file.arrayBuffer())
  const out = await convert({
    buffer: input as any,
    format: "JPEG",
    quality: 0.8,
  })

  const blob = new Blob([out], { type: "image/jpeg" })
  const safeName = file.name.replace(/\.(heic|heif)$/i, "") + ".jpeg"
  return new File([blob], safeName, { type: "image/jpeg" })
}

export async function normalizeNonHeicImageFile(file: File): Promise<File> {
  const sizeMB = file.size / (1024 * 1024)

  if (sizeMB > Number(ENV.MAX_FILE_SIZE_MB)) {
    console.warn(`Fichier trop lourd (${sizeMB} MB). Upload sans compression.`)
    return file
  }

  if (file.size <= MAX_FILE_SIZE_BYTES && file.type === "image/webp") return file

  const arrayBuffer = await file.arrayBuffer()
  const maxDim = 3000

  const resizedBuffer = await sharp(arrayBuffer)
    .rotate()
    .resize({
      width: maxDim,
      height: maxDim,
      fit: "inside",
      withoutEnlargement: true,
    })
    .webp()
    .toBuffer()
  const inputBuffer = Buffer.from(resizedBuffer)

  return new File([inputBuffer], replaceExtension(file.name, "webp"), {
    type: "image/webp",
    lastModified: file.lastModified,
  })
}
