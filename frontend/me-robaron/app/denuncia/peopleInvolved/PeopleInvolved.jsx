import React, { useState } from 'react'
import PersonForm from '../personForm/personForm'
import FormCheckbox from '@/app/components/FormCheckbox'
import FormTextarea from '@/app/components/FormTextarea'

const PeopleInvolved = ({ formik }) => {
  const [showDenunciadoForm, setShowDenunciadoForm] = useState(false)
  const [showVictimForm, setShowVictimForm] = useState(false)

  const handleCheckboxChange = (event) => {
    formik.setFieldValue('showDenunciadoForm', event.target.checked)
    setShowDenunciadoForm(event.target.checked)
  }

  const handleOpenVictimForm = () => {
    setShowVictimForm(true)
    console.log('showVictimForm', showVictimForm)
  }

  return (
    <>
      <h1 className='text-white text-xl text-center pb-2'>
        Personas involucradas
      </h1>
      <section className='grid grid-cols-1 gap-4 pl-2 md:pt-5'>
        <FormCheckbox
          label='Conozco al denunciado'
          name='report.conozcoAlDenunciado'
          onChange={handleCheckboxChange}
          value={formik.values.report.conozcoAlDenunciado}
        />
        {showDenunciadoForm && (
          <>
            <div className='col-span-2'>
              <PersonForm />
            </div>
            <FormTextarea
              label='Vestimenta'
              name='reported.vestimenta'
              placeholder='Vestimenta'
              onChange={formik.handleChange}
              value={formik.values.reported.vestimenta || ''}
            />
            <FormTextarea
              label='Apariencia'
              name='reported.apariencia'
              placeholder='Apariencia'
              onChange={formik.handleChange}
              value={formik.values.reported.apariencia || ''}
            />
          </>
        )}
        <div className='flex'>
          <div className='col-span-2'>
            <button
              className='bg-blue-500 hover:bg-blue-700 text-white rounded bg-medium p-2 text-sm mr-4'
              onClick={handleOpenVictimForm}
            >
              Agregar Víctima
            </button>
            {showVictimForm && (
              <div className='col-span-2'>
                <PersonForm />
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  )
}

export default PeopleInvolved
