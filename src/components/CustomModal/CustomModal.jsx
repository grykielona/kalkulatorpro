import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'
import React, { useState } from 'react'
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material'

const CustomModal = ({ label, title, children }) => {
  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      <Button
        startIcon={<InfoOutlinedIcon />}
        variant="outlined"
        size="small"
        color="success"
        onClick={handleClickOpen}
      >
        {label}
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        <DialogContent>{children}</DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default CustomModal
