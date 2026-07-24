import type { Metadata } from 'next'
import ProductGrid from '@/components/sections/ProductGrid'
import PageHero from '@/components/sections/PageHero'
import CTABanner from '@/components/sections/CTABanner'
import AnimateOnScroll from '@/components/ui/AnimateOnScroll'

export const metadata: Metadata = {
  title: 'Sản phẩm — Lành',
  description: 'Đồ uống tươi sạch từ rau má, nước sâm và thảo mộc. Nguyên liệu thật, không pha loãng.',
}

export default function SanPhamPage() {
  return (
    <>
      <PageHero contentKey="sanPham" />
      <AnimateOnScroll>
        <ProductGrid showHeader={false} showAll />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <CTABanner />
      </AnimateOnScroll>
    </>
  )
}
