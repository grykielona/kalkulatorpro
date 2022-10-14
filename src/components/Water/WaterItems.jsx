import CopyAllOutlinedIcon from '@mui/icons-material/CopyAllOutlined'
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined'
import RestartAltIcon from '@mui/icons-material/RestartAlt'
import { Grid, IconButton, Paper, Tooltip, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import {
  calcQbasedOnQn,
  getProperPipeDepOnMaxSpeed,
  getSumOfQns,
} from '../../helpers/physicalCalculations'
import CustomTextField from '../Inputs/CustomTextField'
import WaterCalcRsults from './WaterCalcRsults'

const GRID_SPACING = 1
const paperSX = {
  py: { xs: 1, md: 1.5 },
  px: 2,
  position: 'relative',
}
const typograhySX = { fontSize: '0.8rem', textTransform: 'uppercase', mb: 2, mt: 1 }
const iconButtonStyles = {
  p: '0.3rem',
}

const WaterItems = ({
  buildingType,
  pipeType,
  speedCondition,
  itemsProp,
  handleAdd,
  isOnlyRow,
  id,
  handleRemoveRow,
}) => {
  const [Qn, setQn] = useState('')
  const [sumOfQn, setSumofQn] = useState('')
  const [results, setResults] = useState(false)
  const [items, setItems] = useState(
    itemsProp || {
      basin: 0,
      sink: 0,
      rinser: 0,
      tub: 0,
      shower: 0,
      wash: 0,
      dish: 0,
      urinal: 0,
    }
  )

  const handleItemChange = (e) => {
    const value = e.target.value === '' ? '' : Number(e.target.value)

    setItems((prevState) => ({ ...prevState, [e.target.name]: value }))
  }

  const handleReset = () =>
    setItems({
      basin: 0,
      sink: 0,
      rinser: 0,
      tub: 0,
      shower: 0,
      wash: 0,
      dish: 0,
      urinal: 0,
    })

  const shouldCalculate = () => Object.values(items).some((item) => item !== 0 && item !== '')

  useEffect(() => {
    const { basin, sink, rinser, tub, shower, wash, dish, urinal } = items
    const sumOfQns = getSumOfQns(basin, sink, rinser, tub, shower, wash, dish, urinal)
    const calculatedQn = calcQbasedOnQn(sumOfQns, buildingType)
    if (shouldCalculate()) {
      setSumofQn(sumOfQns)
      setQn(calculatedQn)
      setResults(getProperPipeDepOnMaxSpeed(speedCondition, calculatedQn, pipeType))
    } else {
      setResults(false)
    }
  }, [items, speedCondition, buildingType, pipeType])

  return (
    <Grid item xs={12}>
      <Paper elevation={2} sx={paperSX}>
        <Typography sx={typograhySX}>Przybory sanitarne</Typography>
        <Grid container spacing={GRID_SPACING} item xs={12}>
          <Grid item xs={3} md={1}>
            <CustomTextField
              fullEvent
              selectOnFocus
              name="basin"
              label="Umywalka"
              value={items.basin}
              onChange={handleItemChange}
            />
          </Grid>
          <Grid item xs={3} md={1}>
            <CustomTextField
              fullEvent
              selectOnFocus
              name="sink"
              label="Zlewozm."
              value={items.sink}
              onChange={handleItemChange}
            />
          </Grid>
          <Grid item xs={3} md={1}>
            <CustomTextField
              fullEvent
              selectOnFocus
              name="rinser"
              label="Płuczka"
              value={items.rinser}
              onChange={handleItemChange}
            />
          </Grid>
          <Grid item xs={3} md={1}>
            <CustomTextField
              fullEvent
              selectOnFocus
              name="tub"
              label="Wanna"
              value={items.tub}
              onChange={handleItemChange}
            />
          </Grid>
          <Grid item xs={3} md={1}>
            <CustomTextField
              fullEvent
              selectOnFocus
              name="shower"
              label="Natrysk"
              value={items.shower}
              onChange={handleItemChange}
            />
          </Grid>
          <Grid item xs={3} md={1}>
            <CustomTextField
              fullEvent
              selectOnFocus
              name="wash"
              label="Pralka"
              value={items.wash}
              onChange={handleItemChange}
            />
          </Grid>
          <Grid item xs={3} md={1}>
            <CustomTextField
              fullEvent
              selectOnFocus
              name="dish"
              label="Zmywarka"
              value={items.dish}
              onChange={handleItemChange}
            />
          </Grid>
          <Grid item xs={3} md={1}>
            <CustomTextField
              fullEvent
              selectOnFocus
              name="urinal"
              label="Pisuar"
              value={items.urinal}
              onChange={handleItemChange}
            />
          </Grid>

          {results && <WaterCalcRsults results={results} sumOfQn={sumOfQn} Qn={Qn} />}

          {results && (
            <Grid
              container
              xs={7}
              sm={3}
              mt={{ xs: 0.5 }}
              direction={{ xs: 'row', md: 'column' }}
              alignItems="end"
              justifyContent={{ xs: 'start', sm: 'end' }}
              spacing={{ xs: 1, md: 0 }}
              sx={{
                position: { xs: 'static', md: 'absolute' },
                right: '1%',
                top: '4%',
                zIndex: '111',
              }}
            >
              <Grid item>
                {!isOnlyRow && (
                  <Tooltip placement="right-start" title="Usuń wiersz">
                    <IconButton
                      onClick={() => handleRemoveRow(id)}
                      size="medium"
                      sx={iconButtonStyles}
                    >
                      <DeleteForeverOutlinedIcon />
                    </IconButton>
                  </Tooltip>
                )}
              </Grid>
              <Grid item>
                <Tooltip placement="right-start" title="Zeruj przybory">
                  <IconButton onClick={handleReset} size="medium" sx={iconButtonStyles}>
                    <RestartAltIcon />
                  </IconButton>
                </Tooltip>
              </Grid>
              <Grid item>
                <Tooltip placement="right-start" title="Skopiuj wiersz">
                  <IconButton onClick={() => handleAdd(items)} size="medium" sx={iconButtonStyles}>
                    <CopyAllOutlinedIcon />
                  </IconButton>
                </Tooltip>
              </Grid>
            </Grid>
          )}
        </Grid>
      </Paper>
    </Grid>
  )
}

export default WaterItems
