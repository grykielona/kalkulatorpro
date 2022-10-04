import { Grid, Paper, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { calcTempAfterRecovery, validateEfficiency } from '../../../helpers/physicalCalculations'
import CustomTextField from '../../Inputs/CustomTextField'

const GRID_SPACING = 1
const paperSX = { py: 1, px: 2 }
const typograhySX = { fontSize: '0.8rem', textTransform: 'uppercase', mb: 2, mt: 1 }

const RecuCalc = () => {
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
    <Grid container spacing={GRID_SPACING}>
      <Grid item xs={12}>
        <Paper elevation={2} sx={paperSX}>
          <Typography sx={typograhySX}>Temperatura za wymiennikiem</Typography>
          <Grid container spacing={GRID_SPACING}>
            <Grid xs={6} item>
              <CustomTextField
                value={tempExternal}
                onChange={handleTempExternalChange}
                label="Temp. zew. °C"
              />
            </Grid>
            <Grid xs={6} item>
              <CustomTextField
                value={tempExhaust}
                onChange={handleTempExhaustChange}
                label="Temp. wywiewu °C"
              />
            </Grid>
            <Grid xs={6} item>
              <CustomTextField
                value={efficiency}
                onChange={handleEfficiencyChange}
                label="sprawność %"
              />
            </Grid>
            <Grid xs={6} item>
              <CustomTextField
                disabled
                value={tempSupply}
                onChange={() => {}}
                label="Temp. za wymiennikiem °C"
              />
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  )
}

export default RecuCalc
