import { ArtPiece } from "@/app/_src/product/ui/ArtPiece"
import { Frame } from "@/app/_src/product/ui/Frame"
import { Button } from "@/app/_src/shared/ui/Button"
import Image from "next/image"
import Link from "next/link"

type FeaturedProductCardProps = {
  title: string
  id: string
  size?: string
  technique?: string
  url?: string
  alt?: string
  isLazyLoaded?: boolean
}

export const FeaturedProductCard = ({
  title,
  id,
  size = "",
  technique = "",
  url = "",
  alt = "",
  isLazyLoaded = false,
}: FeaturedProductCardProps) => (
  <div
    className="mx-auto rounded shadow-md overflow-hidden transform transition duration-300 hover:scale-[1.02] hover:shadow-lg flex items-center "
    style={{ animation: "fadeInUp 0.5s ease-in-out forwards" }}
  >
    <Link href={`/gallery/${id}`} className={"grid grid-rows-[1fr_auto]"}>
      <div className="h-80 w-60 overflow-hidden relative">
        {url ? (
          <Image
            src={url}
            fill
            alt={alt}
            loading={isLazyLoaded ? "lazy" : "eager"}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
          />
        ) : (
          <div
            className="
              w-full h-full flex items-center justify-center bg-gray-200
              text-gray-500 text-sm font-semibold
              placeholder:opacity-50
          "
          />
        )}
      </div>

      <h2 className="text-xs font-extralight text-right w-full pt-2 text-gray-300">
        {title}
      </h2>
      <p className="text-xs font-extralight text-right w-full pt-2 text-gray-300">
        {size}
      </p>
      <p className="text-xs font-extralight text-right w-full pt-2 text-gray-300">
        {technique}
      </p>
      <div className="text-right">
        <Button size="sm" isLink href={`/gallery/${id}`}>
          voir
        </Button>
      </div>
    </Link>
  </div>
)
