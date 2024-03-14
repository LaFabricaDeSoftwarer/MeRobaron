import { useState, useEffect } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { submitForm, fetchLocations } from '../../services/apiServices'
import PersonForm from '../personForm/personForm'
import ReportForm from '../reportForm/ReportForm'
import Modal from '../modal/Modal' // Importa el componente Modal aquí
import { validationSchema } from '../../utils/validationSchemas'
import styles from './styles.module.css'

export const MainForm = () => {
  const [locationData, setLocationData] = useState({
    direccion: '',
    latitud: '',
    longitud: ''
  })
  const [locations, setLocations] = useState([])
  const [showModalReported, setShowModalReported] = useState(false)

  const openModalReported = () => setShowModalReported(true)
  const closeModalReported = () => setShowModalReported(false)

  useEffect(() => {
    const fetchLocationsData = async () => {
      try {
        const locationsData = await fetchLocations()
        setLocations(locationsData)
      } catch (error) {
        console.error('Error fetching locations:', error.message)
      }
    }

    fetchLocationsData()
  }, [])

  const handleSubmit = async (values, { setSubmitting }) => {
    console.log('values:', values)
    try {
      const dataToSend = { ...values, ...locationData }
      const responseData = await submitForm(dataToSend)
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
        date: '',
        detail: '',
        email: '',
        aceptCondition: false,
        clothing: '',
        appearance: '',
        iKnowTheReported: false
      }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form>
        {/* datos de denunciante */}
        <PersonForm context='reporter' />
        {/* datos del report */}
        <ReportForm setLocationData={setLocationData} locations={locations} />
        {/* datos del denunciado */}
        <div className={styles.contentForm}>
          <label htmlFor='iKnowTheReported'>Conozco a la persona denunciada o puedo aportar algún dato</label>
          <Field type='checkbox' name='iKnowTheReported' className={styles.formField} />
          <ErrorMessage name='iKnowTheReported' component='div' className='error' />
        </div>
        <div className={styles.contentButton}>
          <button type='button' onClick={openModalReported}>Agregar denunciado</button>
        </div>
        <Modal show={showModalReported} onClose={closeModalReported}>
          <div>
            <PersonForm context='reported' />
            <button type='button' onClick={closeModalReported}>Cerrar</button>
          </div>
        </Modal>
        <button type='submit'>Enviar</button>
      </Form>
    </Formik>
  )
}
