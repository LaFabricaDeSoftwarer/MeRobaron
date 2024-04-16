// import { Typography, List, ListItem, ListItemText } from '@mui/material'

const ReviewInfo = ({ formik }) => {
  const { values } = formik
  return (
    <div className='flex flex-col justify-start items-start gap-4 h-full pl-4 text-white bg-medium'>
      <h2 className='text-xl'>Denunciante</h2>
      <ul>
        <li>
          <span className='font-medium'>Email:</span>
          <span className='dark:text-gray-400'>{values.reporter.email}</span>
        </li>
        <li>
          <span className='font-medium'>Acepto Condicion:</span>
          <span className='dark:text-gray-400'>
            {values.reporter.aceptoCondicion ? 'Si' : 'No'}
          </span>
        </li>
        <li>
          <span className='font-medium'>Apellido:</span>
          <span className='dark:text-gray-400'>{values.reporter.apellido}</span>
        </li>
        <li>
          <span className='font-medium'>Nombre:</span>
          <span className='dark:text-gray-400'>{values.reporter.nombre}</span>
        </li>
        <li>
          <span className='font-medium'>Tipo de Documento:</span>
          <span className='dark:text-gray-400'>{values.reporter.tipoDocumento}</span>
        </li>
        <li>
          <span className='font-medium'>Numero de Documento:</span>
          <span className='dark:text-gray-400'>{values.reporter.numeroDocumento}</span>
        </li>
        <li>
          <span className='font-medium'>Telefono:</span>
          <span className='dark:text-gray-400'>{values.reporter.telefono}</span>
        </li>
        <li>
          <span className='font-medium'>Calle:</span>
          <span className='dark:text-gray-400'>{values.reporter.calle}</span>
        </li>
        <li>
          <span className='font-medium'>Numero:</span>
          <span className='dark:text-gray-400'>{values.reporter.numero}</span>
        </li>
        <li>
          <span className='font-medium'>Barrio:</span>
          <span className='dark:text-gray-400'>{values.reporter.barrio}</span>
        </li>
        <li>
          <span className='font-medium'>Ciudad:</span>
          <span className='dark:text-gray-400'>{values.reporter.ciudad}</span>
        </li>
      </ul>
      {values.reported.apellido && values.reported.nombre && (
        <>
          <h2 className='text-xl dark:text-gray-300'>Denunciado</h2>
          <ul>
            <li>
              <span className='font-medium '>Apellido:</span>
              <span className='dark:text-gray-400'>{values.reported.apellido}</span>
            </li>
            <li>
              <span className='font-medium '>Nombre:</span>
              <span className='dark:text-gray-400'>{values.reported.nombre}</span>
            </li>
          </ul>
        </>
      )}
      <h2 className='text-xl'>Detalle del Robo</h2>
      <ul>
        <li>
          <span className='font-medium '>Fecha:</span>
          <span className='dark:text-gray-400'>{values.report.fecha}</span>
        </li>
        <li>
          <span className='font-medium '>Detalle:</span>
          <span clasNames='dark:text-gray-400'>{values.report.detalle}</span>
        </li>
        <li>
          <span className='font-medium'>Direccion:</span>
          <span className='dark:text-gray-400'>{values.location.direccion}</span>
        </li>
      </ul>
      {values.victim.apellido && values.victim.nombre && (
        <>
          <h2 className='text-xl dark:text-gray-300'>Vitima</h2>
          <ul>
            <li>
              <span className='font-medium '>Apellido:</span>
              <span className='dark:text-gray-400'>{values.reported.apellido}</span>
            </li>
            <li>
              <span className='font-medium '>Nombre:</span>
              <span className='dark:text-gray-400'>{values.reported.nombre}</span>
            </li>
          </ul>
        </>
      )}
      {values.witness.apellido && values.witness.nombre && (
        <>
          <h2 className='text-xl dark:text-gray-300'>Testigo</h2>
          <ul>
            <li>
              <span className='font-medium '>Apellido:</span>
              <span className='dark:text-gray-400'>{values.reported.apellido}</span>
            </li>
            <li>
              <span className='font-medium '>Nombre:</span>
              <span className='dark:text-gray-400'>{values.reported.nombre}</span>
            </li>
          </ul>
        </>
      )}
    </div>
  )
}
export default ReviewInfo
