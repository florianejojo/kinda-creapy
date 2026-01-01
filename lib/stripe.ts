"server-only"
import { ENV } from "@/env.server"
import Stripe from "stripe"

export const stripe = new Stripe(ENV.STRIPE_SECRET_KEY)
