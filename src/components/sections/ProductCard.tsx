'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Minus, Plus, Check } from 'lucide-react'
import { useLang } from '@/context/LanguageContext'
import { useCart } from '@/context/CartContext'
import { content } from '@/lib/content'
import type { Product } from '@/lib/data/products'
import { toppings, formatPrice } from '@/lib/data/products'

interface Props {
  product: Product
}

export default function ProductCard({ product }: Props) {
  const { lang } = useLang()
  const { addToCart } = useCart()
  const t = content.products[lang]
  const [qty, setQty] = useState(1)
  const [selectedToppings, setSelectedToppings] = useState<string[]>([])
  const [added, setAdded] = useState(false)

  function toggleTopping(id: string) {
    setSelectedToppings(prev =>
      prev.includes(id) ? prev.filter(t => t !== id) : [...prev, id]
    )
  }

  function handleAddToCart() {
    addToCart(product.id, qty, selectedToppings)
    setAdded(true)
    setTimeout(() => setAdded(false), 1500)
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

        {/* Signature badge */}
        {product.signature && (
          <div className="absolute top-3 left-3">
            <span className="text-[11px] font-semibold px-2.5 py-1 rounded-pill bg-forest text-cream">
              Signature
            </span>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="flex flex-col flex-1 p-4 gap-3">
        <h3 className="font-display font-semibold text-[15px] text-ink-900 leading-snug">
          {product.name[lang]}
        </h3>

        {product.description[lang] && (
          <p className="text-xs leading-relaxed text-ink-500 -mt-1">
            {product.description[lang]}
          </p>
        )}

        <span className="font-semibold text-[15px] text-ink-900">
          {formatPrice(product.price, lang)}
        </span>

        {/* Toppings */}
        <div className="border-t border-[#F0EBE1] pt-3">
          <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-ink-400 mb-2">
            {lang === 'vi' ? 'Topping' : 'Toppings'}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {toppings.map(top => {
              const selected = selectedToppings.includes(top.id)
              return (
                <button
                  key={top.id}
                  onClick={() => toggleTopping(top.id)}
                  className={`text-[11px] px-2.5 py-1 rounded-pill border transition-colors duration-150 ${
                    selected
                      ? 'bg-forest text-cream border-forest'
                      : 'border-[#E4DCCB] text-ink-500 hover:border-forest/40'
                  }`}
                >
                  {top.name[lang]}
                </button>
              )
            })}
          </div>
        </div>

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
          className={`w-full py-3 text-sm font-semibold rounded-pill transition-all duration-200 active:scale-[0.98] flex items-center justify-center gap-2 ${
            added
              ? 'bg-olive text-cream'
              : 'bg-forest text-cream hover:bg-ink-900'
          }`}
        >
          {added && <Check size={15} strokeWidth={2.5} />}
          {added ? (lang === 'vi' ? 'Đã thêm!' : 'Added!') : t.addToCart}
        </button>
      </div>
    </div>
  )
}
