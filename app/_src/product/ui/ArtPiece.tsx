"use client"

import Link from "next/link"
import { Frame } from "@/app/_src/product/ui/Frame"

type ArtPieceProps = {
  artPiece: any
  position: number
}
export const ArtPiece = ({ artPiece, position }: ArtPieceProps) => {
  return (
    <Link href={`/gallery/${artPiece.id}`} className={"grid grid-rows-[1fr_auto]"}>
      <div className="max-h-96 overflow-hidden">
        <Frame url={artPiece.image} alt={artPiece.alt} isLazyLoaded={position > 5} />
      </div>

      <h2 className="text-xs font-extralight text-right w-full pt-2 text-gray-300">
        {artPiece.name}
      </h2>
      <p className="text-xs font-extralight text-right w-full pt-2 text-gray-300">
        {artPiece.size}
      </p>
      <p className="text-xs font-extralight text-right w-full pt-2 text-gray-300">
        {artPiece.technique}
      </p>
    </Link>
  )
}
