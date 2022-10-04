import React, { useEffect, useState } from 'react'
import { Grid, Paper, Typography } from '@mui/material'
import * as Calc from '../../../helpers/physicalCalculations'
import CustomTextField from '../../Inputs/CustomTextField'

const paperSX = { py: 1, px: 2 }
const typograhySX = { fontSize: '0.8rem', textTransform: 'uppercase', mb: 2, mt: 1 }
const GRID_SPACING = 1

const VentCalcRect = () => {
  const [flowRectCMPH, setFlowRectCMPH] = useState('')
  const [flowRectCDPS, setFlowRectCDPS] = useState('')
  const [sideA, setSideA] = useState('')
  const [sideB, setSideB] = useState('')

  const [resultsRect, setResultsRect] = useState(null)

  useEffect(() => {
    if (flowRectCMPH === '' || flowRectCMPH === 0 || sideA === '' || sideB === '') {
      setResultsRect(null)
      return
    }
    setResultsRect(Calc.calcFlowSpeedRect(flowRectCMPH, sideA, sideB))
  }, [flowRectCMPH, sideA, sideB])

  const handleRectCMPHChange = (e) => {
    setFlowRectCDPS(Calc.cmphToLps(e))
    setFlowRectCMPH(e)
  }

  const handleRectCDPSChange = (e) => {
    setFlowRectCMPH(Calc.lpsToCmph(e))
    setFlowRectCDPS(e)
  }

  const handleSideAChange = (e) => {
    setSideA(e)
  }

  const handleSideBChange = (e) => {
    setSideB(e)
  }

  return (
    <>
      <Grid item xs={12}>
        <Paper elevation={2} sx={paperSX}>
          <Typography sx={typograhySX}>Dobór kanału prostokątnego</Typography>
          <Grid container spacing={GRID_SPACING} item xs={12}>
            <Grid item xs={6}>
              <CustomTextField
                helperText={flowRectCMPH && !sideA ? 'Podaj wymiar' : ''}
                label="Bok A"
                value={sideA}
                onChange={handleSideAChange}
              />
            </Grid>
            <Grid item xs={6}>
              <CustomTextField
                helperText={flowRectCMPH && !sideB ? 'Podaj wymiar' : ''}
                label="Bok B"
                value={sideB}
                onChange={handleSideBChange}
              />
            </Grid>
            <Grid item xs={5}>
              <CustomTextField
                label="Przepływ m3/h"
                value={flowRectCMPH}
                onChange={handleRectCMPHChange}
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
                value={flowRectCDPS}
                onChange={handleRectCDPSChange}
              />
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      {resultsRect && (
        <Grid item xs={12}>
          <Paper elevation={2} sx={paperSX}>
            <Typography sx={{ ...typograhySX, mb: 0 }}>Wyniki</Typography>
            <Typography variant="body1">
              Dla przepływu
              <strong>{` ${flowRectCMPH} m3/h ~ ${flowRectCDPS} dm3/s `}</strong>w kanale{' '}
              <strong>
                {sideA}x{sideB}
              </strong>{' '}
              mm
              {`(${Calc.getRectAreaInSqM(sideA, sideB)}`}m<sup>2</sup>)
            </Typography>
            <Typography variant="body1">
              prędkość wynosi
              <strong>
                <u> {Calc.roundToDigits(resultsRect, 2)} m/s</u>
              </strong>
            </Typography>
          </Paper>
        </Grid>
      )}
    </>
  )
}

export default VentCalcRect
