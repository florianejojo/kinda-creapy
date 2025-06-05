import Stripe from "stripe"
import { NextResponse } from "next/server"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

export async function POST() {
  try {
    const session = await stripe.checkout.sessions.create({
      ui_mode: "embedded",
      mode: "payment",
      line_items: [
        {
          price: "price_1RWKMhC5XgGQx5sC1XzC4ZAj",
          quantity: 1,
        },
      ],
      return_url: `${process.env.NEXT_PUBLIC_SITE_URL}/return?session_id={CHECKOUT_SESSION_ID}`,
      shipping_address_collection: {
        allowed_countries: ["FR", "BE"],
      },
    })

    return NextResponse.json({ clientSecret: session.client_secret })
  } catch (e) {
    return NextResponse.json(
      { error: "Erreur serveur lors de la création de la session" },
      { status: 500 }
    )
  }
}
