import { Divider } from '@mui/material'
import React from 'react'

const ResultDivider = ({ color = '' }) => (
  <Divider
    sx={{ mx: { xs: 1, sm: 2 }, backgroundColor: color ? 'error.main' : 'text.primary' }}
    flexItem
    orientation="vertical"
  />
)

export default ResultDivider
