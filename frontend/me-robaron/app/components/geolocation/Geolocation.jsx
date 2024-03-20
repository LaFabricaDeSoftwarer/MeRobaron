import React, { useState } from 'react'
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng
} from 'use-places-autocomplete'
import styles from './styles.module.css'
import { GoogleMap, Marker } from '@react-google-maps/api'

export default function Geolocation ({ selectedLocation, setSelectedLocation }) {
  const center = { lat: -31.4167, lng: -64.1833 }
  const zoom = 12
  // const [selectedLocation, setSelectedLocation] = useState(null)

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
    setSelectedLocation({
      direccion: address,
      latitud: lat,
      longitud: lng
    })
    console.log('selected Location:', { direccion: address, latitud: lat, longitud: lng })
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
    <>
      <div>
        <input
          value={value}
          onChange={handleInputChange}
          disabled={!ready}
          className={styles.inputSelect}
        />
        {showSuggestions && status === 'OK' && (
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
      </div>
      <GoogleMap mapContainerClassName={styles.mapContainer} zoom={zoom} center={center}>
        {selectedLocation && <Marker position={{ lat: selectedLocation.latitud, lng: selectedLocation.longitud }} />}

      </GoogleMap>
    </>
  )
}
