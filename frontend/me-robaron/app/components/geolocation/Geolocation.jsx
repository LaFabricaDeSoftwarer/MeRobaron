import React, { useState } from 'react'
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng
} from 'use-places-autocomplete'
import styles from './styles.module.css'
// import { GoogleMap, Marker } from '@react-google-maps/api';

export default function Geolocation ({ setSelectedLocation, formik }) {
  const {
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions
  } = usePlacesAutocomplete()

  const [showSuggestions, setShowSuggestions] = useState(false)

  const handleSelect = async (address) => {
    setValue(address, false)
    clearSuggestions()

    try {
      const results = await getGeocode({ address })

      if (results && results.length > 0) {
        const { lat, lng } = await getLatLng(results[0])
        setSelectedLocation({
          direccion: address,
          latitud: lat,
          longitud: lng
        })
        formik.setFieldValue('location', {
          direccion: address,
          latitud: lat,
          longitud: lng
        })
        console.log('selected Location:', { direccion: address, latitud: lat, longitud: lng })
      } else {
        console.error('No se encontraron resultados para la dirección proporcionada:', address)
      }
    } catch (error) {
      console.error('Error al obtener la geocodificación:', error)
    }
  }

  const handleInputChange = (event) => {
    setValue(event.target.value)
    setShowSuggestions(true)
  }

  const handleSuggestionClick = (address) => {
    setValue(address, false)
    setShowSuggestions(false)
    handleSelect(address)
  }

  return (
    <>
      <input
        type='text'
        value={value}
        onChange={handleInputChange}
        className={styles.inputSelect}
        placeholder='Buscar dirección'
      />
      {showSuggestions && status === 'OK' && data && (
        <div>
          {data.map((item) => (
            <div
              key={item.place_id}
              onClick={() => handleSuggestionClick(item.description)}
            >
              {item.description}
            </div>
          ))}
        </div>
      )}
    </>
  )
}
