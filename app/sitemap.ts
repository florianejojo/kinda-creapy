import { artworks } from "@/app/_src/shared/constants/artwork"
import { PUBLIC_ENV } from "@/env.client"
import { MetadataRoute } from "next"
import { formatNameToId } from "./utils/utils"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const artWorkEntries: MetadataRoute.Sitemap = artworks.map((artwork) => {
    return {
      url: `${PUBLIC_ENV.NEXT_PUBLIC_SITE_URL}/gallery/${formatNameToId(artwork.name)}`,

      lastModified: new Date(), // lastModified: new Date(artwork.updatedAt),
      // changeFrequency
      //priority
    }
  })

  return [
    {
      url: `${PUBLIC_ENV.NEXT_PUBLIC_SITE_URL}/artwork/home`,
      lastModified: new Date(),
    },
    ...artWorkEntries,
  ]
}
