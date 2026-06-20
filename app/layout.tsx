import type { Metadata, Viewport } from 'next'
import { Inter, Geist_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Ambru Academy — AI Skills for Everyday Life and Work',
  description:
    'Ambru Academy helps you master AI tools through simple lessons, real workflows, and a supportive Skool community. Join professionals, entrepreneurs, and creators learning practical AI.',
  keywords: [
    'AI academy',
    'learn AI',
    'AI tools',
    'productivity',
    'AI workflows',
    'prompt engineering',
    'AI education',
    'Skool community',
  ],
  generator: 'v0.app',
  openGraph: {
    title: 'Ambru Academy — AI Skills for Everyday Life and Work',
    description:
      'Become better at work, learning, and life with practical AI. Join Ambru Academy on Skool.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0f0f13',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geistMono.variable} bg-background`}
    >
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
