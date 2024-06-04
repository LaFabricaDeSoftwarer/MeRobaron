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
      setFieldValue('reported.nombre', '')
      setFieldValue('reported.apellido', '')
    } else if (type === 'victima') {
      newPerson = { nombre: values.victim.nombre, apellido: values.victim.apellido, rol: 'victima' }
      setFieldValue('victim.nombre', '')
      setFieldValue('victim.apellido', '')
    } else if (type === 'testigo') {
      newPerson = { nombre: values.witness.nombre, apellido: values.witness.apellido, rol: 'testigo' }
      setFieldValue('witness.nombre', '')
      setFieldValue('witness.apellido', '')
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
    <>
      <h1 className='text-white text-xl text-center pb-10'>Personas involucradas</h1>
      <section className='flex flex-col gap-5 w-full h-full items-start'>
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
      </section>

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
    </>
  )
}

export default PeopleInvolved
