import { AppBar, Box, Container, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'

const MainNavbar = ({ mode, setMode }) => {
  const ChangeDarkMode = () => {
    window.localStorage.setItem('darkMode', mode === 'dark' ? 'light' : 'dark')
    setMode((prevMode) => (prevMode === 'dark' ? 'light' : 'dark'))
  }

  return (
    <>
      <AppBar colorInherit>
        <Toolbar
          disableGutters
          sx={{
            bgcolor: 'primary.main',
          }}
        >
          <Container>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <span>SomethinS</span>
              <IconButton onClick={ChangeDarkMode} color="inherit">
                {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
              </IconButton>
              Some nav
              <Typography component="span" sx={{ ml: 2 }}>
                Something
              </Typography>
            </Box>
          </Container>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  )
}

export default MainNavbar
