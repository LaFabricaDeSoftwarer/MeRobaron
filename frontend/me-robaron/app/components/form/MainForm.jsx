import { Formik, Form } from 'formik'
import { submitForm, fetchLocations } from '../../services/apiServices'
import Map from '../geolocation/Map'
import Geolocation from '../geolocation/Geolocation'
import { useState, useEffect } from 'react'
import PersonForm from '../personForm/personForm'
import ReportForm from '../reportForm/ReportForm'
// import * as yup from 'yup'

export const MainForm = () => {
  const [locationData, setLocationData] = useState({
    direccion: '',
    latitud: '',
    longitud: ''
  })
  const [locations, setLocations] = useState([])

  useEffect(() => {
    const fetchLocationsData = async () => {
      try {
        const locationsData = await fetchLocations()
        setLocations(locationsData)
      } catch (error) {
        console.error('Error fetching locations:', error.message)
      }
    }

    fetchLocationsData()
  }, [])

  const handleSubmit = async (values, { setSubmitting }) => {
    console.log('values:', values)
    try {
      const dataToSend = { ...values, ...locationData }
      const responseData = await submitForm(dataToSend)
      console.log('Response:', responseData)
      alert('Formulario enviado exitosamente')
    } catch (error) {
      console.error('Error al enviar el formulario:', error.message)
      alert('Hubo un error al enviar el formulario')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <Formik
      initialValues={{
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
        email: '',
        aceptCondition: false,
        date: '',
        direccion: '',
        latitud: '',
        longitud: '',
        detail: '',
        clothing: '',
        appearance: ''
      }}
      onSubmit={handleSubmit}

    >
      <Form>
        <PersonForm />
        <ReportForm />
        <Geolocation setLocationData={setLocationData} />
        <Map locations={locations} />
        <button type='submit'>Enviar</button>
      </Form>
    </Formik>
  )
}
