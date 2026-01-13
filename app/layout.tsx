import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import { websiteSchema, organizationSchema } from "@/lib/schema";
import CookieBanner from "@/components/CookieBanner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

export const metadata: Metadata = {
  title: "Bureaulink - Découvrez chaque produit en contexte",
  description: "Site d'affiliation visuel avec une illustration interactive de bureau pour mettre en avant des produits affiliés dans leur contexte réel. Trouvez les meilleurs produits pour votre bureau.",
  keywords: ["affiliation", "produits bureau", "accessoires bureau", "équipement télétravail", "setup bureau", "recommandations produits"],
  authors: [{ name: "Bureaulink" }],
  creator: "Bureaulink",
  publisher: "Bureaulink",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://deskpick.com',
    title: 'DeskPick - Découvrez chaque produit en contexte',
    description: 'Site d\'affiliation visuel pour découvrir des produits de bureau dans leur contexte réel',
    siteName: 'DeskPick',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DeskPick - Découvrez chaque produit en contexte',
    description: 'Site d\'affiliation visuel pour découvrir des produits de bureau',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  themeColor: '#f97316',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased`}
      >
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
