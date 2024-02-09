import React, { useState } from 'react'
import { savePerson } from '@/app/services/apiServices'
import PersonDataForm from '@/app/ui/personDataForm/PersonDataForm'
import styles from './styles.module.css'

function ReporterDataForm () {
  const [reporterData, setReporterData] = useState({
    email: '',
    aceptCondition: false,
    personID: ''
  })

  const handlePersonFormSubmit = async (personData) => {
    try {
      const response = await savePerson(personData)
      console.log('Datos de persona enviados exitosamente.')
      console.log('Respuesta:', response.data)
      const { id } = response.data
      setReporterData(prevData => ({
        ...prevData,
        personID: id
      }))
    } catch (error) {
      console.error('Error al enviar datos de persona:', error)
    }
  }

  const handleChangeReporter = ({ target }) => {
    const { name, value } = target
    setReporterData({
      ...reporterData,
      [name]: value
    })
  }

  return (
    <>
      <PersonDataForm onSubmit={handlePersonFormSubmit} />
      <div className={styles.inputContainer}>
        <label>Email</label>
        <input
          type='email'
          name='email'
          value={reporterData.email}
          onChange={handleChangeReporter}
        />
      </div>
      <div className={styles.inputContainer}>
        <label>Accept Conditions
        </label>
        <input
          type='checkbox'
          name='aceptCondition'
          checked={reporterData.aceptCondition}
          onChange={handleChangeReporter}
        />
      </div>
    </>
  )
}

export default ReporterDataForm
