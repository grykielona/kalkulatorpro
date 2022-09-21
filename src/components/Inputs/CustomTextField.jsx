import { TextField } from '@mui/material'
import React from 'react'
import { useDarkModeContext } from '../../contexts/DarkModeContextProvider'

const focusedColors = (mode) => (mode === 'light' ? 'primary.main' : 'grey.300')

const CustomTextField = ({ label, width, value, onChange }) => {
  const { mode } = useDarkModeContext()

  return (
    <TextField
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
        '& input[type=number]': {
          '-moz-appearance': 'textfield',
        },
        '& input[type=number]::-webkit-outer-spin-button': {
          '-webkit-appearance': 'none',
          margin: 0,
        },
        '& input[type=number]::-webkit-inner-spin-button': {
          '-webkit-appearance': 'none',
          margin: 0,
        },
      }}
      // TODO: filter e (exponent)
      onChange={(e) => onChange(e.target.value)}
      value={value}
      size="small"
      label={label}
      type="number"
      InputLabelProps={{ shrink: true }}
    />
  )
}

export default CustomTextField