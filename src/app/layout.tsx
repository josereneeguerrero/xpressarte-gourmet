import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "XpressArte Gourmet Cuisine — Comayagua, Honduras",
  description:
    "Restaurante gourmet en Comayagua, Honduras. Platillos de autor, ambiente único y servicio de primera. Reserva tu mesa por WhatsApp.",
  keywords: [
    "restaurante gourmet Comayagua",
    "XpressArte",
    "restaurant Honduras",
    "comida gourmet Comayagua",
    "reservar mesa Comayagua",
  ],
  openGraph: {
    title: "XpressArte Gourmet Cuisine",
    description: "Donde cada platillo es una obra de arte. Comayagua, Honduras.",
    type: "website",
    locale: "es_HN",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${fraunces.variable} ${inter.variable} dark`}>
      <body className="antialiased bg-[#080808] text-[#F9FAFB]">{children}</body>
    </html>
  );
}
