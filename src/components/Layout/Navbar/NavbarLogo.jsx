import React from 'react'
import { Typography, Box, Link as MuiLink } from '@mui/material'
import { Link } from 'gatsby'
import calc from '../../../images/calk_logo_small.png'

const NavbarLogo = () => (
  <MuiLink underline="none" sx={{ color: 'common.white' }} component={Link} to="/">
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Box component="img" sx={{ height: '35px', mr: 1 }} src={calc} alt="calculator logo" />
      <Typography variant="span " sx={{ fontSize: '1.5rem' }}>
        Kalkulator
        <Typography variant="span" sx={{ fontWeight: 'bold', fontSize: '1.5rem' }}>
          Pro
        </Typography>
      </Typography>
    </Box>
  </MuiLink>
)

export default NavbarLogo
