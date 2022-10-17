import { Container } from '@mui/material'
import React from 'react'
import { SEO } from '../components/Layout/seo'
import WaterCalc from '../components/Water/WaterCalc'
import WaterInfo from '../components/Water/WaterInfo/WaterInfo'

const WaterPage = () => (
  <Container sx={{ mt: 2, px: 1 }} maxWidth="md">
    <WaterCalc />
    <WaterInfo />
  </Container>
)

export default WaterPage

export const Head = () => <SEO title="woda" />
