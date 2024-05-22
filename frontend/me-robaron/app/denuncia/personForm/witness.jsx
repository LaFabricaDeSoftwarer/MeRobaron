import React from 'react'
import FormInput from '../../components/FormInput'
import { personAtributes } from '@/app/utils/personAtributtes'

const Witness = ({ formik }) => {
  const { values, handleChange } = formik
  const witness = values.witness

  return (
    <section className='grid grid-cols-2 gap-1'>
      {
        personAtributes.map((attribute, index) => (
          <FormInput
            type={attribute.type}
            label={attribute.label}
            placeholder={attribute.placeholder}
            key={index}
            onChange={handleChange}
            name={`witness.${attribute.name}`}
            value={witness[attribute.name] || ''}
          />
        ))
      }
    </section>
  )
}

export default Witness
