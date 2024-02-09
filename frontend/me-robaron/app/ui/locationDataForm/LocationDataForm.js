import React, { useState, useEffect } from 'react'
import styles from './styles.module.css'

function LocationDataForm ({ onSubmit }) {
  const [locationData, setLocationData] = useState({
    calle: '',
    numero: '',
    barrio: '',
    ciudad: '',
    latitud: '',
    longitud: ''
  })

  useEffect(() => {
    onSubmit(locationData)
  }, [locationData, onSubmit])

  const handleChangeLocation = ({ target }) => {
    const { name, value } = target
    setLocationData({
      ...locationData,
      [name]: value
    })
  }

  return (
    <>
      <div className={styles.inputContainer}>
        <label>Calle</label>
        <input
          type='text'
          name='calle'
          value={locationData.calle}
          onChange={handleChangeLocation}
        />
      </div>
      <div className={styles.inputContainer}>
        <label>Numero</label>
        <input
          type='numero'
          name='numero'
          value={locationData.numero}
          onChange={handleChangeLocation}
        />
      </div>
      <div className={styles.inputContainer}>
        <label>Barrio</label>
        <input
          type='text'
          name='barrio'
          value={locationData.barrio}
          onChange={handleChangeLocation}
        />
      </div>
      <div className={styles.inputContainer}>
        <label>Ciudad</label>
        <input
          type='text'
          name='ciudad'
          value={locationData.ciudad}
          onChange={handleChangeLocation}
        />
      </div>
      <div className={styles.inputContainer}>
        <label>Latitud</label>
        <input
          type='number'
          name='latitud'
          value={locationData.latitud}
          onChange={handleChangeLocation}
        />
      </div>
      <div className={styles.inputContainer}>
        <label>Longitud</label>
        <input
          type='number'
          name='longitud'
          value={locationData.longitud}
          onChange={handleChangeLocation}
        />
      </div>

    </>
  )
}

export default LocationDataForm
