import React, { useState } from 'react'
import { GoogleMap, Marker } from '@react-google-maps/api'
import LocationSearch from '@/app/components/LocationSearch'
import { Field, ErrorMessage, useFormikContext } from 'formik'

const initialCenter = { lat: -31.4167, lng: -64.1833 }
const ZOOM_INICIAL = 12
const ZOOM_LOCALIDAD = 15

const ReportForm = ({ selectedLocation }) => {
  const { values, setFieldValue } = useFormikContext()
  const [zoom, setZoom] = useState(ZOOM_INICIAL)

  const Map = GoogleMap

  const handleLocationSelect = (selectedLocation) => {
    setFieldValue('location', selectedLocation)
    setZoom(ZOOM_LOCALIDAD)
  }

  return (

    <div className='px-4 py-2 bg-primary min-h-[500px]'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        <div>
          <label className='block text-medium text-sm pb-2'>Fecha<span className='text-danger ml-1'>*</span></label>
          <Field
            className='w-full px-2 py-1.5 text-medium leading-tight focus:outline-none focus:shadow-outline rounded-md appearance-none border border-light'
            type='date'
            name='report.fecha'
          />
          <ErrorMessage name='report.fecha' component='div' className='text-danger text-sm' />
        </div>
        <div>
          <label className='block text-medium text-sm pb-2'>Ubicación del hecho<span className='text-danger ml-1'>*</span></label>
          <LocationSearch
            initialValue={values.location.direccion}
            onLocationSelect={handleLocationSelect}
            onChange={(value) => setFieldValue('location.direccion', value)}
          />
        </div>
        <div>
          <label className='block text-medium text-sm pb-2'>Detalle<span className='text-danger ml-1'>*</span></label>
          <Field
            as='textarea'
            className='w-full px-3  text-medium py-2 text-medim leading-tight focus:outline-none focus:shadow-outline rounded-md appearance-none border border-light'
            type='text'
            name='report.detalle'
            placeholder='Detalle'
          />
          <ErrorMessage name='report.detalle' component='div' className='text-danger first-letter: text-sm' />
        </div>
        <div>
          <label className='block text-medium text-sm pb-2'>Geolocalización</label>
          <div className='h-60'>
            <Map
              mapContainerClassName='h-full w-full rounded-md'
              zoom={zoom}
              center={values.location.latitud !== 0 ? { lat: values.location.latitud, lng: values.location.longitud } : initialCenter}
              options={{ disableDefaultUI: true }}
            >
              {values.location.latitud !== 0 && (
                <Marker position={{ lat: parseFloat(values.location.latitud), lng: parseFloat(values.location.longitud) }} />
              )}
            </Map>
          </div>
        </div>
      </div>

    </div>
  )
}

export default ReportForm
