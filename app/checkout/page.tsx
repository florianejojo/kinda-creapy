"use client"

import { Checkout } from "@/app/_src/cart/ui/Checkout"
import { useSearchParams } from "next/navigation"

export default function CheckoutPage() {
  const searchParams = useSearchParams()
  const productId = searchParams.get("productId")
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <Checkout productId={productId} />
    </div>
  )
}
