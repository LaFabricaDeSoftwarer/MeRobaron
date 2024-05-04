import React from 'react'
import FormInput from '../../components/FormInput'
import { personAtributes } from '@/app/utils/personAtributtes'

const PersonForm = () => {
  return (
    <section className='grid grid-cols-2 gap-1'>
      {
        personAtributes.map((input, index) => (
          <FormInput key={index} {...input} />
        ))
      }
    </section>
  )
}

export default PersonForm
