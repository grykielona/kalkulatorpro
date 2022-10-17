import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'
import React, { useState } from 'react'
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Link } from '@mui/material'

const CustomModal = ({ label, title, children, maxWidth = 'sm', link = false }) => {
  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  // TODO custom scrollbar

  return (
    <>
      {!link ? (
        <Button
          startIcon={<InfoOutlinedIcon />}
          variant="outlined"
          size="small"
          color="success"
          onClick={handleClickOpen}
        >
          {label}
        </Button>
      ) : (
        <Link
          underline="hover"
          onClick={handleClickOpen}
          variant="body2"
          component="button"
          color="inherit"
        >
          {label}
        </Link>
      )}
      <Dialog fullWidth maxWidth={maxWidth} open={open} onClose={handleClose}>
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        <DialogContent>{children}</DialogContent>
        <DialogActions>
          <Button color="info" onClick={handleClose}>
            Zamknij
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default CustomModal
