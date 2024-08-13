import React, { useState, useEffect } from 'react'
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng
} from 'use-places-autocomplete'
import Suggestions from './Suggestions'
import { useLocation, LocationProvider } from '../context/LocationContext'

const LocationSearch = ({ onLocationSelect, initialValue = '', onChange }) => {
  const { selectedLocation, handleLocationSelect } = useLocation(LocationProvider)

  const [searchValue, setSearchValue] = useState(initialValue || selectedLocation.direccion || '')

  const {
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions
  } = usePlacesAutocomplete({
    requestOptions: {
      componentRestrictions: { country: 'ar' }
    }
  })

  const [showSuggestions, setShowSuggestions] = useState(false)

  useEffect(() => {
    setSearchValue(initialValue || selectedLocation.direccion || '')
  }, [initialValue, selectedLocation.direccion])

  const handleSelect = async (address) => {
    setValue(address, false)
    clearSuggestions()

    if (!address) {
      setSearchValue('')
      onLocationSelect({ direccion: '', latitud: 0, longitud: 0 })
      return
    }

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
    const newValue = event.target.value
    setSearchValue(newValue)
    setValue(newValue)
    setShowSuggestions(true)
    if (onChange) {
      onChange(newValue)
    }
  }

  const handleSuggestionClick = (address) => {
    setSearchValue(address)
    setValue(address, false)
    setShowSuggestions(false)
    handleSelect(address)
  }

  return (
    <>
      <input
        className='w-full h-7 md:h-9  text-medium focus:outline-none focus:shadow-outline appearance-none text-sm border border-light rounded-md'
        type='text'
        value={value || searchValue}
        onChange={handleInputChange}
        placeholder='Buscar dirección'
      />
      {showSuggestions && status === 'OK' && data && (
        <Suggestions suggestions={data} handleSuggestionClick={handleSuggestionClick} />
      )}
    </>
  )
}

export default LocationSearch
