import { Grid, Paper, Typography } from '@mui/material'
import React, { useState } from 'react'
import CustomTextField from '../../Inputs/CustomTextField'

const paperSX = { py: 1, px: 2 }
const typograhySX = { fontSize: '0.8rem', textTransform: 'uppercase', mb: 2, mt: 1 }
const GRID_SPACING = 1

const VentCalc = () => {
  const [flowRoundCMPH, setFlowRoundCMPH] = useState('')
  const [flowRoundCDPS, setFlowRoundCDPS] = useState('')
  const [flowRectCMPH, setFlowRectCMPH] = useState('')
  const [flowRectCDPS, setFlowRectCDPS] = useState('')
  const [sideA, setSideA] = useState('')
  const [sideB, setSideB] = useState('')

  const handleRoundCMPHChange = (e) => {
    setFlowRoundCMPH(e)
  }

  const handleRoundCDPSChange = (e) => {
    setFlowRoundCDPS(e)
  }

  const handleRectCMPHChange = (e) => {
    setFlowRectCMPH(e)
  }

  const handleRectCDPSChange = (e) => {
    setFlowRectCDPS(e)
  }

  const handleSideAChange = (e) => {
    setSideA(e)
  }

  const handleSideBChange = (e) => {
    setSideB(e)
  }

  return (
    <Grid container spacing={GRID_SPACING}>
      <Grid item xs={12}>
        <Paper elevation={2} sx={paperSX}>
          <Typography sx={typograhySX}>Automatyczny dobór kanału okrągłego</Typography>
          <Grid container spacing={GRID_SPACING} item xs={12}>
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
      <Grid item xs={12}>
        <Paper elevation={2} sx={paperSX}>
          <Typography sx={typograhySX}>Dobór kanału prostokątnego</Typography>
          <Grid container spacing={GRID_SPACING} item xs={12}>
            <Grid item xs={6}>
              <CustomTextField label="bok A" value={sideA} onChange={handleSideAChange} />
            </Grid>
            <Grid item xs={6}>
              <CustomTextField label="bok B" value={sideB} onChange={handleSideBChange} />
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
    </Grid>
  )
}

export default VentCalc
