import type { Metadata } from 'next'
import StoryPage from '@/components/sections/StoryPage'
import CTABanner from '@/components/sections/CTABanner'
import AnimateOnScroll from '@/components/ui/AnimateOnScroll'

export const metadata: Metadata = {
  title: 'Câu chuyện — Lành',
  description: 'Câu chuyện về Tiệm nước Lành — nơi bắt đầu từ niềm tin vào nguyên liệu thật.',
}

export default function CauChuyenPage() {
  return (
    <>
      <StoryPage />
      <AnimateOnScroll>
        <CTABanner />
      </AnimateOnScroll>
    </>
  )
}
