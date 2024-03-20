import React from 'react'
import {
  Grid,
  TextField,
  InputLabel,
  Select,
  MenuItem,
  Checkbox
} from '@mui/material'

const Reporter = ({ formik }) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextField
          name='reporter.email'
          label='Email'
          fullWidth
          onChange={formik.handleChange}
          value={formik.values.reporter.email || ''}

        />
      </Grid>
      <Checkbox
        checked={formik.values.conozcoAlDenunciado || false}
        onChange={(event) => formik.setFieldValue('conozcoAlDenunciado', event.target.checked)}
        inputProps={{ 'aria-label': 'controlled' }}
      />
      <Grid item xs={12}>
        <TextField
          name='reporter.apellido'
          label='Apellido'
          fullWidth
          onChange={formik.handleChange}
          value={formik.values.reporter.apellido || ''}

        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          name='reporter.nombre'
          label='Nombre'
          fullWidth
          onChange={formik.handleChange}
          value={formik.values.reporter.nombre || ''}

        />
      </Grid>
      <Grid item xs={6}>
        <InputLabel id='tipoDocumento-label'>Tipo de Documento</InputLabel>
        <Select
          name='reporter.tipoDocumento'
          labelId='tipoDocumento-label'
          id='tipoDocumento'
          fullWidth
          value={formik.values.reporter.tipoDocumento || ''}
          onChange={formik.handleChange}
        >
          <MenuItem value={10}>DNI</MenuItem>
          <MenuItem value={20}>LC</MenuItem>
          <MenuItem value={30}>LE</MenuItem>
        </Select>
      </Grid>
      <Grid item xs={12}>
        <TextField
          name='reporter.nroDocumento'
          label='Numero de documento'
          fullWidth
          onChange={formik.handleChange}
          value={formik.values.reporter.nroDocumento || ''}

        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          name='reporter.edad'
          label='Edad'
          fullWidth
          onChange={formik.handleChange}
          value={formik.values.reporter.edad || ''}

        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          name='reporter.telefono'
          label='Telefono'
          fullWidth
          onChange={formik.handleChange}
          value={formik.values.reporter.telefono || ''}

        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          name='reporter.calle'
          label='Calle'
          fullWidth
          onChange={formik.handleChange}
          value={formik.values.reporter.calle || ''}

        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          name='reporter.numero'
          label='Numero'
          fullWidth
          onChange={formik.handleChange}
          value={formik.values.reporter.numero || ''}

        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          name='reporter.barrio'
          label='Barrio'
          fullWidth
          onChange={formik.handleChange}
          value={formik.values.reporter.barrio || ''}

        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          name='reporter.ciudad'
          label='Ciudad'
          fullWidth
          onChange={formik.handleChange}
          value={formik.values.reporter.ciudad || ''}

        />
      </Grid>
    </Grid>
  )
}

export default Reporter
