import React, { useMemo, useState } from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import IconButton from '@mui/material/IconButton'

const Layout = ({ children }) => {
  const [mode, setMode] = useState('dark')

  const customTheme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  )

  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline />

      <IconButton
        sx={{ ml: 1 }}
        onClick={() => setMode((prevMode) => (prevMode === 'dark' ? 'light' : 'dark'))}
        color="inherit"
      >
        {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>

      {children}
    </ThemeProvider>
  )
}

export default Layout
