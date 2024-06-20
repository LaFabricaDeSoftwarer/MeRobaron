import React from 'react'
import FormInput from '../../components/FormInput'
import FormTextarea from '../../components/FormTextarea'
import { personAtributes } from '@/app/utils/personAtributtes'

const Reported = () => {
  return (
    <div className='grid grid-cols-2 gap-1'>
      {personAtributes.map((attribute, index) => (
        <div key={index}>
          <FormInput
            {...attribute}
            name={`reported.${attribute.name}`}
          />
        </div>
      ))}
      <FormTextarea
        label='Vestimenta'
        name='reported.vestimenta'
        placeholder='Vestimenta'
        type='text'
      />
      <FormTextarea
        label='Apariencia'
        name='reported.apariencia'
        placeholder='Apariencia'
        type='text'
      />
    </div>
  )
}

export default Reported
