import React from 'react'
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material'
import styles from './styles.module.css'
const Modal = ({ open, onClose, children }) => {
  return (
    <Dialog open={open || false} onClose={onClose} className={styles.modalContent}>
      <DialogTitle>Cerrar</DialogTitle>
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
