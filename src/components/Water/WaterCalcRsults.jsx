import { Grid, Typography } from '@mui/material'
import React from 'react'
import { roundToDigits } from '../../helpers/physicalCalculations'

const WaterCalcRsults = ({ results, sumOfQn, Qn }) => (
  <Grid
    item
    md={4}
    sm={9}
    xs={12}
    sx={{ position: { xs: 'static', md: 'absolute' }, top: '10%', left: '67%' }}
  >
    {results === -1 ? (
      <Typography variant="body1">Zbyt duży przepływ</Typography>
    ) : (
      <>
        <Typography variant="body1">
          ΣQn= <strong>{sumOfQn}</strong> l/s
        </Typography>
        <Typography variant="body1">
          Q<sub>obl</sub>= <strong>{roundToDigits((Qn * 3600) / 1000, 2)}</strong> m3/h ~
          <strong>{roundToDigits(Qn, 2)}</strong> l/s
        </Typography>
        <Typography variant="body1">
          <strong>{results[0]}</strong> | <strong>{results[1]}</strong> m/s
        </Typography>
      </>
    )}
  </Grid>
)

export default WaterCalcRsults
