import React from 'react'
import {
  Grid,
  FormControlLabel,
  Checkbox,
  Button,
  TextField
} from '@mui/material'
import PersonForm from '../personForm/personForm'

const Reported = ({ formik, showDenunciadoForm, setShowDenunciadoForm }) => {
  const handleCheckboxChange = (event) => {
    formik.handleChange(event)
    setShowDenunciadoForm(event.target.checked)
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
          {/* Formulario del denunciado */}
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
      {showDenunciadoForm && (
        <Grid item xs={12}>
          <Button onClick={() => console.log('Agregar denunciado')}>
            Agregar Denunciado
          </Button>
        </Grid>
      )}
    </Grid>
  )
}

export default Reported
