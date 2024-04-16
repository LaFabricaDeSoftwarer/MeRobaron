import React from 'react'
import { Dialog, DialogContent, DialogActions, Button } from '@mui/material'
// import styles from './styles.module.css'
const Modal = ({ open, onClose, children }) => {
  return (
    <Dialog open={open || false} onClose={onClose}>
      <DialogContent>
        {children}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color='primary'>
          Cerrar
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default Modal
