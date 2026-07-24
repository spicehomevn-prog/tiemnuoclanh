import Hero from '@/components/sections/Hero'
import BrandIntro from '@/components/sections/BrandIntro'
import ProductGrid from '@/components/sections/ProductGrid'
import StorySection from '@/components/sections/StorySection'
import CTABanner from '@/components/sections/CTABanner'
import AnimateOnScroll from '@/components/ui/AnimateOnScroll'

export default function HomePage() {
  return (
    <>
      <Hero />
      <AnimateOnScroll>
        <BrandIntro />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <ProductGrid showHeader />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <StorySection />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <CTABanner />
      </AnimateOnScroll>
    </>
  )
}
