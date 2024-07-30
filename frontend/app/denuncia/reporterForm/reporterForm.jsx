import React from 'react'
import { Field, ErrorMessage, useFormikContext } from 'formik'
import { reporterAtributtes } from '@/app/utils/reporterAtributtes'
import LocalidadesSelect from '@/app/components/LocalidadesSelect'

const Reporter = () => {
  const { values, setFieldValue } = useFormikContext()

  return (
    <div className='px-4 py-2 bg-primary min-h-[500px]'>
      <div className='mb-4'>
        <div className='text-medium  text-xs mb-2 p-2 border border-light'>
          Falsa denuncia: Al realizar una denuncia, Usted debe saber que si la realiza falsamente -es decir, miente en lo que nos está informando-, está cometiendo un delito con penas de prisión de dos meses a un año o multa (artículo 245 del Código Penal).
        </div>
        <Field type='checkbox' name='reporter.aceptaCondicion' className='hidden' />
        <label htmlFor='reporter.aceptaCondicion' className='flex items-center text-medium text-sm cursor-pointer'>
          <Field type='checkbox' id='reporter.aceptaCondicion' name='reporter.aceptaCondicion' className='form-checkbox mr-2 h-4 w-4 text-medium border-medium rounded focus:outline-none focus:shadow-outline appearance-none' />
          Acepto que he comprendido y que todo lo que informaré es verdad.
          <span className='text-danger ml-1'>*</span>
        </label>
        <ErrorMessage name='reporter.aceptaCondicion' component='div' className='text-danger text-xs' />
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        {reporterAtributtes.map((attribute, index) => (
          <div key={index}>
            <label htmlFor={`reporter.${attribute.name}`} className='block text-medium text-sm pb-2'>{attribute.label} <span className='text-danger ml-1'>*</span></label>
            {attribute.type === 'select'
              ? (
                <Field name={`reporter.${attribute.name}`}>
                  {({ field }) => (
                    <select
                      {...field}
                      className='w-full px-2 py-1 text-medium font-normal leading-tight focus:outline-none focus:shadow-outline rounded-md appearance-none border border-light'
                      value={values.reporter[attribute.name] || ''}
                      onChange={(e) => setFieldValue(`reporter.${attribute.name}`, e.target.value)}
                    >
                      <option value='' disabled hidden>
                        {attribute.placeholder}
                      </option>
                      {attribute.options.map((option, idx) => (
                        <option key={idx} value={option.value} className='text-xs'>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  )}
                </Field>
                )
              : (
                <Field
                  {...attribute}
                  name={`reporter.${attribute.name}`}
                  className='w-full px-2 py-1 text-medium font-normal leading-tight focus:outline-none focus:shadow-outline rounded-md appearance-none  border border-light'
                />
                )}
            <ErrorMessage name={`reporter.${attribute.name}`} component='div' className='text-danger text-xs' />
          </div>
        ))}
        <LocalidadesSelect
          selectedLocalidad={values.reporter.localidad}
          setSelectedLocalidad={(value) => setFieldValue('reporter.localidad', value || '')}
        />
      </div>
    </div>
  )
}

export default Reporter
