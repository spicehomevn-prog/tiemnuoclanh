'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { useLang } from '@/context/LanguageContext'
import { content } from '@/lib/content'
import { products, categories } from '@/lib/data/products'
import ProductCard from './ProductCard'
import SectionLabel from '@/components/ui/SectionLabel'

interface Props {
  showHeader?: boolean
  showAll?: boolean
}

export default function ProductGrid({ showHeader = true, showAll = false }: Props) {
  const { lang } = useLang()
  const t = content.products[lang]

  if (showAll) {
    const signatureProducts = products.filter(p => p.signature)
    return (
      <section className="py-20 md:py-28 bg-off-white">
        <div className="max-w-container mx-auto px-6 flex flex-col gap-16">
          {/* SIGNATURE */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-forest px-3 py-1.5 bg-forest/8 rounded-pill border border-forest/20">
                Signature
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {signatureProducts.map(p => <ProductCard key={p.id} product={p} />)}
            </div>
          </div>

          {/* Each category */}
          {categories.map(cat => {
            const catProducts = products.filter(p => p.categoryId === cat.id)
            if (catProducts.length === 0) return null
            return (
              <div key={cat.id}>
                <div className="flex items-center gap-4 mb-8">
                  <h2 className="text-[11px] font-bold uppercase tracking-[0.14em] text-ink-500">
                    {cat.name[lang]}
                  </h2>
                  <div className="flex-1 h-px bg-[#E4DCCB]" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {catProducts.map(p => <ProductCard key={p.id} product={p} />)}
                </div>
              </div>
            )
          })}
        </div>
      </section>
    )
  }

  // Homepage: signature items only
  const featured = products.filter(p => p.signature)
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
              <span className="w-8 h-8 rounded-pill border border-olive flex items-center justify-center hover:bg-olive hover:text-cream transition-colors duration-200">
                <ArrowRight size={14} strokeWidth={2} />
              </span>
              {t.viewAll}
            </Link>
          </div>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      </div>
    </section>
  )
}
