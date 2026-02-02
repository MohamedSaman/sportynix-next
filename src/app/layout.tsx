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
        url: "/og-image.png",
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
    images: ["/og-image.png"],
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
        {/* Prefer user-provided site icon (siteicon.svg) if present, fall back to favicon.svg */}
        <link rel="icon" href="images/siteicon.svg" type="image/svg+xml" />
        <link rel="icon" href="images/siteicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#0F172A" />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
