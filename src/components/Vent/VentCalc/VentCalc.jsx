import { Grid } from '@mui/material'
import React from 'react'
import VentCalcRect from './VentCalcRect'
import VentCalcRound from './VentCalcRound'

const VentCalc = () => (
  <Grid container spacing={1}>
    <VentCalcRound />
    <VentCalcRect />
  </Grid>
)

export default VentCalc
