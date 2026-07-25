'use client'

import { useState, useEffect } from 'react'
import { useLang } from '@/context/LanguageContext'
import { categories } from '@/lib/data/products'

const sections = [
  { id: 'must-try', label: { vi: 'Must Try', en: 'Must Try' } },
  ...categories.map(c => ({ id: c.id, label: c.name })),
]

export default function CategoryNav() {
  const { lang } = useLang()
  const [active, setActive] = useState('must-try')

  useEffect(() => {
    const observers: IntersectionObserver[] = []
    sections.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (!el) return
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id) },
        { rootMargin: '-80px 0px -55% 0px', threshold: 0 }
      )
      observer.observe(el)
      observers.push(observer)
    })
    return () => observers.forEach(o => o.disconnect())
  }, [])

  function handleClick(id: string) {
    const el = document.getElementById(id)
    if (!el) return
    const offset = 74 + 52
    const top = el.getBoundingClientRect().top + window.scrollY - offset
    window.scrollTo({ top, behavior: 'smooth' })
  }

  return (
    <div className="sticky top-[74px] z-20 bg-off-white/95 backdrop-blur-sm border-b border-[#E4DCCB]">
      <div className="max-w-container mx-auto px-4">
        <div className="flex items-center gap-1 overflow-x-auto scrollbar-hide py-2.5">
          {sections.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => handleClick(id)}
              className={`flex-shrink-0 px-4 py-1.5 text-[13px] font-semibold rounded-pill transition-colors duration-150 whitespace-nowrap ${
                active === id
                  ? 'bg-forest text-cream'
                  : 'text-ink-500 hover:text-ink-900 hover:bg-[#F0EBE1]'
              }`}
            >
              {label[lang]}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
