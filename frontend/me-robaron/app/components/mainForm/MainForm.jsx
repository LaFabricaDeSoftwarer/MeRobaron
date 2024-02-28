import { useState } from 'react'
import { PersonForm } from '../personForm/PersonForm'
import { ReporterForm } from '../reporterForm/ReporterForm'
import { ReportForm } from '../reportForm/ReportForm'
import { ReportedForm } from '../reportedForm/ReportedForm'
import { submitFormData } from '../../services/apiServices'
import Map from '../geolocation/Map'
import styles from './styles.module.css'
const MainForm = () => {
  const [locationData, setLocationData] = useState({})
  const [personData, setPersonData] = useState({})
  const [reporterData, setReporterData] = useState({})
  const [reportData, setReportData] = useState({})
  const [reportedData, setReportedData] = useState({})

  const handleSubmit = async () => {
    const data = {
      location: locationData,
      person: personData,
      reporter: reporterData,
      report: reportData,
      reported: reportedData
    }

    try {
      await submitFormData(data)
      console.log('Form data submitted successfully')
    } catch (error) {
      console.error('Error submitting form data:', error)
    }
  }

  return (
    <div className={styles.mainForm}>
      <PersonForm setPersonData={setPersonData} />
      <Map setLocationData={setLocationData} />
      <ReporterForm setReporterData={setReporterData} />
      <ReportForm setReportData={setReportData} />
      <ReportedForm setReportedData={setReportedData} />
      <button type='button' onClick={handleSubmit} className={styles.formButton}>Enviar</button>
    </div>
  )
}

export default MainForm
