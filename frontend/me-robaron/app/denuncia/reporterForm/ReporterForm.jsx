import React from 'react'
import FormInput from '@/app/components/FormInput'
import { reporterAtributtes } from '@/app/utils/reporterAtributtes'
import Checkbox from '@/app/components/FormCheckbox'

const Reporter = ({ values, errors, touched, handleChange, handleBlur }) => {
  const reporter = values.reporter

  return (
    <>
      <h1 className='text-white text-xl text-center '>Datos del denunciante</h1>
      <section className='grid grid-cols-1 md:grid-cols-2 gap-8 justify-center items-center '>
        <Checkbox
          label='Acepto la condición'
          name='reporter.aceptoCondicion'
          value={reporter.aceptoCondicion}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.reporter?.aceptoCondicion && errors.reporter?.aceptoCondicion && (
          <div className='text-danger'>{errors.reporter.aceptoCondicion}</div>
        )}
        {reporterAtributtes.map((attribute, index) => (
          <div key={index}>
            <FormInput
              {...attribute}
              key={index}
              name={`reporter.${attribute.name}`}
              value={reporter[attribute.name] || ''}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.reporter?.[attribute.name] && errors.reporter?.[attribute.name] && (
              <div className='text-danger'>{errors.reporter[attribute.name]}</div>
            )}
          </div>
        ))}
      </section>
    </>
  )
}

export default Reporter
