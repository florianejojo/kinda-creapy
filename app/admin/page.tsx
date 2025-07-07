"use client"

import { CreateProduct } from "@/app/_src/product/ui/editProducts/CreateProduct"

export default function Page() {
  return (
    <div className="min-h-screen w-full bg-cream-100">
      <div className="flex justify-center">
        <CreateProduct />
      </div>
    </div>
  )
}
