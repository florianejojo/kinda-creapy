import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Kinda Creapy",
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
                {/* Ajoutez d'autres balises <link> ou <meta> ici si nécessaire */}
            </Head>
            <body className={inter.className}>{children}</body>
        </html>
    );
}
