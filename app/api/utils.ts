import convert from "heic-convert"

export async function normalizeImageFile(file: File): Promise<File> {
  const isHeic =
    file.type === "image/heic" ||
    file.type === "image/heif" ||
    /\.heic$/i.test(file.name) ||
    /\.heif$/i.test(file.name)

  if (!isHeic) return file

  const input = Buffer.from(await file.arrayBuffer())
  const out = await convert({
    buffer: input as any,
    format: "JPEG",
    quality: 0.8,
  })

  const blob = new Blob([out], { type: "image/jpeg" })
  const safeName = file.name.replace(/\.(heic|heif)$/i, "") + ".jpg"
  return new File([blob], safeName, { type: "image/jpeg" })
}
