import React from 'react'
import styles from './styles.module.css'

const Modal = ({ show, onClose, children }) => {
  if (!show) {
    return null
  }

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>Cerrar</button>
        {children}
      </div>
    </div>
  )
}

export default Modal
