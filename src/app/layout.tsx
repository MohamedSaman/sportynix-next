import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL("https://sportynix.com"),
  title: {
    default: "Sportynix - Indoor Venue Booking & League Management",
    template: "%s | Sportynix",
  },
  description:
    "Sportynix makes it easy to find and book indoor sports venues, manage teams and leagues, and track live scores. Trusted by players and venues worldwide.",
  keywords: [
    "venue booking",
    "court reservation",
    "league management",
    "sports venues",
    "booking app",
    "live scores",
  ],
  authors: [{ name: "Sportynix Team" }],
  creator: "Sportynix",
  publisher: "Sportynix",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sportynix.com",
    siteName: "Sportynix",
    title: "Sportynix - Indoor Venue Booking & Leagues",
    description:
      "Find and book indoor venues, manage leagues, and keep scores in real-time.",
    images: [
      {
        url: "https://sportynix.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sportynix App Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sportynix - Indoor Venue Booking & Leagues",
    description:
      "Find and book indoor venues, manage leagues, and keep scores in real-time.",
    images: ["https://sportynix.com/og-image.png"],
    creator: "@sportynix",
  },
  verification: {
    google: "google-site-verification-code",
  },
  alternates: {
    canonical: "https://sportynix.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Favicons and touch icons (serve from /public) */}
        <link rel="icon" href="/siteicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/siteicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/siteicon.png" />
        {/* Explicit OG/Twitter image metas to help scrapers fetch the correct preview image */}
        <meta property="og:image" content="https://sportynix.com/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:image" content="https://sportynix.com/og-image.png" />
        <meta name="theme-color" content="#0F172A" />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
