'use client'
import { useState, useEffect } from 'react'

type Theme = 'light' | 'dark'

export function useTheme(initialTheme: Theme = 'dark') {
  const [currentTheme, setCurrentTheme] = useState<Theme>(initialTheme)

  // Update <html> attribute when theme changes
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', currentTheme)
  }, [currentTheme])

  // Function to set theme if it’s not the current one
  const setThemeIfNotCurrent = (theme: Theme) => {
    if (theme !== currentTheme) {
      setCurrentTheme(theme)
    }
  }

  const toggleTheme = () => {
    setCurrentTheme(currentTheme === 'light' ? 'dark' : 'light')
  }

  return { currentTheme, setTheme: setThemeIfNotCurrent, toggleTheme }
}

/*
Example Usage

'use client'
import { useTheme } from '@/hooks/useTheme'

export default function Page() {
  const { currentTheme, setTheme } = useTheme()

  return (
    <div className='bg-(--color-bg)'>
      <button onClick={() => setTheme('light')}>Light Mode</button>
      <button onClick={() => setTheme('dark')}>Dark Mode</button>
      <p>Current theme: {currentTheme}</p>
    </div>
  )
}
*/