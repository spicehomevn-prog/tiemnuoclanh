'use client'

import { createContext, useContext, useState, useEffect, useCallback, useMemo } from 'react'

export interface CartItem {
  id: string
  productId: string
  quantity: number
  toppings: string[]
  requests: string[]
}

interface CartContextValue {
  cart: CartItem[]
  addToCart: (productId: string, qty: number, toppings: string[], requests: string[]) => void
  updateQty: (id: string, qty: number) => void
  removeFromCart: (id: string) => void
  clearCart: () => void
  totalItems: number
}

const CartContext = createContext<CartContextValue | null>(null)

function makeId(productId: string) {
  return `${productId}-${Date.now()}-${Math.random().toString(36).slice(2)}`
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    try {
      const stored = localStorage.getItem('lanh-cart')
      if (stored) {
        const parsed = JSON.parse(stored)
        setCart(parsed.map((item: CartItem) => ({
          ...item,
          id: item.id ?? makeId(item.productId),
          toppings: item.toppings ?? [],
          requests: item.requests ?? [],
        })))
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
      const sortedToppings = [...toppings].sort()
      const sortedRequests = [...requests].sort()
      const existing = prev.find(item =>
        item.productId === productId &&
        JSON.stringify([...item.toppings].sort()) === JSON.stringify(sortedToppings) &&
        JSON.stringify([...item.requests].sort()) === JSON.stringify(sortedRequests)
      )
      if (existing) {
        return prev.map(item =>
          item.id === existing.id ? { ...item, quantity: item.quantity + qty } : item
        )
      }
      return [...prev, { id: makeId(productId), productId, quantity: qty, toppings, requests }]
    })
  }, [])

  const updateQty = useCallback((id: string, qty: number) => {
    if (qty <= 0) {
      setCart(prev => prev.filter(item => item.id !== id))
    } else {
      setCart(prev =>
        prev.map(item => item.id === id ? { ...item, quantity: qty } : item)
      )
    }
  }, [])

  const removeFromCart = useCallback((id: string) => {
    setCart(prev => prev.filter(item => item.id !== id))
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
