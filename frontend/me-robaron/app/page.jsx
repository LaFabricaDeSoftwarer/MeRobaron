'use client'
import React, { useState, useEffect } from 'react'
import { GoogleMap, Marker } from '@react-google-maps/api'
import LocationSearch from './components/LocationSearch'
import { saveLocation, fetchLocations } from './services/apiServices'
import styles from './styles.module.css'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Button from './components/Button'
import Modal from './components/Modal'
import Link from 'next/link'

const Home = () => {
  const ActionNotification = ToastContainer
  const Map = GoogleMap
  const center = { lat: -31.4167, lng: -64.1833 }
  const ZOOM_INICIAL = 12
  const ZOOM_LOCALIDAD = 15
  const [zoom, setZoom] = useState(ZOOM_INICIAL)
  const [selectedLocation, setSelectedLocation] = useState({
    direccion: '',
    latitud: 0,
    longitud: 0
  })
  const [locations, setLocations] = useState([])
  const [showModal, setShowModal] = useState(false)

  const handleLocationSelect = (selectedLocation) => {
    setSelectedLocation(selectedLocation)
    setZoom(ZOOM_LOCALIDAD)
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

  const handleSaveLocation = async () => {
    if (!selectedLocation.direccion || selectedLocation.latitud === 0 || selectedLocation.longitud === 0) {
      toast.error('Debe seleccionar alguna ubicación', {
        position: 'bottom-left'
      })
      return
    }
    try {
      await saveLocation(selectedLocation)
      setSelectedLocation({
        direccion: '',
        latitud: 0,
        longitud: 0
      })
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

  return (
    <main className='flex flex-col md:flex-row justify-center items-center w-full h-full'>
      <section className='bg-dark md:w-1/2 w-full md:h-full h-2/4 flex flex-col items-center md:justify-center justify-start md:gap-10 gap-2 py-8'>
        <h1 className='md:text-5xl text-3xl text-white text-center px-6'>¿Dónde te robaron?</h1>
        <div className='flex justify-center items-center gap-2 md:w-96 w-72 px-6'>
          <div className='w-full relative'>
            <LocationSearch onLocationSelect={handleLocationSelect} />
          </div>
          <div>
            <Button text='Registrar' onClick={handleSaveLocation} />
          </div>
        </div>
        <ActionNotification />
      </section>
      <section className='md:w-1/2 w-full md:h-full h-3/4'>
        <Map
          mapContainerClassName={styles.mapContainer} zoom={zoom}
          center={selectedLocation.latitud !== 0 ? { lat: selectedLocation.latitud, lng: selectedLocation.longitud } : center} options={{
            disableDefaultUI: true
          }}
        >
          {locations.map((location) => (
            <Marker key={location.DireccionID} position={{ lat: parseFloat(location.Latitud), lng: parseFloat(location.Longitud) }} />
          ))}
          {selectedLocation && <Marker position={{ lat: selectedLocation.latitud, lng: selectedLocation.longitud }} />}
        </Map>
      </section>
      {showModal && (
        <Modal>
          <p className='text-white'>¿Desea registrar una denuncia?</p>
          <div className='w-full h-12 pt-3 flex justify-center'>
            <Link href='/denuncia'>
              <Button text='Sí, registrar denuncia' onClick={() => setShowModal(false)} />
            </Link>
          </div>
        </Modal>
      )}
    </main>
  )
}

export default Home
