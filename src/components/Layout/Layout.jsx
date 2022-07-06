import React, { useMemo, useState } from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { Grid } from '@mui/material'

import MainNavbar from './MainNavbar'
import Footer from './Footer'

const Layout = ({ children }) => {
  const darkModeLocalSt = window.localStorage.getItem('darkMode')

  const [mode, setMode] = useState(darkModeLocalSt || 'light')

  const customTheme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: { main: '#002C66' },
        },
        typography: {
          h1: {
            fontSize: '2rem',
            '@media (min-width:900px)': {
              fontSize: '4rem',
            },
          },
          h2: {
            fontSize: '1.5rem',
            '@media (min-width:900px)': {
              fontSize: '3rem',
            },
          },
        },
      }),
    [mode]
  )

  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline />

      <Grid container direction="column" sx={{ minHeight: '100vh' }}>
        <Grid item>
          <MainNavbar mode={mode} setMode={setMode} />
        </Grid>
        <Grid item flexGrow={1}>
          {children}
        </Grid>
        <Grid item>
          <Footer />
        </Grid>
      </Grid>
    </ThemeProvider>
  )
}

export default Layout
