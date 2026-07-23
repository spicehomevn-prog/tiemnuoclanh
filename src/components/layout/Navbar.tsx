'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { useLang } from '@/context/LanguageContext'
import { content } from '@/lib/content'
import Logo from '@/components/ui/Logo'

export default function Navbar() {
  const { lang, setLang } = useLang()
  const t = content.nav[lang]
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = [
    { label: t.shop, href: '/san-pham' },
    { label: t.story, href: '/cau-chuyen' },
    { label: t.contact, href: '/lien-he' },
  ]

  return (
    <>
      {/* Promo bar */}
      <div className="bg-sage-100 text-forest text-center text-[12.5px] font-semibold tracking-[0.04em] py-2 px-4">
        {content.promo[lang]}
      </div>

      <header
        className={`sticky top-0 z-30 transition-all duration-300 ${
          scrolled
            ? 'bg-off-white/95 backdrop-blur-md shadow-xs border-b border-[#E4DCCB]'
            : 'bg-off-white/85 backdrop-blur-md border-b border-[#E4DCCB]'
        }`}
      >
        <div className="max-w-container mx-auto px-6 h-[74px] flex items-center justify-between gap-6">
          {/* Left nav */}
          <nav className="hidden md:flex items-center gap-7 flex-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[15px] font-medium text-ink-700 hover:text-forest transition-colors duration-150"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Logo center */}
          <Link href="/" className="flex-shrink-0" aria-label="Lành — trang chủ">
            <Logo size={90} />
          </Link>

          {/* Right actions */}
          <div className="hidden md:flex items-center gap-4 flex-1 justify-end">
            {/* Language toggle */}
            <div className="flex items-center gap-1 text-xs font-semibold">
              <button
                onClick={() => setLang('vi')}
                className={`px-2 py-1 rounded-pill transition-colors duration-150 ${
                  lang === 'vi'
                    ? 'bg-forest text-cream'
                    : 'text-ink-500 hover:text-ink-700'
                }`}
              >
                VI
              </button>
              <span className="text-ink-400/50">|</span>
              <button
                onClick={() => setLang('en')}
                className={`px-2 py-1 rounded-pill transition-colors duration-150 ${
                  lang === 'en'
                    ? 'bg-forest text-cream'
                    : 'text-ink-500 hover:text-ink-700'
                }`}
              >
                EN
              </button>
            </div>

            {/* CTA */}
            <Link
              href="/lien-he"
              className="px-5 py-2 text-sm font-semibold border border-ink-900 text-ink-900 rounded-pill hover:bg-ink-900 hover:text-cream transition-colors duration-200"
            >
              {t.order}
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-ink-700"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden bg-off-white border-t border-[#E4DCCB] px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-base font-medium text-ink-700 py-1"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center gap-3 pt-2 border-t border-[#E4DCCB]">
              <span className="text-sm text-ink-500">Ngôn ngữ:</span>
              <button
                onClick={() => setLang('vi')}
                className={`text-sm px-3 py-1 rounded-pill font-semibold transition-colors ${
                  lang === 'vi' ? 'bg-forest text-cream' : 'text-ink-500 border border-[#E4DCCB]'
                }`}
              >
                VI
              </button>
              <button
                onClick={() => setLang('en')}
                className={`text-sm px-3 py-1 rounded-pill font-semibold transition-colors ${
                  lang === 'en' ? 'bg-forest text-cream' : 'text-ink-500 border border-[#E4DCCB]'
                }`}
              >
                EN
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  )
}
