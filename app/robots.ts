import { PUBLIC_ENV } from "@/env.client"
import { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/privacy", "/admin"],
      },
    ],
    // sitemap: `${PUBLIC_ENV.NEXT_PUBLIC_SITE_URL}/sitemap.xml`,
  }
}
