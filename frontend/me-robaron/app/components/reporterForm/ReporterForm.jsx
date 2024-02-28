import { Formik, Form, Field, ErrorMessage } from 'formik'
import styles from '../mainForm/styles.module.css'

// import * as yup from 'yup'

export const ReporterForm = ({ setReporterData }) => {
//   const validationSchema = yup.object({
//     email: yup.string().required('El email es obligatorio'),
//     aceptCondition: yup.boolean().required('La aceptación de las condiciones es obligatoria')
//     // ... otros campos
//   })

  return (
    <Formik
      initialValues={{
        email: '',
        aceptCondition: false
      }}
    //   validationSchema={validationSchema}
      onSubmit={(values) => setReporterData(values)}
    >
      <Form>
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
      </Form>
    </Formik>
  )
}
