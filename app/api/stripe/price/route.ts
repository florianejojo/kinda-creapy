import { stripe } from "@/lib/stripe"
import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  try {
    const { priceId } = await req.json()

    if (!priceId) {
      return NextResponse.json({ error: "Missing priceId" }, { status: 400 })
    }

    const price = await stripe.prices.retrieve(priceId)

    return NextResponse.json({ price })
  } catch (error) {
    console.error("Stripe error:", error)
    return NextResponse.json({ error: "Erreur lors de la récupération du prix" }, { status: 500 })
  }
}
