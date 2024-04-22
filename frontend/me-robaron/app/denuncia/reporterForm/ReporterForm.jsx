import React from 'react'

const Reporter = ({ formik }) => {
  return (
    <section className='grid grid-cols-1 md:grid-cols-2 gap-8 pl-2'>
      <div className='col-span-1'>
        <label className='block text-white text-sm pb-2'>Email</label>
        <input
          className='w-full px-3 py-2 text-white leading-tight focus:outline-none focus:shadow-outline rounded-md bg-medium appearance-none'
          type='text'
          name='reporter.email'
          placeholder='Email'
          onChange={formik.handleChange}
          value={formik.values.reporter.email || ''}
        />
      </div>
      <div className='col-span-1'>
        <label className='block text-white text-sm pb-2'>Acepto condición</label>
        <input
          className='form-checkbox h-5 w-5 text-white rounded-md bg-medium appearance-none cursor-pointer'
          type='checkbox'
          name='aceptoCondicion'
          onChange={(event) => formik.setFieldValue('Acepto condicion', event.target.checked)}
          checked={formik.values.reporter.aceptoCondicion || false}
        />
      </div>
      <div className='col-span-1'>
        <label className='block text-white text-sm pb-2'>Apellido</label>
        <input
          className='w-full px-3 py-2 text-white leading-tight focus:outline-none focus:shadow-outline rounded-md bg-medium appearance-none'
          type='text'
          name='reporter.apellido'
          placeholder='Apellido'
          onChange={formik.handleChange}
          value={formik.values.reporter.apellido || ''}
        />
      </div>
      <div className='col-span-1'>
        <label className='block text-white text-sm pb-2'>Nombre</label>
        <input
          className='w-full px-3 py-2 text-white leading-tight focus:outline-none focus:shadow-outline rounded-md bg-medium appearance-none'
          type='text'
          name='reporter.nombre'
          placeholder='Nombre'
          onChange={formik.handleChange}
          value={formik.values.reporter.nombre || ''}
        />
      </div>
      <div className='col-span-1'>
        <label className='block text-white text-sm pb-2'>Tipo de documento</label>
        <select
          className='w-full px-3 py-2 text-white leading-tight focus:outline-none focus:shadow-outline rounded-md bg-medium appearance-none'
          name='reporter.tipoDocumento'
          value={formik.values.reporter.tipoDocumento || ''}
          onChange={formik.handleChange}
        >
          <option value=''>Tipo de Documento</option>
          <option value={10}>DNI</option>
          <option value={20}>LC</option>
          <option value={30}>LE</option>
        </select>
      </div>
      <div className='col-span-1'>
        <label className='block text-white text-sm pb-2'>Numero de documento</label>
        <input
          className='w-full px-3 py-2 text-white leading-tight focus:outline-none focus:shadow-outline rounded-md bg-medium appearance-none'
          type='text'
          name='reporter.nroDocumento'
          placeholder='Numero de documento'
          onChange={formik.handleChange}
          value={formik.values.reporter.nroDocumento || ''}
        />
      </div>
      <div className='col-span-1'>
        <label className='block text-white text-sm pb-2'>Edad</label>
        <input
          className='w-full px-3 py-2 text-white leading-tight focus:outline-none focus:shadow-outline rounded-md bg-medium appearance-none'
          type='text'
          name='reporter.edad'
          placeholder='Edad'
          onChange={formik.handleChange}
          value={formik.values.reporter.edad || ''}
        />
      </div>
      <div className='col-span-1'>
        <label className='block text-white text-sm pb-2'>Teléfono</label>
        <input
          className='w-full px-3 py-2 text-white leading-tight focus:outline-none focus:shadow-outline rounded-md bg-medium appearance-none'
          type='text'
          name='reporter.telefono'
          placeholder='Teléfono'
          onChange={formik.handleChange}
          value={formik.values.reporter.telefono || ''}
        />
      </div>
      <div className='col-span-1'>
        <label className='block text-white text-sm pb-2'>Calle</label>
        <input
          className='w-full px-3 py-2 text-white leading-tight focus:outline-none focus:shadow-outline rounded-md bg-medium appearance-none'
          type='text'
          name='reporter.calle'
          placeholder='Calle'
          onChange={formik.handleChange}
          value={formik.values.reporter.calle || ''}
        />
      </div>
      <div className='col-span-1'>
        <label className='block text-white text-sm pb-2'>Número</label>
        <input
          className='w-full px-3 py-2 text-white leading-tight focus:outline-none focus:shadow-outline rounded-md bg-medium appearance-none'
          type='text'
          name='reporter.numero'
          placeholder='Número'
          onChange={formik.handleChange}
          value={formik.values.reporter.numero || ''}
        />
      </div>
      <div className='col-span-1'>
        <label className='block text-white text-sm pb-2'>Barrio</label>
        <input
          className='w-full px-3 py-2 text-white leading-tight focus:outline-none focus:shadow-outline rounded-md bg-medium appearance-none'
          type='text'
          name='reporter.barrio'
          placeholder='Barrio'
          onChange={formik.handleChange}
          value={formik.values.reporter.barrio || ''}
        />
      </div>
      <div className='col-span-1'>
        <label className='block text-white text-sm pb-2'>Ciudad</label>
        <input
          className='w-full px-3 py-2 text-white leading-tight focus:outline-none focus:shadow-outline rounded-md bg-medium appearance-none'
          type='text'
          name='reporter.ciudad'
          placeholder='Ciudad'
          onChange={formik.handleChange}
          value={formik.values.reporter.ciudad || ''}
        />
      </div>
    </section>
  )
}

export default Reporter
