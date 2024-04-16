import React from 'react'
import PersonForm from '../personForm/personForm'

const PeopleInvolved = ({ formik, showDenunciadoForm, setShowDenunciadoForm, showWitnessModal, setShowWitnessModal, showVictimModal, setShowVictimModal }) => {
  const handleCheckboxChange = (event) => {
    formik.handleChange(event)
    setShowDenunciadoForm(event.target.checked)
  }

  return (
    <div className='grid grid-cols-1 gap-4 pl-2'>
      <div className='flex gap-2 '>
        <label className='block text-white text-sm pb-2'>Conozco al denunciado</label>
        <input
          type='checkbox'
          className='form-checkbox h-5 w-5 text-white rounded-md bg-medium appearance-none cursor-pointer'
          checked={showDenunciadoForm}
          onChange={handleCheckboxChange}
        />
      </div>
      {showDenunciadoForm && (
        <>
          <div className='col-span-2'>
            <PersonForm />
          </div>
          <div className='col-span-1'>
            <label className='block text-white text-sm pb-2'>Vestimenta</label>
            <input
              className='w-full px-3 py-2 text-white leading-tight focus:outline-none focus:shadow-outline rounded-md bg-medium appearance-none'
              type='text'
              name='reported.vestimenta'
              placeholder='Vestimenta'
              onChange={formik.handleChange}
              value={formik.values.reported.vestimenta || ''}
            />
          </div>
          <div className='col-span-1'>
            <label className='block text-white text-sm pb-2'>Apariencia</label>
            <input
              className='w-full px-3 py-2 text-white leading-tight focus:outline-none focus:shadow-outline rounded-md bg-medium appearance-none'
              type='text'
              name='reported.apariencia'
              placeholder='Apariencia'
              onChange={formik.handleChange}
              value={formik.values.reported.apariencia || ''}
            />
          </div>
        </>
      )}
      <div className='col-span-2'>
        <button
          className='bg-blue-500 hover:bg-blue-700 text-white rounded bg-medium p-2 text-sm mr-4'
          onClick={() => setShowVictimModal(true)}
        >
          Agregar Víctima
        </button>
        <button
          className='bg-blue-500 hover:bg-blue-700 text-white rounded bg-medium p-2 text-sm'
          onClick={() => setShowWitnessModal(true)}
        >
          Agregar Testigo
        </button>
      </div>

      {showVictimModal && (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
          <div className='bg-dark border-solid border-medium border-2 rounded-md p-4 w-1/4'>
            <div className='mt-2'>
              <PersonForm />
            </div>
            <button
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2'
              onClick={() => setShowVictimModal(false)}
            >
              Cerrar
            </button>
          </div>
        </div>
      )}

      {showWitnessModal && (
        <div className='fixed inset-0 flex items-center justify-center bg-dark bg-opacity-50'>
          <div className='bg-dark border-solid border-medium border-2 rounded-md p-4 w-1/4'>
            <PersonForm />
            <button
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2'
              onClick={() => setShowWitnessModal(false)}
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default PeopleInvolved
