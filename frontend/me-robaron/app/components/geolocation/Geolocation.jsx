import React, { useState } from 'react'
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng
} from 'use-places-autocomplete'
import styles from './styles.module.css'
import { GoogleMap, Marker } from '@react-google-maps/api'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'

export default function Geolocation ({ selectedLocation, setSelectedLocation, formik }) {
  const center = { lat: -31.4167, lng: -64.1833 }
  const zoom = 12

  const {
    // ready,
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

  const handleSuggestionClick = (address) => {
    setValue(address, false)
    setShowSuggestions(false)
    handleSelect(address)
  }

  return (
    <>
      <Autocomplete
        value={value || ''}
        onChange={(event, newValue) => {
          setValue(newValue, false)
          handleSelect(newValue)
        }}
        inputValue={value || ''}
        onInputChange={(event, newInputValue) => {
          setValue(newInputValue)
          setShowSuggestions(true)
        }}
        options={data.map((option) => option.description)}
        renderInput={(params) => (
          <TextField
            {...params}
            label='Buscar dirección'
            variant='outlined'
            className={styles.inputSelect}
          />
        )}
        disableClearable
      />
      {showSuggestions && status === 'OK' && data && (
        <div>
          {data.map((item) => (
            <div
              key={item.place_id}
              onClick={() => handleSuggestionClick(item.description)}
            />
          ))}
        </div>
      )}

      <GoogleMap mapContainerClassName={styles.mapContainer} zoom={zoom} center={center}>
        {selectedLocation && <Marker position={{ lat: selectedLocation.latitud, lng: selectedLocation.longitud }} />}

      </GoogleMap>
    </>
  )
}
