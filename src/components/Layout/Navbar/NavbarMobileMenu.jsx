import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import {
  Box,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  SwipeableDrawer,
} from '@mui/material'
import { Link } from 'gatsby'
import { NAV_ITEMS } from './NavbarMenu'
import DarkModeSwitch from '../DarkModeSwitch'

const NavbarMobileMenu = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <IconButton onClick={() => setOpen(true)} color="inherit" aria-label="menu">
        <MenuIcon fontSize="large" />
      </IconButton>
      <SwipeableDrawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
      >
        <Box sx={{ width: 250 }}>
          <List>
            {NAV_ITEMS.map(({ name, path }) => (
              <ListItem onClick={() => setOpen(false)} key={name} disablePadding>
                <ListItemButton component={Link} to={path}>
                  <ListItemText primary={name} />
                </ListItemButton>
              </ListItem>
            ))}
            <Divider />
            <ListItem>
              <DarkModeSwitch />
            </ListItem>
          </List>
        </Box>
      </SwipeableDrawer>
    </>
  )
}

export default NavbarMobileMenu
