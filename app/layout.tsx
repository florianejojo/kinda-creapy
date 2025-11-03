import { AlgoBlood } from "@/app/_src/shared/ui/AlgoBlood"
import { Header } from "@/app/_src/shared/ui/Header/Header"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import type { Metadata } from "next"
import { Toaster } from "sonner"
import "./globals.css"

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
      <Analytics />
      <SpeedInsights />
      <body className="flex flex-col min-h-screen">
        <div className="absolute z-0">
          <AlgoBlood />
        </div>
        <div className="relative z-10">
          <Header />
        </div>
        <main className="relative z-10 flex-1 items-center justify-between m-5 md:p-10  tracking-widest mx-auto">
          {children}
          <Toaster position="top-right" richColors closeButton />
        </main>
      </body>
    </html>
  )
}
