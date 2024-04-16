import React from 'react'
import Geolocation from '../../components/geolocation/Geolocation'
import { GoogleMap, Marker } from '@react-google-maps/api'

const center = { lat: -31.4167, lng: -64.1833 }
const zoom = 12

const Report = ({ formik, selectedLocation, setSelectedLocation }) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 h-full'>
      <div className='col-span-1 md:col-span-2'>
        <div className='relative'>
          <input
            type='date'
            value={formik.values.report.fecha || ''}
            onChange={(e) => formik.setFieldValue('report.fecha', e.target.value)}
            className='w-full px-3 py-2 text-white leading-tight focus:outline-none focus:shadow-outline rounded-md bg-medium appearance-none'
          />
        </div>
      </div>

      <div className='col-span-1'>
        <label className='block text-white text-sm pb-2'>Detalle</label>
        <input
          className='w-full px-3 py-2 text-white leading-tight focus:outline-none focus:shadow-outline rounded-md bg-medium appearance-none'
          type='text'
          name='report.detalle'
          placeholder='Detalle'
          onChange={formik.handleChange}
          value={formik.values.report.detalle || ''}
        />
      </div>
      <div className='col-span-1'>
        <label className='block text-white text-sm pb-2'>Ubicación del hecho</label>
        <Geolocation selectedLocation={selectedLocation} setSelectedLocation={setSelectedLocation} formik={formik} />
      </div>
      <div className='col-span-1 h-96'>
        <label className='block text-white text-sm pb-2'>Geolocalización</label>

        <GoogleMap mapContainerClassName='h-96' zoom={zoom} center={center}>
          {selectedLocation && <Marker position={{ lat: selectedLocation.latitud, lng: selectedLocation.longitud }} />}
        </GoogleMap>
      </div>
    </div>
  )
}

export default Report
