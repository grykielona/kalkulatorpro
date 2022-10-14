import { Container } from '@mui/material'
import React from 'react'
import WaterCalc from '../components/Water/WaterCalc'
import WaterInfo from '../components/Water/WaterInfo/WaterInfo'

const WaterPage = () => (
  <Container sx={{ mt: 2, px: 1 }} maxWidth="md">
    <WaterCalc />
    <WaterInfo />
  </Container>
)

export default WaterPage
