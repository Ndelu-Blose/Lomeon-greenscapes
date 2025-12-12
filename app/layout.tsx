import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Lomeon Greenscapes PTY LTD",
  description:
    "Transform your outdoor space with Lomeon Greenscapes. Professional landscaping & property maintenance services in Durban, KZN.",
  generator: "v0.app",
  icons: {
    icon: "/lomeon greenscapes logo.png",
    apple: "/lomeon greenscapes logo.png",
    shortcut: "/lomeon greenscapes logo.png",
  },
  openGraph: {
    title: "Lomeon Greenscapes PTY LTD",
    description:
      "Transform your outdoor space with Lomeon Greenscapes. Professional landscaping & property maintenance services in Durban, KZN.",
    type: "website",
    siteName: "Lomeon Greenscapes PTY LTD",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
