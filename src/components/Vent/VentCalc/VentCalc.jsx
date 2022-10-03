import { Grid } from '@mui/material'
import React from 'react'
import VentCalcRect from './VentCalcRect'
import VentCalcRound from './VentCalcRound'

const GRID_SPACING = 1

const VentCalc = () => (
  <Grid container spacing={GRID_SPACING}>
    <VentCalcRound />
    <VentCalcRect />
  </Grid>
)

export default VentCalc
