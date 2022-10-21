import { Grid, Paper, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { calcEfficiencyOfRecovery, roundToDigits } from '../../../helpers/physicalCalculations'
import CustomTextField from '../../Inputs/CustomTextField'

const paperSX = { py: 1, px: 2 }
const typograhySX = { fontSize: '0.8rem', textTransform: 'uppercase', mb: 2, mt: 1 }

const RecuEfficiencyCalc = () => {
  const [tempExternal, setTempExternal] = useState('')
  const [tempExhaust, setTempExhaust] = useState('')
  const [tempSupply, setTempSupply] = useState('')
  const [efficiency, setEfficiency] = useState('')
  const [tempExhaustError, setTempExhaustError] = useState('')
  const [tempSupplyError, setTempSupplyError] = useState('')

  useEffect(() => {
    if (tempExhaust !== '' && Number(tempExternal) >= Number(tempExhaust)) {
      setEfficiency('')
      setTempExhaustError('temp wyw. musi być większa od zewnętrznej')
      return
    }
    setTempExhaustError('')

    if (tempExhaust !== '' && Number(tempSupply) > Number(tempExhaust)) {
      setEfficiency('')
      setTempSupplyError('temp nawiewu nie moze być większa od wywiewu')
      return
    }

    if (tempSupply !== '' && Number(tempSupply) < Number(tempExternal)) {
      setEfficiency('')
      setTempSupplyError('temp nawiewu nie moze być mniejsza od zewnętrznej')
      return
    }

    setTempSupplyError('')
    if (tempExternal === '' || tempExhaust === '' || tempSupply === '') {
      setEfficiency('')
      return
    }
    setTempExhaustError('')

    setEfficiency(calcEfficiencyOfRecovery(tempExternal, tempExhaust, tempSupply))
  }, [tempExternal, tempExhaust, tempSupply])

  const handleTempExternalChange = (e) => {
    setTempExternal(e)
  }
  const handleTempExhaustChange = (e) => {
    setTempExhaust(e)
  }
  const handleSupplyChange = (e) => {
    setTempSupply(e)
  }

  return (
    <>
      <Grid item xs={12}>
        <Paper elevation={2} sx={paperSX}>
          <Typography sx={typograhySX}>Sprawność wymiennika</Typography>
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
                helperText={tempExhaustError}
                onChange={handleTempExhaustChange}
                label="Temp. wyw. °C"
              />
            </Grid>
            <Grid xs={4} item>
              <CustomTextField
                helperText={tempSupplyError}
                value={tempSupply}
                onChange={handleSupplyChange}
                label="Temp. naw °C"
              />
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      {efficiency !== '' && (
        <Grid item xs={12}>
          <Paper elevation={2} sx={paperSX}>
            <Typography variant="body2">
              Sprawność wymiennika wynosi
              <strong>{` ${roundToDigits(efficiency, 1)}%`}</strong>
            </Typography>
          </Paper>
        </Grid>
      )}
    </>
  )
}

export default RecuEfficiencyCalc
