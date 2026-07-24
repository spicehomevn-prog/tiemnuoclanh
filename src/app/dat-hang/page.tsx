'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ShoppingBag, Trash2, Copy, CheckCheck, ArrowRight } from 'lucide-react'
import { useLang } from '@/context/LanguageContext'
import { useCart } from '@/context/CartContext'
import { content } from '@/lib/content'
import { products, formatPrice } from '@/lib/data/products'

export default function DatHangPage() {
  const { lang } = useLang()
  const { cart, updateQty, removeFromCart } = useCart()
  const t = content.datHang[lang]

  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [copied, setCopied] = useState(false)
  const [sent, setSent] = useState(false)
  const [showErrors, setShowErrors] = useState(false)
  const [showModal, setShowModal] = useState(false)

  const canSend = name.trim() !== '' && phone.trim() !== ''

  const cartItems = cart
    .map(item => {
      const product = products.find(p => p.id === item.productId)
      return product ? { ...item, product } : null
    })
    .filter((item): item is NonNullable<typeof item> => item !== null)

  const total = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  )

  const orderText = [
    'ĐƠN HÀNG — Tiệm nước Lành',
    `Tên: ${name || '—'}`,
    `SĐT: ${phone || '—'}`,
    '---',
    ...cartItems.map(
      item =>
        `- ${item.product.name[lang]} x${item.quantity} = ${formatPrice(item.product.price * item.quantity)}`
    ),
    '---',
    `TỔNG: ${formatPrice(total)}`,
  ].join('\n')

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(orderText)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {}
  }

  // Empty state
  if (cartItems.length === 0 && !sent) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center px-6 py-20 text-center gap-6">
        <ShoppingBag size={48} strokeWidth={1} className="text-ink-400" />
        <div>
          <h1 className="font-display text-2xl font-semibold text-ink-900">
            {t.emptyCart}
          </h1>
          <p className="mt-2 text-sm text-ink-500">{t.emptyCartSub}</p>
        </div>
        <Link
          href="/san-pham"
          className="flex items-center gap-2 text-sm font-semibold text-forest hover:text-olive transition-colors"
        >
          {t.emptyCartLink} <ArrowRight size={15} />
        </Link>
      </div>
    )
  }

  return (
    <div className="bg-off-white min-h-screen">

      {/* Modal */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center px-4 pb-6 sm:pb-0"
          style={{ backgroundColor: 'rgba(0,0,0,0.45)' }}
        >
          <div className="bg-white rounded-2xl w-full max-w-sm p-6 flex flex-col gap-5 shadow-xl">
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <span className="text-2xl">✅</span>
                <p className="text-base font-semibold text-forest leading-snug">
                  {lang === 'vi' ? 'Đã tự động sao chép đơn hàng' : 'Order copied to clipboard'}
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">📋</span>
                <p className="text-sm text-ink-700 leading-relaxed">
                  {lang === 'vi'
                    ? 'Bạn chỉ cần bấm nút Dán vào ô tin nhắn sau khi mở Zalo'
                    : 'Just tap Paste into the message box after Zalo opens'}
                </p>
              </div>
            </div>
            <button
              onClick={() => {
                setShowModal(false)
                setSent(true)
                window.open('https://zalo.me/84979804343', '_blank', 'noopener,noreferrer')
              }}
              className="w-full py-4 text-base font-bold text-white rounded-xl transition-all active:scale-[0.98] hover:brightness-110 flex items-center justify-center gap-2"
              style={{ backgroundColor: '#0068FF' }}
            >
              {lang === 'vi' ? 'Tiếp tục → Mở Zalo' : 'Continue → Open Zalo'}
            </button>
          </div>
        </div>
      )}
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-10 md:py-16 flex flex-col gap-6">
        {/* Page title */}
        <h1 className="font-display text-3xl md:text-4xl font-semibold text-ink-900">
          {t.title}
        </h1>

        {/* Customer info */}
        <section id="customer-section" className="bg-white rounded-2xl border border-[#E4DCCB] p-5 sm:p-6 flex flex-col gap-4">
          <h2 className="text-xs font-semibold uppercase tracking-[0.1em] text-olive">
            {t.customerSection}
          </h2>
          <div className="flex flex-col gap-1">
            <input
              type="text"
              value={name}
              onChange={e => { setName(e.target.value); setShowErrors(false) }}
              placeholder={t.namePlaceholder + ' *'}
              className={`w-full px-4 py-3.5 text-base rounded-xl bg-off-white text-ink-900 placeholder:text-ink-400 focus:outline-none transition-colors border ${
                showErrors && !name.trim()
                  ? 'border-red-400 focus:border-red-400'
                  : 'border-[#E4DCCB] focus:border-forest/60'
              }`}
            />
            {showErrors && !name.trim() && (
              <p className="text-xs text-red-500 px-1">
                {lang === 'vi' ? 'Vui lòng nhập họ và tên' : 'Please enter your name'}
              </p>
            )}
          </div>
          <div className="flex flex-col gap-1">
            <input
              type="tel"
              inputMode="numeric"
              value={phone}
              onChange={e => { setPhone(e.target.value); setShowErrors(false) }}
              placeholder={t.phonePlaceholder + ' *'}
              className={`w-full px-4 py-3.5 text-base rounded-xl bg-off-white text-ink-900 placeholder:text-ink-400 focus:outline-none transition-colors border ${
                showErrors && !phone.trim()
                  ? 'border-red-400 focus:border-red-400'
                  : 'border-[#E4DCCB] focus:border-forest/60'
              }`}
            />
            {showErrors && !phone.trim() && (
              <p className="text-xs text-red-500 px-1">
                {lang === 'vi' ? 'Vui lòng nhập số điện thoại' : 'Please enter your phone number'}
              </p>
            )}
          </div>
        </section>

        {/* Cart items */}
        <section className="bg-white rounded-2xl border border-[#E4DCCB] p-5 sm:p-6 flex flex-col gap-4">
          <h2 className="text-xs font-semibold uppercase tracking-[0.1em] text-olive">
            {t.cartSection}
          </h2>
          <div className="flex flex-col">
            {cartItems.map(item => (
              <div
                key={item.productId}
                className="flex items-start gap-3 py-4 border-b border-[#F0EBE1] last:border-0 last:pb-0 first:pt-0"
              >
                {/* Swatch */}
                <div
                  className="w-12 h-12 rounded-xl flex-shrink-0 mt-0.5"
                  style={{ background: item.product.swatch }}
                />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-ink-900 leading-snug">
                    {item.product.name[lang]}
                  </p>
                  <p className="text-xs text-ink-500 mt-0.5">
                    {formatPrice(item.product.price)}
                  </p>
                  {/* Qty stepper */}
                  <div className="flex items-center gap-0 mt-3 border border-[#E4DCCB] rounded-full overflow-hidden w-fit">
                    <button
                      onClick={() => updateQty(item.productId, item.quantity - 1)}
                      className="w-10 h-10 flex items-center justify-center text-ink-700 hover:bg-[#F0EBE1] active:bg-[#E4DCCB] transition-colors"
                      aria-label="Giảm"
                    >
                      <span className="text-xl leading-none select-none">−</span>
                    </button>
                    <span className="w-8 text-center text-sm font-semibold text-ink-900 select-none">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQty(item.productId, item.quantity + 1)}
                      className="w-10 h-10 flex items-center justify-center text-ink-700 hover:bg-[#F0EBE1] active:bg-[#E4DCCB] transition-colors"
                      aria-label="Tăng"
                    >
                      <span className="text-xl leading-none select-none">+</span>
                    </button>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-2 flex-shrink-0 pt-0.5">
                  <span className="text-sm font-semibold text-ink-900 whitespace-nowrap">
                    {formatPrice(item.product.price * item.quantity)}
                  </span>
                  <button
                    onClick={() => removeFromCart(item.productId)}
                    className="text-ink-400 hover:text-red-500 transition-colors p-1.5 -mr-1"
                    aria-label={t.remove}
                  >
                    <Trash2 size={15} strokeWidth={1.5} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Total */}
          <div className="flex justify-between items-center pt-4 border-t border-[#E4DCCB]">
            <span className="text-sm font-medium text-ink-700">{t.total}</span>
            <span className="text-2xl font-semibold font-display text-ink-900">
              {formatPrice(total)}
            </span>
          </div>
        </section>

        {/* Copy + Zalo section */}
        <section className="flex flex-col gap-4">
          {/* Copy button */}
          <button
            onClick={handleCopy}
            className="w-full flex items-center justify-center gap-2 py-4 text-sm font-semibold border-2 border-forest text-forest rounded-xl hover:bg-forest/5 transition-colors active:scale-[0.98]"
          >
            {copied ? (
              <CheckCheck size={17} strokeWidth={2} />
            ) : (
              <Copy size={17} strokeWidth={2} />
            )}
            {copied ? t.copySuccess : t.copyButton}
          </button>

          {/* Instruction */}
          <p className="text-sm text-ink-500 text-center leading-relaxed">
            {t.instruction}
          </p>

          {/* Zalo button */}
          <button
            onClick={async () => {
              if (!canSend) {
                setShowErrors(true)
                document.getElementById('customer-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                return
              }
              try { await navigator.clipboard.writeText(orderText) } catch {}
              setCopied(true)
              setTimeout(() => setCopied(false), 2000)
              setShowModal(true)
            }}
            className="w-full flex items-center justify-center gap-3 py-4 text-base font-bold text-white rounded-xl shadow-md transition-all active:scale-[0.98] hover:brightness-110"
            style={{ backgroundColor: '#0068FF' }}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M12 2C6.477 2 2 6.162 2 11.307c0 2.74 1.3 5.19 3.347 6.85l-.82 3.027 3.14-1.164A10.63 10.63 0 0 0 12 20.614c5.523 0 10-4.162 10-9.307S17.523 2 12 2z"
                fill="white"
              />
            </svg>
            {t.zaloButton}
          </button>

          {/* Thank you message */}
          {sent && (
            <div className="text-center py-6 px-5 bg-sage-100 rounded-2xl border border-sage-200 mt-2">
              <p className="text-base font-semibold text-forest">{t.thankYou}</p>
              <p className="mt-1.5 text-sm text-ink-500 leading-relaxed">{t.thankYouSub}</p>
            </div>
          )}
        </section>
      </div>
    </div>
  )
}
