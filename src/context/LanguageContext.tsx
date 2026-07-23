'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import type { Lang } from '@/lib/content'

interface LanguageContextValue {
  lang: Lang
  setLang: (lang: Lang) => void
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: 'vi',
  setLang: () => {},
})

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>('vi')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('lanh-lang') as Lang | null
    if (saved === 'vi' || saved === 'en') {
      setLangState(saved)
    }
    setMounted(true)
  }, [])

  function setLang(next: Lang) {
    setLangState(next)
    localStorage.setItem('lanh-lang', next)
  }

  return (
    <LanguageContext.Provider value={{ lang: mounted ? lang : 'vi', setLang }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLang() {
  return useContext(LanguageContext)
}
