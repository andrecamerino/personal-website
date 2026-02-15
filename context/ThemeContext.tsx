'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

type Theme = 'light' | 'dark'

interface ThemeContextType {
  currentTheme: Theme
  setTheme: (theme: Theme) => void
  toggleTheme: () => void
  formData: Record<string, string>
  setFormData: (data: Record<string, string>) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  // Start with defaults
  const [currentTheme, setCurrentTheme] = useState<Theme>('dark')
  const [formData, setFormData] = useState<Record<string, string>>({})
  const [hydrated, setHydrated] = useState(false) // only true after reading localStorage

  // Load persisted state **after first render**
  useEffect(() => {
    try {
      const savedTheme = localStorage.getItem('currentView') as Theme
      const savedForm = localStorage.getItem('formData')
      if (savedTheme) setCurrentTheme(savedTheme)
      if (savedForm) setFormData(JSON.parse(savedForm))
    } catch (err) {
      console.error('Failed to read from localStorage', err)
    } finally {
      setHydrated(true)
    }
  }, [])

  // Sync to localStorage whenever state changes, only after hydration
  useEffect(() => {
    if (!hydrated) return
    document.documentElement.setAttribute('data-theme', currentTheme)
    localStorage.setItem('currentView', currentTheme)
    localStorage.setItem('formData', JSON.stringify(formData))
  }, [currentTheme, formData, hydrated])

  const setThemeIfNotCurrent = (theme: Theme) => {
    if (theme !== currentTheme) setCurrentTheme(theme)
  }

  const toggleTheme = () => {
    setCurrentTheme(currentTheme === 'light' ? 'dark' : 'light')
  }

  // **Render immediately** with defaults to avoid blocking
  return (
    <ThemeContext.Provider
      value={{
        currentTheme,
        setTheme: setThemeIfNotCurrent,
        toggleTheme,
        formData,
        setFormData,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) throw new Error('useTheme must be used within ThemeProvider')
  return context
}