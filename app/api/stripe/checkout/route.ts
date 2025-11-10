import { ENV } from "@/env.server"
import { stripe } from "@/lib/stripe"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
  const { priceId } = await request.json()
  console.log("Payload reçu :", priceId)

  try {
    const session = await stripe.checkout.sessions.create({
      ui_mode: "embedded",
      mode: "payment",
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      return_url: `${ENV.NEXT_PUBLIC_SITE_URL}/return?session_id={CHECKOUT_SESSION_ID}`,
      shipping_address_collection: {
        allowed_countries: ["FR", "BE"],
      },
    })

    return NextResponse.json({ clientSecret: session.client_secret })
  } catch (e) {
    return NextResponse.json(
      { error: "Erreur serveur lors de la création de la session", e },
      { status: 500 },
    )
  }
}
