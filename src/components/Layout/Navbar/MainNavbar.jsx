import React from 'react'
import {
  AppBar,
  Box,
  Container,
  Toolbar,
  Typography,
  Link as MuiLink,
  IconButton,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import NavbarMenu from './NavbarMenu'
import NavbarLogo from './NavbarLogo'

const MainNavbar = () => (
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

            <IconButton color="inherit" aria-label="menu" sx={{ mr: 2 }}>
              <MenuIcon fontSize="large" />
            </IconButton>

            <NavbarMenu />
          </Box>
        </Container>
      </Toolbar>
    </AppBar>
    <Toolbar />
    {/* Above toolbar doing some margin */}
  </>
)

export default MainNavbar
