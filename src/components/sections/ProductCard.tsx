'use client'

import Image from 'next/image'
import { useLang } from '@/context/LanguageContext'
import { content } from '@/lib/content'
import type { Product } from '@/lib/data/products'
import { formatPrice } from '@/lib/data/products'

interface Props {
  product: Product
}

export default function ProductCard({ product }: Props) {
  const { lang } = useLang()
  const t = content.products[lang]

  return (
    <div className="group flex flex-col bg-white rounded-sm overflow-hidden border border-[#E4DCCB] hover:shadow-md transition-shadow duration-300">
      {/* Image / Swatch */}
      <div
        className="relative w-full flex items-center justify-center"
        style={{ aspectRatio: '1/1', background: product.swatch }}
      >
        {product.imageSrc ? (
          <Image
            src={product.imageSrc}
            alt={product.name[lang]}
            fill
            className="object-contain p-6"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            loading="lazy"
          />
        ) : (
          <div className="w-[40%] h-[70%] rounded-t-[14px] rounded-b-[8px] border border-white/40 bg-white/20" />
        )}

        {/* Badge */}
        {product.badge && (
          <div className="absolute top-3 left-3">
            <span className="text-[11px] font-semibold px-2.5 py-1 rounded-pill bg-forest text-cream">
              {product.badge[lang]}
            </span>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="flex flex-col flex-1 p-4 gap-3">
        <div className="flex-1">
          <h3 className="font-display font-semibold text-[15px] text-ink-900 leading-snug">
            {product.name[lang]}
          </h3>
          <p className="mt-1.5 text-xs leading-relaxed text-ink-500 line-clamp-2">
            {product.description[lang]}
          </p>
        </div>

        <div className="flex items-center justify-between mt-1">
          <span className="font-semibold text-[15px] text-ink-900">
            {formatPrice(product.price)}
          </span>
          <button className="text-sm font-semibold px-4 py-1.5 border border-ink-900 text-ink-900 rounded-pill hover:bg-ink-900 hover:text-cream transition-colors duration-200">
            {t.buyNow}
          </button>
        </div>
      </div>
    </div>
  )
}
