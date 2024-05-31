import React from 'react'
import FormInput from '../../components/FormInput'
import { personAtributes } from '@/app/utils/personAtributtes'

const Witness = ({ values, errors, touched, handleChange }) => {
  const witness = values.witness

  return (
    <div className='grid grid-cols-2 gap-1'>
      {
        personAtributes.map((attribute, index) => (
          <div key={index}>
            <FormInput
              type={attribute.type}
              label={attribute.label}
              placeholder={attribute.placeholder}
              key={index}
              onChange={handleChange}
              name={`witness.${attribute.name}`}
              value={witness[attribute.name] || ''}
            />
          </div>
        ))
      }
    </div>
  )
}

export default Witness
