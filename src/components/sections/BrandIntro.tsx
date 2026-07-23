'use client'

import { useLang } from '@/context/LanguageContext'
import { content } from '@/lib/content'
import SectionLabel from '@/components/ui/SectionLabel'

export default function BrandIntro() {
  const { lang } = useLang()
  const t = content.brandIntro[lang]

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
          {/* Left — heading */}
          <div>
            <SectionLabel>{t.eyebrow}</SectionLabel>
            <h2 className="font-display font-semibold text-[clamp(1.625rem,3vw,2.5rem)] text-ink-900 tracking-[-0.01em] mt-5 leading-[1.2]">
              {t.heading}
            </h2>
          </div>

          {/* Right — paragraphs */}
          <div className="flex flex-col gap-4">
            {t.paragraphs.map((p, i) => (
              <p key={i} className="font-body text-base leading-[1.75] text-ink-700">
                {p}
              </p>
            ))}
          </div>
        </div>

        {/* Decorative divider */}
        <div className="mt-16 flex items-center gap-4">
          <div className="h-px flex-1 bg-[#E4DCCB]" />
          <span className="text-olive text-xl" aria-hidden>✦</span>
          <div className="h-px flex-1 bg-[#E4DCCB]" />
        </div>
      </div>
    </section>
  )
}
