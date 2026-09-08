'use client'

import Image from 'next/image'
import { useLang } from '@/context/LanguageContext'
import { toppings, formatPrice } from '@/lib/data/products'
import SectionLabel from '@/components/ui/SectionLabel'
import AnimateOnScroll from '@/components/ui/AnimateOnScroll'

export default function ToppingsSection() {
  const { lang } = useLang()

  return (
    <AnimateOnScroll>
      <section className="py-16 md:py-20 bg-[#F7F4EE]">
        <div className="max-w-container mx-auto px-6">
          <div className="mb-10">
            <SectionLabel>{lang === 'vi' ? 'Món thêm' : 'Add-ons'}</SectionLabel>
            <h2 className="font-display font-semibold text-[clamp(1.625rem,3vw,2.375rem)] text-ink-900 tracking-[-0.01em] mt-3">
              {lang === 'vi' ? 'Topping' : 'Toppings'}
            </h2>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3 md:gap-4">
            {toppings.map(top => (
              <div
                key={top.id}
                className="flex flex-col bg-white rounded-sm border border-[#E4DCCB] overflow-hidden"
              >
                {/* Image */}
                <div className="relative w-full bg-[#F0EBE1]" style={{ aspectRatio: '1/1' }}>
                  {top.imageSrc ? (
                    <Image
                      src={top.imageSrc}
                      alt={top.name[lang]}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 33vw, (max-width: 768px) 25vw, 20vw"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full bg-[#E5E1D6]" />
                  )}
                </div>

                {/* Info */}
                <div className="p-2.5">
                  <p className="text-[12px] font-semibold text-ink-900 leading-snug line-clamp-2">
                    {top.name[lang]}
                  </p>
                  <p className="text-[12px] text-olive font-medium mt-1">
                    +{formatPrice(top.price, lang)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </AnimateOnScroll>
  )
}
