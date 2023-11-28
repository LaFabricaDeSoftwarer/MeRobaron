/* eslint-disable no-unused-vars */
'use client'
import React, { useState } from 'react'
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng
} from 'use-places-autocomplete'
import AutocompleteInput from '@/app/ui/geolocation/autocompleteInput'

export default function Geolocation () {
  const [selected, setSelected] = useState(null)
  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions
  } = usePlacesAutocomplete()

  const handleSelect = async (address) => {
    setValue(address, false)
    clearSuggestions()

    const results = await getGeocode({ address })
    const { lat, lng } = await getLatLng(results[0])
    setSelected({ lat, lng })
  }

  return (
    <AutocompleteInput
      ready={ready}
      value={value}
      setValue={setValue}
      status={status}
      data={data}
      handleSelect={handleSelect}
    />
  )
}
