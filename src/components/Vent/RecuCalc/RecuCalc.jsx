import { Grid } from '@mui/material'
import React from 'react'
import RecuEfficiencyCalc from './RecuEfficiencyCalc'
import RecuTempCalc from './RecuTempCalc'

const RecuCalc = () => (
  <Grid container spacing={1}>
    <RecuTempCalc />
    <RecuEfficiencyCalc />
  </Grid>
)

export default RecuCalc
