'use client'

import Link from 'next/link'
import { useLang } from '@/context/LanguageContext'
import { content } from '@/lib/content'

export default function CTABanner() {
  const { lang } = useLang()
  const t = content.ctaBanner[lang]

  return (
    <section className="py-20 md:py-28 bg-off-white">
      <div className="max-w-container mx-auto px-6">
        <div className="rounded-xl bg-olive px-8 py-16 md:px-16 md:py-20 text-center text-cream">
          <h2 className="font-display font-semibold text-[clamp(1.625rem,3vw,2.5rem)] tracking-[-0.01em] leading-[1.2] mb-4">
            {t.heading}
          </h2>
          <p className="font-body text-base text-cream/80 max-w-[40ch] mx-auto mb-8">
            {t.description}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/dat-hang"
              className="px-8 py-3 bg-cream text-olive font-semibold rounded-pill hover:bg-beige transition-colors duration-200 text-sm"
            >
              {t.primary}
            </Link>
            <Link
              href="/lien-he"
              className="px-8 py-3 border border-cream/50 text-cream font-semibold rounded-pill hover:bg-cream/10 transition-colors duration-200 text-sm"
            >
              {t.secondary}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
