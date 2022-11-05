import React from 'react'
import { IconButton } from '@mui/material'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import { useDarkModeContext } from './Layout'

const DarkModeSwitch = () => {
  const { mode, setMode } = useDarkModeContext()

  const ChangeDarkMode = () => {
    window.localStorage.setItem('darkMode', mode === 'dark' ? 'light' : 'dark')
    setMode((prevMode) => (prevMode === 'dark' ? 'light' : 'dark'))
  }

  return (
    <IconButton onClick={ChangeDarkMode} color="inherit">
      {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
    </IconButton>
  )
}

export default DarkModeSwitch
