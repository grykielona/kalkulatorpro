import { Grid, Paper, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import {
  calcTempAfterRecovery,
  roundToDigits,
  validateEfficiency,
} from '../../../helpers/physicalCalculations'
import CustomTextField from '../../Inputs/CustomTextField'

const paperSX = { py: 1, px: 2 }
const typograhySX = { fontSize: '0.8rem', textTransform: 'uppercase', mb: 2, mt: 1 }

const RecuTempCalc = () => {
  const [tempExternal, setTempExternal] = useState('')
  const [tempExhaust, setTempExhaust] = useState('')
  const [tempSupply, setTempSupply] = useState('')
  const [efficiency, setEfficiency] = useState('')

  useEffect(() => {
    if (tempExternal === '' || tempExhaust === '' || efficiency === '') {
      setTempSupply('')
      return
    }
    setTempSupply(calcTempAfterRecovery(tempExternal, tempExhaust, efficiency))
  }, [tempExternal, tempExhaust, efficiency])

  const handleTempExternalChange = (e) => {
    setTempExternal(e)
  }
  const handleTempExhaustChange = (e) => {
    setTempExhaust(e)
  }
  const handleEfficiencyChange = (e) => {
    setEfficiency(validateEfficiency(e))
  }

  return (
    <>
      <Grid item xs={12}>
        <Paper elevation={2} sx={paperSX}>
          <Typography sx={typograhySX}>Temperatura za wymiennikiem</Typography>
          <Grid container spacing={1}>
            <Grid xs={4} item>
              <CustomTextField
                value={tempExternal}
                onChange={handleTempExternalChange}
                label="Temp. zew. °C"
              />
            </Grid>
            <Grid xs={4} item>
              <CustomTextField
                value={tempExhaust}
                onChange={handleTempExhaustChange}
                label="Temp. wyw. °C"
              />
            </Grid>
            <Grid xs={4} item>
              <CustomTextField
                value={efficiency}
                onChange={handleEfficiencyChange}
                label="sprawność %"
              />
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      {tempSupply !== '' && (
        <Grid item xs={12}>
          <Paper elevation={2} sx={paperSX}>
            <Typography variant="body2">
              Temperatura za wymiennikiem
              <strong>{` ${roundToDigits(tempSupply, 1)} °C`}</strong>
            </Typography>
          </Paper>
        </Grid>
      )}
    </>
  )
}

export default RecuTempCalc
