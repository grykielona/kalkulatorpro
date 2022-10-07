import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined'
import ShortcutOutlinedIcon from '@mui/icons-material/ShortcutOutlined'
import { Grid, IconButton, Paper, Tooltip, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { pipeRoughness, typeOfBuilding } from '../../helpers/enums'
import CustomSelectField from '../Inputs/CustomSelectField'
import CustomTextField from '../Inputs/CustomTextField'

const GRID_SPACING = 1
const paperSX = { py: 1, px: 2, position: 'relative' }
const typograhySX = { fontSize: '0.8rem', textTransform: 'uppercase', mb: 2, mt: 1 }

const WaterCalc = () => {
  const [pipeType, setPipeType] = useState(0.007002)
  const [buildingType, setBuildingType] = useState(1)
  const [speedCondition, setSpeedCondition] = useState(1.5)
  const [itemsRows, setItemsRows] = useState([1])
  const [itemsProp, setItemsProp] = useState(null)

  const handleSpeedConditionChange = (e) => {
    setSpeedCondition(e)
  }

  const handleAddRow = (items) => {
    setItemsProp(items)
    setItemsRows((prevState) => [...prevState, prevState[prevState.length - 1] + 1])
  }

  return (
    <Grid container spacing={GRID_SPACING}>
      <Grid item xs={12}>
        <Paper elevation={2} sx={paperSX}>
          <Typography sx={typograhySX}>Warunki obliczeniowe</Typography>
          <Grid container spacing={GRID_SPACING} item xs={12}>
            <Grid item xs={5}>
              <CustomSelectField
                label="Rodzaj budynku"
                labelId="type-of-building"
                defaultValue={1}
                menuItem={typeOfBuilding}
                onChange={(e) => {
                  setBuildingType(e)
                }}
              />
            </Grid>
            <Grid item xs={5}>
              <CustomSelectField
                defaultValue={0.007002}
                label="Rodzaj rury"
                labelId="type-of-pipe"
                menuItem={pipeRoughness}
                onChange={(e) => {
                  setPipeType(e)
                }}
              />
            </Grid>
            <Grid item xs={2}>
              <CustomTextField
                label="Kryt. prędkości"
                value={speedCondition}
                onChange={handleSpeedConditionChange}
              />
            </Grid>
          </Grid>
        </Paper>
      </Grid>

      {/* {JSON.stringify(itemsRows)} */}
      {itemsRows.map((item) => (
        <WaterItems
          speedCondition={speedCondition}
          pipeType={pipeType}
          buildingType={buildingType}
          key={item}
          id={item}
          itemsProp={itemsProp}
          handleAdd={handleAddRow}
        />
      ))}
    </Grid>
  )
}

export default WaterCalc

export const WaterItems = ({ buildingType, pipeType, speedCondition, itemsProp, handleAdd }) => {
  const [Qn, setQn] = useState('')
  const [items, setItems] = useState(
    itemsProp || {
      basin: '',
      sink: '',
      rinser: '',
      tub: '',
      shower: '',
      wash: '',
      dish: '',
      urinal: '',
    }
  )

  const handleChange = (e) => {
    setItems((prevState) => ({ ...prevState, [e.target.name]: Number(e.target.value) }))
  }

  useEffect(() => {
    setQn(Object.values(items).reduce((prev, curr) => prev + curr, 0) * speedCondition)
  }, [items, speedCondition, buildingType, pipeType])

  return (
    <Grid item xs={12}>
      <Paper elevation={2} sx={paperSX}>
        <Tooltip title="Skopiuj wiersz">
          <IconButton
            onClick={() => handleAdd(items)}
            size="large"
            color="success"
            sx={{ position: 'absolute', right: '1%', bottom: '3%' }}
          >
            <AddCircleOutlineOutlinedIcon />
            <ShortcutOutlinedIcon sx={{ transform: 'rotate(90deg)' }} />
          </IconButton>
        </Tooltip>
        <Typography sx={typograhySX}>Przybory sanitarne</Typography>
        <Grid container spacing={GRID_SPACING} item xs={12}>
          <Grid item xs={3} md={1}>
            <CustomTextField
              fullEvent
              name="basin"
              label="Umywalka"
              value={items.basin}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={3} md={1}>
            <CustomTextField
              fullEvent
              name="sink"
              label="Zlewozm."
              value={items.sink}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={3} md={1}>
            <CustomTextField
              fullEvent
              name="rinser"
              label="Płuczka"
              value={items.rinser}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={3} md={1}>
            <CustomTextField
              fullEvent
              name="tub"
              label="Wanna"
              value={items.tub}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={3} md={1}>
            <CustomTextField
              fullEvent
              name="shower"
              label="Natrysk"
              value={items.shower}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={3} md={1}>
            <CustomTextField
              fullEvent
              name="wash"
              label="Pralka"
              value={items.wash}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={3} md={1}>
            <CustomTextField
              fullEvent
              name="dish"
              label="Zmywarka"
              value={items.dish}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={3} md={1}>
            <CustomTextField
              fullEvent
              name="urinal"
              label="Pisuar"
              value={items.urinal}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={4}>
            <Typography variant="body2">
              ΣQn={Qn} l/s Qobl={Qn * 2} m3/h | {Qn * 2} l/s
            </Typography>
            {/* <Typography>
                Qobl={Qn * 2} m3/h | {Qn * 2} l/s
              </Typography> */}
            <Typography variant="body2">63x10,5 | w=1.14 m/s</Typography>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  )
}
