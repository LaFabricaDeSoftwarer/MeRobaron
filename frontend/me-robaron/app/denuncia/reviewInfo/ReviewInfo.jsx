// import { Typography, List, ListItem, ListItemText } from '@mui/material'

import SummaryList from '@/app/components/SummaryList'
import { reporterAtributtes } from '@/app/utils/reporterAtributtes'
import { reportedAtributtes } from '@/app/utils/reportedAtributtes'
import { personAtributes } from '@/app/utils/personAtributtes'
import { detailAtributtes } from '@/app/utils/detailAtributtes'

const ReviewInfo = ({ formik }) => {
  const { values } = formik
  return (
    <div className='flex flex-col justify-start items-center h-full pl-4 text-white w-full'>
      <h1 className='text-white text-xl text-center pb-1'>Resumen</h1>
      <div className='flex flex-col items-start w-full'>
        <h2 className='text-sm py-2'>Denunciante</h2>
        {reporterAtributtes.map((atributte) => (
          <SummaryList
            key={atributte.name}
            label={atributte.label}
            value={values[atributte.name]}
          />
        ))}
        {values.reported.apellido && values.reported.nombre && (
          <>
            <h2 className='text-sm py-2'>Denunciado</h2>
            {reportedAtributtes.map((atributte) => (
              <SummaryList
                key={atributte.name}
                label={atributte.label}
                value={values[atributte.name]}
              />
            ))}
          </>
        )}
        <h2 className='text-sm py-2'>Detalle del Robo</h2>
        {detailAtributtes.map((atributte) => (
          <SummaryList
            key={atributte.name}
            label={atributte.label}
            value={values[atributte.name]}
          />
        ))}
        {values.victim.apellido && values.victim.nombre && (
          <>
            <h2 className='text-sm py-2'>Vitima</h2>
            {personAtributes.map((atributte) => (
              <SummaryList
                key={atributte.name}
                label={atributte.label}
                value={values[atributte.name]}
              />
            ))}
          </>
        )}
        {values.witness.apellido && values.witness.nombre && (
          <>
            <h2 className='text-sm py-2'>Testigo</h2>
            {personAtributes.map((atributte) => (
              <SummaryList
                key={atributte.name}
                label={atributte.label}
                value={values[atributte.name]}
              />
            ))}
          </>
        )}
      </div>
    </div>
  )
}
export default ReviewInfo
