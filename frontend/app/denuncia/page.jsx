'use client'
import React, { useState } from 'react'
import { reporterValidationSchema } from '../utils/schemas/reporterValidationSchemas'
import { reportValidationSchema } from '../utils/schemas/reportValidationSchema'
import { peopleValidationSchema } from '../utils/schemas/peopleValidationSchema'
import { useLocation, LocationProvider } from '../context/LocationContext'
import { saveFormData } from '../services/apiServices'
import ReporterForm from './reporterForm/reporterForm'
import ReportForm from './reportForm/reportForm'
import StepList from './stepList/stepList'
import PeopleInvolved from './peopleInvolvedForm.jsx/peopleInvolvedForm'
import ReviewInfo from './reviewForm/reviewForm'
import { Formik, Form } from 'formik'
import Button from '../components/Button'
import * as Yup from 'yup'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const FormReport = () => {
  const ActionNotification = ToastContainer
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
      localidad: ''
    },
    location: selectedLocation,
    report: {
      fecha: '',
      detalle: '',
      conozcoAlDenunciado: false,
      hayVictimas: false,
      hayTestigos: false
    },
    reporteds: [],
    victims: [],
    witnesses: []
  }
  const [step, setStep] = useState(0)

  const steps = [
    <ReporterForm key='reporter' stepLabel='Datos del denunciante' />,
    <ReportForm key='report' stepLabel='Datos de la denuncia' selectedLocation={selectedLocation} />,
    <PeopleInvolved key='peopleInvolved' stepLabel='Personas involucradas' setPeopleListParent={setPeopleList} />,
    <ReviewInfo key='review' stepLabel='Revisión de la denuncia' peopleList={peopleList} />
  ]

  const isLastStep = step === steps.length - 1

  const handleSubmit = async (values) => {
    console.log('values', values)
    if (isLastStep) {
      try {
        const dataToSubmit = {
          reporter: values.reporter,
          location: values.location,
          report: values.report,
          reporteds: values.reporteds,
          victims: values.victims,
          witnesses: values.witnesses
        }

        const data = await saveFormData(dataToSubmit)
        console.log('Formulario enviado', data)
        if (data) {
          toast.success('Denuncia enviada con éxito', {
            position: 'bottom-right'
          })
        }
      } catch (error) {
        toast.error('Error al enviar la denuncia, por favor revise los campos', {
          position: 'bottom-right'
        })
      }
    } else {
      try {
        getStepValidationSchema(step).validate(values, { abortEarly: false })
        setStep((prevStep) => prevStep + 1)
        console.log('setStep', step)
      } catch (error) {
        console.log('error', error)
      }
    }
  }

  const getStepValidationSchema = (step) => {
    switch (step) {
      case 0:
        return Yup.object().shape({
          reporter: reporterValidationSchema
        })
      case 1:
        return Yup.object().shape({
          report: reportValidationSchema
        })
      case 2:
        return Yup.object().shape({
          people: peopleValidationSchema
        })
      default:
        return Yup.object()
    }
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={getStepValidationSchema(step)}
      onSubmit={handleSubmit}
    >
      {() => (
        <div className='flex justify-center items-center min-h-screen bg-gray-100'>
          <div className='w-full h-screen overflow-hidden'>
            <div className='flex flex-col md:flex-row h-full'>
              <div className='w-full md:w-1/4 bg-secondary p-4 md:h-full flex items-center justify-center'>
                <StepList steps={steps} currentStep={step} />
              </div>
              <div className='w-full bg-primary h-full overflow-y-auto flex py-4 px-4'>
                <Form className='w-full'>
                  <div className='h-8 flex justify-center items-center'>
                    <h2 className='text-xl font-medium text-center text-dark mb-4 pt-4'>{steps[step].props.stepLabel}</h2>
                  </div>
                  {steps[step]}
                  <div className='mt-2 flex justify-between'>
                    <Button
                      text='Atrás'
                      onClick={() => setStep((prevStep) => prevStep - 1)}
                      disabled={step === 0}
                      color='#0F5EFD'
                    />
                    <Button
                      text={isLastStep ? 'Enviar' : 'Siguiente'}
                      type='submit'
                      color='#0F5EFD'
                    />
                  </div>
                </Form>
              </div>
            </div>
          </div>
          <ActionNotification />
        </div>
      )}
    </Formik>

  )
}

export default FormReport
