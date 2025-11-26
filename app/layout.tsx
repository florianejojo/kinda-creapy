import type { Metadata } from "next"

import { Lato } from "next/font/google"
import "./globals.css"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"
import { Header } from "@/app/_shared/header-"
import { AlgoBlood } from "@/app/_shared/AlgoBlood"
import { Toaster } from "sonner"
const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"], // choisis ce que tu veux
  variable: "--font-lato",
})
export const metadata: Metadata = {
  title: { default: "Kinda Creapy", template: "%s - Kinda Creapy" },
  description: "Oeuvres de Remy Verroeulst, Artiste Peintre surréaliste entre Lille et Huelgoat",
  icons: "remy_verroeulst.png",
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <body className={lato.className}>
        <Analytics />
        <SpeedInsights />
        <div className="absolute z-0">{/* <AlgoBlood /> */}</div>
        <div className="relative z-10">
          <Header />
        </div>
        <main className="relative z-10 flex min-h-screen flex-col items-center justify-between m-5 md:p-10 tracking-widest sm:max-w-7xl mx-auto">
          {children}
        </main>
        <Toaster position="top-right" richColors closeButton />
      </body>
    </html>
  )
}
