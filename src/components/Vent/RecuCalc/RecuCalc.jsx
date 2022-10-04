import { Grid } from '@mui/material'
import React from 'react'
import RecuEfficiencyCalc from './RecuEfficiencyCalc'
import RecuTempCalc from './RecuTempCalc'

const GRID_SPACING = 1
// TODO refactor gridspacing across all files
const RecuCalc = () => (
  <Grid container spacing={GRID_SPACING}>
    <RecuTempCalc />
    <RecuEfficiencyCalc />
  </Grid>
)

export default RecuCalc
