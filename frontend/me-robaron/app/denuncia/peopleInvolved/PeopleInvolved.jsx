import React, { useState } from 'react'
import FormCheckbox from '@/app/components/FormCheckbox'
import Reported from '../personForm/reported'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Modal from '@mui/material/Modal'
import Witness from '../personForm/witness'
import Victim from '../personForm/victim'

const PeopleInvolved = ({ values, errors, touched, handleChange, handleBlur }) => {
  // esta constante es un array con los tipos de personas que se pueden agregar
  const personTypes = ['reported', 'victim', 'witness']
  // esta constante es un objeto que tiene como key los tipos de personas y como value un booleano
  const [openModals, setOpenModals] = useState(
    personTypes.reduce((acc, type) => ({ ...acc, [type]: false }), {}))

  // esta funcion recibe un tipo de persona y retorna una funcion que setea el valor de la key correspondiente a ese tipo de persona en true o false
  const handleOpenModal = (type) => () => setOpenModals({ ...openModals, [type]: true })
  const handleCloseModal = (type) => () => setOpenModals({ ...openModals, [type]: false })

  const renderPersonForm = (type) => (
    <>
      <Button onClick={handleOpenModal(type)}>Agregar {type}</Button>
      <Modal open={openModals[type]} onClose={handleCloseModal(type)}>
        <Box className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 bg-dark border-2 border-black shadow-lg p-4 text-dark '>
          {type === 'reported' && <Reported values={values} errors={errors} touched={touched} handleChange={handleChange} />}
          {type === 'victim' && <Victim values={values} errors={errors} touched={touched} handleChange={handleChange} />}
          {type === 'witness' && <Witness values={values} errors={errors} touched={touched} handleChange={handleChange} />}
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
        {touched.report?.conozcoAlDenunciado && errors.report?.conozcoAlDenunciado && (<div className='text-danger'>{errors.report.conozcoAlDenunciado}</div>)}
        {values.report.conozcoAlDenunciado && renderPersonForm('reported')}

        <FormCheckbox
          label='Victima'
          name='report.hayVictimas'
          onChange={handleChange}
          isChecked={values.report.hayVictimas}
          onBlur={handleBlur}
        />

        <FormCheckbox
          label='Testigo'
          name='report.hayTestigos'
          onChange={handleChange}
          isChecked={values.report.hayTestigos}
          onBlur={handleBlur}
        />

      </section>
    </>
  )
}

export default PeopleInvolved
