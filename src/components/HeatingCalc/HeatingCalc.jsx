import { Grid, Paper, Typography } from '@mui/material'
import React, { useState } from 'react'
import CustomSelectField from '../Inputs/CustomSelectField'
import CustomTextField from '../Inputs/CustomTextField'

const paperSX = { py: 1, px: 2 }

const typograhySX = { fontSize: '0.8rem', textTransform: 'uppercase', mb: 2, mt: 1 }

const testMenuItem = [
  { itemValue: 10, itemLabel: 'ten' },
  { itemValue: 20, itemLabel: 'twenty' },
  { itemValue: 30, itemLabel: 'thirty' },
]

const GRID_SPACING = 1

const HeatingCalc = () => {
  const [temp, setTemp] = useState(80)
  const [power, setPower] = useState('')
  const [deltaTemp, setDeltaTemp] = useState('')
  const [flowCMPH, setFlowCMPH] = useState('')
  const [flowCDPS, setFlowCDPS] = useState('')
  const [pipeType, setPipeType] = useState(0.15)
  const [typeOfFluid, setTypeOfFluids] = useState(4.2)

  return (
    <Grid container spacing={GRID_SPACING}>
      <Grid item xs={12}>
        <Paper elevation={2} sx={paperSX}>
          <Typography sx={typograhySX}>Dane wejściowe</Typography>
          <Grid container spacing={GRID_SPACING}>
            <Grid container spacing={GRID_SPACING} item xs={12} md={8}>
              <Grid item xs={7}>
                <CustomSelectField
                  label="Rodzaj czynnika"
                  labelId="type-of-fluid"
                  menuItem={testMenuItem}
                  onChange={(e) => {
                    console.log(e)
                  }}
                />
              </Grid>
              <Grid item xs={5}>
                <CustomTextField
                  label="Temp. czynnika °C"
                  value={temp}
                  onChange={(val) => setTemp(val)}
                />
              </Grid>
            </Grid>
            <Grid item xs={12} md={4}>
              <CustomSelectField
                label="Rodzaj rury"
                labelId="type-of-pipe"
                menuItem={testMenuItem}
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
              <CustomTextField
                value={flowCMPH}
                onChange={(val) => setFlowCMPH(val)}
                label="Przepływ m3/h"
              />
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
    </Grid>
  )
}

export default HeatingCalc
