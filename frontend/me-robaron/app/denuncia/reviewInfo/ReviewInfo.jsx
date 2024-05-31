// import { Typography, List, ListItem, ListItemText } from '@mui/material'

import SummaryList from '@/app/components/SummaryList'
import { reporterAtributtes } from '@/app/utils/reporterAtributtes'
import { reportedAtributtes } from '@/app/utils/reportedAtributtes'
import { personAtributes } from '@/app/utils/personAtributtes'
import { detailAtributtes } from '@/app/utils/detailAtributtes'

const ReviewInfo = ({ values }) => {
  return (
    <>
      <h1 className='text-white text-xl text-center font-ligh'>Resumen</h1>
      <section className='text-white flex flex-col gap-5 w-full h-full justify-center'>

        <div className='flex flex-col items-start w-full'>
          <h2 className='text-sm py-2 underline'>Denunciante</h2>
          {reporterAtributtes.map((atributte) => (
            <SummaryList
              key={atributte.name}
              label={atributte.label}
              value={values.reporter[atributte.name]}
            />
          ))}
          {values.reported.apellido && values.reported.nombre && (
            <>
              <h2 className='text-sm py-2 underline'>Denunciado</h2>
              {reportedAtributtes.map((atributte) => (
                <SummaryList
                  key={atributte.name}
                  label={atributte.label}
                  value={values.reported[atributte.name]}
                />
              ))}
            </>
          )}
          <h2 className='text-sm py-2 underline'>Detalle del Robo</h2>
          {values.victim.apellido && values.victim.nombre && (
            <>
              <h2 className='text-sm py-2'>Victima</h2>
              {personAtributes.map((atributte) => (
                <SummaryList
                  key={atributte.name}
                  label={atributte.label}
                  value={values.victim[atributte.name]}
                />
              ))}
            </>
          )}
          {values.witness.apellido && values.witness.nombre && (
            <>
              <h2 className='text-sm py-2 underline'>Testigo</h2>
              {personAtributes.map((atributte) => (
                <SummaryList
                  key={atributte.name}
                  label={atributte.label}
                  value={values.witness[atributte.name]}
                />
              ))}
            </>
          )}
          {detailAtributtes.map((atributte) => (
            <SummaryList
              key={atributte.name}
              label={atributte.label}
              value={values.report[atributte.name]}
            />
          ))}
        </div>
      </section>
    </>
  )
}
export default ReviewInfo
