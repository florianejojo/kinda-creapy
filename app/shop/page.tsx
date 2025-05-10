import { ArtPiece } from "@/app/_shared/ArtPiece"
import { artworks } from "@/app/_shared/constants/artwork"
import { GridFilledLayout } from "@/app/home/GridFilledLayout"
import { ProductList } from "@/app/shop/ProductList"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function ShopPage({}: { params: { categoryId: string } }) {
  const gridItem = " w-80 h-auto flex items-end"

  const elements = artworks.map((artPiece, index) => {
    return (
      <div className={gridItem} key={artPiece.id}>
        <div className="hover:transition-transform transform hover:scale-105 duration-300">
          <ArtPiece artPiece={artPiece} position={index} />
        </div>
      </div>
    )
  })

  return (
    <div className=" min-h-40 flex items-center flex-col justify-between">
      <ProductList></ProductList>
      {/* <GridFilledLayout elements={elements} />{" "} */}
    </div>
  )
}
