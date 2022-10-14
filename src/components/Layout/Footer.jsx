import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'

const Footer = () => (
  <Box py={5} sx={{ bgcolor: 'primary.main' }}>
    <Container>
      <Grid sx={{ color: 'common.white' }} container>
        <Grid xs={12} sm={6} item>
          <Typography sx={{ color: 'common.white' }}>
            © {new Date().getFullYear()} KBM Projekt
          </Typography>
        </Grid>
        <Grid xs={12} sm={6} item>
          <Typography sx={{ color: 'common.white' }}>
            © {new Date().getFullYear()} KBM Projekt
          </Typography>
        </Grid>
      </Grid>
    </Container>
  </Box>
)

export default Footer
