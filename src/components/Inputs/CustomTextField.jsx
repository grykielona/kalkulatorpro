import { TextField } from '@mui/material'
import React from 'react'
import { useDarkModeContext } from '../../contexts/DarkModeContextProvider'

const focusedColors = (mode) => (mode === 'light' ? 'primary.main' : 'grey.300')

const CustomTextField = ({ label, width }) => {
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
      }}
      size="small"
      label={label}
      InputLabelProps={{ shrink: true }}
    />
  )
}

export default CustomTextField
