'use client'
import React, { useState, useEffect } from 'react'
import { useFormik } from 'formik'
import ReviewInfo from './reviewInfo/ReviewInfo'
import Reporter from './reporterForm/ReporterForm'
import PeopleInvolved from './peopleInvolved/PeopleInvolved'
import Report from './reportForm/ReportForm'
import { validationSchema } from '../utils/schemas/validationSchemas'
import { saveFormData } from '../services/apiServices'
import { useLocation, LocationProvider } from '../context/LocationContext'
const steps = [
  'Denunciante',
  'Personas involucradas',
  'Denuncia',
  'Resumen y envio'
]

const Form = () => {
  const [activeStep, setActiveStep] = useState(0)
  const { selectedLocation } = useLocation(LocationProvider)
  const [peopleList, setPeopleList] = useState([])

  useEffect(() => {
    setFieldValue('location', selectedLocation)
  }, [selectedLocation])

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1)
  }

  const handleNext = async () => {
    setActiveStep((prevStep) => prevStep + 1)
  }

  const { values, errors, touched, handleChange, handleBlur, setFieldValue, handleSubmit } = useFormik({
    initialValues: {
      reporter: {
        email: '',
        aceptoCondicion: false,
        apellido: '',
        nombre: '',
        tipoDocumento: '',
        nroDocumento: '',
        edad: 0,
        telefono: '',
        calle: '',
        numero: '',
        barrio: '',
        ciudad: ''
      },
      location: selectedLocation,
      report: {
        fecha: '',
        detalle: '',
        conozcoAlDenunciado: false,
        hayVictimas: false,
        hayTestigos: false
      },
      reported: {
        apellido: '',
        nombre: '',
        calle: '',
        numero: '',
        barrio: '',
        ciudad: '',
        vestimenta: '',
        apariencia: ''
      },
      victim: {
        apellido: '',
        nombre: '',
        calle: '',
        numero: '',
        barrio: '',
        ciudad: ''
      },
      witness: {
        apellido: '',
        nombre: '',
        calle: '',
        numero: '',
        barrio: '',
        ciudad: ''
      }
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        await validationSchema.validate(values)
        const data = await saveFormData(values)
        console.log('Respuesta del servidor:', data)
      } catch (error) {
        console.error('Errores de validación:', error.inner)
      }
    }
  })

  const formContent = (step) => {
    switch (step) {
      case 0:
        return <Reporter values={values} errors={errors} touched={touched} handleChange={handleChange} handleBlur={handleBlur} setFieldValue={setFieldValue} />
      case 1:
        return (
          <PeopleInvolved
            values={values} errors={errors} touched={touched} handleChange={handleChange} setFieldValue={setFieldValue} setPeopleListParent={setPeopleList}

          />
        )
      case 2:
        return (
          <Report
            values={values} errors={errors} touched={touched} handleChange={handleChange}
            selectedLocation={selectedLocation} setFieldValue={setFieldValue}
          />
        )
      case 3:
        return <ReviewInfo values={values} errors={errors} touched={touched} handleChange={handleChange} peopleList={peopleList} />
      default:
        return <div>404: Not Found</div>
    }
  }

  return (
    <main className='flex flex-col justify-between h-screen p-8 gap-10'>
      <section className='flex md:flex-row flex-col w-full h-screen'>
        <div className='md:border-r-2 md:border-r-medium md:w-1/5 flex'>
          <ul className='md:w-56 flex md:flex-col w-full justify-evenly '>
            {steps.map((label, index) => (
              <li key={index}>
                <span
                  className={`rounded-full px-2 py-1 text-sm text-white font-light bg-${
                    index === activeStep ? 'green' : 'trasnsparent'
                  }`}
                >
                  {index + 1}
                </span>
                <span className='md:px-2 md:text-sm md:text-white md:font-light md:visible invisible'>{label}</span>
              </li>
            ))}
          </ul>
        </div>
        <form className='md:w-4/5 pl-5 flex flex-col justify-center gap-10'>
          {formContent(activeStep)}
        </form>
      </section>
      <section className='flex justify-between w-full'>
        <button
          className='bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded disabled:opacity-50'
          disabled={activeStep === 0}
          onClick={handleBack}
          type='button'
        >
          Atrás
        </button>
        {activeStep === steps.length - 1
          ? (
            <button
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
              onClick={handleSubmit}
              type='submit'
            >
              Enviar
            </button>
            )
          : (
            <button
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
              onClick={handleNext}
              type='button'
            >
              Siguiente
            </button>
            )}
      </section>
    </main>
  )
}

export default Form
