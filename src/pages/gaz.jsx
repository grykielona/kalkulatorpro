import { Container } from '@mui/material'
import React from 'react'
import GasCalc from '../components/Gas/GasCalc'
import GasInfo from '../components/Gas/GasInfo'

const GasPage = () => (
  <Container sx={{ mt: 2, px: 1 }} maxWidth="md">
    <GasCalc />
    <GasInfo />
  </Container>
)

export default GasPage
