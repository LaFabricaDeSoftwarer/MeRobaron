import React, { useState, useEffect } from 'react'
import { useFormikContext } from 'formik'
import FormCheckbox from '@/app/components/FormCheckbox'
import Reported from '../personForm/reportedForm'
import Witness from '../personForm/witnessForm'
import Victim from '../personForm/victimForm'
import Box from '@mui/material/Box'
import Button from '../../components/Button'
import Modal from '@mui/material/Modal'

const PeopleInvolved = ({ setPeopleListParent }) => {
  const { values, handleChange, handleBlur, setFieldValue } = useFormikContext()
  const personTypes = ['denunciado', 'victima', 'testigo']
  const [openModals, setOpenModals] = useState(
    personTypes.reduce((acc, type) => ({ ...acc, [type]: false }), {})
  )
  const [peopleList, setPeopleList] = useState([])

  useEffect(() => {
    setPeopleListParent(peopleList)
  }, [peopleList, setPeopleListParent])

  const handleOpenModal = (type) => () => setOpenModals({ ...openModals, [type]: true })
  const handleCloseModal = (type) => () => setOpenModals({ ...openModals, [type]: false })

  const handleAddPerson = (type) => () => {
    // Dependiendo del tipo de persona, se crea un objeto con los datos de la persona
    let newPerson = {}
    let role = ''
    if (type === 'denunciado') {
      newPerson = {
        nombre: values.reported?.nombre || '',
        apellido: values.reported?.apellido || '',
        calle: values.reported?.calle || '',
        numero: values.reported?.numero || '',
        barrio: values.reported?.barrio || '',
        ciudad: values.reported?.ciudad || '',
        tipoDocumento: values.reported?.tipoDocumento || '',
        nroDocumento: values.reported?.nroDocumento || '',
        vestimenta: values.reported?.vestimenta || '',
        apariencia: values.reported?.apariencia || ''
      }
      role = 'Denunciado'
    } else if (type === 'victima') {
      newPerson = {
        nombre: values.victim?.nombre || '',
        apellido: values.victim?.apellido || '',
        calle: values.victim?.calle || '',
        numero: values.victim?.numero || '',
        barrio: values.victim?.barrio || '',
        ciudad: values.victim?.ciudad || '',
        tipoDocumento: values.victim?.tipoDocumento || '',
        nroDocumento: values.victim?.nroDocumento || ''
      }
      role = 'Víctima'
    } else if (type === 'testigo') {
      newPerson = {
        nombre: values.witness?.nombre || '',
        apellido: values.witness?.apellido || '',
        calle: values.witness?.calle || '',
        numero: values.witness?.numero || '',
        barrio: values.witness?.barrio || '',
        ciudad: values.witness?.ciudad || '',
        tipoDocumento: values.witness?.tipoDocumento || '',
        nroDocumento: values.witness?.nroDocumento || ''
      }
      role = 'Testigo'
    }

    if (newPerson.nombre && newPerson.apellido) {
      setPeopleList(prevList => [...prevList, { ...newPerson, role }])

      const fieldName = type === 'denunciado'
        ? 'reporteds'
        : type === 'victima' ? 'victims' : 'witnesses'

      setFieldValue(fieldName, [...(values[fieldName] || []), newPerson])

      if (type === 'denunciado') {
        setFieldValue('reported', {
          nombre: '',
          apellido: '',
          calle: '',
          numero: '',
          barrio: '',
          ciudad: '',
          tipoDocumento: '',
          nroDocumento: '',
          vestimenta: '',
          apariencia: ''
        })
      } else if (type === 'victima') {
        setFieldValue('victim', {
          nombre: '',
          apellido: '',
          calle: '',
          numero: '',
          barrio: '',
          ciudad: '',
          tipoDocumento: '',
          nroDocumento: ''
        })
      } else if (type === 'testigo') {
        setFieldValue('witness', {
          nombre: '',
          apellido: '',
          calle: '',
          numero: '',
          barrio: '',
          ciudad: '',
          tipoDocumento: '',
          nroDocumento: ''
        })
      }

      handleCloseModal(type)()
    }
  }

  const renderPersonForm = (type) => (
    <div className='flex w-full justify-center'>
      <Button onClick={handleOpenModal(type)} text={`Agregar ${type}`} width='160px' background='#2C3B54' />
      <Modal open={openModals[type]} onClose={handleCloseModal(type)}>
        <Box className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 bg-primary shadow-lg p-4 text-white border border-light'>
          {type === 'denunciado' && <Reported />}
          {type === 'victima' && <Victim />}
          {type === 'testigo' && <Witness />}
          <Button
            text={`Guardar ${type}`}
            onClick={handleAddPerson(type)}
            width='180px'
            background='#2C3B54'
          />
        </Box>
      </Modal>
    </div>
  )

  return (
    <div className='px-4 py-2 bg-primary min-h-[500px]'>
      <div className='min-h-[400px] flex flex-col'>
        <FormCheckbox
          label='Conozco al denunciado'
          name='report.conozcoAlDenunciado'
          onChange={handleChange}
          isChecked={values.report.conozcoAlDenunciado}
          onBlur={handleBlur}
        />
        {values.report.conozcoAlDenunciado && renderPersonForm('denunciado')}

        <FormCheckbox
          label='Victima'
          name='report.hayVictimas'
          onChange={handleChange}
          isChecked={values.report.hayVictimas}
          onBlur={handleBlur}
        />
        {values.report.hayVictimas && renderPersonForm('victima')}

        <FormCheckbox
          label='Testigo'
          name='report.hayTestigos'
          onChange={handleChange}
          isChecked={values.report.hayTestigos}
          onBlur={handleBlur}
        />
        {values.report.hayTestigos && renderPersonForm('testigo')}

        {peopleList.length > 0 && (
          <div className='mt-4'>
            <table className='min-w-full table-auto'>
              <thead className=' bg-secondary border border-secondary '>
                <tr className='text-white text-center text-normal'>
                  <th className='px-4 py-2'>Nombre</th>
                  <th className='px-4 py-2'>Rol</th>
                </tr>
              </thead>
              <tbody className='border border-secondary '>
                {peopleList.map((person, index) => (
                  <tr key={index} className='text-medium text-center'>
                    <td className='px-4 py-2 border border-r-secondary'>{`${person.nombre} ${person.apellido}`}</td>
                    <td className='px-4 py-2'>{person.role}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}

export default PeopleInvolved
