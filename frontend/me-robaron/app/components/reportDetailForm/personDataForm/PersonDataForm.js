import React from 'react'
import LocationDataForm from '@/app/components/reportDetailForm/locationDataForm/LocationDataForm'
import styles from './styles.module.css'

function PersonDataForm ({ personData = {}, onChangePerson, locationData, onChangeLocation }) {
  const handleChangePerson = ({ target }) => {
    const { name, value } = target
    onChangePerson({
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
          value={personData.apellido || ''}
          onChange={handleChangePerson}
        />
      </div>
      <div className={styles.inputContainer}>
        <label>Nombre</label>
        <input
          type='text'
          name='nombre'
          value={personData.nombre || ''}
          onChange={handleChangePerson}
        />
      </div>
      <div className={styles.inputContainer}>
        <label>Tipo de Documento</label>
        <input
          type='text'
          name='tipoDocumento'
          value={personData.tipoDocumento || ''}
          onChange={handleChangePerson}
        />
      </div>
      <div className={styles.inputContainer}>
        <label>Nro de Documento</label>
        <input
          type='number'
          name='nroDocumento'
          value={personData.nroDocumento || ''}
          onChange={handleChangePerson}
        />
      </div>
      <div className={styles.inputContainer}>
        <label>Edad</label>
        <input
          type='number'
          name='edad'
          value={personData.edad || ''}
          onChange={handleChangePerson}
        />
      </div>
      <div className={styles.inputContainer}>
        <label>Telefono</label>
        <input
          type='text'
          name='telefono'
          value={personData.telefono || ''}
          onChange={handleChangePerson}
        />
      </div>
      <LocationDataForm locationData={locationData} onChangeLocation={onChangeLocation} />
    </>
  )
}

export default PersonDataForm
