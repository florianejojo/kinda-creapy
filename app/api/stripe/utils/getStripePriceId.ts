import { ENV } from "@/env.server"

export const getStripePriceId = (stock: {
  stripe_price_id_prod: string | null
  stripe_price_id_test: string | null
}) => {
  return ENV.NODE_ENV === "production" ? stock.stripe_price_id_prod : stock.stripe_price_id_test
}
