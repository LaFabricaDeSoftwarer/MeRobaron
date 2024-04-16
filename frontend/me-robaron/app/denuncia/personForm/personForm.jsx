import React from 'react'

const PersonForm = () => {
  return (
    <div className='grid grid-cols-1 gap-4'>
      <div className='col-span-1'>
        <input
          className='w-full px-3 py-2 text-white leading-tight focus:outline-none focus:shadow-outline rounded-md bg-medium appearance-none'
          type='text'
          name='apellido'
          placeholder='Apellido'
        />
      </div>
      <div className='col-span-1'>
        <input
          className='w-full px-3 py-2 text-white leading-tight focus:outline-none focus:shadow-outline rounded-md bg-medium appearance-none'
          type='text'
          name='nombre'
          placeholder='Nombre'
        />
      </div>
      <div className='col-span-1'>
        <input
          className='w-full px-3 py-2 text-white leading-tight focus:outline-none focus:shadow-outline rounded-md bg-medium appearance-none'
          type='text'
          name='calle'
          placeholder='Calle'
        />
      </div>
      <div className='col-span-1'>
        <input
          className='w-full px-3 py-2 text-white leading-tight focus:outline-none focus:shadow-outline rounded-md bg-medium appearance-none'
          type='text'
          name='numero'
          placeholder='Numero'
        />
      </div>
      <div className='col-span-1'>
        <input
          className='w-full px-3 py-2 text-white leading-tight focus:outline-none focus:shadow-outline rounded-md bg-medium appearance-none'
          type='text'
          name='barrio'
          placeholder='Barrio'
        />
      </div>
      <div className='col-span-1'>
        <input
          className='w-full px-3 py-2 text-white leading-tight focus:outline-none focus:shadow-outline rounded-md bg-medium appearance-none'
          type='text'
          name='ciudad'
          placeholder='Ciudad'
        />
      </div>
    </div>
  )
}

export default PersonForm
