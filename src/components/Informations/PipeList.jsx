import { List, ListItem, Typography } from '@mui/material'
import React from 'react'

const PipeList = ({ pipeObject, header }) => (
  <List>
    {header}
    {Object.entries(pipeObject).map(([key, val]) => (
      <ListItem key={key} sx={{ my: 0, py: 0.1, fontSize: '0.9rem' }} dense>
        {key}
        <Typography color="text.disabled" component="span" sx={{ mx: 1 }}>
          |
        </Typography>
        {val}
      </ListItem>
    ))}
  </List>
)

export default PipeList
