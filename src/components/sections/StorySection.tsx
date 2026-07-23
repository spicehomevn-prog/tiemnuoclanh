'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { useLang } from '@/context/LanguageContext'
import { content } from '@/lib/content'
import SectionLabel from '@/components/ui/SectionLabel'

export default function StorySection() {
  const { lang } = useLang()
  const t = content.story[lang]

  return (
    <section className="py-6 px-6">
      <div
        className="rounded-xl overflow-hidden bg-forest text-cream"
        style={{ borderRadius: 'var(--radius-xl)' }}
      >
        <div className="max-w-container mx-auto px-[clamp(1.5rem,4vw,4rem)] py-[clamp(3rem,6vw,5.5rem)]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[clamp(2rem,5vw,4.5rem)] items-center">
            {/* Text */}
            <div>
              <SectionLabel inverse>{t.eyebrow}</SectionLabel>
              <h2 className="font-display font-semibold text-[clamp(1.625rem,3vw,2.5rem)] text-cream tracking-[-0.01em] mt-5 mb-6 whitespace-pre-line leading-[1.2]">
                {t.heading}
              </h2>
              <Link
                href="/cau-chuyen"
                className="inline-flex items-center gap-3 text-cream font-medium mb-6 hover:opacity-80 transition-opacity"
              >
                <span className="w-9 h-9 rounded-pill border border-cream/30 flex items-center justify-center hover:bg-cream/10 transition-colors duration-200">
                  <ArrowRight size={15} strokeWidth={1.8} />
                </span>
                {t.link}
              </Link>
              <p className="font-body text-[15px] leading-[1.75] text-cream-dim max-w-[46ch]">
                {t.description}
              </p>
            </div>

            {/* Image / Video placeholder */}
            <div
              className="flex items-center justify-center rounded-lg border border-cream/10"
              style={{ aspectRatio: '4/3', background: 'rgba(243,238,226,.06)' }}
            >
              <div className="flex flex-col items-center gap-3 text-cream/60">
                <span className="w-12 h-12 rounded-pill border border-cream/20 flex items-center justify-center text-base">
                  ▶
                </span>
                <span className="text-sm font-medium">{t.imagePlaceholder}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
