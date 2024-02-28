import { Formik, Form, Field, ErrorMessage } from 'formik'
import styles from '../mainForm/styles.module.css'
// import * as yup from 'yup'

export const LocationForm = ({ setLocationData }) => {
//   const validationSchema = yup.object({
//     calle: yup.string().required('La calle es obligatoria'),
//     numero: yup.number().required('El número es obligatorio'),
//     barrio: yup.string().required('El barrio es obligatorio'),
//     ciudad: yup.string().required('La ciudad es obligatoria'),
//     latitud: yup.number().required('La latitud es obligatoria'),
//     longitud: yup.number().required('La longitud es obligatoria')
//   })

  return (
    <Formik
      initialValues={{
        direccion: '',
        latitud: '',
        longitud: ''
      }}
    //   validationSchema={validationSchema}
      onSubmit={(values) => setLocationData(values)}
    >
      <Form>
        <div className={styles.contentForm}>
          <label htmlFor='ciudad'>Direccion</label>
          <Field type='text' name='ciudad' placeholder='Ciudad' className={styles.formField} />
          <ErrorMessage name='ciudad' component='div' className='error' />
        </div>
        <div className={styles.contentForm}>
          <label htmlFor='latitud'>Latitud</label>
          <Field type='text' name='latitud' placeholder='Latitud' className={styles.formField} />
          <ErrorMessage name='latitud' component='div' className='error' />
        </div>
        <div className={styles.contentForm}>
          <label htmlFor='longitud'>Longitud</label>
          <Field type='text' name='longitud' placeholder='Longitud' className={styles.formField} />
          <ErrorMessage name='longitud' component='div' className='error' />
        </div>
      </Form>
    </Formik>
  )
}
