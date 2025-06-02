import { ProductList } from "@/app/_src/product/ui/ProductList"

export default function GalleryPage({}: { params: { categoryId: string } }) {
  return (
    <div className=" min-h-40 flex items-center flex-col justify-between">
      <ProductList></ProductList>
    </div>
  )
}
