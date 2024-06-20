import React, { useState } from 'react'
import { validationSchema } from '../utils/schemas/validationSchemas'
import { useLocation, LocationProvider } from '../context/LocationContext'
import { saveFormData } from '../services/apiServices'
import { toast } from 'react-hot-toast'
import ReporterForm from './reporterForm/reporterForm'
import ReportForm from './reportForm/reportForm'
import StepList from './stepList/stepList'
import PeopleInvolved from './peopleInvolvedForm.jsx/peopleInvolvedForm'
import ReviewInfo from './reviewForm/reviewForm'
import { Formik, Form } from 'formik'

const FormReport = () => {
  const { selectedLocation } = useLocation(LocationProvider)
  const [peopleList, setPeopleList] = useState([])
  const initialValues = {
    reporter: {
      aceptaCondicion: false,
      email: '',
      apellido: '',
      nombre: '',
      edad: '',
      tipoDocumento: '',
      nroDocumento: '',
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
  }
  const [step, setStep] = useState(0)

  const steps = [
    <ReporterForm key='reporter' stepLabel='Datos del denunciante' />,
    <ReportForm key='report' stepLabel='Datos de la denuncia' selectedLocation={selectedLocation} />,
    <PeopleInvolved key='peopleInvolved' stepLabel='Personas involucradas' setPeopleListParent={setPeopleList} />,
    <ReviewInfo key='review' stepLabel='Revisión de la denuncia' peopleList={peopleList} />
  ]

  const isLastStep = step === steps.length - 1
  console.log('isLastStep', isLastStep)

  const handleSubmit = async (values) => {
    if (isLastStep) {
      try {
        const data = await saveFormData(values)
        if (data) {
          toast.success('Denuncia enviada con éxito')
        }
      } catch (error) {
        toast.error('Error al enviar la denuncia, por favor revise los campos')
      }
    } else {
      setStep((prevStep) => prevStep + 1)
    }
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {() => (
        <div className='flex'>
          <div className='w-1/5'>
            <StepList steps={steps} currentStep={step} />
          </div>
          <div className='w-4/5'>
            <Form>
              {steps[step]}
              <div className='mt-4 flex justify-between'>
                <button
                  type='button'
                  onClick={() => setStep((prevStep) => prevStep - 1)}
                  className='px-4 py-2 bg-gray-500 text-white rounded-md disabled:opacity-50'
                >
                  Atrás
                </button>
                <button
                  type='submit'
                  className='px-4 py-2 bg-blue-500 text-white rounded-md cursor-pointer'
                >
                  {isLastStep ? 'Enviar' : 'Siguiente'}
                </button>
              </div>
            </Form>
          </div>
        </div>
      )}
    </Formik>
  )
}

export default FormReport
