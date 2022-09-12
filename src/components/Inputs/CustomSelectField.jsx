import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import React from 'react'
import { useDarkModeContext } from '../../contexts/DarkModeContextProvider'

const focusedColors = (mode) => (mode === 'light' ? 'primary.main' : 'grey.300')

const CustomSelectField = () => {
  const { mode } = useDarkModeContext()

  return (
    <FormControl sx={{ width: '55%' }}>
      <InputLabel id="demo-simple-select-label">Rodzja czynnika</InputLabel>
      <Select
        size="small"
        labelId="demo-simple-select-label"
        value="s"
        label="Rodzja czynnika"
        onChange={() => {}}
      >
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>
  )
}

export default CustomSelectField
