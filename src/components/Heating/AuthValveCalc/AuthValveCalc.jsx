import { Grid, Paper, Typography } from '@mui/material'
import React, { useState } from 'react'
import ValveKvCalc from './ValveKvCalc'
import ValvePressureDrop from './ValvePressureDrop'

const paperSX = { py: 1, px: 2 }
const typograhySX = { fontSize: '0.8rem', textTransform: 'uppercase', mb: 2, mt: 1 }

const AuthValveCalc = () => {
  const [systemPrDrop, setSystemPrDrop] = useState('')
  const [trueValvePrDrop, setTrueValvePrDrop] = useState('')
  const a = 5
  return (
    <Grid container spacing={1}>
      <ValveKvCalc setSystemPrDrop={setSystemPrDrop} />
      <ValvePressureDrop setTrueValvePrDrop={setTrueValvePrDrop} />
      <Grid item xs={12}>
        <Paper elevation={2} sx={paperSX}>
          <Typography sx={typograhySX}>Spadek ciśnienia na zaworze</Typography>
          <pre>sys drop {JSON.stringify(systemPrDrop, null, 2)}</pre>
          <pre>true valv drop {JSON.stringify(trueValvePrDrop, null, 2)}</pre>
          <pre>true auth {trueValvePrDrop / (trueValvePrDrop + systemPrDrop)}</pre>
        </Paper>
        {/* TODO figure out calc about true authority of the valve using previous calcs */}
      </Grid>
    </Grid>
  )
}

export default AuthValveCalc
