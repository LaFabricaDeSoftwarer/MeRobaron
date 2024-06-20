import React, { useState } from 'react'
import { GoogleMap, Marker } from '@react-google-maps/api'
import FormInput from '@/app/components/FormInput'
import LocationSearch from '@/app/components/LocationSearch'
import { Field, ErrorMessage, useFormikContext } from 'formik'

const center = { lat: -31.4167, lng: -64.1833 }
const zoom = 12

const ReportForm = ({ selectedLocation }) => {
  const { setFieldValue } = useFormikContext()

  const Map = GoogleMap
  const [location, setLocation] = useState(selectedLocation || {
    direccion: '',
    latitud: 0,
    longitud: 0
  })

  const handleLocationSelect = (selectedLocation) => {
    setLocation(selectedLocation)
    setFieldValue('location', selectedLocation)
  }

  return (
    <div className='max-w-4xl mx-auto p-4'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 '>
        <div>
          <FormInput
            type='date'
            label='Fecha'
            name='report.fecha'
          />
        </div>
        <div>
          <label className='block text-white text-sm font-bold mb-2'>Detalle</label>
          <Field
            as='textarea'
            className='w-full px-3 py-2 text-white leading-tight focus:outline-none focus:shadow-outline rounded-md bg-medium appearance-none'
            type='text'
            name='report.detalle'
            placeholder='Detalle'
          />
          <ErrorMessage name='report.detalle' component='div' className='text-danger first-letter: text-sm' />
        </div>
      </div>
      <div className='mt-4'>
        <label className='block text-white text-sm font-bold mb-2'>Ubicación del hecho</label>
        <LocationSearch onLocationSelect={handleLocationSelect} />
      </div>
      <div className='mt-4'>
        <label className='block text-gray-700 text-sm font-bold mb-2'>Geolocalización</label>
        <div className='h-60'>
          <Map
            mapContainerClassName='h-full w-full rounded-md'
            zoom={zoom}
            center={center}
            options={{ disableDefaultUI: true }}
          >
            {location.latitud !== 0 && (
              <Marker position={{ lat: location.latitud, lng: location.longitud }} />
            )}
          </Map>
        </div>
      </div>
    </div>
  )
}

export default ReportForm
