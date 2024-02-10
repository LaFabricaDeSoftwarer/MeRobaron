import React, { useState } from 'react'
import ReporterDataForm from './reporterDataForm/ReporterDataForm'
import LocationDataForm from './locationDataForm/LocationDataForm'
import PersonDataForm from './personDataForm/PersonDataForm'
import styles from './styles.module.css'
import { savePerson, saveLocation, saveReport } from '@/app/services/apiServices'

function ReportDetailForm () {
  // const [submitting, setSubmitting] = useState(false)
  const [reportDetailData, setReportDetailData] = useState({
    date: '',
    detail: ''
  })
  const [reporterData, setReporterData] = useState({
    email: '',
    aceptCondition: false,
    personID: ''
  })
  const [personData, setPersonData] = useState({
    apellido: '',
    nombre: '',
    tipoDocumento: '',
    nroDocumento: '',
    edad: '',
    telefono: '',
    direccionID: ''
  })
  const [locationData, setLocationData] = useState({
    calle: '',
    numero: '',
    barrio: '',
    ciudad: '',
    latitud: '',
    longitud: ''
  })

  const handleChangeReportDetail = ({ target }) => {
    const { name, value } = target
    setReportDetailData({
      ...reportDetailData,
      [name]: value
    })
  }

  const handleChangePerson = (newPersonData) => {
    setPersonData(newPersonData)
  }

  const handleChangeLocation = (newLocationData) => {
    setLocationData(newLocationData)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const locationResponse = await saveLocation(locationData)
      const locationID = locationResponse.id

      const personDataWithLocationID = { ...personData, direccionID: locationID }
      const personResponse = await savePerson(personDataWithLocationID)
      const personID = personResponse.id

      const reportData = {
        date: reportDetailData.date,
        detai: reportDetailData.detail,
        reporterID: reporterData.personID,
        personID,
        locationID
      }
      const reportResponse = await saveReport(reportData)

      // Limpia el formulario
      setReportDetailData('')
      setReporterData({ email: '', aceptCondition: false, personID: '' })
      setPersonData({
        apellido: '',
        nombre: '',
        tipoDocumento: '',
        nroDocumento: '',
        edad: '',
        telefono: '',
        direccionID: ''
      })
      setLocationData({
        calle: '',
        numero: '',
        barrio: '',
        ciudad: '',
        latitud: '',
        longitud: ''
      })

      console.log('Reporte guardado exitosamente:', reportResponse)
    } catch (error) {
      console.error('Error al enviar el formulario:', error.message)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <PersonDataForm
        personData={personData}
        onChangePerson={handleChangePerson}
        locationData={locationData}
        onChangeLocation={handleChangeLocation}
      />
      <ReporterDataForm />
      <LocationDataForm
        locationData={locationData}
        onChangeLocation={handleChangeLocation}
      />
      <div className={styles.inputContainer}>
        <label>Date</label>
        <input
          type='date'
          name='date'
          value={reportDetailData.date}
          onChange={handleChangeReportDetail}
        />
      </div>
      <div className={styles.inputContainer}>
        <label>Detail</label>
        <input
          type='text'
          name='detail'
          value={reportDetailData.detail}
          onChange={handleChangeReportDetail}
        />
      </div>
      <button type='submit'>Enviar Formulario</button>
      {/* <button type='submit' disabled={submitting} className={styles.button}>
            {submitting ? 'Enviando...' : 'Enviar Formulario'}
          </button> */}
    </form>
  )
}

export default ReportDetailForm
