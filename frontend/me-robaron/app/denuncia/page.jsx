'use client'
import React, { useState, useEffect } from 'react'
import { useFormik } from 'formik'
import ReviewInfo from './reviewInfo/ReviewInfo'
import Reporter from './reporterForm/ReporterForm'
// import Reported from '../reportedForm/ReportedForm'
import PeopleInvolved from './peopleInvolved/PeopleInvolved'
import Report from './reportForm/ReportForm'
import { fetchLocations, saveFormData } from '../services/apiServices'

const steps = [
  'Denunciante',
  'Personas involucradas',
  'Denuncia',
  'Resumen y envio'
]

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
        return (
          <Report
            formik={formik}
            selectedLocation={selectedLocation}
            setSelectedLocation={setSelectedLocation}
          />
        )
      case 3:
        return <ReviewInfo formik={formik} locations={locations} />
      default:
        return <div>404: Not Found</div>
    }
  }

  return (
    <section className='bg-dark h-full flex flex-col justify-center items-center p-5'>
      <div className='flex md:flex-row w-full md:h-4/5 justify-center items-center flex-col h-full  max-w-5xl my-0 mx-auto'>
        <div className='md:w-56 h-20 w-full md:h-full border-r-2 border-r-medium'>
          <ul className='w-full flex md:flex-col space-y-4'>
            {steps.map((label, index) => (
              <li
                key={index}
                className={`flex items-center rounded-t-md px-4 py-2 font-medium ${
                  index === activeStep
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200'
                }`}
              >
                <span
                  className={`rounded-full px-2 text-sm text-white bg-${
                    index === activeStep ? 'green' : 'trasnsparent'
                  }`}
                >
                  {index + 1}
                </span>
                <span className='px-2 text-sm text-white'>{label}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className='h-full w-full '>
          <div className='flex-grow p-2 h-full'>
            {formContent(activeStep)}
          </div>
        </div>
      </div>
      <div className='flex justify-between w-full mt-2  max-w-5xl my-0 mx-auto'>
        <button
          className='bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded disabled:opacity-50'
          disabled={activeStep === 0}
          onClick={handleBack}
        >
          Atrás
        </button>
        {activeStep === steps.length - 1
          ? (
            <button
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
              onClick={formik.handleSubmit}
            >
              Enviar
            </button>
            )
          : (
            <button
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
              onClick={() => setActiveStep((prevStep) => prevStep + 1)}
            >
              Siguiente
            </button>
            )}
      </div>
    </section>
  )
}

export default Form
