import React, { useState, useEffect } from 'react'
import FormCheckbox from '@/app/components/FormCheckbox'
import Reported from '../personForm/reported'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Modal from '@mui/material/Modal'
import Witness from '../personForm/witness'
import Victim from '../personForm/victim'

const PeopleInvolved = ({ values, errors, touched, handleChange, handleBlur, setFieldValue, setPeopleListParent }) => {
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
        <Box className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 bg-dark border-2 border-black shadow-lg p-4 text-dark '>
          {type === 'denunciado' && <Reported values={values} errors={errors} touched={touched} handleChange={handleChange} />}
          {type === 'victima' && <Victim values={values} errors={errors} touched={touched} handleChange={handleChange} />}
          {type === 'testigo' && <Witness values={values} errors={errors} touched={touched} handleChange={handleChange} />}
          <Button onClick={handleAddPerson(type)}>Guardar {type}</Button>
        </Box>
      </Modal>
    </>
  )

  return (
    <div className='max-w-4xl mx-auto p-4'>
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
