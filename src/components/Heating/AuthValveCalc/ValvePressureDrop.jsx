import { Grid, Paper, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import CustomTextField from '../../Inputs/CustomTextField'
import * as Calc from '../../../helpers/physicalCalculations'
import { shouldCalculateInputs, transformInpt } from '../../../helpers/conditions'
import CustomSelectField from '../../Inputs/CustomSelectField'
import { kvsValves } from '../../../helpers/enums'

const paperSX = { py: 1, px: 2 }
const typograhySX = { fontSize: '0.8rem', textTransform: 'uppercase', mb: 2, mt: 1 }

const ValvePressureDrop = () => {
  const [valveKv, setValveKv] = useState('')
  const [flowCMPH, setFlowCMPH] = useState('')
  const [flowCDPS, setFlowCDPS] = useState('')
  const [result, setResult] = useState({ errMsg: false, resultNumber: false })
  useEffect(() => {
    if (shouldCalculateInputs(valveKv, flowCMPH)) {
      const valvePrDrop = Calc.getValvePrDropFromKv(valveKv, flowCMPH)
      // eslint-disable-next-line no-unused-expressions
      valvePrDrop >= 0.0001
        ? setResult({ errMsg: false, resultNumber: Calc.roundToDigits(valvePrDrop, 4) })
        : setResult({
            errMsg: 'Za duzy kvs w stosunku do przepływu',
            resultNumber: false,
          })
      return
    }
    setResult({ errMsg: false, resultNumber: false })
  }, [valveKv, flowCMPH])

  const handleValveKvhange = (e) => {
    setValveKv(transformInpt(e))
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
          <Typography sx={typograhySX}>Spadek ciśnienia na zaworze</Typography>
          <Grid container spacing={1}>
            <Grid xs={12} smm={3} item>
              <CustomSelectField
                defaultValue={valveKv}
                label="Kvs zaworu m3/h"
                labelId="kvs-valve"
                menuItem={kvsValves}
                dense
                onChange={(e) => {
                  handleValveKvhange(e)
                }}
              />
              {/* <CustomTextField
                selectOnFocus
                value={valveKv}
                onChange={handleValveKvhange}
                label="Kvs zaworu m3/h"
              /> */}
            </Grid>
            <Grid xs={5} smm={4} item>
              <CustomTextField
                selectOnFocus
                value={flowCMPH}
                onChange={handleFlowCMPHChange}
                label="Przepływ m3/h"
              />
            </Grid>
            <Grid sx={{ textAlign: 'center' }} item xs={2} smm={1}>
              <Typography variant="body2" sx={{ mt: 1.5 }}>
                Lub
              </Typography>
            </Grid>
            <Grid xs={5} smm={4} item>
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
      {result.resultNumber && (
        <Grid item xs={12}>
          <Paper elevation={2} sx={paperSX}>
            <Typography variant="body2">
              Spadek ciśnienia na zaworze przy przepływie {flowCMPH} m3/h wyniesie
              <Typography component="span" variant="body1">
                <strong> {result.resultNumber}</strong>{' '}
              </Typography>
              bar ~
              <Typography component="span" variant="body1">
                <strong> {Calc.roundToDigits(result.resultNumber * 100, 2)} </strong>
              </Typography>
              kPa
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

export default ValvePressureDrop
