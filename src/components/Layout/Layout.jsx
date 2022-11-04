import { Grid } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import React, { useMemo } from 'react'
import { useDarkModeContext } from '../../contexts/DarkModeContextProvider'
import Footer from './Footer/Footer'
import MainNavbar from './Navbar/MainNavbar'

const PRIMARY_MAIN = '#002C66'

const Layout = ({ children }) => {
  const { mode } = useDarkModeContext()
  const isDark = mode === 'dark'
  const customTheme = useMemo(
    () =>
      createTheme({
        components: {
          MuiTab: {
            styleOverrides: {
              root: {
                fontSize: '0.75rem',
                '&.Mui-selected': {
                  color: isDark ? 'white' : 'primary',
                },
              },
            },
          },
          MuiTabs: {
            styleOverrides: {
              root: {},
              indicator: { background: isDark ? 'white' : 'primary' },
            },
          },
        },
        palette: {
          mode,
          // primary: { main: '#c0c0c0' },
          primary: { main: PRIMARY_MAIN },
          text: { secondary: mode === 'light' ? '#181818' : '#dddddd' },
        },
        breakpoints: {
          values: {
            xs: 0,
            smm: 450,
            sm: 600,
            xsm: 750,
            md: 900,
            lg: 1200,
            xl: 1536,
          },
        },
        typography: {
          h1: {
            fontSize: '2rem',
            '@media (min-width:600px)': {
              fontSize: '3rem',
            },
            '@media (min-width:900px)': {
              fontSize: '4rem',
            },
          },
          h2: {
            fontSize: '1.5rem',
            '@media (min-width:600px)': {
              fontSize: '2.25rem',
            },
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

      <Grid container direction="column" sx={{ minHeight: '100vh', minWidth: '300px' }}>
        <Grid item>
          <MainNavbar />
        </Grid>
        <Grid item flexGrow={1}>
          {children}
        </Grid>
        <Grid item sx={{ bgcolor: 'primary.main', mt: 4 }}>
          <Footer />
        </Grid>
      </Grid>
    </ThemeProvider>
  )
}

export default Layout
