import { Grid } from '@mui/material'
import React from 'react'
import ValveKvCalc from './ValveKvCalc'
import ValvePressureDrop from './ValvePressureDrop'

const AuthValveCalc = () => (
  <Grid container spacing={1}>
    <ValveKvCalc />
    <ValvePressureDrop />
    {/* TODO figure out calc about true authority of the valve using previous calcs */}
  </Grid>
)

export default AuthValveCalc
