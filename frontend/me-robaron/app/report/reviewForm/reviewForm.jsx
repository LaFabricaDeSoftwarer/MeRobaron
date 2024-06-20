import React from 'react'
import SummaryList from '@/app/components/SummaryList'
import { reporterAtributtes } from '@/app/utils/reporterAtributtes'
import { detailAtributtes } from '@/app/utils/detailAtributtes'
import { useFormikContext } from 'formik'

const ReviewInfo = ({ peopleList }) => {
  const { values } = useFormikContext()
  return (

    <div>
      <div className='flex flex-col items-start w-full'>
        <h2 className='text-sm py-2 underline text-white'>Denunciante</h2>
        {reporterAtributtes.map((atributte) => (
          <SummaryList
            key={atributte.name}
            label={atributte.label}
            value={values.reporter[atributte.name]}
          />
        ))}

        <h2 className='text-sm py-2 underline text-white'>Detalle del Robo</h2>
        {detailAtributtes.map((atributte) => (
          <SummaryList
            key={atributte.name}
            label={atributte.label}
            value={values.report[atributte.name]}
          />
        ))}
      </div>
      <h2 className='text-sm py-2 underline text-white'>Personas involucradas</h2>
      {peopleList.length > 0 && (
        <>
          <table>
            <thead>
              <tr className='text-white text-sm'>
                <th>Nombre y Apellido</th>
                <th>Rol</th>
              </tr>
            </thead>
            <tbody>
              {peopleList.map((person, index) => (
                <tr key={index}>
                  <td className='text-white text-xs'>{person.nombre}, {person.apellido}</td>
                  <td className='text-white text-xs'>{person.rol}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>

  )
}

export default ReviewInfo
