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

const SITE_URL = "https://site-rho-lime-29.vercel.app";
const OG_IMAGE = `${SITE_URL}/images/hero-bg.jpg`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "XpressArte Gourmet Cuisine — Comayagua, Honduras",
  description:
    "XpressArte - Restaurante gourmet en Comayagua, Honduras. Platillos de autor en Plaza San Blas. Reserva por WhatsApp o pide a domicilio.",
  keywords: [
    "restaurante gourmet Comayagua",
    "XpressArte",
    "restaurant Honduras",
    "comida gourmet Comayagua",
    "reservar mesa Comayagua",
    "Plaza San Blas Comayagua",
    "restaurante Comayagua",
  ],
  openGraph: {
    title: "XpressArte Gourmet Cuisine — Comayagua, Honduras",
    description: "Donde cada platillo es una obra de arte. Gastronomía gourmet con alma hondureña en Plaza San Blas.",
    type: "website",
    locale: "es_HN",
    url: SITE_URL,
    siteName: "XpressArte Gourmet Cuisine",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "XpressArte Gourmet Cuisine — Comayagua, Honduras",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "XpressArte Gourmet Cuisine — Comayagua, Honduras",
    description: "Restaurante gourmet en Comayagua, Honduras. Reserva por WhatsApp.",
    images: [OG_IMAGE],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
    other: [
      { rel: "manifest", url: "/site.webmanifest" },
    ],
  },
};

const restaurantSchema = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "XpressArte Gourmet Cuisine",
  image: `${SITE_URL}/images/hero-bg.jpg`,
  description: "Restaurante gourmet en Comayagua, Honduras. Platillos de autor con alma hondureña.",
  url: SITE_URL,
  telephone: "+504-8873-8716",
  email: "xpressartecomayagua@gmail.com",
  priceRange: "$$",
  servesCuisine: "Gourmet",
  address: {
    "@type": "PostalAddress",
    streetAddress: "3er Nivel, Plaza San Blas, Barrio San Blas",
    addressLocality: "Comayagua",
    addressRegion: "Comayagua",
    addressCountry: "HN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "14.4521",
    longitude: "-87.6418",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
      opens: "10:00",
      closes: "22:00",
    },
  ],
  sameAs: [
    "https://www.facebook.com/p/XpressArte-100091378959251/",
    "https://www.instagram.com/xpressarte.oficial",
    "https://maps.app.goo.gl/dRFrGqADi355DGuY6",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${fraunces.variable} ${inter.variable} dark`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantSchema) }}
        />
      </head>
      <body className="antialiased bg-[#080808] text-[#F9FAFB] overflow-x-hidden">{children}</body>
    </html>
  );
}
