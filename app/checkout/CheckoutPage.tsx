import { CheckoutForm } from "@/app/checkout/CheckoutForm"

export default function CheckoutPage() {
  return (
    <div className="min-h-screen bg-stone-50 flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white shadow-xl rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-6 text-center text-black">Paiement</h2>
        <CheckoutForm />
      </div>
    </div>
  )
}
