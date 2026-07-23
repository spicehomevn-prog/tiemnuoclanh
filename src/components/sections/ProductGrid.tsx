'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { useLang } from '@/context/LanguageContext'
import { content } from '@/lib/content'
import { products } from '@/lib/data/products'
import ProductCard from './ProductCard'
import SectionLabel from '@/components/ui/SectionLabel'

interface Props {
  limit?: number
  showHeader?: boolean
}

export default function ProductGrid({ limit, showHeader = true }: Props) {
  const { lang } = useLang()
  const t = content.products[lang]
  const displayed = limit ? products.slice(0, limit) : products

  return (
    <section className="py-20 md:py-28 bg-off-white">
      <div className="max-w-container mx-auto px-6">
        {showHeader && (
          <div className="text-center mb-11">
            <SectionLabel rule={false} className="justify-center">{t.eyebrow}</SectionLabel>
            <h2 className="font-display font-semibold text-[clamp(1.625rem,3vw,2.375rem)] text-ink-900 tracking-[-0.01em] mt-3 mb-4">
              {t.heading}
            </h2>
            <Link
              href="/san-pham"
              className="inline-flex items-center gap-2 text-[15px] font-semibold text-olive hover:text-olive-600 transition-colors duration-150"
            >
              <span
                className="w-8 h-8 rounded-pill border border-olive flex items-center justify-center hover:bg-olive hover:text-cream transition-colors duration-200"
              >
                <ArrowRight size={14} strokeWidth={2} />
              </span>
              {t.viewAll}
            </Link>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {displayed.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
