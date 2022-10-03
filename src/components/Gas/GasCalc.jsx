import { Grid, Paper, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import CustomTextField from '../Inputs/CustomTextField'
import ResultList from '../Result/ResultList'
import * as Calc from '../../helpers/physicalCalculations'
import TooMuchFlow from '../Result/TooMuchFlow'

const GRID_SPACING = 1
const paperSX = { py: 1, px: 2 }
const typograhySX = { fontSize: '0.8rem', textTransform: 'uppercase', mb: 2, mt: 1 }

const GasCalc = () => {
  const [flowCMPH, setFlowCPMH] = useState('')
  const [power, setPower] = useState('')
  const [results, setResults] = useState(null)

  useEffect(() => {
    if (flowCMPH === '' || flowCMPH === 0) {
      setResults(null)
      return
    }
    setResults(Calc.getArrayOfPressDropGas(flowCMPH))
  }, [flowCMPH])

  const handleFlowChange = (e) => {
    setPower(Calc.calcGasPower(e))
    setFlowCPMH(e)
  }
  const handlePowerChange = (e) => {
    setFlowCPMH(Calc.calcGasFlow(e))
    setPower(e)
  }

  return (
    <Grid container spacing={GRID_SPACING}>
      <Grid item xs={12}>
        <Paper elevation={2} sx={paperSX}>
          <Typography sx={typograhySX}>Dobór przewodu gazowego</Typography>
          <Grid container spacing={GRID_SPACING} item xs={12}>
            <Grid item xs={5}>
              <CustomTextField label="Przepływ m3/h" value={flowCMPH} onChange={handleFlowChange} />
            </Grid>
            <Grid sx={{ textAlign: 'center' }} item xs={2}>
              <Typography variant="body2" sx={{ mt: 1.5 }}>
                Lub
              </Typography>
            </Grid>
            <Grid item xs={5}>
              <CustomTextField label="Moc kW" value={power} onChange={handlePowerChange} />
            </Grid>
          </Grid>
        </Paper>
      </Grid>

      <TooMuchFlow results={results} />

      {results && (
        <Grid item xs={12}>
          <Paper elevation={2} sx={paperSX}>
            <Typography sx={{ ...typograhySX, mb: 0 }}>Wyniki</Typography>
            <Typography variant="body2">
              Dla przepływu
              <strong>{` ${flowCMPH} m3/h `}</strong>
              dobrano:
            </Typography>
            <ResultList results={results} />
          </Paper>
        </Grid>
      )}
    </Grid>
  )
}

export default GasCalc
