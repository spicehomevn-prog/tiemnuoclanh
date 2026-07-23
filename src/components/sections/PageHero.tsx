'use client'

import { useLang } from '@/context/LanguageContext'
import { content } from '@/lib/content'
import SectionLabel from '@/components/ui/SectionLabel'

type ContentKey = 'sanPham'

interface Props {
  contentKey: ContentKey
}

export default function PageHero({ contentKey }: Props) {
  const { lang } = useLang()
  const t = content[contentKey][lang]

  return (
    <section className="pt-20 pb-12 bg-off-white border-b border-[#E4DCCB]">
      <div className="max-w-narrow mx-auto px-6 text-center">
        <SectionLabel rule={false} className="justify-center">{t.eyebrow}</SectionLabel>
        <h1 className="font-display font-semibold text-[clamp(2rem,4vw,3rem)] text-ink-900 tracking-[-0.01em] mt-4 mb-4">
          {t.heading}
        </h1>
        <p className="font-body text-base text-ink-500 max-w-[44ch] mx-auto leading-relaxed">
          {t.description}
        </p>
      </div>
    </section>
  )
}
