import { Avatar, ListItem, ListItemAvatar, ListItemText, Paper, Typography } from '@mui/material'
import React from 'react'

const Bibliography = ({ img, alt, author, publisher, title }) => (
  <Paper sx={{ mb: 1 }}>
    <ListItem>
      <ListItemAvatar>
        <Avatar
          variant="rounded"
          alt={alt}
          src={img}
          sx={{ width: '60px', height: '60px', mr: 2 }}
        />
      </ListItemAvatar>
      <ListItemText
        primary={title}
        secondary={
          <>
            <Typography variant="body2">{author}</Typography>
            <Typography variant="body2">{publisher}</Typography>
          </>
        }
      />
    </ListItem>
  </Paper>
)

export default Bibliography
