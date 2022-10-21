import React, { useEffect, useState } from 'react'
import { Grid, Paper, Typography } from '@mui/material'
import * as Calc from '../../../helpers/physicalCalculations'
import CustomTextField from '../../Inputs/CustomTextField'
import ResultList from '../../Result/ResultList'
import TooMuchFlow from '../../Result/TooMuchFlow'

const paperSX = { py: 1, px: 2 }
const typograhySX = { fontSize: '0.8rem', textTransform: 'uppercase', mb: 2, mt: 1 }

const VentCalcRound = () => {
  const [flowRoundCMPH, setFlowRoundCMPH] = useState('')
  const [flowRoundCDPS, setFlowRoundCDPS] = useState('')
  const [resultsRound, setResultsRound] = useState(null)

  useEffect(() => {
    if (flowRoundCMPH === '' || flowRoundCMPH === 0) {
      setResultsRound(null)
      return
    }
    setResultsRound(Calc.getArrayOfPressDropAir(flowRoundCMPH))
  }, [flowRoundCMPH])

  const handleRoundCMPHChange = (e) => {
    setFlowRoundCDPS(Calc.cmphToLps(e))
    setFlowRoundCMPH(e)
  }

  const handleRoundCDPSChange = (e) => {
    setFlowRoundCMPH(Calc.lpsToCmph(e))
    setFlowRoundCDPS(e)
  }

  return (
    <>
      <Grid item xs={12}>
        <Paper elevation={2} sx={paperSX}>
          <Typography sx={typograhySX}>Automatyczny dobór kanału okrągłego</Typography>
          <Grid container spacing={1} item xs={12}>
            <Grid item xs={5}>
              <CustomTextField
                label="Przepływ m3/h"
                value={flowRoundCMPH}
                onChange={handleRoundCMPHChange}
              />
            </Grid>
            <Grid sx={{ textAlign: 'center' }} item xs={2}>
              <Typography variant="body2" sx={{ mt: 1.5 }}>
                Lub
              </Typography>
            </Grid>
            <Grid item xs={5}>
              <CustomTextField
                label="Przepływ dm3/s"
                value={flowRoundCDPS}
                onChange={handleRoundCDPSChange}
              />
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <TooMuchFlow results={resultsRound} />

      {resultsRound && (
        <Grid item xs={12}>
          <Paper elevation={2} sx={paperSX}>
            <Typography sx={{ ...typograhySX, mb: 0 }}>Wyniki</Typography>
            <Typography variant="body2">
              Dla przepływu
              <strong>{` ${flowRoundCMPH} m3/h ~ ${flowRoundCDPS} dm3/s `}</strong>
              dobrano:
            </Typography>
            <ResultList isSpiro results={resultsRound} />
          </Paper>
        </Grid>
      )}
    </>
  )
}

export default VentCalcRound
