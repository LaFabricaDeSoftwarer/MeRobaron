import React from 'react'
import { TextField, Grid } from '@mui/material'
import Geolocation from '../geolocation/Geolocation'

const Report = ({ formik, selectedLocation, setSelectedLocation }) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <TextField
          name='report.fecha'
          label='Fecha'
          fullWidth
          onChange={formik.handleChange}
          value={formik.values.report.fecha || ''}

        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          name='report.detalle'
          label='Detalle'
          fullWidth
          onChange={formik.handleChange}
          value={formik.values.report.detalle || ''}

        />
      </Grid>
      <Grid item xs={12}>
        <Geolocation selectedLocation={selectedLocation} setSelectedLocation={setSelectedLocation} />
      </Grid>
    </Grid>
  )
}

export default Report
