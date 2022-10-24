import { Container } from '@mui/material'
import React from 'react'
import GasCalc from '../components/Gas/GasCalc'
import GasInfo from '../components/Gas/GasInfo'
import { SEO } from '../components/Layout/seo'

// TODO add table of local pressure drop for gas.

const GasPage = () => (
  <Container sx={{ mt: 2, px: 1 }} maxWidth="md">
    <GasCalc />
    <GasInfo />
  </Container>
)

export default GasPage

export const Head = () => <SEO title="gaz" />
