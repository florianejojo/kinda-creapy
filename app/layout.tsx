import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { Header } from "@/app/components/Header";
import { Suspense } from "react";
import { TreeCanvas } from "@/app/components/TreeCanvas";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: { default: "Kinda Creapy", template: "%s - Kinda Creapy" },
    description:
        "Oeuvres de Remy Verroeulst, Artiste Peintre surréaliste entre Lille et Huelgoat",
    icons: "remy_verroeulst.png",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fr">
            <Head>
                <link
                    rel="preload"
                    as="image"
                    href="/static/media/your-lcp-image.webp"
                />
            </Head>
            <Analytics />
            <SpeedInsights />

            <body className={inter.className}>
                <div className="absolute insite-0 z-0">
                    <TreeCanvas />
                </div>
                <div className="relative z-10">
                    <Suspense>
                        <Header />
                    </Suspense>
                </div>
                {children}
            </body>
        </html>
    );
}
