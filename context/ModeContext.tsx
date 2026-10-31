'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

export type Mode = 'developer' | 'creative'

interface ModeContextType {
  mode: Mode
  isDev: boolean
  setMode: (mode: Mode) => void
}

const ModeContext = createContext<ModeContextType | undefined>(undefined)

const isMode = (value: string | null): value is Mode =>
  value === 'developer' || value === 'creative'

export const ModeProvider = ({ children }: { children: ReactNode }) => {
  const [mode, setMode] = useState<Mode>('developer')
  const [hydrated, setHydrated] = useState(false) // true after reading the URL / localStorage

  // Load the starting mode after first render: ?view= param wins over the saved preference
  useEffect(() => {
    try {
      const viewParam = new URLSearchParams(window.location.search).get('view')
      const savedMode = localStorage.getItem('currentView')

      if (viewParam === 'creative') setMode('creative')
      else if (viewParam === 'dev' || viewParam === 'developer') setMode('developer')
      else if (isMode(savedMode)) setMode(savedMode)
    } catch (err) {
      console.error('Failed to read from localStorage', err)
    } finally {
      setHydrated(true)
    }
  }, [])

  // Sync to the DOM and localStorage whenever the mode changes, only after hydration
  useEffect(() => {
    if (!hydrated) return
    document.documentElement.setAttribute('data-mode', mode)
    localStorage.setItem('currentView', mode)
  }, [mode, hydrated])

  return (
    <ModeContext.Provider value={{ mode, isDev: mode === 'developer', setMode }}>
      {children}
    </ModeContext.Provider>
  )
}

export const useMode = () => {
  const context = useContext(ModeContext)
  if (!context) throw new Error('useMode must be used within ModeProvider')
  return context
}
