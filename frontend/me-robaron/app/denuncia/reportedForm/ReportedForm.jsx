import React from 'react'
import PersonForm from '../personForm/personForm'
const Reported = ({ formik, showDenunciadoForm, setShowDenunciadoForm }) => {
  const handleCheckboxChange = (event) => {
    formik.handleChange(event)
    setShowDenunciadoForm(event.target.checked)
  }

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
      <div className='col-span-1'>
        <label className='inline-flex items-center'>
          <input
            type='checkbox'
            className='form-checkbox h-5 w-5 text-blue-600'
            checked={showDenunciadoForm}
            onChange={handleCheckboxChange}
          />
          <span className='ml-2'>Conozco al denunciado</span>
        </label>
      </div>
      {showDenunciadoForm && (
        <>
          <div className='col-span-2'>
            <PersonForm />
          </div>
          <div className='col-span-1'>
            <input
              className='border rounded-md px-3 py-2 w-full'
              type='text'
              name='reported.vestimenta'
              placeholder='Vestimenta'
              onChange={formik.handleChange}
              value={formik.values.reported.vestimenta || ''}
            />
          </div>
          <div className='col-span-1'>
            <input
              className='border rounded-md px-3 py-2 w-full'
              type='text'
              name='reported.apariencia'
              placeholder='Apariencia'
              onChange={formik.handleChange}
              value={formik.values.reported.apariencia || ''}
            />
          </div>
        </>
      )}
      {showDenunciadoForm && (
        <div className='col-span-2'>
          <button
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
            onClick={() => console.log('Agregar denunciado')}
          >
            Agregar Denunciado
          </button>
        </div>
      )}
    </div>
  )
}

export default Reported
