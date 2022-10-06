import { Container } from '@mui/material'
import React from 'react'
import WaterCalc from '../components/Water/WaterCalc'

const WaterPage = () => (
  <Container sx={{ mt: 2, px: 1 }} maxWidth="md">
    <WaterCalc />
  </Container>
)

export default WaterPage
