import React from 'react'
import { Field, ErrorMessage } from 'formik'
import styles from './styles.module.css'

const PersonForm = ({ context }) => (
  <>
    <div className={styles.contentForm}>
      <label htmlFor='apellido'>Apellido</label>
      <Field
        type='text'
        name={`${context}.apellido`}
        placeholder='Apellido'
        className={styles.formField}
      />
      <ErrorMessage
        name={`${context}.apellido`}
        component='div'
        className='error'
      />
    </div>
    <div className={styles.contentForm}>
      <label htmlFor='nombre'>Nombre</label>
      <Field
        type='text'
        name={`${context}.nombre`}
        placeholder='Nombre'
        className={styles.formField}
      />
      <ErrorMessage
        name={`${context}.nombre`}
        component='div'
        className='error'
      />
    </div>
    <div className={styles.contentForm}>
      <label htmlFor='tipoDocumento'>Tipo de documento</label>
      <Field
        type='text'
        name={`${context}.tipoDocumento`}
        placeholder='Tipo de documento'
        className={styles.formField}
      />
      <ErrorMessage
        name={`${context}.tipoDocumento`}
        component='div'
        className='error'
      />
    </div>
    <div className={styles.contentForm}>
      <label htmlFor='nroDocumento'>Número de documento</label>
      <Field
        type='text'
        name={`${context}.nroDocumento`}
        placeholder='Número de documento'
        className={styles.formField}
      />
      <ErrorMessage name={`${context}.nroDocumento`} component='div' className='error' />
    </div>
    <div className={styles.contentForm}>
      <label htmlFor='edad'>Edad</label>
      <Field
        type='text'
        name={`${context}.edad`}
        placeholder='Edad'
        className={styles.formField}
      />
      <ErrorMessage name={`${context}.edad`} component='div' className='error' />
    </div>
    <div className={styles.contentForm}>
      <label htmlFor='telefono'>Teléfono</label>
      <Field
        type='text'
        name={`${context}.telefono`}
        placeholder='Teléfono'
        className={styles.formField}
      />
      <ErrorMessage name={`${context}.telefono`} component='div' className='error' />
    </div>
    <div className={styles.contentForm}>
      <label htmlFor='calle'>Calle</label>
      <Field
        type='text'
        name={`${context}.calle`}
        placeholder='Calle'
        className={styles.formField}
      />
      <ErrorMessage name='calle' component='div' className='error' />
    </div>
    <div className={styles.contentForm}>
      <label htmlFor='numero'>Número</label>
      <Field
        type='number'
        name={`${context}.numero`}
        placeholder='Número'
        className={styles.formField}
      />
      <ErrorMessage name={`${context}.numero`} component='div' className='error' />
    </div>
    <div className={styles.contentForm}>
      <label htmlFor='barrio'>Barrio</label>
      <Field
        type='text'
        name={`${context}.barrio`}
        placeholder='Barrio'
        className={styles.formField}
      />
      <ErrorMessage name={`${context}.barrio`} component='div' className='error' />
    </div>
    <div className={styles.contentForm}>
      <label htmlFor='ciudad'>Ciudad</label>
      <Field
        type='text'
        name={`${context}.ciudad`}
        placeholder='Ciudad'
        className={styles.formField}
      />
      <ErrorMessage name={`${context}.ciudad`} component='div' className='error' />
    </div>
    {context === 'reporter' && (
      <>
        <div className={styles.contentForm}>
          <label htmlFor='email'>Email</label>
          <Field
            type='text'
            name={`${context}.email`}
            placeholder='Email'
            className={styles.formField}
          />
          <ErrorMessage
            name={`${context}.email`}
            component='div'
            className='error'
          />
        </div>
      </>
    )}
    {context === 'reported' && (
      <>
        <div className={styles.contentForm}>
          <label htmlFor='clothing'>Vestimenta</label>
          <Field
            type='text'
            name={`${context}.clothing`}
            placeholder='Vestimenta'
            className={styles.formField}
          />
          <ErrorMessage name={`${context}.clothing`} component='div' className='error' />
        </div>
        <div className={styles.contentForm}>
          <label htmlFor='appearance'>Apariencia</label>
          <Field
            type='text'
            name={`${context}.appearance`}
            placeholder='Apariencia'
            className={styles.formField}
          />
          <ErrorMessage name={`${context}.appearance`} component='div' className='error' />
        </div>
      </>
    )}
  </>
)

export default PersonForm
