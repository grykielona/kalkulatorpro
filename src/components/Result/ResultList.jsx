import { List, ListItem, ListItemAvatar, Typography } from '@mui/material'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline'
import React from 'react'
import ResultDivider from './ResultDivider'

const ResultList = ({ results }) => (
  <List>
    {results &&
      results.map(({ diameter, pressureDrop, speed, isAboveAcceptable }) => {
        const color = isAboveAcceptable ? 'error' : ''
        return (
          <ListItem key={diameter} sx={{ color: 'error', mb: 1 }} color="error" disablePadding>
            <ListItemAvatar sx={{ lineHeight: 0, minWidth: '0', mr: 1 }}>
              {isAboveAcceptable ? (
                <ErrorOutlineIcon fontSize="1.5rem" color="error" />
              ) : (
                <CheckCircleOutlineIcon fontSize="1.5rem" />
              )}
            </ListItemAvatar>
            <Typography color={color}>{diameter}</Typography>
            <ResultDivider color={color} />
            <Typography color={color}>{`${pressureDrop} Pa/m`}</Typography>
            <ResultDivider color={color} />
            <Typography color={color}>{`${speed} m/s`}</Typography>
          </ListItem>
        )
      })}
  </List>
)

export default ResultList
