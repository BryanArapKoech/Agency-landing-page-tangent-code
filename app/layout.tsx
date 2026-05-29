import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const geist = Geist({ subsets: ["latin"] });
const geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Tangent Code Studios | Websites design and development in Kenya',
  description: 'Professional website design and development in Kenya. We build modern, fast business websites that drive results with clear pricing, smooth communication, and average 7-day turnaround.',
  generator: 'v0.app',
  

  icons: {
  icon: '/TCS_logo_favicon.png',
  apple: '/TCS_logo_favicon.png',
},
openGraph: {
    title: 'Tangent Code Studios | Website Design & Development in Kenya',
    description:
      'Modern, fast business websites that drive results built with clear pricing, smooth communication, and reliable support.',
    url: 'https://tangentcodestudios.co.ke',
    siteName: 'Tangent Code Studios',
    images: [{ url: '/TCS_logo_favicon.png', width: 1080, height: 1080 }],
    locale: 'en_KE',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Tangent Code Studios | Website Design & Development in Kenya',
    description:
      'Modern, fast business websites built with clear pricing, smooth communication, and reliable support.',
    images: ['/TCS_logo_favicon.png'],
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
