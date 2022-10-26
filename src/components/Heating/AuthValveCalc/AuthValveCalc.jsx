import { Grid, Paper, Typography } from '@mui/material'
import React, { useState } from 'react'
import { roundToDigits } from '../../../helpers/physicalCalculations'
import ValveKvCalc from './ValveKvCalc'
import ValvePressureDrop from './ValvePressureDrop'

const paperSX = { py: 1, px: 2 }
const typograhySX = { fontSize: '0.8rem', textTransform: 'uppercase', mb: 2, mt: 1 }

const AuthValveCalc = () => {
  const [systemPrDrop, setSystemPrDrop] = useState('')
  const [trueValvePrDrop, setTrueValvePrDrop] = useState('')

  const calcTrueAuth = roundToDigits(trueValvePrDrop / (trueValvePrDrop + systemPrDrop), 2)
  const shouldShowResult = calcTrueAuth !== 0 && systemPrDrop && trueValvePrDrop

  return (
    <Grid container spacing={1}>
      <ValveKvCalc setSystemPrDrop={setSystemPrDrop} />
      <ValvePressureDrop setTrueValvePrDrop={setTrueValvePrDrop} />

      {shouldShowResult && (
        <Grid item xs={12}>
          <Paper elevation={2} sx={paperSX}>
            <Typography sx={typograhySX}>Realny autorytet zaworu</Typography>
            <Typography variant="body2">
              Dla oporów w obiegu dP = {systemPrDrop} bar i dobranego zaworu autorytet wynosi:
            </Typography>
            <Typography>{calcTrueAuth} [-]</Typography>
          </Paper>
        </Grid>
      )}
    </Grid>
  )
}

export default AuthValveCalc
