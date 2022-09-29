import { Grid, Paper, Typography } from '@mui/material'
import React, { useState } from 'react'
import { mediumTypes, pipeRoughness } from '../../helpers/enums'
import { calcArrayOfPressDropLiquid, validateTemp } from '../../helpers/physicalCalculations'
import CustomSelectField from '../Inputs/CustomSelectField'
import CustomTextField from '../Inputs/CustomTextField'

const paperSX = { py: 1, px: 2 }

const typograhySX = { fontSize: '0.8rem', textTransform: 'uppercase', mb: 2, mt: 1 }

const GRID_SPACING = 1

const HeatingCalc = () => {
  const [temp, setTemp] = useState(80)
  const [power, setPower] = useState('')
  const [deltaTemp, setDeltaTemp] = useState('')
  const [flowCMPH, setFlowCMPH] = useState('')
  const [flowCDPS, setFlowCDPS] = useState('')
  const [pipeType, setPipeType] = useState(0.15)
  const [typeOfFluid, setTypeOfFluids] = useState(4.2)
  const [results, setResults] = useState({})

  const calculateResults = (pipeType, flowCMPH, temp, typeOfFluid) => {
    if (flowCMPH === '' || temp === '') {
      return setResults({})
    }
    console.log('results')
    setResults(calcArrayOfPressDropLiquid(pipeType, flowCMPH, temp, typeOfFluid))
  }

  const handleCMPHChange = (e) => {
    setFlowCMPH(e)
    calculateResults(pipeType, e, temp, typeOfFluid)
  }

  const handleTempChange = (e) => {
    const validatedTemp = validateTemp(e)
    setTemp(validatedTemp)
    console.log(validatedTemp, typeof validatedTemp)
    calculateResults(pipeType, flowCMPH, validatedTemp, typeOfFluid)
  }

  console.log('_________________render')
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
                  console.log(e)
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
              <CustomTextField value={power} onChange={(val) => setPower(val)} label="Moc kW" />
            </Grid>
            <Grid xs={6} item>
              <CustomTextField
                value={deltaTemp}
                onChange={(val) => setDeltaTemp(val)}
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
                onChange={(val) => setFlowCDPS(val)}
                label="Przepływ dm3/s"
              />
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid>
        <pre>{JSON.stringify(results, null, 2)}</pre>
      </Grid>
    </Grid>
  )
}

export default HeatingCalc
