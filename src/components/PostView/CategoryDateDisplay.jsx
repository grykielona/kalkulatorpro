import { Typography } from '@mui/material'
import React from 'react'

const CategoryDateDisplay = ({ category, date }) => (
  <Typography color="text.secondary" variant="body1" sx={{ my: 2 }}>
    {new Date(date).toLocaleDateString()}
    <Typography component="span" sx={{ mx: 0.5 }}>
      {' '}
      |{' '}
    </Typography>
    {category}
  </Typography>
)

export default CategoryDateDisplay
