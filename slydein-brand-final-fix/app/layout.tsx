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
    icon: [{ url: "/slydein-favicon-v2.png", type: "image/png" }],
    shortcut: "/slydein-favicon-v2.png",
    apple: "/slydein-favicon-v2.png",
  },
  openGraph: {
    title: "SlydeIn — Parties, Nightlife & Events in Ghana",
    description:
      "Discover SlydeIn parties, nightlife experiences, event services and tickets in Ghana.",
    url: "https://slyde-in-one.vercel.app/",
    siteName: "SlydeIn",
    images: [
      {
        url: "/slydein-og-preview-v2.png",
        width: 1200,
        height: 630,
        alt: "SlydeIn — Africa's biggest houseparty",
      },
    ],
    locale: "en_GH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SlydeIn — Parties, Nightlife & Events in Ghana",
    description:
      "Discover SlydeIn parties, nightlife experiences, event services and tickets in Ghana.",
    images: ["/slydein-og-preview-v2.png"],
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
