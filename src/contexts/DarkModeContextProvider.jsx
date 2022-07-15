import React, { createContext, useContext, useMemo, useState } from 'react'

export const DarkModeContext = createContext()

export const DarkModeContextProvider = ({ children }) => {
  const darkModeLocalSt = window.localStorage.getItem('darkMode')
  const [mode, setMode] = useState(darkModeLocalSt || 'light')
  const darkModeProviderValue = useMemo(() => ({ mode, setMode }), [mode, setMode])

  return (
    <DarkModeContext.Provider value={darkModeProviderValue}>{children}</DarkModeContext.Provider>
  )
}

export const useDarkModeContext = () => {
  const ctx = useContext(DarkModeContext)
  if (!ctx) throw new Error('Out of StyleContext')
  return ctx
}
