import React from 'react'
import { Field, ErrorMessage } from 'formik'
import styles from './styles.module.css'
import PersonForm from '../personForm/PersonForm'

const Reported = () => {
  return (
    <>
      <PersonForm />
      <div className={styles.contentForm}>
        <label htmlFor='clothing'>Vestimenta</label>
        <Field type='text' name='clothing' placeholder='Vestimenta' className={styles.formField} />
        <ErrorMessage name='clothing' component='div' className='error' />
      </div>
      <div className={styles.contentForm}>
        <label htmlFor='appearance'>Apariencia</label>
        <Field type='text' name='appearance' placeholder='Apariencia' className={styles.formField} />
        <ErrorMessage name='appearance' component='div' className='error' />
      </div>
      <button type='button'>Agregar</button>
    </>
  )
}

export default Reported
