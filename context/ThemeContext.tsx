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
  const [mounted, setMounted] = useState(false) // <-- prevent SSR mismatch
  const [currentTheme, setCurrentTheme] = useState<Theme>('dark')
  const [formData, setFormData] = useState<Record<string, string>>({})

  useEffect(() => {
    // now safe to read localStorage
    const savedTheme = localStorage.getItem('currentView') as Theme
    const savedForm = localStorage.getItem('formData')
    setCurrentTheme(savedTheme ?? 'dark')
    setFormData(savedForm ? JSON.parse(savedForm) : {})
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return
    document.documentElement.setAttribute('data-theme', currentTheme)
    localStorage.setItem('currentView', currentTheme)
    localStorage.setItem('formData', JSON.stringify(formData))
  }, [currentTheme, formData, mounted])

  const setThemeIfNotCurrent = (theme: Theme) => {
    if (theme !== currentTheme) setCurrentTheme(theme)
  }

  const toggleTheme = () => {
    setCurrentTheme(currentTheme === 'light' ? 'dark' : 'light')
  }

  // don't render children until mounted to avoid hydration mismatch
  if (!mounted) return null

  return (
    <ThemeContext.Provider
      value={{ currentTheme, setTheme: setThemeIfNotCurrent, toggleTheme, formData, setFormData }}
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