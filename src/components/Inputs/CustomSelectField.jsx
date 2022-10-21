import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import React, { useState } from 'react'
import { useDarkModeContext } from '../../contexts/DarkModeContextProvider'

const focusedColors = (mode) => (mode === 'light' ? 'primary.main' : 'grey.300')

const CustomSelectField = ({
  menuItem,
  label,
  width = '100%',
  labelId,
  onChange,
  defaultValue = '',
  dense = false,
}) => {
  const [selectValue, setSelectValue] = useState(defaultValue)
  const { mode } = useDarkModeContext()

  return (
    <FormControl
      sx={{
        width,
        '& label.Mui-focused': {
          color: focusedColors(mode),
        },
        '& .MuiOutlinedInput-root': {
          '&.Mui-focused fieldset': {
            borderColor: focusedColors(mode),
          },
        },
      }}
    >
      <InputLabel shrink id={labelId}>
        {label}
      </InputLabel>
      <Select
        // @ts-ignore
        notched
        size="small"
        labelId={labelId}
        value={selectValue}
        label={label}
        onChange={(e) => {
          const val = e.target.value
          setSelectValue(val)
          onChange(val)
        }}
      >
        {menuItem?.map(({ itemValue, itemLabel }) => (
          <MenuItem dense={dense} key={`${itemLabel}-${itemValue}`} value={itemValue}>
            {itemLabel}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

export default CustomSelectField
