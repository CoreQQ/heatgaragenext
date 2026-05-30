import type { Metadata } from 'next'
import { Bebas_Neue, Manrope } from 'next/font/google'
import './globals.css'

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
  display: 'swap',
})

const manrope = Manrope({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Heat Garage — BMW Repair Dublin',
  description: "Heat Garage — Dublin's dedicated BMW specialist. Expert repairs, diagnostics, coding, engine work and detailing. Available 24/7 in Greenogue Business Park, Rathcoole, Dublin.",
  robots: 'index, follow',
  metadataBase: new URL('https://heatgarage.ie'),
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: 'https://heatgarage.ie',
    title: 'Heat Garage — BMW Repair Dublin',
    description: "Dublin's dedicated BMW specialist. Repairs, diagnostics, coding and detailing. Available 24/7.",
    images: [{ url: '/og-image.jpg' }],
  },
  twitter: { card: 'summary_large_image' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${manrope.variable}`}>
      <body>{children}</body>
    </html>
  )
}
