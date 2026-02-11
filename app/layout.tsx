import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Avixr Technologies - Digital Solutions & Software Development',
    template: '%s | Avixr Technologies'
  },
  description: 'Avixr Technologies Pvt Ltd is a research-driven software company specializing in transforming visionary ideas into top-tier mobile and web solutions. Expert development services with cutting-edge technologies.',
  keywords: ['software development', 'web development', 'mobile app development', 'digital solutions', 'custom software', 'Avixr Technologies', 'software company'],
  authors: [{ name: 'Avixr Technologies' }],
  creator: 'Avixr Technologies Pvt Ltd',
  publisher: 'Avixr Technologies Pvt Ltd',
  metadataBase: new URL('https://www.avixr.in'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.avixr.in',
    siteName: 'Avixr Technologies',
    title: 'Avixr Technologies - Digital Solutions & Software Development',
    description: 'Transforming visionary ideas into top-tier mobile and web solutions. Expert software development with cutting-edge technologies.',
    images: [
      {
        url: '/avixr-wings-logo.jpeg',
        width: 1200,
        height: 630,
        alt: 'Avixr Technologies Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Avixr Technologies - Digital Solutions & Software Development',
    description: 'Transforming visionary ideas into top-tier mobile and web solutions.',
    images: ['/avixr-wings-logo.jpeg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'ETp8iTrTPnGNRys4HRlNgVe_3klk5E91sbIkhO3g8W4',
  },
  icons: {
    icon: [
      { url: '/icon.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/icon.png',
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
        <link rel="icon" type="image/png" href="/icon.png" />
        <link rel="shortcut icon" type="image/png" href="/icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icon.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/icon-192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/icon-512.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Poppins:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-navy-darkest text-white">{children}</body>
    </html>
  )
}

