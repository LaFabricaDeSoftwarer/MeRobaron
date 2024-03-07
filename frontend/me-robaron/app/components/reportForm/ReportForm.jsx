import React from 'react'
import { Field, ErrorMessage } from 'formik'
import styles from './styles.module.css'

const ReportForm = () => (
  <>
    <div className={styles.contentForm}>
      <label htmlFor='date'>Fecha</label>
      <Field type='date' name='date' placeholder='Fecha' className={styles.formField} />
      <ErrorMessage name='date' component='div' className='error' />
    </div>
    <div className={styles.contentForm}>
      <label htmlFor='detail'>Detalle</label>
      <Field type='text' name='detail' placeholder='Detalle' className={styles.formField} />
      <ErrorMessage name='detail' component='div' className='error' />
    </div>
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
  </>
)

export default ReportForm
