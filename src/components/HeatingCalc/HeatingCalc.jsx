import { Grid, Paper, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { mediumTypes, pipeRoughness } from '../../helpers/enums'
import {
  calcArrayOfPressDropLiquid,
  cmphToLps,
  getFlowBasedOnPower,
  lpsToCmph,
  roundToDigits,
  validateTemp,
} from '../../helpers/physicalCalculations'
import CustomSelectField from '../Inputs/CustomSelectField'
import CustomTextField from '../Inputs/CustomTextField'
import ResultList from '../Result/ResultList'

const paperSX = { py: 1, px: 2 }
const typograhySX = { fontSize: '0.8rem', textTransform: 'uppercase', mb: 2, mt: 1 }
const GRID_SPACING = 1

const HeatingCalc = () => {
  const [temp, setTemp] = useState(80)
  const [power, setPower] = useState('')
  const [deltaTemp, setDeltaTemp] = useState(20)
  const [flowCMPH, setFlowCMPH] = useState('')
  const [flowCDPS, setFlowCDPS] = useState('')
  const [pipeType, setPipeType] = useState(0.15)
  const [typeOfFluid, setTypeOfFluids] = useState(4.2)
  const [results, setResults] = useState(null)

  useEffect(() => {
    if (flowCMPH === '' || temp === '') {
      setResults(null)
      return
    }
    setResults(calcArrayOfPressDropLiquid(pipeType, flowCMPH, temp, typeOfFluid))
  }, [temp, flowCMPH, flowCDPS, pipeType])

  useEffect(() => {
    if (power === '' || power === 0 || deltaTemp === '' || deltaTemp === 0) {
      setResults(null)
      setFlowCMPH('')
      setFlowCDPS('')
      return
    }
    const flow = roundToDigits(getFlowBasedOnPower(deltaTemp, power, typeOfFluid, temp), 3)
    setFlowCMPH(flow)
    setFlowCDPS(cmphToLps(flow))
  }, [power, deltaTemp])

  const handleCMPHChange = (e) => {
    setFlowCDPS(cmphToLps(e))
    setFlowCMPH(e)
  }

  const handleCDPSChange = (e) => {
    setFlowCMPH(lpsToCmph(e))
    setFlowCDPS(e)
  }

  const handlePowerChange = (e) => {
    // TODO some validation
    setPower(e)
  }

  const handleDeltaTempChange = (e) => {
    // TODO some validation
    setFlowCMPH(roundToDigits(getFlowBasedOnPower(e, power, typeOfFluid, temp), 3))
    setDeltaTemp(e)
  }

  const handleTempChange = (e) => {
    const validatedTemp = validateTemp(e)
    setTemp(validatedTemp)
  }

  return (
    <Grid container spacing={GRID_SPACING}>
      <Grid item xs={12}>
        <Paper elevation={2} sx={paperSX}>
          <Typography sx={typograhySX}>Dane wejściowe</Typography>
          <Grid container spacing={GRID_SPACING}>
            <Grid container spacing={GRID_SPACING} item xs={12} md={8}>
              <Grid item xs={7}>
                <CustomSelectField
                  defaultValue={typeOfFluid}
                  label="Rodzaj czynnika"
                  labelId="type-of-fluid"
                  menuItem={mediumTypes}
                  onChange={(e) => {
                    setTypeOfFluids(e)
                  }}
                />
              </Grid>
              <Grid item xs={5}>
                <CustomTextField
                  label="Temp. czynnika °C"
                  value={temp}
                  onChange={handleTempChange}
                />
              </Grid>
            </Grid>
            <Grid item xs={12} md={4}>
              <CustomSelectField
                defaultValue={0.15}
                label="Rodzaj rury"
                labelId="type-of-pipe"
                menuItem={pipeRoughness}
                onChange={(e) => {
                  setPipeType(e)
                }}
              />
            </Grid>
          </Grid>
        </Paper>
      </Grid>

      <Grid item xs={12} md={6}>
        <Paper elevation={2} sx={paperSX}>
          <Typography sx={typograhySX}>Dobór na podstawie mocy</Typography>
          <Grid container spacing={GRID_SPACING}>
            <Grid xs={6} item>
              <CustomTextField value={power} onChange={handlePowerChange} label="Moc kW" />
            </Grid>
            <Grid xs={6} item>
              <CustomTextField
                value={deltaTemp}
                onChange={handleDeltaTempChange}
                label="Różnica temp. °C"
              />
            </Grid>
          </Grid>
        </Paper>
      </Grid>

      <Grid item xs={12} md={6}>
        <Paper elevation={2} sx={paperSX}>
          <Typography sx={typograhySX}>Dobór na podstawie przepływu</Typography>
          <Grid container spacing={GRID_SPACING}>
            <Grid xs={6} item>
              <CustomTextField value={flowCMPH} onChange={handleCMPHChange} label="Przepływ m3/h" />
            </Grid>
            <Grid xs={6} item>
              <CustomTextField
                value={flowCDPS}
                onChange={handleCDPSChange}
                label="Przepływ dm3/s"
              />
            </Grid>
          </Grid>
        </Paper>
      </Grid>

      {results && (
        <Grid item xs={12}>
          <Paper elevation={2} sx={paperSX}>
            <Typography sx={{ ...typograhySX, mb: 0 }}>Wyniki</Typography>
            {/* TODO add information where these results are from */}
            <ResultList results={results} />
          </Paper>
        </Grid>
      )}
    </Grid>
  )
}

export default HeatingCalc
