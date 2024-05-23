import React, { useState } from 'react'
import { GoogleMap, Marker } from '@react-google-maps/api'
import FormInput from '@/app/components/FormInput'
import LocationSearch from '@/app/components/LocationSearch'

const center = { lat: -31.4167, lng: -64.1833 }
const zoom = 12

const Report = ({ selectedLocation, formik }) => {
  const { values, setFieldValue, handleChange } = formik
  const Map = GoogleMap
  const [location, setLocation] = useState(selectedLocation || {
    direccion: '',
    latitud: 0,
    longitud: 0
  })

  const handleLocationSelect = (selectedLocation) => {
    setLocation(selectedLocation)
    setFieldValue('location', selectedLocation)
    console.log('selected Location in Report:', selectedLocation)
  }

  return (
    <>
      <h1 className='text-white text-xl text-center font-light'>Detalles de la denuncia</h1>
      <section className='flex gap-5 w-full h-full justify-center items-center'>
        <div className='w-full flex flex-col h-full'>
          <div className='w-full pb-4'>
            <FormInput
              type='date'
              label='Fecha'
              value={values.report.fecha || ''}
              name='report.fecha'
              onChange={(e) => setFieldValue('report.fecha', e.target.value)}
            />
          </div>
          <div className='w-full pb-4'>
            <label className='block text-white text-sm pb-2'>Detalle</label>
            <textarea
              className='w-full px-3 py-2 text-white leading-tight focus:outline-none focus:shadow-outline rounded-md bg-medium appearance-none'
              type='text'
              name='report.detalle'
              placeholder='Detalle'
              value={values.report.detalle || ''}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className='w-full flex flex-col h-full'>
          <div className='w-full relative pb-6'>
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
      </section>
    </>
  )
}

export default Report
