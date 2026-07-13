import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: {
    default: "Hüseyin Alşan | Traffic Engineer",
    template: "%s | Hüseyin Alşan",
  },

  description:
    "Professional portfolio of Hüseyin Alşan, a UK-based Traffic Engineer specialising in street design, active travel, transport planning, traffic modelling and civil engineering projects.",

  applicationName: "Hüseyin Alşan Portfolio",

  authors: [
    {
      name: "Hüseyin Alşan",
    },
  ],

  creator: "Hüseyin Alşan",

  publisher: "Hüseyin Alşan",

  category: "Engineering",

  keywords: [
    "Hüseyin Alşan",
    "Huseyin Alsan",
    "Traffic Engineer",
    "Transport Engineer",
    "Civil Engineer",
    "Transport Planning",
    "Traffic Engineering",
    "Active Travel",
    "Street Design",
    "Highway Design",
    "Traffic Modelling",
    "Vissim",
    "LinSig",
    "AutoCAD",
    "United Kingdom",
  ],

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    title: "Hüseyin Alşan | Traffic Engineer",

    description:
      "Explore the professional portfolio of Hüseyin Alşan, featuring transport planning, traffic engineering, active travel, modelling and infrastructure projects.",

    siteName: "Hüseyin Alşan Portfolio",

    locale: "en_GB",

    alternateLocale: ["tr_TR"],

    type: "website",
  },

  twitter: {
    card: "summary",

    title: "Hüseyin Alşan | Traffic Engineer",

    description:
      "Professional traffic engineering portfolio covering transport planning, active travel, street design, modelling and infrastructure projects.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}