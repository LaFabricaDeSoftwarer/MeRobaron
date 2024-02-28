import { Formik, Form, Field, ErrorMessage } from 'formik'
import styles from '../mainForm/styles.module.css'
// import * as yup from 'yup'

export const ReportForm = ({ setReportData }) => {
//   const validationSchema = yup.object({
//     date: yup.string().required('La fecha es obligatoria'),
//     detail: yup.string().required('El detalle es obligatorio')
//     // ... otros campos
//   })

  return (
    <Formik
      initialValues={{
        date: '',
        detail: ''
      }}
    //   validationSchema={validationSchema}
      onSubmit={(values) => setReportData(values)}
    >
      <Form>
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
      </Form>
    </Formik>
  )
}
