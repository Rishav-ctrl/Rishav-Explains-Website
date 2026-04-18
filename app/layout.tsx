import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Rishav Explains Academy — Digital Skills in Nepali',
  description:
    'सिक्नुस्, बढ्नुस्, कमाउनुस् — Rishav Explains Academy teaches Digital Skills, Online Business, and Content Creation to the Nepali audience.',
  keywords: ['Rishav Explains', 'Nepal', 'Digital Skills', 'Online Business', 'Nepali Content Creator', 'IT Courses Nepal'],
  authors: [{ name: 'Rishav Explains' }],
  openGraph: {
    title: 'Rishav Explains Academy',
    description: 'Nepal\'s premier Nepali-language platform for Digital Skills & Online Business',
    url: 'https://rishavexplains.academy',
    siteName: 'Rishav Explains Academy',
    locale: 'ne_NP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rishav Explains Academy',
    description: 'सिक्नुस्। बढ्नुस्। Online कमाउनुस्।',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ne" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,300&family=Noto+Sans+Devanagari:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}
