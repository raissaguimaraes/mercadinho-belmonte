import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";

import { Footer, Header, TopBar } from "@/components/layout";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-heading",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://mercadinho-belmonte.vercel.app"
  ),

  title: {
    default: "Mercadinho Belmonte",
    template: "%s | Mercadinho Belmonte",
  },

  description:
    "Frutas, verduras e legumes frescos em Boa Viagem, Recife.",

  keywords: [
    "mercadinho belmonte",
    "hortifruti recife",
    "hortifruti boa viagem",
    "frutas frescas",
    "verduras",
    "mercado de bairro",
  ],

  openGraph: {
    title: "Mercadinho Belmonte",
    description:
      "Frutas, verduras e legumes frescos em Boa Viagem, Recife.",
    url: "https://mercadinho-belmonte.vercel.app",
    siteName: "Mercadinho Belmonte",
    locale: "pt_BR",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${poppins.variable}`}
    >
      <body>
       <div className="sticky top-0 z-50">
        <TopBar />
        <Header />
      </div>

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}