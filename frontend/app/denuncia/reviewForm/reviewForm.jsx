import React from 'react'
import SummaryList from '@/app/components/SummaryList'
import { reporterAtributtes } from '@/app/utils/reporterAtributtes'
import { detailAtributtes } from '@/app/utils/detailAtributtes'
import { useFormikContext } from 'formik'

const ReviewInfo = ({ peopleList }) => {
  const { values } = useFormikContext()

  return (
    <div className='p-4 rounded-lg max-h-[500px] overflow-y-scroll'>
      <div className='space-y-6'>
        <Section title='Denunciante'>
          {reporterAtributtes.map((atributte) => (
            <SummaryList
              key={atributte.name}
              label={atributte.label}
              value={values.reporter[atributte.name]}
            />
          ))}
          <SummaryList label='Localidad' value={values.reporter.localidad} />
        </Section>

        <Section title='Detalle del Robo'>
          {detailAtributtes.map((atributte) => (
            <SummaryList
              key={atributte.name}
              label={atributte.label}
              value={values.report[atributte.name] || values.location[atributte.name]}
            />
          ))}

        </Section>

        <Section title='Personas involucradas'>
          {peopleList.length > 0 && (
            <table className='w-full'>
              <thead>
                <tr className='text-left text-sm text-medium'>
                  <th className='pb-2'>Nombre y Apellido</th>
                  <th className='pb-2'>Rol</th>
                </tr>
              </thead>
              <tbody>
                {peopleList.map((person, index) => (
                  <tr key={index} className='border-t'>
                    <td className='py-2 text-medium text-sm'>{person.nombre} {person.apellido}</td>
                    <td className='py-2 text-medium text-sm'>{person.rol}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </Section>
      </div>
    </div>
  )
}

const Section = ({ title, children }) => (
  <div className='border border-medium rounded-md p-4'>
    <h2 className='text-normal font-semibold text-medium mb-3 pb-2 border-b border-medium'>{title}</h2>
    {children}
  </div>
)

export default ReviewInfo
