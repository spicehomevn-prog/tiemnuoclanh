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
  const [selectedRequests, setSelectedRequests] = useState<string[]>([])
  const [upsize, setUpsize] = useState(false)
  const [added, setAdded] = useState(false)

  const specialRequests = lang === 'vi'
    ? ['Không đường', 'Ít đường', 'Thêm đường', 'Không đá', 'Ít đá']
    : ['No sugar', 'Less sugar', 'Extra sugar', 'No ice', 'Less ice']

  function toggleTopping(id: string) {
    setSelectedToppings(prev =>
      prev.includes(id) ? prev.filter(t => t !== id) : [...prev, id]
    )
  }

  function toggleRequest(r: string) {
    setSelectedRequests(prev =>
      prev.includes(r) ? prev.filter(x => x !== r) : [...prev, r]
    )
  }

  function handleAddToCart() {
    addToCart(product.id, qty, selectedToppings, selectedRequests, upsize)
    setAdded(true)
    setTimeout(() => setAdded(false), 1500)
    setSelectedToppings([])
    setSelectedRequests([])
    setUpsize(false)
    setQty(1)
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
            className="object-cover"
            style={{ objectPosition: product.imagePosition ?? 'center' }}
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
              Must Try
            </span>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="flex flex-col flex-1 p-4 gap-3">
        <h3 className="font-display font-semibold text-[19px] text-ink-900 leading-snug">
          {product.name[lang]}
        </h3>

        {product.description[lang] && (
          <p className="text-[15px] leading-relaxed text-ink-500 -mt-1">
            {product.description[lang]}
          </p>
        )}

        <span className="font-semibold text-[19px] text-ink-900">
          {formatPrice(product.price, lang)}
        </span>

        {/* Toppings — always visible grid */}
        <div className="border-t border-[#F0EBE1] pt-3">
          <p className="text-[14px] font-semibold uppercase tracking-[0.08em] text-ink-400 mb-2">
            {lang === 'vi' ? 'Topping' : 'Toppings'}
          </p>
          <div className="grid grid-cols-2 gap-1.5">
            {toppings.map(top => {
              const selected = selectedToppings.includes(top.id)
              return (
                <button
                  key={top.id}
                  onClick={() => toggleTopping(top.id)}
                  className={`flex items-center gap-2 p-2 rounded-lg border text-left transition-colors duration-150 ${
                    selected
                      ? 'border-forest bg-forest/5'
                      : 'border-transparent hover:border-[#E4DCCB] hover:bg-[#F7F4EE]'
                  }`}
                >
                  {/* Topping image */}
                  <div className="relative w-12 h-12 flex-shrink-0 rounded-md overflow-hidden bg-[#F0EBE1]">
                    {top.imageSrc ? (
                      <Image
                        src={top.imageSrc}
                        alt={top.name[lang]}
                        fill
                        className="object-cover"
                        sizes="48px"
                      />
                    ) : (
                      <div className="w-full h-full bg-[#E5E1D6]" />
                    )}
                    {selected && (
                      <div className="absolute inset-0 bg-forest/40 flex items-center justify-center">
                        <Check size={14} strokeWidth={2.5} className="text-white" />
                      </div>
                    )}
                  </div>

                  {/* Name + price */}
                  <div className="min-w-0">
                    <p className="text-[12px] font-medium text-ink-900 leading-snug line-clamp-2">
                      {top.name[lang]}
                    </p>
                    <p className="text-[11px] text-ink-400 mt-0.5">
                      +{(top.price / 1000).toLocaleString('vi-VN')}k
                    </p>
                  </div>
                </button>
              )
            })}
          </div>
        </div>

        {/* Upsize */}
        <div className="border-t border-[#F0EBE1] pt-3">
          <button
            onClick={() => setUpsize(u => !u)}
            className={`w-full flex items-center justify-between px-4 py-3.5 rounded-xl border-2 transition-all duration-150 ${
              upsize
                ? 'border-[#F5A800] bg-[#FFD000] shadow-sm'
                : 'border-[#FFD000] bg-[#FFF7D6] hover:bg-[#FFE84D]'
            }`}
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl">🥤</span>
              <div className="text-left">
                <p className="text-[15px] font-bold text-[#5C3D00] leading-snug">
                  {lang === 'vi' ? 'UPSIZE LY LỚN' : 'UPSIZE LARGE CUP'}
                </p>
                <p className="text-[13px] font-semibold text-[#8A5C00]">+10.000đ</p>
              </div>
            </div>
            <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors ${
              upsize ? 'bg-[#F5A800] border-[#F5A800]' : 'border-[#F5A800] bg-white'
            }`}>
              {upsize && <Check size={13} strokeWidth={3} className="text-white" />}
            </div>
          </button>
        </div>

        {/* Special requests */}
        <div className="border-t border-[#F0EBE1] pt-3">
          <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-ink-400 mb-2">
            {lang === 'vi' ? 'Yêu cầu riêng' : 'Special requests'}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {specialRequests.map(r => {
              const selected = selectedRequests.includes(r)
              return (
                <button
                  key={r}
                  onClick={() => toggleRequest(r)}
                  className={`text-[14px] px-2.5 py-1.5 rounded-pill border transition-colors duration-150 ${
                    selected
                      ? 'bg-terracotta text-white border-terracotta'
                      : 'border-[#E4DCCB] text-ink-500 hover:border-terracotta/40'
                  }`}
                >
                  {r}
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
          <span className="w-8 text-center text-[19px] font-semibold text-ink-900 select-none">
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
          className={`w-full py-3 text-[17px] font-semibold rounded-pill transition-all duration-200 active:scale-[0.98] flex items-center justify-center gap-2 ${
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
