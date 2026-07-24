'use client'

import Image from 'next/image'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Minus, Plus } from 'lucide-react'
import { useLang } from '@/context/LanguageContext'
import { useCart } from '@/context/CartContext'
import { content } from '@/lib/content'
import type { Product } from '@/lib/data/products'
import { formatPrice } from '@/lib/data/products'

interface Props {
  product: Product
}

export default function ProductCard({ product }: Props) {
  const { lang } = useLang()
  const { addToCart } = useCart()
  const router = useRouter()
  const t = content.products[lang]
  const [qty, setQty] = useState(1)

  function handleAddToCart() {
    addToCart(product.id, qty)
    router.push('/dat-hang')
  }

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

        <span className="font-semibold text-[15px] text-ink-900">
          {formatPrice(product.price)}
        </span>

        {/* Qty stepper */}
        <div className="flex items-center gap-0 self-start border border-[#E4DCCB] rounded-pill overflow-hidden">
          <button
            onClick={() => setQty(q => Math.max(1, q - 1))}
            aria-label="Giảm số lượng"
            className="w-10 h-10 flex items-center justify-center text-ink-700 hover:bg-[#F0EBE1] transition-colors active:bg-[#E4DCCB]"
          >
            <Minus size={14} strokeWidth={2} />
          </button>
          <span className="w-8 text-center text-[15px] font-semibold text-ink-900 select-none">
            {qty}
          </span>
          <button
            onClick={() => setQty(q => q + 1)}
            aria-label="Tăng số lượng"
            className="w-10 h-10 flex items-center justify-center text-ink-700 hover:bg-[#F0EBE1] transition-colors active:bg-[#E4DCCB]"
          >
            <Plus size={14} strokeWidth={2} />
          </button>
        </div>

        {/* Add to cart */}
        <button
          onClick={handleAddToCart}
          className="w-full py-3 text-sm font-semibold bg-forest text-cream rounded-pill hover:bg-ink-900 transition-colors duration-200 active:scale-[0.98]"
        >
          {t.addToCart}
        </button>
      </div>
    </div>
  )
}
