import React, { useState, useEffect } from 'react'
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng
} from 'use-places-autocomplete'
import SearchInput from './SearchInput'
import Suggestions from './Suggestions'
import { useLocation, LocationProvider } from '../context/LocationContext'

const LocationSearch = ({ onLocationSelect }) => {
  const { selectedLocation, handleLocationSelect } = useLocation(LocationProvider)

  const [searchValue, setSearchValue] = useState(selectedLocation.direccion || '')

  const {
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions
  } = usePlacesAutocomplete(
    {
      requestOptions: {
        componentRestrictions: { country: 'ar' }
      }
    }
  )

  const [showSuggestions, setShowSuggestions] = useState(false)

  useEffect(() => {
    setSearchValue(selectedLocation.direccion || '')
  }, [selectedLocation.direccion])

  const handleSelect = async (address) => {
    setValue(address, false)
    clearSuggestions()

    try {
      const results = await getGeocode({ address })

      if (results && results.length > 0) {
        const { lat, lng } = await getLatLng(results[0])
        const location = { direccion: address, latitud: lat, longitud: lng }
        handleLocationSelect(location)
        onLocationSelect(location)
        console.log('selected Location:', location)
      } else {
        console.error('No se encontraron resultados para la dirección proporcionada:', address)
      }
    } catch (error) {
      console.error('Error al obtener la geocodificación:', error)
    }
  }

  const handleInputChange = (event) => {
    setSearchValue(event.target.value)
    setValue(event.target.value)
    setShowSuggestions(true)
  }

  const handleSuggestionClick = (address) => {
    setSearchValue(address)
    setValue(address, false)
    setShowSuggestions(false)
    handleSelect(address)
  }

  return (
    <>
      <SearchInput value={value || searchValue} onChange={handleInputChange} />
      {showSuggestions && status === 'OK' && data && (
        <Suggestions suggestions={data} handleSuggestionClick={handleSuggestionClick} />
      )}
    </>
  )
}

export default LocationSearch
