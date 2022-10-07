import { Box, Divider, MenuItem } from '@mui/material'
import { Link } from 'gatsby'
import React from 'react'
import DarkModeSwitch from '../DarkModeSwitch'

export const NAV_ITEMS = [
  { name: 'Ogrzewanie', path: '/ogrzewanie' },
  { name: 'Gaz', path: '/gaz' },
  { name: 'Woda', path: '/woda' },
  { name: 'Wentylacja', path: '/wentylacja' },
  { name: 'Wiedza', path: '/wiedza' },
]

const NavbarMenu = () => (
  <Box sx={{ display: 'flex', height: '64px' }}>
    {NAV_ITEMS.map(({ name, path }) => (
      <MenuItem
        key={path}
        // TODO final decision regarding active style
        // activeStyle={{ borderBottom: '2px solid hsla(255, 100%, 100%, 0.5)' }}
        activeStyle={{ color: '#7ebcff' }}
        // activeStyle={{ textDecoration: 'overline' }}
        component={Link}
        to={path}
        sx={{ fontSize: '1.1rem', py: 1 }}
      >
        {name}
      </MenuItem>
    ))}
    <Divider
      sx={{ mx: { sm: 2, lg: 3 }, borderColor: 'hsla(255, 100%, 100%, 0.2)' }}
      orientation="vertical"
      flexItem
    />
    <DarkModeSwitch />
  </Box>
)

export default NavbarMenu
