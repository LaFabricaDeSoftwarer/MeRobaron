import React from 'react'
import { Field, ErrorMessage } from 'formik'
import styles from './styles.module.css'

const PeopleInvolved = ({ openModalReported }) => {
  return (
    <>
      <div className={styles.contentForm}>
        <label htmlFor='iKnowTheReported'>Conozco a la persona denunciada o puedo aportar algún dato</label>
        <Field type='checkbox' name='iKnowTheReported' className={styles.formField} />
        <ErrorMessage name='iKnowTheReported' component='div' className='error' />
      </div>
      <div className={styles.contentButton}>
        <button type='button' onClick={openModalReported}>Agregar denunciado</button>
      </div>
    </>
  )
}

export default PeopleInvolved
