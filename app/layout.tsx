import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const geist = Geist({ subsets: ["latin"] });
const geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Tangent Code Studios | Modern Websites for Growing Businesses',
  description: 'Get a professional website in 7 days - fixed pricing, no surprises. Website development, redesign, and maintenance services.',
  generator: 'v0.app',
  

  icons: {
  icon: '/TCS_logo_favicon.png',
  apple: '/TCS_logo_favicon.png',
},
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geist.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
