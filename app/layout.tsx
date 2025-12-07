import type { Metadata } from "next"

import { Lato } from "next/font/google"
import "./globals.css"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"
import { Header } from "@/app/_shared/components/header"
import { Toaster } from "sonner"
import { AlgoBlood } from "@/app/_shared/components/AlgoBlood"

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-lato",
})
export const metadata: Metadata = {
  title: { default: "Kinda Creapy", template: "%s - Kinda Creapy" },
  description: "Oeuvres de Remy Verroeulst, Artiste Peintre surréaliste entre Lille et Huelgoat",
  icons: "logo.png",
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <body className={lato.variable}>
        <Analytics />
        <SpeedInsights />
        {/* <div className="absolute z-0">
          <AlgoBlood />
        </div> */}
        <div className="relative z-10">
          <Header />
        </div>
        <main>{children}</main>
        <Toaster position="top-right" richColors closeButton />
      </body>
    </html>
  )
}
