import Stripe from "stripe"
import { NextResponse } from "next/server"
import { stripe } from "@/lib/stripe"

export async function GET(priceId) {
  try {
    const price = await stripe.prices.retrieve(priceId)
    return price
  } catch (error) {
    console.error("Erreur Stripe:", error)
    return null
  }
}
