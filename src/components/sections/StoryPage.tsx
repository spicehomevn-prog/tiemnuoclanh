'use client'

import AnimateOnScroll from '@/components/ui/AnimateOnScroll'
import SectionLabel from '@/components/ui/SectionLabel'
import { useLang } from '@/context/LanguageContext'
import { content } from '@/lib/content'

export default function StoryPage() {
  const { lang } = useLang()
  const t = content.cauChuyen[lang]

  return (
    <>
      {/* Hero */}
      <section className="pt-20 pb-16 bg-off-white">
        <div className="max-w-narrow mx-auto px-6 text-center">
          <SectionLabel rule={false} className="justify-center">{t.eyebrow}</SectionLabel>
          <h1 className="font-display font-semibold text-[clamp(2.25rem,5vw,3.5rem)] text-ink-900 tracking-[-0.01em] mt-4 mb-6 leading-[1.15]">
            {t.heading}
          </h1>
          <p className="font-body text-lg text-ink-500 leading-relaxed italic">
            {t.intro}
          </p>
        </div>
      </section>

      {/* Story image placeholder */}
      <AnimateOnScroll>
        <div className="px-6 py-4">
          <div
            className="max-w-container mx-auto rounded-xl overflow-hidden flex items-center justify-center"
            style={{ height: 'clamp(240px, 40vw, 480px)', background: '#E3E9DD' }}
          >
            <span className="text-sm text-ink-500 font-medium">Ảnh không gian Lành</span>
          </div>
        </div>
      </AnimateOnScroll>

      {/* Story content */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-narrow mx-auto px-6">
          <AnimateOnScroll className="flex flex-col gap-6">
            {t.paragraphs.map((para, i) => (
              <p key={i} className="font-body text-base md:text-[17px] leading-[1.85] text-ink-700">
                {para}
              </p>
            ))}
          </AnimateOnScroll>

          <AnimateOnScroll delay={100}>
            <div className="mt-12 pt-10 border-t border-[#E4DCCB]">
              <p className="font-display font-semibold text-xl md:text-2xl text-olive italic">
                {t.closing}
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Values — dark section */}
      <AnimateOnScroll>
        <section className="py-6 px-6">
          <div className="max-w-container mx-auto rounded-xl bg-forest text-cream px-[clamp(1.5rem,4vw,4rem)] py-[clamp(3rem,5vw,5rem)]">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { num: '01', vi: 'Nguyên liệu thật', en: 'Real Ingredients', desc_vi: 'Tuyển chọn kỹ lưỡng từ nguồn tươi sạch mỗi ngày.', desc_en: 'Carefully selected from fresh, clean sources every day.' },
                { num: '02', vi: 'Ít chế biến', en: 'Minimally Processed', desc_vi: 'Giữ nguyên hương vị tự nhiên, không pha loãng.', desc_en: 'Preserving natural flavor, undiluted.' },
                { num: '03', vi: 'Chân thành', en: 'Honest', desc_vi: 'Không chất bảo quản, không đường tinh luyện thêm.', desc_en: 'No preservatives, no added refined sugar.' },
              ].map((v) => (
                <div key={v.num}>
                  <div className="text-xs font-semibold text-cream/40 mb-3 tracking-eyebrow">{v.num}</div>
                  <h3 className="font-display font-semibold text-xl text-cream mb-2">{lang === 'vi' ? v.vi : v.en}</h3>
                  <p className="text-sm text-cream-dim leading-relaxed">{lang === 'vi' ? v.desc_vi : v.desc_en}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimateOnScroll>
    </>
  )
}
