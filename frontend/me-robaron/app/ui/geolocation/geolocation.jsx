/* eslint-disable no-unused-vars */
'use client'
import React, { useState } from 'react'
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng
} from 'use-places-autocomplete'

export default function Geolocation ({ setSelected }) {
  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions
  } = usePlacesAutocomplete()

  console.log(data)

  const [showSuggestions, setShowSuggestions] = useState(false)

  const handleSelect = async (address) => {
    setValue(address, false)
    clearSuggestions()

    const results = await getGeocode({ address })
    const { lat, lng } = await getLatLng(results[0])
    setSelected({ lat, lng })
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
        className='combobox-input'
        placeholder='Buscar una dirección'
      />
      {showSuggestions && status === 'OK' && (
        <div className='suggestion-list'>
          {data.map((item) => (
            <div
              key={item.placeId}
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
