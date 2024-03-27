import React from 'react'
import { TextField, Grid } from '@mui/material'
import Geolocation from '../../components/geolocation/Geolocation'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import dayjs from 'dayjs'
const Report = ({ formik, selectedLocation, setSelectedLocation }) => {
  const formatFecha = (date) => {
    return dayjs(date).format('YYYY-MM-DD')
  }

  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={['DatePicker']}>
            <DatePicker
              label='Fecha'
              value={formik.values.report.fecha || null}
              onChange={(date) => formik.setFieldValue('report.fecha', formatFecha(date))}
              fullWidth
            />
          </DemoContainer>
        </LocalizationProvider>
      </Grid>
      <Grid item xs={8}>
        <TextField
          name='report.detalle'
          label='Detalle'
          fullWidth
          onChange={formik.handleChange}
          value={formik.values.report.detalle || ''}

        />
      </Grid>
      <Grid item xs={12}>
        <Geolocation selectedLocation={selectedLocation} setSelectedLocation={setSelectedLocation} formik={formik} />
      </Grid>
    </Grid>
  )
}

export default Report
