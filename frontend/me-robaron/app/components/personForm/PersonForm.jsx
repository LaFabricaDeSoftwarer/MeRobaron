import { Formik, Form, Field, ErrorMessage } from 'formik'
import styles from '../mainForm/styles.module.css'
// import * as yup from 'yup'

export const PersonForm = ({ setPersonData }) => {
//   const validationSchema = yup.object({
//     apellido: yup.string().required('El apellido es obligatorio'),
//     nombre: yup.string().required('El nombre es obligatorio'),
//     tipoDocumento: yup.string().required('El tipo de documento es obligatorio'),
//     nroDocumento: yup.string().required('El número de documento es obligatorio'),
//     edad: yup.number().required('La edad es obligatoria'),
//     telefono: yup.string().required('El teléfono es obligatorio')
//     // ... otros campos
//   })

  return (
    <Formik
    // Objeto que define los valores iniciales de los campos del formulario.
      initialValues={{
        apellido: '',
        nombre: '',
        tipoDocumento: '',
        nroDocumento: '',
        edad: '',
        telefono: '',
        calle: '',
        numero: '',
        barrio: '',
        ciudad: ''
      }}
    //   validationSchema={validationSchema}
      onSubmit={(values) => setPersonData(values)}
    >
      <Form>
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
      </Form>
    </Formik>
  )
}
