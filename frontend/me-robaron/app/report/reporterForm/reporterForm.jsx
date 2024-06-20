import React from 'react'
import FormInput from '@/app/components/FormInput'
import Checkbox from '@/app/components/FormCheckbox'
import { reporterAtributtes } from '@/app/utils/reporterAtributtes'

const Reporter = () => {
  return (
    <div className='max-w-4xl mx-auto p-4'>
      <div className='mb-4'>
        <div className='text-white bg-danger text-xs mb-2 p-2'>
          Falsa denuncia: Al realizar una denuncia, Usted debe saber que si la realiza falsamente -es decir, miente en lo que nos está informando-, está cometiendo un delito con penas de prisión de dos meses a un año o multa (artículo 245 del Código Penal).
        </div>
        <Checkbox
          label='Acepto que he comprendido y que todo lo que informaré es verdad.'
          name='reporter.aceptaCondicion'
        />
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        {reporterAtributtes.map((attribute, index) => (
          <div key={index}>
            <FormInput
              {...attribute}
              name={`reporter.${attribute.name}`}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Reporter
