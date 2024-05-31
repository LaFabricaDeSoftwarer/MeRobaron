import React from 'react'
import FormInput from '../../components/FormInput'
import FormTextarea from '../../components/FormTextarea'
import { personAtributes } from '@/app/utils/personAtributtes'

const Reported = ({ values, errors, touched, handleChange, handleBlur }) => {
  const reported = values.reported

  return (
    <div className='grid grid-cols-2 gap-1'>
      {personAtributes.map((attribute, index) => (
        <div key={index}>
          <FormInput
            type={attribute.type}
            label={attribute.label}
            placeholder={attribute.placeholder}
            key={index}
            onChange={handleChange}
            name={`reported.${attribute.name}`}
            value={reported[attribute.name] || ''}
            onBlur={handleBlur}
          />
        </div>
      ))}
      <FormTextarea
        label='Vestimenta'
        name='reported.vestimenta'
        placeholder='Vestimenta'
        onChange={handleChange}
        value={reported.vestimenta || ''}
        onBlur={handleBlur}
      />
      <FormTextarea
        label='Apariencia'
        name='reported.apariencia'
        placeholder='Apariencia'
        onChange={handleChange}
        value={reported.apariencia || ''}
        onBlur={handleBlur}
      />
    </div>
  )
}

export default Reported
