import React, { useState, useEffect } from 'react'
import { useFormik } from 'formik'
import {
  Box,
  Stepper,
  Step,
  StepLabel,
  Grid,
  Button
} from '@mui/material'

import ReviewInfo from '../reviewInfo/ReviewInfo'
import Reporter from '../reporterForm/ReporterForm'
import Reported from '../reportedForm/ReportedForm'
import Report from '../reportForm/FormReport'
import { fetchLocations } from '../../services/apiServices'

const steps = ['Denunciante', 'Denunciado', 'Denuncia', 'Resumen y envio']

const Form = () => {
  const [activeStep, setActiveStep] = useState(0)
  const [locations, setLocations] = useState([])
  const [showDenunciadoForm, setShowDenunciadoForm] = useState(false)

  // this function fetches the locations data from the api
  useEffect(() => {
    const fetchLocationsData = async () => {
      try {
        const getLocationsData = await fetchLocations()
        setLocations(getLocationsData)
      } catch (error) {
        console.error('Error fetching locations:', error.message)
      }
    }

    fetchLocationsData()
  }, [])

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1)
  }

  const formik = useFormik({
    initialValues: {
      email: '',
      aceptoCondiciones: false,
      apellido: '',
      nombre: '',
      tipoDocumento: '',
      nroDocumento: '',
      edad: '',
      telefono: '',
      calle: '',
      numero: '',
      barrio: '',
      ciudad: '',
      conozcoAlDenunciado: false,
      vestimenta: '',
      apariencia: '',
      fecha: '',
      detalle: ''
    },
    onSubmit: () => {
      if (activeStep === steps.length - 1) {
        console.log('formik.values', formik.values)
      } else {
        setActiveStep((prevStep) => prevStep + 1)
      }
    }
  })

  const formContent = (step) => {
    switch (step) {
      case 0:
        return <Reporter formik={formik} />
      case 1:
        return <Reported formik={formik} showDenunciadoForm={showDenunciadoForm} setShowDenunciadoForm={setShowDenunciadoForm} />
      case 2:
        return <Report formik={formik} />
      case 3:
        return <ReviewInfo formik={formik} locations={locations} />
      default:
        return <div>404: Not Found</div>
    }
  }

  return (
    <Box
      sx={{
        maxWidth: '600px',
        padding: 2
      }}
    >
      <Stepper
        activeStep={activeStep}
        orientation='horizontal'
      >
        {steps.map((label, index) => (
          <Step key={index}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Grid container>
        <Grid
          item
          xs={12}
          sx={{ padding: '20px' }}
        >
          {formContent(activeStep)}
        </Grid>
        <Grid
          item
          xs={12}
        >
          <Button
            disabled={activeStep === 0}
            onClick={handleBack}
          >
            Back
          </Button>
          {activeStep === steps.length - 1
            ? (
              <Button>
                Submit
              </Button>
              )
            : (
              <Button onClick={formik.handleSubmit}>
                Next
              </Button>
              )}
        </Grid>
      </Grid>
    </Box>
  )
}

export default Form
