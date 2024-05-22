import React from 'react'
import FormCheckbox from '@/app/components/FormCheckbox'
import Reported from '../personForm/reported'
import Victim from '../personForm/victim'
import Witness from '../personForm/witness'
import Button from '@/app/components/Button'

const PeopleInvolved = ({ formik }) => {
  const { values, handleChange } = formik

  return (
    <>
      <h1 className='text-white text-xl text-center'>
        Personas involucradas
      </h1>
      <section className='flex flex-col gap-5 w-full h-full'>

        <FormCheckbox
          label='Conozco al denunciado'
          name='report.conozcoAlDenunciado'
          onChange={handleChange}
          value={values.report.conozcoAlDenunciado}
        />
        {values.report.conozcoAlDenunciado === true && (
          <Reported formik={formik} />
        )}

        <FormCheckbox
          label='Hubo víctimas'
          name='report.hayVictimas'
          onChange={handleChange}
          value={values.report.hayVictimas}
        />
        {values.report.hayVictimas === true && (
          <Victim formik={formik} />
        )}

        <FormCheckbox
          label='Hubo testigos'
          name='report.hayTestigos'
          onChange={handleChange}
          value={values.report.hayTestigos}
        />
        {values.report.hayTestigos === true &&
          <Witness formik={formik} />}

        <div>
          {values.report.conozcoAlDenunciado === true && (
            <Button text='Agregar denunciado' />
          )}
          {values.report.hayVictimas === true && (
            <Button text='Agregar víctima' />
          )}
          {values.report.hayTestigos === true && (
            <Button text='Agregar testigo' />
          )}
        </div>

      </section>
    </>
  )
}

export default PeopleInvolved
