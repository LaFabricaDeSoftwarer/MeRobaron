import React from 'react'
import { Field, ErrorMessage } from 'formik'
import styles from './styles.module.css'
import Geolocation from '../geolocation/Geolocation'
import Map from '../geolocation/Map'

const ReportForm = ({ setLocationData, locations }) => (

  <>
    <div className={styles.contentForm}>
      <label htmlFor='date'>Fecha</label>
      <Field type='date' name='date' placeholder='Fecha' className={styles.formField} />
      <ErrorMessage name='date' component='div' className='error' />
    </div>
    <Geolocation setLocationData={setLocationData} />
    <Map locations={locations} />
    <div className={styles.contentForm}>
      <label htmlFor='detail'>Detalle</label>
      <Field type='text' name='detail' placeholder='Detalle' className={styles.formField} />
      <ErrorMessage name='detail' component='div' className='error' />
    </div>
    <div className={styles.contentForm}>
      <label htmlFor='aceptCondition'>Acepto las condiciones</label>
      <Field type='checkbox' name='aceptCondition' className={styles.formField} />
      <ErrorMessage name='aceptCondition' component='div' className='error' />
    </div>
  </>
)

export default ReportForm
