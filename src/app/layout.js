import { Plus_Jakarta_Sans, Inter } from 'next/font/google'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import FloatingCTA from '@/components/ui/FloatingCTA'
import './globals.css'

const jakarta = Plus_Jakarta_Sans({
  variable: '--font-jakarta',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
})

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
})

export const metadata = {
  title: {
    default: 'Bridge For Freight — Enterprise Logistics Group',
    template: '%s | Bridge For Freight',
  },
  description:
    'Enterprise freight management, warehousing, and cross-border logistics. Bridge For Freight delivers operational precision at scale for businesses that cannot afford disruption.',
  keywords: [
    'freight management',
    'logistics company',
    'warehousing',
    'cross-border logistics',
    'supply chain',
    'last mile delivery',
    '3PL',
  ],
  openGraph: {
    title: 'Bridge For Freight — Enterprise Logistics Group',
    description:
      'Enterprise freight management, warehousing, and cross-border logistics.',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${inter.variable}`}
    >
      <body className="min-h-screen flex flex-col bg-white text-brand-black antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  )
}
