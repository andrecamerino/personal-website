'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

type Theme = 'light' | 'dark'

interface ThemeContextType {
  currentTheme: Theme
  setTheme: (theme: Theme) => void
  toggleTheme: () => void
}

// Create the context (initial value undefined)
const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

// Provider component
export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [currentTheme, setCurrentTheme] = useState<Theme>('dark')

  // Keep <html> data-theme in sync
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', currentTheme)
  }, [currentTheme])

  const setThemeIfNotCurrent = (theme: Theme) => {
    if (theme !== currentTheme) setCurrentTheme(theme)
  }

  const toggleTheme = () => {
    setCurrentTheme(currentTheme === 'light' ? 'dark' : 'light')
  }

  return (
    <ThemeContext.Provider
      value={{ currentTheme, setTheme: setThemeIfNotCurrent, toggleTheme }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

// Custom hook to use the context
export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider')
  }
  return context
}