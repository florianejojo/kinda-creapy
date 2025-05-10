import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"
import { Header } from "@/app/_shared/Header"
import { AlgoBlood } from "@/app/_shared/AlgoBlood"
const inter = Inter({ subsets: ["latin"] })
export const metadata: Metadata = {
  title: { default: "Kinda Creapy", template: "%s - Kinda Creapy" },
  description:
    "Oeuvres de Remy Verroeulst, Artiste Peintre surréaliste entre Lille et Huelgoat",
  icons: "remy_verroeulst.png",
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <Analytics />
      <SpeedInsights />
      <body className={inter.className}>
        <div className="absolute z-0">{/* <AlgoBlood /> */}</div>
        <div className="relative z-10 ">
          <Header />
        </div>
        <main className="relative z-10 flex min-h-screen flex-col items-center justify-between m-5 md:p-10  tracking-widest sm:max-w-7xl mx-auto">
          {children}
        </main>
      </body>
    </html>
  )
}
