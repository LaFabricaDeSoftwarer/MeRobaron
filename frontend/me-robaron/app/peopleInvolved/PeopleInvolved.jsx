import React from 'react'
import {
  Grid,
  FormControlLabel,
  Checkbox,
  Button,
  TextField,
  Modal,
  Box
} from '@mui/material'
import PersonForm from '../personForm/personForm'

const PeopleInvolved = ({ formik, showDenunciadoForm, setShowDenunciadoForm, showWitnessModal, setShowWitnessModal, showVictimModal, setShowVictimModal }) => {
  const handleCheckboxChange = (event) => {
    formik.handleChange(event)
    setShowDenunciadoForm(event.target.checked)
  }

  const externalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    maxWidth: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4
  }

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <FormControlLabel
          required
          control={<Checkbox />}
          label='Conozco al denunciado'
          name='conozcoAlDenunciado'
          checked={showDenunciadoForm}
          onChange={handleCheckboxChange}
        />
      </Grid>
      {showDenunciadoForm && (
        <>
          <PersonForm />
          <Grid item xs={6}>
            <TextField
              name='reported.vestimenta'
              label='Vestimenta'
              fullWidth
              onChange={formik.handleChange}
              value={formik.values.reported.vestimenta || ''}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              name='reported.apariencia'
              label='Apariencia'
              fullWidth
              onChange={formik.handleChange}
              value={formik.values.reported.apariencia || ''}
            />
          </Grid>
        </>
      )}
      <Grid item xs={12}>
        <Button onClick={() => setShowVictimModal(true)}>
          Agregar Víctima
        </Button>
        <Button onClick={() => setShowWitnessModal(true)}>
          Agregar Testigo
        </Button>
      </Grid>

      <Modal open={showVictimModal} onClose={() => setShowVictimModal(false)}>
        <Box sx={externalStyle}>
          <Box sx={{ mt: 2 }}>
            <PersonForm />
          </Box>
        </Box>
      </Modal>

      <Modal open={showWitnessModal} onClose={() => setShowWitnessModal(false)}>
        <Box sx={externalStyle}>
          <Box sx={{ mt: 2 }}>
            <PersonForm />
          </Box>
        </Box>
      </Modal>
    </Grid>
  )
}

export default PeopleInvolved
