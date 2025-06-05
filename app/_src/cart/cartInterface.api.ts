import { stripe } from "@/lib/stripe"
import { NextResponse } from "next/server"

export const cartInterfaceApi = {
  // fetchClientSecret: async () => {
  //   const session = await stripe.checkout.sessions.create({
  //     ui_mode: "embedded",
  //     mode: "payment",
  //     line_items: [
  //       {
  //         price: "prod_SRCmHhMuJxtLfz",
  //         quantity: 1,
  //       },
  //     ],
  //     return_url: `${process.env.NEXT_PUBLIC_SITE_URL}/return?session_id={CHECKOUT_SESSION_ID}`,
  //   })
  //   return NextResponse.json({ clientSecret: session.client_secret })
  // },
}
