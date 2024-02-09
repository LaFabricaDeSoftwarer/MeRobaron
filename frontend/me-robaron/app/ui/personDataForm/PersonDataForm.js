import React, { useState } from 'react'
import { saveLocation } from '@/app/services/apiServices'
import LocationDataForm from '@/app/ui/locationDataForm/LocationDataForm'
import styles from './styles.module.css'

function PersonDataForm () {
  const [personData, setPersonData] = useState({
    apellido: '',
    nombre: '',
    tipoDocumento: '',
    nroDocumento: '',
    edad: '',
    telefono: '',
    direccionID: ''
  })

  const handleLocationFormSubmit = async (locationData) => {
    try {
      const response = await saveLocation(locationData)
      console.log('Datos de ubicación enviados exitosamente.')
      console.log('Respuesta:', response.data)
      const { location } = response.data
      setPersonData(prevData => ({
        ...prevData,
        direccionID: location.id
      }))
    } catch (error) {
      console.error('Error al enviar datos de ubicación:', error)
    }
  }

  const handleChangePerson = ({ target }) => {
    const { name, value } = target
    setPersonData({
      ...personData,
      [name]: value
    })
  }

  return (
    <>
      <div className={styles.inputContainer}>
        <label>Apellido</label>
        <input
          type='text'
          name='apellido'
          value={personData.apellido}
          onChange={handleChangePerson}
        />
      </div>
      <div className={styles.inputContainer}>
        <label>Nombre</label>
        <input
          type='text'
          name='nombre'
          value={personData.nombre}
          onChange={handleChangePerson}
        />
      </div>
      <div className={styles.inputContainer}>
        <label>Tipo de Documento</label>
        <input
          type='text'
          name='tipoDocumento'
          value={personData.tipoDocumento}
          onChange={handleChangePerson}
        />
      </div>
      <div className={styles.inputContainer}>
        <label>Nro de Documento</label>
        <input
          type='number'
          name='nroDocumento'
          value={personData.nroDocumento}
          onChange={handleChangePerson}
        />
      </div>
      <div className={styles.inputContainer}>
        <label>Edad</label>
        <input
          type='number'
          name='edad'
          value={personData.edad}
          onChange={handleChangePerson}
        />
      </div>
      <div className={styles.inputContainer}>
        <label>Telefono</label>
        <input
          type='text'
          name='telefono'
          value={personData.telefono}
          onChange={handleChangePerson}
        />
      </div>
      <LocationDataForm onSubmit={handleLocationFormSubmit} />
    </>
  )
}

export default PersonDataForm
