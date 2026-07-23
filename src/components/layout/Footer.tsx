'use client'

import Link from 'next/link'
import { Instagram, Facebook, Youtube } from 'lucide-react'
import { useLang } from '@/context/LanguageContext'
import { content } from '@/lib/content'
import Logo from '@/components/ui/Logo'

export default function Footer() {
  const { lang } = useLang()
  const t = content.footer[lang]

  return (
    <footer className="bg-forest text-cream mt-6">
      <div className="max-w-container mx-auto px-6 pt-16 pb-10">
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10">
          {/* Brand col */}
          <div>
            <Logo size={90} color="#F3EEE2" leafColor="#E0A183" />
            <p className="mt-4 mb-5 text-sm leading-relaxed text-cream-dim max-w-[30ch]">
              {t.tagline}
            </p>
            <div className="flex flex-wrap gap-2">
              {t.badges.map((badge) => (
                <span
                  key={badge}
                  className="text-xs font-medium px-3 py-1 rounded-pill border border-cream/20 text-cream/70"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {t.columns.map((col) => (
            <div key={col.heading}>
              <div className="text-xs font-semibold uppercase tracking-[0.06em] text-cream mb-4">
                {col.heading}
              </div>
              <div className="flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-sm text-cream-dim hover:text-cream transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div className="mt-12 pt-8 border-t border-cream/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          {/* Newsletter */}
          <div className="flex-1 max-w-sm">
            <p className="text-sm text-cream mb-3">{t.newsletter.label}</p>
            <form
              className="flex gap-0"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder={t.newsletter.placeholder}
                className="flex-1 min-w-0 px-4 py-2.5 text-sm bg-transparent border border-cream/20 rounded-l-pill text-cream placeholder:text-cream-dim focus:outline-none focus:border-cream/50 transition-colors"
              />
              <button
                type="submit"
                className="px-5 py-2.5 text-sm font-semibold bg-cream text-forest rounded-r-pill hover:bg-beige transition-colors duration-200 flex-shrink-0"
              >
                {t.newsletter.button}
              </button>
            </form>
          </div>

          {/* Social */}
          <div className="flex gap-2">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-9 h-9 rounded-pill border border-cream/20 flex items-center justify-center text-cream/70 hover:text-cream hover:border-cream/40 transition-colors duration-150"
            >
              <Instagram size={15} strokeWidth={1.5} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-9 h-9 rounded-pill border border-cream/20 flex items-center justify-center text-cream/70 hover:text-cream hover:border-cream/40 transition-colors duration-150"
            >
              <Facebook size={15} strokeWidth={1.5} />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="w-9 h-9 rounded-pill border border-cream/20 flex items-center justify-center text-cream/70 hover:text-cream hover:border-cream/40 transition-colors duration-150"
            >
              <Youtube size={15} strokeWidth={1.5} />
            </a>
          </div>
        </div>

        <p className="mt-7 text-[12.5px] text-cream-dim">{t.copyright}</p>
      </div>
    </footer>
  )
}
