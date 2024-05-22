import React from 'react'
import FormInput from '../../components/FormInput'
import FormTextarea from '../../components/FormTextarea'
import { personAtributes } from '@/app/utils/personAtributtes'

const Reported = ({ formik }) => {
  const { values, handleChange } = formik
  const reported = values.reported

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
            name={`reported.${attribute.name}`}
            value={reported[attribute.name] || ''}
          />
        ))
      }
      <FormTextarea
        label='Vestimenta'
        name='reported.vestimenta'
        placeholder='Vestimenta'
        onChange={handleChange}
        value={reported.vestimenta || ''}
      />
      <FormTextarea
        label='Apariencia'
        name='reported.apariencia'
        placeholder='Apariencia'
        onChange={handleChange}
        value={reported.apariencia || ''}
      />
    </section>
  )
}

export default Reported
