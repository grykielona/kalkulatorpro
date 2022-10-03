import { Grid, Paper, Typography } from '@mui/material'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline'

import React from 'react'

const TooMuchFlow = ({ results }) =>
  results === false && (
    <Grid item xs={12}>
      <Paper
        elevation={2}
        sx={{ py: 2, px: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <ErrorOutlineIcon sx={{ mr: 1 }} fontSize="small" color="error" />
        <Typography variant="body2">Za duży przepływ dla danego typoszeregu rur</Typography>
      </Paper>
    </Grid>
  )

export default TooMuchFlow
