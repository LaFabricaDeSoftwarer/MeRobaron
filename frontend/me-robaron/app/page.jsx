'use client'
import { GoogleMap, Marker } from '@react-google-maps/api'
import React, { useState, useEffect } from 'react'
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng
} from 'use-places-autocomplete'
import SearchInput from './components/SearchInput'
import Suggestions from './components/Suggestions'
import { fetchLocations, saveLocation } from './services/apiServices'
import styles from './styles.module.css'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Button from './components/Button'
import Modal from './components/modal/Modal'
import Link from 'next/link'
import GooglePlacesServiceStatus from './utils/constants'

const Home = () => {
  const ActionNotification = ToastContainer
  const Map = GoogleMap
  const center = { lat: -31.4167, lng: -64.1833 }
  const zoom = 12
  const [selectedLocation, setSelectedLocation] = useState({
    direccion: '',
    latitud: 0,
    longitud: 0
  })
  const [locations, setLocations] = useState([])
  const [showModal, setShowModal] = useState(false)

  const {
    value: autocompleteValue,
    setValue,
    suggestions: { status: autocompleteStatus, data: autocompleteData },
    clearSuggestions
  } = usePlacesAutocomplete({
    requestOptions: {
      componentRestrictions: { country: 'ar' }
    }
  })

  const [showSuggestions, setShowSuggestions] = useState(false)

  const handleSelect = async (address) => {
    setValue(address, false) /* Está duplicado? */
    clearSuggestions() /* Revisar si lo movemos al handleSuggestionClick */

    try {
      const results = await getGeocode({ address })

      if (results && results.length > 0) {
        const { lat, lng } = await getLatLng(results[0])
        const location = { direccion: address, latitud: lat, longitud: lng }

        setSelectedLocation(location)
        console.log('selected Location:', location)
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
    setValue(address, false) /* Está duplicado? */
    setShowSuggestions(false)
    handleSelect(address)
  }

  const handleClearInput = () => {
    setValue('')
    clearSuggestions()
  }

  const handleSaveLocation = async () => {
    try {
      await saveLocation(selectedLocation)
      handleClearInput()
      toast.success('Ubicación guardada exitosamente!', {
        position: 'bottom-left'
      })
      setShowModal(true)
    } catch (error) {
      console.error('Error al guardar la ubicación:', error)
      toast.error('Error al guardar la ubicación', {
        position: 'bottom-left'
      })
    }
  }

  useEffect(() => {
    const fetchLocationsData = async () => {
      try {
        const getLocationsData = await fetchLocations()
        setLocations(getLocationsData)
      } catch (error) {
        console.error('Error fetching locations:', error.message)
      }
    }

    fetchLocationsData()
  }, [])
  return (
    <main className='flex flex-col md:flex-row justify-center items-center w-full h-full'>
      <section className='bg-dark w-full h-full  flex flex-col items-center justify-center gap-3 py-8'>
        <h1 className='md:text-5xl text-3xl text-white md:pb-40 text-center'>¿Dónde te robaron?</h1>
        <SearchInput value={autocompleteValue} onChange={handleInputChange} onClear={handleClearInput} />
        {showSuggestions && autocompleteStatus === GooglePlacesServiceStatus.OK /* && autocompleteData */ && (
          <Suggestions suggestions={autocompleteData} handleSuggestionClick={handleSuggestionClick} />
        )}
        <Button text='Marcar en el mapa' onClick={handleSaveLocation} />
        <ActionNotification />
      </section>
      <section className='w-full h-full'>
        <Map
          mapContainerClassName={styles.mapContainer} zoom={zoom} center={center} options={{
            disableDefaultUI: true
          }}
        >
          {locations.map((location) => (
            <Marker key={location.DireccionID} position={{ lat: parseFloat(location.Latitud), lng: parseFloat(location.Longitud) }} />
          ))}
          {selectedLocation && <Marker position={{ lat: selectedLocation.latitud, lng: selectedLocation.longitud }} />}
        </Map>
      </section>
      <Modal open={showModal} onClose={() => setShowModal(false)}>
        <p>¿Desea registrar una denuncia?</p>
        <Link href='/denuncia'>
          <Button text='Sí, registrar denuncia' />
        </Link>
      </Modal>
    </main>
  )
}

export default Home
