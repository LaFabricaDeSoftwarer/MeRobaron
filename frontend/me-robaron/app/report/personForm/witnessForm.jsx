import React from 'react'
import FormInput from '../../components/FormInput'
import { personAtributes } from '@/app/utils/personAtributtes'

const Witness = () => {
  return (
    <div className='grid grid-cols-2 gap-1'>
      {
        personAtributes.map((attribute, index) => (
          <div key={index}>
            <FormInput
              {...attribute}
              name={`witness.${attribute.name}`}
            />
          </div>
        ))
      }
    </div>
  )
}

export default Witness
