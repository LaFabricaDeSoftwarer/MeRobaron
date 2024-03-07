import React from 'react'
import { Field, ErrorMessage } from 'formik'
import styles from './styles.module.css'

const PersonForm = () => (
  <>
    <div className={styles.contentForm}>
      <label htmlFor='apellido'>Apellido</label>
      <Field type='text' name='apellido' placeholder='Apellido' className={styles.formField} />
      <ErrorMessage name='apellido' component='div' className='error' />
    </div>
    <div className={styles.contentForm}>
      <label htmlFor='nombre'>Nombre</label>
      <Field type='text' name='nombre' placeholder='Nombre' className={styles.formField} />
      <ErrorMessage name='nombre' component='div' className='error' />
    </div>
    <div className={styles.contentForm}>
      <label htmlFor='tipoDocumento'>Tipo de documento</label>
      <Field type='text' name='tipoDocumento' placeholder='Tipo de documento' className={styles.formField} />
      <ErrorMessage name='tipoDocumento' component='div' className='error' />
    </div>
    <div className={styles.contentForm}>
      <label htmlFor='nroDocumento'>Número de documento</label>
      <Field type='text' name='nroDocumento' placeholder='Número de documento' className={styles.formField} />
      <ErrorMessage name='nroDocumento' component='div' className='error' />
    </div>
    <div className={styles.contentForm}>
      <label htmlFor='edad'>Edad</label>
      <Field type='text' name='edad' placeholder='Edad' className={styles.formField} />
      <ErrorMessage name='edad' component='div' className='error' />
    </div>
    <div className={styles.contentForm}>
      <label htmlFor='telefono'>Teléfono</label>
      <Field type='text' name='telefono' placeholder='Teléfono' className={styles.formField} />
      <ErrorMessage name='telefono' component='div' className='error' />
    </div>
    <div className={styles.contentForm}>
      <label htmlFor='calle'>Calle</label>
      <Field type='text' name='calle' placeholder='Calle' className={styles.formField} />
      <ErrorMessage name='calle' component='div' className='error' />
    </div>
    <div className={styles.contentForm}>
      <label htmlFor='numero'>Número</label>
      <Field type='number' name='numero' placeholder='Número' className={styles.formField} />
      <ErrorMessage name='numero' component='div' className='error' />
    </div>
    <div className={styles.contentForm}>
      <label htmlFor='barrio'>Barrio</label>
      <Field type='text' name='barrio' placeholder='Barrio' className={styles.formField} />
      <ErrorMessage name='barrio' component='div' className='error' />
    </div>
    <div className={styles.contentForm}>
      <label htmlFor='ciudad'>Ciudad</label>
      <Field type='text' name='ciudad' placeholder='Ciudad' className={styles.formField} />
      <ErrorMessage name='ciudad' component='div' className='error' />
    </div>
    <div className={styles.contentForm}>
      <label htmlFor='email'>Email</label>
      <Field type='text' name='email' placeholder='Email' className={styles.formField} />
      <ErrorMessage name='email' component='div' className='error' />
    </div>
    <div className={styles.contentForm}>
      <label htmlFor='aceptCondition'>Acepto las condiciones</label>
      <Field type='checkbox' name='aceptCondition' className={styles.formField} />
      <ErrorMessage name='aceptCondition' component='div' className='error' />
    </div>
  </>
)

export default PersonForm
