import React, { useState } from 'react'
import { GoogleMap, Marker } from '@react-google-maps/api'
import FormInput from '@/app/components/FormInput'
import LocationSearch from '@/app/components/LocationSearch'
import { LocationProvider, useLocation } from '@/app/context/LocationContext'

const center = { lat: -31.4167, lng: -64.1833 }
const zoom = 12

const Report = ({ selectedLocation, setSelectedLocation, formik }) => {
  const { locationSaved } = useLocation(LocationProvider)
  const Map = GoogleMap
  const [location, setLocation] = useState(selectedLocation || {
    direccion: '',
    latitud: 0,
    longitud: 0
  })

  const handleLocationSelect = (selectedLocation) => {
    setLocation(selectedLocation)
    setSelectedLocation(selectedLocation)
  }

  if (locationSaved) {
    console.log('direccion guardada en el contexto:', locationSaved)
  }

  return (
    <>
      <h1 className='text-white text-xl text-center pb-2'>Detalles de la denuncia</h1>
      <section className='flex flex-col gap-4 w-full md:pt-5'>
        <div className='md:flex-row flex flex-col gap-4'>
          <div className='w-full gap-4 flex-col'>
            <div className='w-full'>
              <FormInput
                type='date'
                label='Fecha'
                value={formik.values.report.fecha || ''}
                name='fecha'
                onChange={(e) => formik.setFieldValue('report.fecha', e.target.value)}
              />
            </div>
            <div className='w-full'>
              <label className='block text-white text-sm pb-2'>Detalle</label>
              <textarea
                className='w-full px-3 py-2 text-white leading-tight focus:outline-none focus:shadow-outline rounded-md bg-medium appearance-none'
                type='text'
                name='detalle'
                placeholder='Detalle'
                onChange={formik.handleChange}
                value={formik.values.report.detalle || ''}
              />
            </div>
          </div>
          <div className='w-full gap-4 flex-col'>
            <div className='w-full relative'>
              <label className='block text-white text-sm pb-2'>Ubicación del hecho</label>
              <LocationSearch onLocationSelect={handleLocationSelect} />
            </div>
            <div className='w-full h-80 max-h-20'>
              <label className='block text-white text-sm pb-2'>Geolocalización</label>

              <Map
                mapContainerClassName='h-80' zoom={zoom} center={center} options={{
                  disableDefaultUI: true
                }}
              >
                {location.latitud !== 0 && <Marker
                  position={{ lat: location.latitud, lng: location.longitud }}
                                           />}
              </Map>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Report
