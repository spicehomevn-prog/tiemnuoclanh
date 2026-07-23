'use client'

import Link from 'next/link'
import { Zap, Sprout, Brain, HeartPulse, Leaf } from 'lucide-react'
import { useLang } from '@/context/LanguageContext'
import { content } from '@/lib/content'
import SectionLabel from '@/components/ui/SectionLabel'

const benefitIcons = {
  Zap,
  Sprout,
  Brain,
  HeartPulse,
  Leaf,
}

export default function Hero() {
  const { lang } = useLang()
  const t = content.hero[lang]
  const benefits = content.benefits[lang]

  return (
    <section className="max-w-container mx-auto px-6 pt-[clamp(3rem,7vw,6rem)] pb-10">
      {/* 3-column grid */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_0.9fr_1fr] gap-10 items-center">
        {/* Col 1 — Text */}
        <div>
          <SectionLabel>{t.eyebrow}</SectionLabel>
          <h1 className="font-display font-semibold text-[clamp(1.875rem,3.4vw,2.875rem)] leading-[1.15] text-ink-900 tracking-[-0.01em] mt-5 mb-0">
            {t.heading}
          </h1>
          <p className="font-body text-base leading-relaxed text-ink-500 mt-5 max-w-[34ch]">
            {t.description}
          </p>
        </div>

        {/* Col 2 — Product image placeholder */}
        <div className="flex justify-center">
          <div
            className="w-[82%] rounded-xl overflow-hidden relative flex items-end justify-center"
            style={{ aspectRatio: '3/4.4', background: '#E7DBC4' }}
          >
            {/* Badge */}
            <div className="absolute top-4 left-0 right-0 flex justify-center">
              <span className="text-xs font-semibold px-3 py-1 rounded-pill bg-cream/80 text-ink-700 border border-[#E4DCCB]">
                {t.imageAlt}
              </span>
            </div>
            {/* Bottle placeholder */}
            <div
              className="rounded-t-[18px] mb-[8%] border border-[#E4DCCB]"
              style={{
                width: '46%',
                height: '74%',
                background: '#E3E9DD',
              }}
            />
          </div>
        </div>

        {/* Col 3 — Featured product info */}
        <div>
          <h3 className="font-display font-semibold text-[22px] text-ink-900 mb-3">
            {t.featuredName}
          </h3>
          <p className="font-body text-[14.5px] leading-relaxed text-ink-500 mb-5">
            {t.featuredDesc}
          </p>
          <Link
            href="/san-pham"
            className="inline-block px-8 py-3 bg-olive text-cream font-semibold text-sm rounded-pill hover:bg-olive-600 transition-colors duration-200"
          >
            {t.cta}
          </Link>
        </div>
      </div>

      {/* Benefits icon row */}
      <div className="mt-14 pt-9 border-t border-[#E4DCCB] flex flex-wrap justify-between gap-6">
        {benefits.map((b) => {
          const Icon = benefitIcons[b.icon as keyof typeof benefitIcons]
          return (
            <div key={b.label} className="flex flex-col items-center gap-2 min-w-[60px]">
              <Icon size={22} strokeWidth={1.4} className="text-olive" />
              <span className="text-xs font-medium text-ink-500 tracking-wide">{b.label}</span>
            </div>
          )
        })}
      </div>
    </section>
  )
}
