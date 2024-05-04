import React from 'react'
import FormInput from '@/app/components/FormInput'
import { reporterAtributtes } from '@/app/utils/reporterAtributtes'
import Checkbox from '@/app/components/FormCheckbox'

const Reporter = ({ formik }) => {
  const { values, handleChange } = formik

  return (
    <>
      <h1 className='text-white text-xl text-center pb-2'>Datos del denunciante</h1>
      <section className='grid grid-cols-1 md:grid-cols-2 gap-8 pl-2 justify-center items-center md:pt-5'>
        <Checkbox
          label='Acepto la condición'
          name='aceptoCondicion'
          onChange={formik.handleChange}
          value={formik.values.aceptoCondicion}
        />
        {reporterAtributtes.map((attribute, index) => (
          <div key={index}>
            <FormInput
              {...attribute}
              onChange={handleChange}
              value={values[attribute.name] || ''}
              name={attribute.name}
            />
          </div>
        ))}
      </section>
    </>
  )
}

export default Reporter
