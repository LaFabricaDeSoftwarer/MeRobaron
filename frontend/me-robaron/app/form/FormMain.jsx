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
// import Reported from '../reportedForm/ReportedForm'
import PeopleInvolved from '../peopleInvolved/PeopleInvolved'
import Report from '../reportForm/ReportForm'
import { fetchLocations, saveFormData } from '../services/apiServices'

const steps = ['Denunciante', 'Personas involucradas', 'Denuncia', 'Resumen y envio']

const Form = () => {
  const [activeStep, setActiveStep] = useState(0)
  const [locations, setLocations] = useState([])
  const [selectedLocation, setSelectedLocation] = useState({
    direccion: '',
    latitud: 0,
    longitud: 0

  })
  const [showDenunciadoForm, setShowDenunciadoForm] = useState(false)
  const [showVictimModal, setShowVictimModal] = useState(false)
  const [showWitnessModal, setShowWitnessModal] = useState(false)

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

  useEffect(() => {
    formik.setFieldValue('location', selectedLocation)
  }, [selectedLocation])

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1)
  }

  const formik = useFormik({
    initialValues: {
      reporter: {
        email: '',
        aceptoCondicion: false,
        apellido: '',
        nombre: '',
        tipoDocumento: '',
        nroDocumento: 0,
        edad: 0,
        telefono: '',
        calle: '',
        numero: '',
        barrio: '',
        ciudad: ''
      },
      location: selectedLocation,
      person: {
        apellido: '',
        nombre: '',
        calle: '',
        numero: '',
        barrio: '',
        ciudad: ''
      },
      report: {
        fecha: '',
        detalle: '',
        conozcoAlDenunciado: false
      },
      reported: {
        vestimenta: '',
        apariencia: ''
      },
      victim: {
        // Detalles de la víctima
      },
      witness: {
        // Detalles del testigo
      }
    },
    onSubmit: async (values) => {
      console.log('Valores enviados:', values)
      try {
        const data = await saveFormData(values)
        console.log('Respuesta del servidor:', data)
      } catch (error) {
        console.error('Error al enviar la solicitud:', error)
      }
    }
  })

  const formContent = (step) => {
    switch (step) {
      case 0:
        return <Reporter formik={formik} />
      case 1:
        return (
          <PeopleInvolved
            formik={formik}
            showDenunciadoForm={showDenunciadoForm}
            setShowDenunciadoForm={setShowDenunciadoForm}
            showWitnessModal={showWitnessModal}
            setShowWitnessModal={setShowWitnessModal}
            showVictimModal={showVictimModal}
            setShowVictimModal={setShowVictimModal}
          />
        )
      case 2:
        return <Report formik={formik} selectedLocation={selectedLocation} setSelectedLocation={setSelectedLocation} />
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
        padding: 2,
        display: 'flex'
      }}
    >
      <Stepper
        activeStep={activeStep}
        orientation='vertical'
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
              <Button onClick={formik.handleSubmit}>
                Submit
              </Button>
              )
            : (
              <Button onClick={() => setActiveStep(prevStep => prevStep + 1)}>
                Next
              </Button>
              )}
        </Grid>
      </Grid>
    </Box>
  )
}

export default Form
