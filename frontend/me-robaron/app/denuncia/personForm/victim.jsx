import React from 'react'
import FormInput from '../../components/FormInput'
import { personAtributes } from '@/app/utils/personAtributtes'

const Victim = ({ formik }) => {
  const { values, handleChange } = formik
  const victim = values.victim

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
            name={`victim.${attribute.name}`}
            value={victim[attribute.name] || ''}
          />
        ))
      }
    </section>
  )
}

export default Victim
