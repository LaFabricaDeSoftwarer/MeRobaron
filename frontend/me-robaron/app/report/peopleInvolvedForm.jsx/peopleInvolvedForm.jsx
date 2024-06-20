import React, { useState, useEffect } from 'react'
import { useFormikContext } from 'formik'
import FormCheckbox from '@/app/components/FormCheckbox'
import Reported from '../personForm/reportedForm'
import Witness from '../personForm/witnessForm'
import Victim from '../personForm/victimForm'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Modal from '@mui/material/Modal'

const PeopleInvolved = ({ setPeopleListParent }) => {
  const { values } = useFormikContext()
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
    let newPerson = {}
    if (type === 'denunciado') {
      newPerson = { nombre: values.reported.nombre, apellido: values.reported.apellido, rol: 'denunciado' }
    } else if (type === 'victima') {
      newPerson = { nombre: values.victim.nombre, apellido: values.victim.apellido, rol: 'victima' }
    } else if (type === 'testigo') {
      newPerson = { nombre: values.witness.nombre, apellido: values.witness.apellido, rol: 'testigo' }
    }

    if (newPerson.nombre && newPerson.apellido) {
      setPeopleList((prevList) => [...prevList, newPerson])
      handleCloseModal(type)()
    }
  }

  const renderPersonForm = (type) => (
    <>
      <Button onClick={handleOpenModal(type)}>Agregar {type}</Button>
      <Modal open={openModals[type]} onClose={handleCloseModal(type)}>
        <Box className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 bg-dark border-2 border-black shadow-lg p-4 text-dark'>
          {type === 'denunciado' && <Reported />}
          {type === 'victima' && <Victim />}
          {type === 'testigo' && <Witness />}
          <Button onClick={handleAddPerson(type)}>Guardar {type}</Button>
        </Box>
      </Modal>
    </>
  )

  return (
    <div className='max-w-4xl mx-auto p-4'>
      <div className='min-h-[400px] flex flex-col'>
        <FormCheckbox label='Conozco al denunciado' name='report.conozcoAlDenunciado' />
        {values.report.conozcoAlDenunciado && renderPersonForm('denunciado')}

        <FormCheckbox label='Victima' name='report.hayVictimas' />
        {values.report.hayVictimas && renderPersonForm('victima')}

        <FormCheckbox label='Testigo' name='report.hayTestigos' />
        {values.report.hayTestigos && renderPersonForm('testigo')}

        {peopleList.length > 0 && (
          <div className='mt-4'>
            <table className='min-w-full table-auto'>
              <thead className='bg-gray-200 text-gray-600 text-sm'>
                <tr>
                  <th className='px-4 py-2'>Nombre</th>
                  <th className='px-4 py-2'>Rol</th>
                </tr>
              </thead>
              <tbody className='bg-white'>
                {peopleList.map((person, index) => (
                  <tr key={index}>
                    <td className='border px-4 py-2'>{person.nombre}</td>
                    <td className='border px-4 py-2'>{person.rol}</td>
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
