"use client"

import imageMap from "@/imageImports"
import Image from "next/image"

type FrameProps = {
  url?: string
  alt: string
  isLazyLoaded: boolean
  image?: {
    url: string
    alt: string
  }
}

export const Frame = ({ url, alt, isLazyLoaded, image }: FrameProps) => {
  const img = imageMap[url as keyof typeof imageMap]

  if (image) {
    return (
      <Image
        src={image.url}
        fill
        alt={image.alt}
        loading={isLazyLoaded ? "lazy" : "eager"}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover"
      />
    )
  }
  return (
    img && (
      <Image
        src={img.src}
        width={img.width}
        height={img.height}
        blurDataURL={img.blurDataURL}
        alt={alt}
        placeholder="blur"
        loading={isLazyLoaded ? "lazy" : "eager"}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover"
      />
    )
  )
}
