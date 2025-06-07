export const getStripePriceId = (stock: {
  stripe_price_id_prod: string | null
  stripe_price_id_test: string | null
}) => {
  return process.env.NEXT_PUBLIC_ENV === "production"
    ? stock.stripe_price_id_prod
    : stock.stripe_price_id_test
}
