import React, { useState } from 'react'
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng
} from 'use-places-autocomplete'

export default function Geolocation ({ setLocationData }) {
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
    setLocationData({
      direccion: address,
      latitud: lat,
      longitud: lng
    })
    console.log('setLocationData:', { direccion: address, latitud: lat, longitud: lng })
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
  )
}
