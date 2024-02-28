import { Formik, Form, Field, ErrorMessage } from 'formik'
import styles from '../mainForm/styles.module.css'
import { submitForm } from '../../services/apiServices'
import Map from '../geolocation/Map'
// import * as yup from 'yup'

export const MForm = ({ selected, setSelected }) => {
  //   const validationSchema = yup.object({
  //     apellido: yup.string().required('El apellido es obligatorio'),
  //     nombre: yup.string().required('El nombre es obligatorio'),
  //     tipoDocumento: yup.string().required('El tipo de documento es obligatorio'),
  //     nroDocumento: yup.string().required('El número de documento es obligatorio'),
  //     edad: yup.number().required('La edad es obligatoria'),
  //     telefono: yup.string().required('El teléfono es obligatorio'),
  //     email: yup.string().required('El email es obligatorio'),
  //     aceptCondition: yup.boolean().required('La aceptación de las condiciones es obligatoria'),
  //     date: yup.string().required('La fecha es obligatoria'),
  //     calle: yup.string().required('La calle es obligatoria'),
  //     numero: yup.number().required('El número es obligatorio'),
  //     barrio: yup.string().required('El barrio es obligatorio'),
  //     ciudad: yup.string().required('La ciudad es obligatoria'),
  //     latitud: yup.number().required('La latitud es obligatoria'),
  //     longitud: yup.number().required('La longitud es obligatoria'),
  //     detail: yup.string().required('El detalle es obligatorio'),
  //     clothing: yup.string().required('La vestimenta es obligatoria'),
  //     appearance: yup.string().required('La apariencia es obligatoria')
  //   })
  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const responseData = await submitForm(values)
      console.log('Response:', responseData)
      alert('Formulario enviado exitosamente')
    } catch (error) {
      console.error('Error al enviar el formulario:', error.message)
      alert('Hubo un error al enviar el formulario')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <Formik
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
        ciudad: '',
        email: '',
        aceptCondition: false,
        date: '',
        direccion: selected && selected.direction,
        latitud: selected && selected.latitude,
        longitud: selected && selected.longitude,
        detail: '',
        clothing: '',
        appearance: ''
      }}
      onSubmit={handleSubmit}

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
        <div className={styles.contentForm}>
          <label htmlFor='date'>Fecha</label>
          <Field type='date' name='date' placeholder='Fecha' className={styles.formField} />
          <ErrorMessage name='date' component='div' className='error' />
        </div>
        <Map setSelected={setSelected} />
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
        <button type='submit'>Enviar</button>
      </Form>
    </Formik>
  )
}
