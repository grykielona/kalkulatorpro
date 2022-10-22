import { Grid, Paper, Typography } from '@mui/material'
import React, { useState } from 'react'
import ValveKvCalc from './ValveKvCalc'
import ValvePressureDrop from './ValvePressureDrop'

const paperSX = { py: 1, px: 2 }
const typograhySX = { fontSize: '0.8rem', textTransform: 'uppercase', mb: 2, mt: 1 }

const AuthValveCalc = () => {
  const [calcValvePrDrop, setCalcValvePrDrop] = useState('')
  const [trueValvePrDrop, setTrueValvePrDrop] = useState('')
  const a = 5
  return (
    <Grid container spacing={1}>
      <ValveKvCalc setCalcValvePrDrop={setCalcValvePrDrop} />
      <ValvePressureDrop setTrueValvePrDrop={setTrueValvePrDrop} />
      <Grid item xs={12}>
        <Paper elevation={2} sx={paperSX}>
          <Typography sx={typograhySX}>Spadek ciśnienia na zaworze</Typography>
          <pre>{JSON.stringify(calcValvePrDrop, null, 2)}</pre>
          <pre>{JSON.stringify(trueValvePrDrop, null, 2)}</pre>
        </Paper>
        {/* TODO figure out calc about true authority of the valve using previous calcs */}
      </Grid>
    </Grid>
  )
}

export default AuthValveCalc
