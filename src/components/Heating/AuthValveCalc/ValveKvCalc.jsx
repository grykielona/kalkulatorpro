import { Grid, Paper, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import CustomTextField from '../../Inputs/CustomTextField'
import * as Calc from '../../../helpers/physicalCalculations'
import { shouldCalculateInputs, transformInpt } from '../../../helpers/conditions'

const paperSX = { py: 1, px: 2 }
const typograhySX = { fontSize: '0.8rem', textTransform: 'uppercase', mb: 2, mt: 1 }

const ValveKvCalc = ({ setSystemPrDrop }) => {
  const [valveAuthority, setValveAuthority] = useState(0.5)
  const [systemPressureDrop, setSystemPressureDrop] = useState('')
  const [flowCMPH, setFlowCMPH] = useState('')
  const [flowCDPS, setFlowCDPS] = useState('')
  const [result, setResult] = useState({ errMsg: false, valvePrDrop: false, valveKv: false })

  useEffect(() => {
    if (shouldCalculateInputs(valveAuthority, flowCMPH, systemPressureDrop)) {
      const valvePrDrop = Calc.getValvePrDropFromAuth(systemPressureDrop, valveAuthority)
      const valveKv = Calc.getValveKv(valvePrDrop, flowCMPH)
      setResult({ errMsg: false, valvePrDrop, valveKv })

      return
    }
    setResult({ errMsg: false, valvePrDrop: false, valveKv: false })
  }, [valveAuthority, systemPressureDrop, flowCMPH])

  const handleValveAuthorityChange = (e) => {
    setValveAuthority(Calc.validateValveAuth(transformInpt(e)))
  }
  const handleSystemPressureDropChange = (e) => {
    setSystemPrDrop(transformInpt(e))
    setSystemPressureDrop(transformInpt(e))
  }
  const handleFlowCMPHChange = (e) => {
    setFlowCDPS(Calc.cmphToLps(e))
    setFlowCMPH(transformInpt(e))
  }
  const handleFlowCDPSChange = (e) => {
    setFlowCMPH(Calc.lpsToCmph(e))
    setFlowCDPS(transformInpt(e))
  }

  return (
    <>
      <Grid item xs={12}>
        <Paper elevation={2} sx={paperSX}>
          <Typography sx={typograhySX}>Obliczenie kv zaworu</Typography>
          <Grid container spacing={1}>
            <Grid xs={6} sm={3} item>
              <CustomTextField
                onChange={handleValveAuthorityChange}
                value={valveAuthority}
                label="Autoryt. zaworu"
              />
            </Grid>
            <Grid xs={6} sm={3} item>
              <CustomTextField
                selectOnFocus
                value={systemPressureDrop}
                onChange={handleSystemPressureDropChange}
                label="Opory obiegu [bar]"
              />
            </Grid>
            <Grid xs={5} sm={2.5} item>
              <CustomTextField
                selectOnFocus
                value={flowCMPH}
                onChange={handleFlowCMPHChange}
                label="Przepływ m3/h"
              />
            </Grid>
            <Grid sx={{ textAlign: 'center' }} item xs={2} sm={1}>
              <Typography variant="body2" sx={{ mt: 1.5 }}>
                Lub
              </Typography>
            </Grid>
            <Grid xs={5} sm={2.5} item>
              <CustomTextField
                selectOnFocus
                value={flowCDPS}
                onChange={handleFlowCDPSChange}
                label="Przepływ dm3/s"
              />
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      {result.valvePrDrop && (
        <Grid item xs={12}>
          <Paper elevation={2} sx={paperSX}>
            <Typography variant="body2">
              Przy autorytecie {valveAuthority} oraz przepływie {flowCMPH} m3/h,
              <Typography component="span" variant="body1">
                <strong> kv= {Calc.roundToDigits(result.valveKv, 2)}</strong>{' '}
              </Typography>
              m3/h oraz
              <Typography component="span" variant="body1">
                <strong> ΔP= {Calc.roundToDigits(result.valvePrDrop, 3)} </strong>
              </Typography>
              bar
            </Typography>
          </Paper>
        </Grid>
      )}
      {result.errMsg && (
        <Grid item xs={12}>
          <Paper elevation={2} sx={paperSX}>
            <Typography variant="body1">{result.errMsg}</Typography>
          </Paper>
        </Grid>
      )}
    </>
  )
}

export default ValveKvCalc
