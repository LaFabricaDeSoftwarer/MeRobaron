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
import toast, { Toaster } from 'react-hot-toast'
import * as Yup from 'yup'
const steps = [
  'Denunciante',
  'Personas involucradas',
  'Denuncia',
  'Resumen y envío'
]

const Form = () => {
  const [activeStep, setActiveStep] = useState(0)
  const { selectedLocation } = useLocation(LocationProvider)
  const [peopleList, setPeopleList] = useState([])

  const formik = useFormik({
    initialValues: {
      reporter: {
        email: '',
        aceptaCondicion: false,
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
        barrio: '',
        numero: '',
        ciudad: '',
        tipoDocumento: '',
        nroDocumento: '',
        vestimenta: '',
        apariencia: ''
      },
      victim: {
        apellido: '',
        nombre: '',
        calle: '',
        barrio: '',
        numero: '',
        ciudad: '',
        tipoDocumento: '',
        nroDocumento: ''
      },
      witness: {
        apellido: '',
        nombre: '',
        calle: '',
        barrio: '',
        numero: '',
        ciudad: '',
        tipoDocumento: '',
        nroDocumento: ''
      }
    },
    validationSchema,
    onSubmit: async (values) => {
      console.log('values', values)
      try {
        const data = await saveFormData(values)
        console.log('data', data)
        if (data) {
          console.log('Denuncia enviada con éxito')
          toast.success('Denuncia enviada con éxito')
        }
      } catch (error) {
        console.error('Errores de validación:', error.inner)
        toast.error('Error al enviar la denuncia, por favor revise los campos')
      }
    }
  })

  const { values, errors, touched, handleChange, handleBlur, setFieldValue, handleSubmit, setErrors } = formik

  useEffect(() => {
    setFieldValue('location', selectedLocation)
  }, [selectedLocation])

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1)
  }

  const handleNext = async () => {
    const currentStepSchema = getCurrentStepSchema(activeStep)
    try {
      await currentStepSchema.validate(values, { abortEarly: false })
      setActiveStep((prevStep) => prevStep + 1)
    } catch (validationErrors) {
      const formikErrors = validationErrors.inner.reduce((acc, error) => {
        acc[error.path] = error.message
        console.log('error', error)
        return acc
      }, {})
      setErrors(formikErrors)
      console.log('formikErrors', formikErrors)
    }
  }

  const getCurrentStepSchema = (step) => {
    switch (step) {
      case 0:
        return Yup.object().shape({ reporter: validationSchema.fields.reporter })
      case 1:
        return Yup.object().shape({ peopleInvolved: validationSchema.fields.peopleInvolved })
      case 2:
        return Yup.object().shape({ report: validationSchema.fields.report })
      case 3:
        return validationSchema
      default:
        return Yup.object()
    }
  }

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
    <main className='container mx-auto'>
      <section className='max-w-4xl mx-auto bg-newdark rounded-md p-4 text-white'>
        <div className='flex flex-col lg:flex-row lg:gap-10'>
          <ul className='lg:w-1/4 w-full lg:border-r-2 border-green mb-4 lg:mb-0'>
            {steps.map((label, index) => (
              <li key={index} className='mb-6'>
                <span
                  className={`rounded-full px-2 py-1 text-sm text-white font-light border-2 border-green ${index === activeStep ? 'bg-green' : 'bg-transparent'}`}
                >
                  {index + 1}
                </span>
                <span className='ml-2 text-sm text-gray-700'>{label}</span>
              </li>
            ))}
          </ul>
          <form className='lg:w-3/4 w-full' onSubmit={handleSubmit}>
            {formContent(activeStep)}
            <div className='flex justify-between mt-4'>
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
                  <>
                    <button
                      className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                      type='submit'
                    >
                      Enviar
                    </button>
                    <Toaster position='bottom-right' reverseOrder={false} />
                  </>
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
            </div>
          </form>
        </div>
      </section>
    </main>
  )
}

export default Form
