import { Formik, Form, Field, ErrorMessage } from 'formik'
import styles from '../mainForm/styles.module.css'
// import * as yup from 'yup'

export const ReportedForm = ({ setReportedData }) => {
//   const validationSchema = yup.object({
//     clothing: yup.string().required('La vestimenta es obligatoria'),
//     appearance: yup.string().required('La apariencia es obligatoria')
//     // ... otros campos
//   })

  return (
    <Formik
      initialValues={{
        clothing: '',
        appearance: ''
      }}
    //   validationSchema={validationSchema}
      onSubmit={(values) => setReportedData(values)}
    >
      <Form>
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
      </Form>
    </Formik>
  )
}
