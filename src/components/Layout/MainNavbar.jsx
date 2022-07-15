import React from 'react'
import { AppBar, Box, Container, Toolbar, Typography } from '@mui/material'
import DarkModeSwitch from './DarkModeSwitch'

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
            }}
          >
            <span>SomethinS</span>
            <DarkModeSwitch />
            Some nav
            <Typography component="span" sx={{ ml: 2 }}>
              Something
            </Typography>
          </Box>
        </Container>
      </Toolbar>
    </AppBar>
    <Toolbar />
    {/* Above toolbar doing some margin */}
  </>
)

export default MainNavbar
