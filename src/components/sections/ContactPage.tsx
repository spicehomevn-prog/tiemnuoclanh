'use client'

import { MapPin, Phone, Clock } from 'lucide-react'
import { useLang } from '@/context/LanguageContext'
import { content } from '@/lib/content'
import SectionLabel from '@/components/ui/SectionLabel'
import AnimateOnScroll from '@/components/ui/AnimateOnScroll'

export default function ContactPage() {
  const { lang } = useLang()
  const t = content.lienHe[lang]

  return (
    <>
      {/* Hero */}
      <section className="pt-20 pb-16 bg-off-white border-b border-[#E4DCCB]">
        <div className="max-w-narrow mx-auto px-6 text-center">
          <SectionLabel rule={false} className="justify-center">{t.eyebrow}</SectionLabel>
          <h1 className="font-display font-semibold text-[clamp(2rem,4vw,3rem)] text-ink-900 tracking-[-0.01em] mt-4 leading-[1.15]">
            {t.heading}
          </h1>
        </div>
      </section>

      {/* Contact grid */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            {/* Info */}
            <AnimateOnScroll>
              <div className="flex flex-col gap-8">
                <div className="flex gap-4 items-start">
                  <span className="w-10 h-10 rounded-lg bg-sage-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin size={18} strokeWidth={1.5} className="text-olive" />
                  </span>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-eyebrow text-olive mb-1.5">
                      {t.address.label}
                    </div>
                    <p className="font-body text-base text-ink-700 leading-relaxed">
                      {t.address.value}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <span className="w-10 h-10 rounded-lg bg-sage-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Phone size={18} strokeWidth={1.5} className="text-olive" />
                  </span>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-eyebrow text-olive mb-1.5">
                      {t.phone.label}
                    </div>
                    <a
                      href="tel:09798043430"
                      className="block font-body text-base text-ink-700 hover:text-olive transition-colors"
                    >
                      {t.phone.thanh}
                    </a>
                    <a
                      href="tel:0355608623"
                      className="block font-body text-base text-ink-700 hover:text-olive transition-colors mt-1"
                    >
                      {t.phone.hai}
                    </a>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <span className="w-10 h-10 rounded-lg bg-sage-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Clock size={18} strokeWidth={1.5} className="text-olive" />
                  </span>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-eyebrow text-olive mb-1.5">
                      {t.hours.label}
                    </div>
                    <p className="font-body text-base text-ink-700">{t.hours.value}</p>
                  </div>
                </div>

                {/* Map placeholder */}
                <div
                  className="rounded-lg overflow-hidden border border-[#E4DCCB] flex items-center justify-center"
                  style={{ height: 220, background: '#F0E8D8' }}
                >
                  <span className="text-sm text-ink-500 font-medium">Bản đồ</span>
                </div>
              </div>
            </AnimateOnScroll>

            {/* Contact form */}
            <AnimateOnScroll delay={100}>
              <div className="bg-off-white rounded-xl p-8 border border-[#E4DCCB]">
                <h2 className="font-display font-semibold text-xl text-ink-900 mb-6">
                  {t.form.heading}
                </h2>
                <form
                  className="flex flex-col gap-4"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <div>
                    <label className="block text-xs font-semibold text-ink-500 mb-1.5 uppercase tracking-wide">
                      {t.form.name}
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 text-sm bg-white border border-[#E4DCCB] rounded-md text-ink-700 placeholder:text-ink-400 focus:outline-none focus:border-olive transition-colors"
                      placeholder={t.form.name}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-ink-500 mb-1.5 uppercase tracking-wide">
                      {t.form.phone}
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 text-sm bg-white border border-[#E4DCCB] rounded-md text-ink-700 placeholder:text-ink-400 focus:outline-none focus:border-olive transition-colors"
                      placeholder="0979 80 4343"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-ink-500 mb-1.5 uppercase tracking-wide">
                      {t.form.message}
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 text-sm bg-white border border-[#E4DCCB] rounded-md text-ink-700 placeholder:text-ink-400 focus:outline-none focus:border-olive transition-colors resize-none"
                      placeholder={t.form.message}
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 bg-olive text-cream font-semibold text-sm rounded-pill hover:bg-olive-600 transition-colors duration-200"
                  >
                    {t.form.submit}
                  </button>
                  <p className="text-xs text-ink-400 text-center">{t.form.note}</p>
                </form>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>
    </>
  )
}
