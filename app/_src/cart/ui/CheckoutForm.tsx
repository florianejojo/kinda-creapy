"use client"

import { productApi } from "@/app/_src/product/product.api"
import { useProductStore } from "@/app/_src/product/productStore"
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout,
} from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import { useSearchParams } from "next/navigation"
import { useEffect, useState, useRef } from "react"

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
)

export const CheckoutForm = () => {
  const [clientSecret, setClientSecret] = useState<string | null>(null)
  const checkoutRef = useRef(null)

  const searchParams = useSearchParams()
  const stockId = searchParams.get("stockId")

  useEffect(() => {
    try {
      const createSession = async () => {
        const stripePriceId = await productApi.getPriceByStockId(stockId || "")
        const res = await fetch("/api/stripe/checkout", {
          method: "POST",
          body: JSON.stringify({
            priceId: stripePriceId,
          }),
        })
        const { clientSecret } = await res.json()
        setClientSecret(clientSecret)
      }
      createSession()
    } catch (error) {
      console.error("Erreur lors de la création de la session Stripe:", error)
      setClientSecret(null)
    }
  }, [])

  if (!clientSecret)
    return <p className="text-black">Chargement du paiement... {stockId}</p>

  return (
    <EmbeddedCheckoutProvider stripe={stripePromise} options={{ clientSecret }}>
      <div id="checkout" ref={checkoutRef}>
        <EmbeddedCheckout />
      </div>
    </EmbeddedCheckoutProvider>
  )
}
