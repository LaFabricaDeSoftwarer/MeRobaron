import React from 'react'
import { useFormikContext } from 'formik'
import FormInput from '../../components/FormInput'
import FormTextarea from '../../components/FormTextarea'
import { personAtributes } from '@/app/utils/personAtributtes'

const Reported = () => {
  const { values, handleChange, handleBlur } = useFormikContext()

  return (
    <div className='grid grid-cols-2 gap-2 pb-2'>
      {personAtributes.map((attribute, index) => (
        <div key={index}>
          <FormInput
            {...attribute}
            name={`reported.${attribute.name}`}
            value={values.reported?.[attribute.name] || ''}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
      ))}
      <FormTextarea
        label='Vestimenta'
        name='reported.vestimenta'
        placeholder='Vestimenta'
        type='text'
        value={values.reported?.vestimenta || ''}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <FormTextarea
        label='Apariencia'
        name='reported.apariencia'
        placeholder='Apariencia'
        type='text'
        value={values.reported?.apariencia || ''}
        onChange={handleChange}
        onBlur={handleBlur}
      />
    </div>
  )
}

export default Reported
