import CheckoutPage from "@/app/checkout/CheckoutPage"
import { Suspense } from "react"

export default function Page() {
  return (
    <Suspense fallback={<div />}>
      <CheckoutPage />
    </Suspense>
  )
}
