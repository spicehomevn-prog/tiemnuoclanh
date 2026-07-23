import type { Metadata } from 'next'
import ContactPage from '@/components/sections/ContactPage'

export const metadata: Metadata = {
  title: 'Liên hệ — Lành',
  description: 'Ghé thăm Tiệm nước Lành tại 128/4/3 Trần Hữu Trang, Phú Nhuận, TP.HCM hoặc gọi 0979 80 4343.',
}

export default function LienHePage() {
  return <ContactPage />
}
