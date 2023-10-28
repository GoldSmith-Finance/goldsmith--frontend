import { PaletteMode } from '@mui/material'
import { createContext, useContext } from 'react'

const STORAGE_KEY_THEME_MODE = 'THEME_MODE_REACT_SERVICE_STATUS_KEY'

export const DARK_THEME: PaletteMode = 'dark'
export const LIGHT_THEME: PaletteMode = 'light'

type themeContextValue = {
  themeMode: PaletteMode
  switchThemeMode: () => void
  isDarkTheme: boolean
  isLightTheme: boolean
}

const initialState = {
  themeMode: LIGHT_THEME,
  switchThemeMode: () => {},
  isDarkTheme: false,
  isLightTheme: true
}

const themeContext = createContext<themeContextValue>(initialState)

const useTheme = () => {
  const context = useContext(themeContext)

  if (!context) {
    throw new Error('useTheme should be used within a ThemeContext Provider')
  }

  return context
}

export { useTheme }
