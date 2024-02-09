import React, { useState } from 'react'
import ReporterDataForm from '../reporterDataForm/ReporterDataForm'
import LocationDataForm from '../locationDataForm/LocationDataForm'
import { saveReporter, saveLocation, saveReport } from '@/app/services/apiServices'
import styles from './styles.module.css'

function ReportDetailForm () {
  const [submitting, setSubmitting] = useState(false)
  const [reportDetailData, setReportDetailData] = useState({
    date: '',
    detail: '',
    reporterID: '',
    locationID: ''
  })

  const handleReporterFormSubmit = async (reporterData) => {
    try {
      const response = await saveReporter(reporterData)
      console.log('Datos de denunciante enviados exitosamente.')
      console.log('Respuesta:', response.data)
      const { reporter } = response.data
      setReportDetailData(prevData => ({
        ...prevData,
        reporterID: reporter.id
      }))
    } catch (error) {
      console.error('Error al enviar datos de denunciante:', error)
    }
  }

  const handleLocationFormSubmit = async (locationData) => {
    try {
      const response = await saveLocation(locationData)
      console.log('Datos de ubicación enviados exitosamente.')
      console.log('Respuesta:', response.data)
      const { location } = response.data
      setReportDetailData(prevData => ({
        ...prevData,
        direccionID: location.id
      }))
    } catch (error) {
      console.error('Error al enviar datos de ubicación:', error)
    }
  }

  const handleChangeReportDetail = ({ target }) => {
    const { name, value } = target
    setReportDetailData({
      ...reportDetailData,
      [name]: value
    })
  }

  const handleSubmit = async (reportData) => {
    try {
      setSubmitting(true)
      const response = await saveReport(reportData)
      console.log('Datos de denuncia guardados correctamente:', response)
      console.log('Respuesta denuncia:', response.data)
    } catch (error) {
      console.error('Error al enviar datos de denuncia al backend:', error)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className={styles.formContainer}>
      <ReporterDataForm onSubmit={handleReporterFormSubmit} />
      <LocationDataForm onSubmit={handleLocationFormSubmit} />
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
      <button type='submit' disabled={submitting} className={styles.button}>
        {submitting ? 'Enviando...' : 'Enviar Formulario'}
      </button>
    </form>
  )
}

export default ReportDetailForm
