import { Grid, Paper, Typography } from '@mui/material'
import React, { useState } from 'react'
import { pipeRoughness, typeOfBuilding } from '../../helpers/enums'
import CustomSelectField from '../Inputs/CustomSelectField'
import CustomTextField from '../Inputs/CustomTextField'
import WaterItems from './WaterItems'

const GRID_SPACING = 1
const paperSX = {
  py: { xs: 1, md: 1.5 },
  px: 2,
  position: 'relative',
}
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

  const handleRemoveRow = (id) => {
    setItemsRows((prevState) => prevState.filter((item) => item !== id))
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

      {itemsRows.map((item) => (
        <WaterItems
          speedCondition={speedCondition}
          pipeType={pipeType}
          buildingType={buildingType}
          key={item}
          id={item}
          itemsProp={itemsProp}
          handleAdd={handleAddRow}
          isOnlyRow={itemsRows.length === 1}
          handleRemoveRow={handleRemoveRow}
        />
      ))}
    </Grid>
  )
}

export default WaterCalc
