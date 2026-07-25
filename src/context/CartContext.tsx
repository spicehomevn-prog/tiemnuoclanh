'use client'

import { createContext, useContext, useState, useEffect, useCallback, useMemo } from 'react'

export interface CartItem {
  productId: string
  quantity: number
  toppings: string[]
  requests: string[]
}

interface CartContextValue {
  cart: CartItem[]
  addToCart: (productId: string, qty: number, toppings: string[], requests: string[]) => void
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
      if (stored) {
        const parsed = JSON.parse(stored)
        // Migrate old cart items that may lack toppings field
        setCart(parsed.map((item: CartItem) => ({ ...item, toppings: item.toppings ?? [], requests: item.requests ?? [] })))
      }
    } catch {
      localStorage.removeItem('lanh-cart')
    }
  }, [])

  useEffect(() => {
    if (mounted) localStorage.setItem('lanh-cart', JSON.stringify(cart))
  }, [cart, mounted])

  const addToCart = useCallback((productId: string, qty: number, toppings: string[], requests: string[]) => {
    setCart(prev => {
      const existing = prev.find(item => item.productId === productId)
      if (existing) {
        return prev.map(item =>
          item.productId === productId
            ? { ...item, quantity: item.quantity + qty, toppings, requests }
            : item
        )
      }
      return [...prev, { productId, quantity: qty, toppings, requests }]
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

  const totalItems = useMemo(
    () => cart.reduce((sum, item) => sum + item.quantity, 0),
    [cart]
  )

  const contextValue = useMemo(
    () => ({ cart, addToCart, updateQty, removeFromCart, clearCart, totalItems }),
    [cart, addToCart, updateQty, removeFromCart, clearCart, totalItems]
  )

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used inside CartProvider')
  return ctx
}
