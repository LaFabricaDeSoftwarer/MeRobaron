// useAutocomplete.js
import { useState } from 'react'
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng
} from 'use-places-autocomplete'

const useAutocomplete = () => {
  const [selected, setSelected] = useState(null)
  const {
    value,
    setValue,
    // Información sobre las sugerencias de lugares
    suggestions: { status, data },
    // borra las sugerencias actuales
    clearSuggestions
  } = usePlacesAutocomplete()
  console.log('data', data)

  const clearCoordinates = () => {
    setSelected(null)
  }

  const handleSelect = async (address) => {
    setValue(address, false)
    // Borra las sugerencias después de seleccionar una dirección
    clearSuggestions()

    const results = await getGeocode({ address })
    const { lat, lng } = await getLatLng(results[0])
    setSelected({ lat, lng })
  }

  return {
    value,
    setValue,
    status,
    data,
    handleSelect,
    selected,
    clearCoordinates
  }
}

export default useAutocomplete
