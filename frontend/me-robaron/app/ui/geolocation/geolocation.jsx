/* eslint-disable no-unused-vars */
'use client'
import React, { useState } from 'react'
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng
} from 'use-places-autocomplete'
import styles from '@/app/ui/geolocation/styles.module.css'
import { saveLocation } from '@/app/services/apiServices'

export default function Geolocation ({ setSelected }) {
  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions
  } = usePlacesAutocomplete()

  const [showSuggestions, setShowSuggestions] = useState(false)

  const handleSelect = async (address) => {
    setValue(address, false)
    clearSuggestions()

    const results = await getGeocode({ address })
    const { lat, lng } = await getLatLng(results[0])
    setSelected({ lat, lng })
    try {
      await saveLocation({ address, latitude: lat, longitude: lng })
      console.log('Ubicación guardada correctamente')
      console.log('Dirección:', address, 'Latitud:', lat, 'Longitud:', lng)
    } catch (error) {
      console.error('Error al guardar la ubicación:', error.message)
    }
  }

  const handleInputChange = (e) => {
    setValue(e.target.value)
    setShowSuggestions(true)
  }

  const handleSuggestionClick = (address) => {
    setValue(address, false)
    setShowSuggestions(false)
    handleSelect(address)
  }

  return (
    <div>
      <input
        value={value}
        onChange={handleInputChange}
        disabled={!ready}
        className={styles.input}
        placeholder='Buscar una dirección'
      />
      {showSuggestions && status === 'OK' && (
        <div className={styles.suggestionList}>
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
    </div>
  )
}
