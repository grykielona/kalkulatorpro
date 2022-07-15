import React from 'react'
import { DarkModeContextProvider } from './src/contexts/DarkModeContextProvider'

export const wrapRootElement = ({ element }) => (
  <DarkModeContextProvider>{element}</DarkModeContextProvider>
)
