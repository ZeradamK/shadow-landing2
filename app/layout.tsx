import type React from "react"
// This is the root layout component for your Next.js app.
// Learn more: https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#root-layout-required
import { Manrope } from "next/font/google"
import { cn } from "@/lib/utils"
import "./globals.css"
import type { Metadata } from "next"

const fontHeading = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
})

const fontBody = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
})

export const metadata: Metadata = {
  title: "Acme Inc",
  description: "The complete platform for building the Web",
    generator: 'v0.dev'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={cn("antialiased", fontHeading.variable, fontBody.variable)}>{children}</body>
    </html>
  )
}
