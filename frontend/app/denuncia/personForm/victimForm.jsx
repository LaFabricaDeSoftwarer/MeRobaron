import React from 'react'
import FormInput from '../../components/FormInput'
import { personAtributes } from '@/app/utils/personAtributtes'
import { useFormikContext } from 'formik'

const Victim = () => {
  const { values, handleChange, handleBlur } = useFormikContext()
  return (
    <div className='grid grid-cols-2 gap-2 pb-2'>
      {
        personAtributes.map((attribute, index) => (
          <div key={index}>
            <FormInput
              {...attribute}
              name={`victim.${attribute.name}`}
              value={values.victim?.[attribute.name] || ''}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>

        ))
      }
    </div>
  )
}

export default Victim
