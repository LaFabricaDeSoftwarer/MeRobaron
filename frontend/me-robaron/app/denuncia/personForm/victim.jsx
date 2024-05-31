import React from 'react'
import FormInput from '../../components/FormInput'
import { personAtributes } from '@/app/utils/personAtributtes'

const Victim = ({ values, errors, touched, handleChange }) => {
  const victim = values.victim

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
              name={`victim.${attribute.name}`}
              value={victim[attribute.name] || ''}
            />
          </div>

        ))
      }
    </div>
  )
}

export default Victim
