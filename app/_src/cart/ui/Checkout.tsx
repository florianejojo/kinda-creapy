"use client"

import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout,
} from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import { useEffect, useState, useRef } from "react"

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
)

export const Checkout = ({ productId }) => {
  const [clientSecret, setClientSecret] = useState<string | null>(null)
  const checkoutRef = useRef(null)

  useEffect(() => {
    try {
      const createSession = async () => {
        const res = await fetch("/api/stripe/checkout", { method: "POST" })
        const { clientSecret } = await res.json()
        setClientSecret(clientSecret)
      }
      createSession()
    } catch (error) {
      console.error("Erreur lors de la création de la session Stripe:", error)
      setClientSecret(null)
    }
  }, [])

  if (!clientSecret) return <p>Chargement du paiement...</p>

  return (
    <EmbeddedCheckoutProvider stripe={stripePromise} options={{ clientSecret }}>
      <div id="checkout" ref={checkoutRef}>
        <EmbeddedCheckout />
      </div>
    </EmbeddedCheckoutProvider>
  )
}
