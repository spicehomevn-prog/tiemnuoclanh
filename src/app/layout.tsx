import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import { LanguageProvider } from '@/context/LanguageContext'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const fraunces = localFont({
  src: '../fonts/Fraunces-Variable.ttf',
  variable: '--font-display',
  display: 'swap',
  weight: '100 900',
})

const ysabeau = localFont({
  src: '../fonts/YsabeauInfant-Variable.ttf',
  variable: '--font-body',
  display: 'swap',
  weight: '100 900',
})

export const metadata: Metadata = {
  title: 'Lành — Nguyên chất mỗi ngày',
  description: 'Đồ uống tươi sạch từ nguyên liệu thật. Rau má, nước sâm, thảo mộc — không pha loãng, không chất bảo quản.',
  keywords: ['tiệm nước', 'rau má', 'nước sâm', 'thảo mộc', 'đồ uống tự nhiên', 'Phú Nhuận'],
  openGraph: {
    title: 'Lành — Nguyên chất mỗi ngày',
    description: 'Đồ uống tươi sạch từ nguyên liệu thật.',
    locale: 'vi_VN',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi" className={`${fraunces.variable} ${ysabeau.variable}`}>
      <body className="bg-off-white font-body antialiased">
        <LanguageProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  )
}
