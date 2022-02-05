import React from 'react'
import { createTheme, ThemeProvider } from '@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core'

const darkTheme = createTheme({
  palette: {
    type: 'dark',
  },
})

const a = 323

function Layout({ children }) {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="" />
      {children}
    </ThemeProvider>
  )
}

export default Layout
