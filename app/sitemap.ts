import { MetadataRoute } from "next"
import { formatNameToId } from "./utils/utils"
import { artworks } from "@/app/_src/shared/constants/artwork"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const artWorkEntries: MetadataRoute.Sitemap = artworks.map((artwork) => {
    return {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/gallery/${formatNameToId(artwork.name)}`,

      lastModified: new Date(), // lastModified: new Date(artwork.updatedAt),
      // changeFrequency
      //priority
    }
  })

  return [
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/artwork/home/all`,
      lastModified: new Date(),
    },
    ...artWorkEntries,
  ]
}
