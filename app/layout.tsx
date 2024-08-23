import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import { SpeedInsights } from "@vercel/speed-insights/next";

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
                <SpeedInsights></SpeedInsights>
                <link
                    rel="preload"
                    as="image"
                    href="/static/media/your-lcp-image.webp"
                />
            </Head>
            <body className={inter.className}>{children}</body>
        </html>
    );
}
