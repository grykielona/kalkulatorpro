import { TextField } from '@mui/material'
import React, { useRef } from 'react'
import { useDarkModeContext } from '../../contexts/DarkModeContextProvider'

const focusedColors = (mode) => (mode === 'light' ? 'primary.main' : 'grey.300')

const CustomTextField = ({
  label,
  width = '100%',
  value,
  onChange,
  helperText = '',
  disabled,
  fullEvent = false,
  name = '',
  selectOnFocus = false,
}) => {
  const { mode } = useDarkModeContext()
  const ref = useRef()

  return (
    <TextField
      sx={{
        width,
        '&.MuiTextField-root': {
          mb: { xs: '0.2rem', md: '0.5rem' },
        },
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
      onClick={() => {
        if (selectOnFocus) {
          ref.current.select()
        }
      }}
      // TODO: filter e (exponent)
      onChange={(e) => onChange(fullEvent ? e : e.target.value)}
      name={name || label}
      value={value}
      disabled={disabled}
      inputRef={ref}
      size="small"
      xw
      label={label}
      type="number"
      error={!!helperText}
      helperText={helperText}
      InputLabelProps={{ shrink: true }}
    />
  )
}

export default CustomTextField
