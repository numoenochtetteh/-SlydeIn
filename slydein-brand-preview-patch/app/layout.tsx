import type React from "react"
import type { Metadata } from "next"
import { Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://slyde-in-one.vercel.app"),
  title: "SlydeIn — Parties, Nightlife & Events in Ghana",
  description:
    "Discover SlydeIn parties, nightlife experiences, event services and tickets in Ghana.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-light-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/icon-dark-32x32.png", type: "image/png", sizes: "32x32" },
    ],
    apple: "/apple-icon.png",
  },
  openGraph: {
    type: "website",
    url: "https://slyde-in-one.vercel.app/",
    title: "SlydeIn — Parties, Nightlife & Events in Ghana",
    description:
      "Discover SlydeIn parties, nightlife experiences, event services and tickets in Ghana.",
    siteName: "SlydeIn",
    images: [
      {
        url: "/slydein-og-preview.png",
        width: 1672,
        height: 941,
        alt: "SlydeIn — Africa's Biggest Houseparty",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SlydeIn — Parties, Nightlife & Events in Ghana",
    description:
      "Discover SlydeIn parties, nightlife experiences, event services and tickets in Ghana.",
    images: ["/slydein-og-preview.png"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} storageKey="slydein-theme">
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
