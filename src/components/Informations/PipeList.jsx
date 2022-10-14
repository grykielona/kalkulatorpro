import { List, ListItem } from '@mui/material'
import React from 'react'

const PipeList = ({ pipeObject, header }) => (
  <List>
    {header}
    {Object.entries(pipeObject).map(([key, val]) => (
      <ListItem key={key} sx={{ fontSize: '0.9rem' }} dense>
        {key} | {val}
      </ListItem>
    ))}
  </List>
)

export default PipeList
