import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Menú Digital — XpressArte Gourmet Cuisine",
  description:
    "Carta completa de XpressArte: entradas, platos fuertes, postres y bebidas. Pide a domicilio o reserva tu mesa en Comayagua, Honduras.",
  openGraph: {
    title: "Menú Digital — XpressArte Gourmet Cuisine",
    description: "Carta completa: entradas, platos fuertes, postres y bebidas. Comayagua, Honduras.",
    images: [{ url: "/images/hero-bg.jpg", width: 1200, height: 630 }],
  },
};

export default function MenuLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
