import { Grid, Paper, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { mediumTypes, pipeRoughness } from '../../../helpers/enums'
import * as Calc from '../../../helpers/physicalCalculations'
import CustomSelectField from '../../Inputs/CustomSelectField'
import CustomTextField from '../../Inputs/CustomTextField'
import ResultList from '../../Result/ResultList'

const paperSX = { py: 1, px: 2 }
const typograhySX = { fontSize: '0.8rem', textTransform: 'uppercase', mb: 2, mt: 1 }
const GRID_SPACING = 1

const POWER_INPUT = 'POWER_INPUT'
const FLOW_INPUT = 'FLOW_INPUT'

const HeatingCalc = () => {
  const [temp, setTemp] = useState(80)
  const [power, setPower] = useState('')
  const [deltaTemp, setDeltaTemp] = useState(20)
  const [flowCMPH, setFlowCMPH] = useState('')
  const [flowCDPS, setFlowCDPS] = useState('')
  const [pipeType, setPipeType] = useState(0.15)
  const [typeOfFluid, setTypeOfFluids] = useState(4.2)
  const [results, setResults] = useState(null)
  const [lastCalc, setLastCalc] = useState('')

  useEffect(() => {
    if (flowCMPH === '' || temp === '') {
      setResults(null)
      return
    }
    setResults(Calc.getArrayOfPressDropLiquid(pipeType, flowCMPH, temp, typeOfFluid))
  }, [temp, flowCMPH, flowCDPS, pipeType, typeOfFluid])

  useEffect(() => {
    if (lastCalc === FLOW_INPUT) return
    if (power === '' || power === 0 || deltaTemp === '' || deltaTemp === 0) {
      setResults(null)
      setFlowCMPH('')
      setFlowCDPS('')
      return
    }
    const flow = Calc.roundToDigits(
      Calc.getFlowBasedOnPower(deltaTemp, power, typeOfFluid, temp),
      3
    )
    setFlowCMPH(flow)
    setFlowCDPS(Calc.cmphToLps(flow))
  }, [power, deltaTemp, typeOfFluid])

  const handleCMPHChange = (e) => {
    setLastCalc(FLOW_INPUT)
    setFlowCDPS(Calc.cmphToLps(e))
    setFlowCMPH(e)
  }

  const handleCDPSChange = (e) => {
    setLastCalc(FLOW_INPUT)
    setFlowCMPH(Calc.lpsToCmph(e))
    setFlowCDPS(e)
  }

  const handlePowerChange = (e) => {
    setLastCalc(POWER_INPUT)
    setPower(e)
  }

  const handleDeltaTempChange = (e) => {
    Calc.validateTemp(e, 50, 50)
    setLastCalc(POWER_INPUT)
    setFlowCMPH(Calc.roundToDigits(Calc.getFlowBasedOnPower(e, power, typeOfFluid, temp), 3))
    setDeltaTemp(Calc.validateTemp(e, 50, 50))
  }

  const handleTempChange = (e) => {
    setTemp(Calc.validateTemp(e))
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
                  helperText={temp ? '' : 'Wpisz temperature'}
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
                helperText={lastCalc === POWER_INPUT && !deltaTemp ? 'Wpisz różnicę temp.' : ''}
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
      {results === false && (
        <Grid item xs={12}>
          <Paper elevation={2} sx={paperSX}>
            Zbyt duży przepływ dla danego typoszeregu rur
          </Paper>
        </Grid>
      )}
      {results && (
        <Grid item xs={12}>
          <Paper elevation={2} sx={paperSX}>
            <Typography sx={{ ...typograhySX, mb: 0 }}>Wyniki</Typography>

            {lastCalc === FLOW_INPUT && (
              <Typography variant="body2">
                Dla przepływu
                <strong>{` ${flowCMPH} m3/h ~ ${flowCDPS} dm3/s `}</strong>
                dobrano:
              </Typography>
            )}
            {lastCalc === POWER_INPUT && (
              <Typography variant="body2">
                Dla mocy
                {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
                <strong>{` ${power} kW  `}</strong>i ΔT
                <strong>{` ${deltaTemp}°C `}</strong>
                dobrano:
              </Typography>
            )}
            <ResultList results={results} />
          </Paper>
        </Grid>
      )}
    </Grid>
  )
}

export default HeatingCalc
