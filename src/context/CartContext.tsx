'use client'

import { createContext, useContext, useState, useEffect, useCallback } from 'react'

interface CartItem {
  productId: string
  quantity: number
}

interface CartContextValue {
  cart: CartItem[]
  addToCart: (productId: string, qty: number) => void
  updateQty: (productId: string, qty: number) => void
  removeFromCart: (productId: string) => void
  clearCart: () => void
  totalItems: number
}

const CartContext = createContext<CartContextValue | null>(null)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    try {
      const stored = localStorage.getItem('lanh-cart')
      if (stored) setCart(JSON.parse(stored))
    } catch {}
  }, [])

  useEffect(() => {
    if (mounted) {
      localStorage.setItem('lanh-cart', JSON.stringify(cart))
    }
  }, [cart, mounted])

  const addToCart = useCallback((productId: string, qty: number) => {
    setCart(prev => {
      const existing = prev.find(item => item.productId === productId)
      if (existing) {
        return prev.map(item =>
          item.productId === productId
            ? { ...item, quantity: item.quantity + qty }
            : item
        )
      }
      return [...prev, { productId, quantity: qty }]
    })
  }, [])

  const updateQty = useCallback((productId: string, qty: number) => {
    if (qty <= 0) {
      setCart(prev => prev.filter(item => item.productId !== productId))
    } else {
      setCart(prev =>
        prev.map(item =>
          item.productId === productId ? { ...item, quantity: qty } : item
        )
      )
    }
  }, [])

  const removeFromCart = useCallback((productId: string) => {
    setCart(prev => prev.filter(item => item.productId !== productId))
  }, [])

  const clearCart = useCallback(() => setCart([]), [])

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <CartContext.Provider value={{ cart, addToCart, updateQty, removeFromCart, clearCart, totalItems }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used inside CartProvider')
  return ctx
}
