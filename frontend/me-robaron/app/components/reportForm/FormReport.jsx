import React from 'react'
import { TextField, Grid } from '@mui/material'
import Geolocation from '../geolocation/Geolocation'

const Report = ({ formik, locations, selectedLocation }) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <TextField
          name='fecha'
          label='Fecha'
          variant='outlined'
          size='small'
          fullWidth
          value={formik.values.fecha}
          onChange={formik.handleChange}
          helperText={formik.touched.fecha && formik.errors.fecha}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          name='detalle'
          label='Detalle'
          variant='outlined'
          size='small'
          fullWidth
          value={formik.values.detalle}
          onChange={formik.handleChange}
          error={formik.touched.detalle && Boolean(formik.errors.detalle)}
          helperText={formik.touched.detalle && formik.errors.detalle}
        />
      </Grid>
      <Grid item xs={12}>
        <Geolocation locations={locations} selectedLocation={selectedLocation} />
      </Grid>
    </Grid>
  )
}

export default Report
