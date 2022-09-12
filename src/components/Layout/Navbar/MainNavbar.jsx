import React from 'react'
import { AppBar, Box, Container, Toolbar, useMediaQuery } from '@mui/material'
import NavbarMenu from './NavbarMenu'
import NavbarLogo from './NavbarLogo'
import NavbarMobileMenu from './NavbarMobileMenu'

const MainNavbar = () => {
  const matches = useMediaQuery('(min-width:800px)')

  return (
    <>
      <AppBar sx={{ backgroundColor: 'inherit' }}>
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
                justifyContent: 'space-between',
              }}
            >
              <NavbarLogo />
              {matches ? <NavbarMenu /> : <NavbarMobileMenu />}
            </Box>
          </Container>
        </Toolbar>
      </AppBar>
      <Toolbar />
      {/* Above toolbar doing some margin */}
    </>
  )
}

export default MainNavbar
