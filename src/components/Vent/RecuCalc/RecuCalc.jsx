import { Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import CustomTextField from '../../Inputs/CustomTextField'

const GRID_SPACING = 1
const paperSX = { py: 1, px: 2 }
const typograhySX = { fontSize: '0.8rem', textTransform: 'uppercase', mb: 2, mt: 1 }

const RecuCalc = () => {
  const a = 'lorem15'
  return (
    // TODO Make calc for heat recovery
    <Grid container spacing={GRID_SPACING}>
      <Grid item xs={12} md={6}>
        <Paper elevation={2} sx={paperSX}>
          <Typography sx={typograhySX}>Temperatura za wymiennikiem</Typography>
          <Grid container spacing={GRID_SPACING}>
            <Grid xs={6} item>
              <CustomTextField value={2} onChange={() => {}} label="Przepływ m3/h" />
            </Grid>
            <Grid xs={6} item>
              <CustomTextField value={2} onChange={() => {}} label="Przepływ dm3/s" />
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  )
}

export default RecuCalc
