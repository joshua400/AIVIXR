import type { Metadata } from 'next'
import './globals.css'
import CustomCursor from '@/components/CustomCursor'

export const metadata: Metadata = {
  title: 'AVIXR Technologies Pvt Ltd',
  description: 'Research-driven software company specializing in transforming visionary ideas into top-tier mobile and web solutions.',
  icons: {
    icon: '/favicon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=Manrope:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-luxury-white text-charcoal antialiased selection:bg-accent-gold/20 selection:text-charcoal cursor-none">
        <CustomCursor />
        {children}
      </body>
    </html>
  )
}



